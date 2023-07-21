<template>
  <n-space vertical>
    <n-layout has-sider class="fixed-menu-height rounded-16px shadow-sm">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="32"
        :width="180"
				:height="180"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          @update:value="handleMenuChange"
        />
				<n-button style="display: flex; justify-content: center;" @click="addMenuItem">添加GPM</n-button>
      </n-layout-sider>

      <n-layout>
				<div class="device-number">
					<div class="mode-switch">
						<n-switch v-model:value="currentPage" size="large">
							<template #checked-icon>
								<svg-icon :icon="'mdi:airplane'" class="text-30px" />
							</template>
							<template #unchecked-icon>
								<svg-icon :icon="'heroicons-solid:building-library'" class="text-30px" />
							</template>
						</n-switch>
						<div class="myText"></div>
					</div>
				</div>
				<div class="first-label">{{ currentPage === false ? '文件目录' : '文件上传' }}</div>

				<div v-if="currentPage === false">内容1</div>

        <div v-else>
					<div v-if="selectedKey">{{ `你选择了 ${selectedKey}` }}</div>
					<div class="select-container" style="display: flex; flex-direction: row;">

						<div class="select-item" style="flex-grow: 7; flex-shrink: 1;">
							<!-- 文件上传 -->
							<div class="device-number">

								<div class="upload">
									<div style="display: flex; flex-direction: column;">
										<div class="dropzone" @dragover="handleDragOver" @drop="handleDrop">
											<i class="icon fas fa-cloud-upload-alt"></i>
											<span class="hint">将文件拖拽到此处或者</span>
											<label for="file-upload" class="btn-upload">
												<span>选择文件</span>
												<input type="file" id="file-upload" ref="fileInput" @change="handleFileInputChange" multiple style="display: none;">
											</label>
										</div>
										<n-button class="buttons" type="primary" @click="handleSubmit">上传</n-button>
									</div>

									<div v-if="files.length > 0" class="file-list">
										<div v-for="(file, index) in files" :key="index" class="file-item">
											<span>{{ file.name }}</span>
											<button class="btn-clear" @click="removeFile(index)">x</button>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="select-item" style="flex-grow: 3; flex-shrink: 1;">
							<!-- 模式选择 -->
							<div class="device-number">
								<div class="label">模式选择</div>
								<n-select class="buttons" v-model:value="appStore.controll.currentMode" size="medium" :options="options" />
								<n-button class="buttons" type="primary" @click="handleOrderSubmit">上传</n-button>
							</div>
						</div>
					</div>
				</div>
			</n-layout>
		</n-layout>


		<n-card title="GPM 分区利用率示意图" :bordered="false" class="rounded-16px shadow-sm">
			<n-checkbox-group>

				<div class="checkbox-container">
					<n-space item-style="display: flex; justify-content: center;">
						<n-select v-model:value="value" :options="partOptions" style="width: 120px"/>
						<n-checkbox value="GPM1" label="Part 1" />
						<n-checkbox value="GPM2" label="Part 2" />
						<n-checkbox value="GPM3" label="Part 3" />
						<n-checkbox value="GPM4" label="Part 4" />
					</n-space>
				</div>
			</n-checkbox-group>
      <div ref="scatterRef" class="h-600px"></div>
    </n-card>
  </n-space>

</template>

<script lang="ts">
import { h, ref, defineComponent } from "vue";
import type { MenuOption } from "naive-ui";
import axios from 'axios';
import appStore from "@/store/instructions";
import type { Ref } from 'vue';
import { type ECOption, useEcharts } from '@/composables';
import { graphic } from 'echarts';

import { useRoute } from 'vue-router';
import { useAppStore, useRouteStore } from '@/store';
import { useLoading } from '@/hooks';
// defineOptions({ name: 'ReloadButton' });


