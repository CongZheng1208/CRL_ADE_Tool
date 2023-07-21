<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true" >

		<n-grid-item span="0:24 640:24 1024:16">
      <n-card title="设备选择" :bordered="false" class="h-full rounded-16px shadow-sm">
				<div class="select-container">
					<!-- <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" /> -->

			  </div>
      </n-card>
    </n-grid-item>

    <n-grid-item span="0:24 640:24 1024:8">
			<n-card title="操作面板" :bordered="false" class="h-full rounded-16px shadow-sm">
				<div class="select-container" style="display: flex; flex-direction: row;">
					<div class="select-item" style="flex-grow: 7; flex-shrink: 1;">
						<!-- 文件上传 -->
						<div class="device-number">
							<div class="label">文件上传</div>
							<div class="upload">
								<div class="dropzone" @dragover="handleDragOver" @drop="handleDrop">
									<i class="icon fas fa-cloud-upload-alt"></i>
									<span class="hint">将文件拖拽到此处或者</span>
									<label for="file-upload" class="btn-upload">
										<span>选择文件</span>
										<input type="file" id="file-upload" ref="fileInput" @change="handleFileInputChange" multiple style="display: none;">
									</label>
								</div>
								<div v-if="files.length > 0" class="file-list">
									<div v-for="(file, index) in files" :key="index" class="file-item">
										<span>{{ file.name }}</span>
										<button class="btn-clear" @click="removeFile(index)">x</button>
									</div>
								</div>
								<!-- <button v-if="files.length > 0" class="btn-submit" @click="handleSubmit">上传</button> -->
							</div>
						</div>
					</div>

					<div class="select-item" style="flex-grow: 3; flex-shrink: 1;">
						<!-- 模式选择 -->
						<div class="device-number">
							<div class="label">模式选择</div>
							<n-select class="buttons" v-model:value="appStore.controll.currentMode" size="medium" :options="options" />
							<n-button class="buttons" type="primary" @click="handleSubmit">上传</n-button>
						</div>
					</div>
				</div>
			</n-card>
    </n-grid-item>


  </n-grid>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NSwitch, NIcon } from 'naive-ui'
import appStore from "@/store/instructions";
import axios from 'axios';
import { useThemeStore } from '@/store';




export default defineComponent({
  name: 'ModeSwitch',
  components: {
    NSwitch,
    NIcon,
  },
  setup() {

		const theme = useThemeStore();
		const fileName = ref<string>('')


		const files = ref<File[]>([])

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


    function removeFile(index: number) {
      files.value.splice(index, 1)
    }

    return {
			theme,
			appStore,
			files,
      handleDragOver,
      handleDrop,
      handleFileInputChange,
      handleSubmit,
      removeFile,
			fileName,
			value: ref(null),
      options: [
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
      ]
    }
  }
})
</script>





<style scoped>

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
  margin-bottom: 8px;
}

.device-number .buttons {
  display: flex;
  gap: 14px;
	margin-bottom: 20px;
}


.mode-switch {
  display: flex;
  align-items: center;
	margin-top: 4px;
	margin-bottom: 16px;
}

.myText{
	margin-left: 12px;
}

.hint {
  color: #888;
}

.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #409EFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all .3s;
}

.btn-upload:hover {
  background-color: #66b1ff;
}

.btn-upload span {
  display: inline-block;
  margin-right: 10px;
}


.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dropzone {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 120px;
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

.btn-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #409EFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all .3s;
}

.btn-upload:hover {
  background-color: #66b1ff;
}

.btn-upload span {
  display: inline-block;
  margin-right: 10px;
}

.file-list {
  margin-top: 10px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
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

.btn-submit {
  margin-top: 10px;
  padding: 10px 20px;
	background-color: #67C23A;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	transition: all .3s;
}

.btn-submit:hover {
	background-color: #85ce61;
}

.btn-submit:disabled {
	background-color: #ccc;
	cursor: not-allowed;
}

.btn-submit:disabled:hover {
	background-color: #ccc;
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
