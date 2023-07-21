<template>
  <n-space :vertical="true" :size="16">
    <!-- <n-card title="GPM 资源利用率权重图" :bordered="false" class="rounded-16px shadow-sm">

      <div ref="pieRef" class="h-400px"></div>
    </n-card> -->
		<n-card title="GPM 周利用率示意图" :bordered="false" class="rounded-16px shadow-sm">
			<n-checkbox-group>
				<n-space item-style="display: flex;justify-content: center;">
					<n-checkbox value="GPM1" label="GPM 1" />
					<n-checkbox value="GPM2" label="GPM 2" />
					<n-checkbox value="GPM3" label="GPM 3" />
					<n-checkbox value="GPM4" label="GPM 4" />
					<n-checkbox value="GPM5" label="GPM 5" />
					<n-checkbox value="GPM6" label="GPM 6" />
				</n-space>
			</n-checkbox-group>
      <div ref="scatterRef" class="h-600px"></div>
    </n-card>



  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
// import { graphic } from 'echarts';
import { type ECOption, useEcharts } from '@/composables';



// const pictorialBarOption = ref<ECOption>(getPictorialBarOption()) as Ref<ECOption>;
// const { domRef: pictorialBarRef } = useEcharts(pictorialBarOption);

// function getPictorialBarOption(): ECOption {
//   const category: string[] = [];
//   let dottedBase = Number(new Date());
//   const lineData: number[] = [];
//   const barData: number[] = [];

//   for (let i = 0; i < 20; i += 1) {
//     const date = new Date((dottedBase += 3600 * 24 * 1000));
//     category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
//     const b = Math.random() * 200;
//     const d = Math.random() * 200;
//     barData.push(b);
//     lineData.push(d + b);
//   }

//   const options: ECOption = {
//     backgroundColor: '#0f375f',
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     legend: {
//       data: ['CPU', 'Memory'],
//       textStyle: {
//         color: '#ccc'
//       }
//     },
//     xAxis: {
//       data: category,
//       axisLine: {
//         lineStyle: {
//           color: '#ccc'
//         }
//       }
//     },
//     yAxis: {
//       splitLine: { show: false },
//       axisLine: {
//         lineStyle: {
//           color: '#ccc'
//         }
//       }
//     },
//     series: [
//       {
//         name: 'CPU',
//         type: 'line',
//         smooth: true,
//         showAllSymbol: true,
//         symbol: 'emptyCircle',
//         symbolSize: 15,
//         data: lineData
//       },
//       {
//         name: 'Memory',
//         type: 'bar',
//         barWidth: 10,
//         itemStyle: {
//           borderRadius: 5,
//           color: new graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: '#14c8d4' },
//             { offset: 1, color: '#43eec6' }
//           ])
//         },
//         data: barData
//       },
//       {
//         name: 'CPU',
//         type: 'bar',
//         barGap: '-100%',
//         barWidth: 10,
//         itemStyle: {
//           color: new graphic.LinearGradient(0, 0, 0, 1, [
//             { offset: 0, color: 'rgba(20,200,212,0.5)' },
//             { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
//             { offset: 1, color: 'rgba(20,200,212,0)' }
//           ])
//         },
//         z: -12,
//         data: lineData
//       },
//       {
//         name: 'dotted',
//         type: 'pictorialBar',
//         symbol: 'rect',
//         itemStyle: {
//           color: '#0f375f'
//         },
//         symbolRepeat: true,
//         symbolSize: [12, 4],
//         symbolMargin: 1,
//         z: -10,
//         data: lineData
//       }
//     ]
//   };

//   return options;
// }

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


</script>

<style scoped>

</style>