export default defineComponent({
  setup() {

		const files = ref<File[]>([])
		const collapsed = ref(true);

		const currentPage = ref(true);
    const selectedKey = ref('');
		const app = useAppStore();
		const routeStore = useRouteStore();
		const route = useRoute();
		const { startLoading, endLoading } = useLoading();

    const menuOptions = ref([
      {
        label: "GPM 1",
        key: "GPM 1",
      },
      {
        label: "GPM 2",
        key: "GPM 2",
      },
			{
        label: "GPM 3",
        key: "GPM 3",
      },
      {
        label: "GPM 4",
        key: "GPM 4",
      },
			{
        label: "GPM 5",
        key: "GPM 5",
      },
      {
        label: "GPM 6",
        key: "GPM 6",
      },
    ]);

		const options = ref([
			{
				label: '正常运行',
				value: 'runMode',
			},
			{
				label: '615A加载模式',
				value: 'a615Mode'
			},
			{
				label: '实验室加载模式',
				value: 'labMode'
			},
			{
				label: '关闭设备',
				value: 'close',
				disabled: true
			},
			{
				label: '调试模式',
				value: 'testMode',
				disabled: true
			}
		]);

		const partOptions = ref([
			{
				label: 'GPM 1',
				value: 'GPM1',
			},
			{
				label: 'GPM 2',
				value: 'GPM2'
			},
			{
				label: 'GPM 3',
				value: 'GPM3'
			},
		]);

		const pictorialBarOption = ref<ECOption>(getPictorialBarOption()) as Ref<ECOption>;
		const { domRef: pictorialBarRef } = useEcharts(pictorialBarOption);

		function getPictorialBarOption(): ECOption {
			const category: string[] = [];
			let dottedBase = Number(new Date());
			const lineData: number[] = [];
			const barData: number[] = [];

			for (let i = 0; i < 20; i += 1) {
				const date = new Date((dottedBase += 3600 * 24 * 1000));
				category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
				const b = Math.random() * 200;
				const d = Math.random() * 200;
				barData.push(b);
				lineData.push(d + b);
			}

			const options: ECOption = {
				backgroundColor: '#0f375f',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					data: ['CPU', 'Memory'],
					textStyle: {
						color: '#ccc'
					}
				},
				xAxis: {
					data: category,
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					}
				},
				yAxis: {
					splitLine: { show: false },
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					}
				},
				series: [
					{
						name: 'CPU',
						type: 'line',
						smooth: true,
						showAllSymbol: true,
						symbol: 'emptyCircle',
						symbolSize: 15,
						data: lineData
					},
					{
						name: 'Memory',
						type: 'bar',
						barWidth: 10,
						itemStyle: {
							borderRadius: 5,
							color: new graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: '#14c8d4' },
								{ offset: 1, color: '#43eec6' }
							])
						},
						data: barData
					},
					{
						name: 'CPU',
						type: 'bar',
						barGap: '-100%',
						barWidth: 10,
						itemStyle: {
							color: new graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: 'rgba(20,200,212,0.5)' },
								{ offset: 0.2, color: 'rgba(20,200,212,0.2)' },
								{ offset: 1, color: 'rgba(20,200,212,0)' }
							])
						},
						z: -12,
						data: lineData
					},
					{
						name: 'dotted',
						type: 'pictorialBar',
						symbol: 'rect',
						itemStyle: {
							color: '#0f375f'
						},
						symbolRepeat: true,
						symbolSize: [12, 4],
						symbolMargin: 1,
						z: -10,
						data: lineData
					}
				]
			};

			return options;
		}

		const scatterOptions = ref<ECOption>(getScatterOption()) as Ref<ECOption>;
		const { domRef: scatterRef } = useEcharts(scatterOptions);

		function getScatterOption() {
			// prettier-ignore
			const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a','10a','11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];

			// prettier-ignore
			const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

			// prettier-ignore
			const data: [number, number, number][] = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

			const title: echarts.TitleComponentOption[] = [];
			const singleAxis: echarts.SingleAxisComponentOption[] = [];
			const series: echarts.ScatterSeriesOption[] = [];

			days.forEach((day, idx) => {
				title.push({
					textBaseline: 'middle',
					top: `${((idx + 0.5) * 100) / 7}%`,
					text: day
				});
				singleAxis.push({
					left: 150,
					type: 'category',
					boundaryGap: false,
					data: hours,
					top: `${(idx * 100) / 7 + 5}%`,
					height: `${100 / 7 - 10}%`,
					axisLabel: {
						interval: 2
					}
				});
				series.push({
					singleAxisIndex: idx,
					coordinateSystem: 'singleAxis',
					type: 'scatter',
					data: [],
					symbolSize(dataItem) {
						return dataItem[1] * 4;
					}
				});
			});

			data.forEach(dataItem => {
				(series as any)[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
			});

			const option: ECOption = {
				tooltip: {
					position: 'top'
				},
				title,
				singleAxis,
				series: series as any
			};

			return option;
		}

		// 在页面加载时从本地存储中获取菜单选项
		const initialMenuOptions = localStorage.getItem("gpmOptions");

    if (initialMenuOptions) {
      menuOptions.value = JSON.parse(initialMenuOptions);
    }

		const addMenuItem = (): void => {
      const len = menuOptions.value.length + 1;
      const newMenuItem = { label: `GPM${len}`, key: len.toString() };
      menuOptions.value.push(newMenuItem);

      // 将更新后的菜单选项保存到本地存储
      localStorage.setItem("gpmOptions", JSON.stringify(menuOptions.value));
    };

		const renderMenuLabel = (option: MenuOption) => {
      if ("href" in option) {
        return h(
          "a",
          { href: option.href, target: "_blank" },
          option.label as string
        );
      }
      return option.label as string;
    };

    const handleMenuChange = (key: string | number): void => {
      selectedKey.value = key.toString();

			const isCached = routeStore.cacheRoutes.includes(String(route.name));
			if (isCached) {
				routeStore.removeCacheRoute(route.name as AuthRoute.AllRouteKey);
			}
			startLoading();
			app.reloadPage();
			setTimeout(() => {
				if (isCached) {
					routeStore.addCacheRoute(route.name as AuthRoute.AllRouteKey);
				}
				endLoading();
			}, 1000);
    };


    function handleDragOver(event: DragEvent) {
      event.preventDefault()
    }

    function handleDrop(event: DragEvent) {
      event.preventDefault()
      const newFiles = Array.from(event.dataTransfer?.files ?? [])
      addFiles(newFiles)
    }

    function handleFileInputChange(event: Event) {
      const newFiles = Array.from((event.target as HTMLInputElement).files ?? [])
      addFiles(newFiles)
    }

    function addFiles(newFiles: File[]) {
      files.value = [...files.value, ...newFiles]
    }

    function handleSubmit() {
      if (files.value.length === 0) {
        alert('请先选择需要上传的文件！')
        return
      }

      // 执行文件上传操作...
      console.log('上传文件：', files.value)
			alert('上传成功！')
			axios.post(`${appStore.userinfo.remoteUrl}`, {
				// mode: appStore.controll.currentMode,
				// deviceId: appStore.controll.deviceId,
				// pos: appStore.controll.pos,
				// isLeft: appStore.controll.isLeft,
				// isOnAir: appStore.controll.isOnAir,
				files: files.value,
			}).then((res: any) => {
				alert('上传成功！')
				if (res.data.status === "success") {
					// appStore.controll.currentMode = wantedMode.value;
					// wantedMode.value = "currentMode";
					console.log(`changing current mode to '${appStore.controll.currentMode}'`);
				} else {
					console.log(res.data);
				}
			});

      // 清空文件选择框
      const fileInput = document.getElementById('file-upload') as HTMLInputElement
      if (fileInput) {
        fileInput.value = ''
      }
      files.value = []
    }


		function handleOrderSubmit() {
      if (appStore.controll.currentMode === null) {
        alert('请先选择模式！')
        return
      }

      // 执行文件上传操作...
      console.log('上传指令：', appStore.controll.currentMode)
			alert('指令传输成功！')
			axios.post(`${appStore.userinfo.remoteUrl}`, {
				mode: appStore.controll.currentMode,
			}).then((res: any) => {
				alert('上传成功！')
				if (res.data.status === "success") {
					// appStore.controll.currentMode = wantedMode.value;
					// wantedMode.value = "currentMode";
					console.log(`changing current mode to '${appStore.controll.currentMode}'`);
				} else {
					console.log(res.data);
				}
			});

			appStore.controll.currentMode = null

    }

    function removeFile(index: number) {
      files.value.splice(index, 1)
    }

    return {
			appStore,
			files,
      selectedKey,
      menuOptions,
			options,
			partOptions,
			value: ref(null),
      collapsed,
			pictorialBarRef,
			scatterRef,
			currentPage,

      addMenuItem,
      handleMenuChange,
      handleDragOver,
      handleDrop,
      handleFileInputChange,
      handleSubmit,
			handleOrderSubmit,
      removeFile,
      renderMenuLabel,

    };
  },
});
</script>



