<template>

  <n-space :vertical="true" :size="16">
    <n-card title="计算设备关系拓扑图" class="h-640px shadow-sm rounded-16px">
			<!-- <div ref="releRef" class="w-full h-540px"></div> -->
		</n-card>

		<n-card title="计算设备状态拓扑图" class="h-700px shadow-sm rounded-16px">
			<!-- <div ref="topoRef" class="w-full h-600px"></div> -->
		</n-card>
  </n-space>

</template>



<script setup lang="ts">


// import { ref } from 'vue';
// import type { Ref } from 'vue';
// import graph from './data0.json';
// import webkitDep from './data1.json';
// import { type ECOption, useEcharts } from '@/composables';

defineOptions({ name: 'DashboardAnalysisTopCard' });


// const lineOptions = ref<ECOption>({
// 	legend: {
// 		data: ['Running', 'Stop', 'Waiting', 'CSS', 'Other']
// 	},
// 	series: [
// 		{
// 			type: 'graph',
// 			layout: 'force',
// 			animation: false,
// 			label: {
// 				position: 'right',
// 				formatter: '{b}'
// 			},
// 			draggable: true,
// 			data: webkitDep.nodes.map(function (node: any, idx: number) {
// 				node.id = idx;
// 				return node;
// 			}),
// 			categories: webkitDep.categories,
// 			force: {
// 				edgeLength: 5,
// 				repulsion: 20,
// 				gravity: 0.2
// 			},
// 			edges: webkitDep.links
// 		}
// 	]

// }) as Ref<ECOption>;
// const { domRef: topoRef } = useEcharts(lineOptions);





// interface GraphNode {
//   symbolSize: number;
//   label?: {
//     show?: boolean;
//   };
// }

// graph.nodes.forEach(function (node: GraphNode) {
// 	node.label = {
// 		show: node.symbolSize > 30
// 	};
// });

// const graphOptions = ref<ECOption>({
//     tooltip: {},
//     legend: [
//       {
//         data: graph.categories.map(function (a: { name: string }) {
//           return a.name;
//         })
//       }
//     ],
//     animationDurationUpdate: 1500,
//     animationEasingUpdate: 'quinticInOut',
//     series: [
//       {
//         name: 'Les Miserables',
//         type: 'graph',
//         layout: 'circular',
//         circular: {
//           rotateLabel: true
//         },
//         data: graph.nodes,
//         links: graph.links,
//         categories: graph.categories,
//         roam: true,
//         label: {
//           position: 'right',
//           formatter: '{b}'
//         },
//         lineStyle: {
//           color: 'source',
//           curveness: 0.3
//         }
//       }
//     ]
// 	}) as Ref<ECOption>;
// 	const { domRef: releRef } = useEcharts(graphOptions);





</script>

<style scoped></style>
