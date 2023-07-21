<template>
  <div class="h-full">
    <!-- <n-card title="5G远程实验室 - 拓扑图例" class="h-800px shadow-sm rounded-16px">

			 <div ref="topoRef" class="w-full h-600px"></div>

		</n-card>
  </div>
	<div class="chart-container">
    <div id="main" style="height: 600px;"></div>
  </div>  -->
	</div>

</template>

<script setup lang="ts">



// import * as echarts from 'echarts';
// import 'echarts-gl';

// const ROOT_PATH = 'https://echarts.apache.org/examples';

// const chartDom = document.getElementById('main');
// const myChart = echarts.init(chartDom as HTMLDivElement);
// let option: any;

// fetch(ROOT_PATH + '/data-gl/asset/data/flights.json')
//   .then((response) => response.json())
//   .then((data) => {
//     const airports = data.airports.map((item: Array<any>) => {
//       return { coord: [item[3], item[4]] };
//     });

//     function getAirportCoord(idx: number): Array<number> {
//       return [data.airports[idx][3], data.airports[idx][4]];
//     }

//     // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
//     const routesGroupByAirline: { [key: string]: Array<Array<number>> } = {};
//     data.routes.forEach(function (route: Array<number>) {
//       const airline = data.airlines[route[0]];
//       const airlineName = airline[0];
//       if (!routesGroupByAirline[airlineName]) {
//         routesGroupByAirline[airlineName] = [];
//       }
//       routesGroupByAirline[airlineName].push(route);
//     });

//     const pointsData: Array<Array<number>> = [];
//     data.routes.forEach(function (airline: Array<number>) {
//       pointsData.push(getAirportCoord(airline[1]));
//       pointsData.push(getAirportCoord(airline[2]));
//     });

//     const series = data.airlines
//       .map(function (airline: Array<any>) {
//         const airlineName = airline[0];
//         const routes = routesGroupByAirline[airlineName];
//         if (!routes) {
//           return null;
//         }
//         return {
//           type: 'lines3D',
//           name: airlineName,
//           effect: {
//             show: true,
//             trailWidth: 2,
//             trailLength: 0.15,
//             trailOpacity: 1,
//             trailColor: 'rgb(30, 30, 60)',
//           },
//           lineStyle: {
//             width: 1,
//             color: 'rgb(50, 50, 150)',
//             opacity: 0.1,
//           },
//           blendMode: 'lighter',
//           data: routes.map(function (item: Array<number>) {
//             return [airports[item[1]].coord, airports[item[2]].coord];
//           }),
//         };
//       })
//       .filter(function (series) {
//         return !!series;
//       });

//     series.push({
//       type: 'scatter3D',
//       coordinateSystem: 'globe',
//       blendMode: 'lighter',
//       symbolSize: 2,
//       itemStyle: {
//         color: 'rgb(50, 50, 150)',
//         opacity: 0.2,
//       },
//       data: pointsData,
//     });

//     myChart.setOption({
//       legend: {
//         selectedMode: 'single',
//         left: 'left',
//         data: Object.keys(routesGroupByAirline),
//         orient: 'vertical',
//         textStyle: {
//           color: '#fff',
//         },
//       },
//       globe: {
//         environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
//         heightTexture:
//           ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
//         displacementScale: 0.1,
//         displacementQuality: 'high',
//         baseColor: '#000',
//         shading: 'realistic',
//         realisticMaterial: {
//           roughness: 0.2,
//           metalness: 0,
//         },
//         postEffect: {
//           enable: true,
//           depthOfField: {
//             enable: false,
//             focalDistance: 150,
//           },
//         },
//         temporalSuperSampling: {
//           enable: true,
//         },
//         light: {
//           ambient: {
//             intensity: 0,
//           },
//           main: {
//             intensity: 0.1,
//             shadow: false,
//           },
//           ambientCubemap: {
//             texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
//             exposure: 1,
//             diffuseIntensity: 0.5,
//             specularIntensity: 2,
//           },
//         },
//         viewControl: {
//           autoRotate: false,
//         },
//         silent: true,
//       },
//       series: series,
//     });

//     window.addEventListener('keydown', function () {
//       series.forEach(function (series, idx) {
//         myChart.dispatchAction({
//           type: 'lines3DToggleEffect',
//           seriesIndex: idx,
//         });
//       });
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });




</script>

<style scoped></style>