<style scoped>

.fixed-menu-height {
  height: 340px; /* 根据您的需求设置固定的高度值 */
}

.select-container {
  display: flex;
  flex-direction: row;
}

.select-item {
  margin: 0px 10px;
	flex: 1;
}

.select-item:last-child {
  border-right: none;
  padding-right: 0px;
}

.device-number {
  display: flex;
  flex-direction: column;
	margin-right: 8px;
}

.device-number .label {
  font-weight: bold;
  margin-top: 8px;
	margin-left: 8px;
}

.device-number .buttons {
  display: flex;
  gap: 10px;
	margin-top: 15px;
}

.first-label {
  font-weight: bold;
  margin-top: 8px;
	margin-left: 8px;
}

.hint {
  color: #888;
}

.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
	margin-bottom: 20px;
	margin-top: 15px;
}

.btn-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #7c99b7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all .3s;
	margin-top: 8px;
}

.btn-upload:hover {
  background-color: #637587;
}

.btn-upload span {
  display: inline-block;
  margin-right: 10px;
}


.dropzone {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all .3s;

}

.dropzone:hover {
  background-color: #f7f7f7;
}

.icon {
  font-size: 48px;
  margin-bottom: 10px;
}


.file-list {
	margin-left: 16px;
  width: 200px; /* 设置宽度 */
  max-height: 240px;
  overflow-x: auto; /* 改为水平滚动条 */
  white-space: nowrap; /* 文件列表不换行 */
}


.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background-color: #f7f7f7;
  border-radius: 4px;
  margin-bottom: 6px;
}

.file-item span {
  font-size: 14px;
  color: #888;
}

.btn-clear {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 6px;
  font-size: 12px;
  color: #aaa;
  transition: all .3s;
}

.btn-clear:hover {
  color: #666;
}


.checkbox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 768px) {
	.dropzone {
		width: 100%;
		height: 120px;
	}

	.icon {
		font-size: 32px;
	}

	.btn-upload {
		margin-top: 10px;
		display: block;
	}
}
</style>



