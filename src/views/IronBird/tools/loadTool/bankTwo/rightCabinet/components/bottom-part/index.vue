<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <n-grid-item span="0:24 640:24 1024:8">
      <n-card title="时间线" :bordered="false" class="h-full rounded-16px shadow-sm">
        <n-timeline>
          <n-timeline-item v-for="item in timelines" :key="item.type" v-bind="item" />
        </n-timeline>
      </n-card>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:16">
      <n-card title="设备使用情况" :bordered="false" class="h-full rounded-16px shadow-sm">
        <n-data-table striped :columns="columns" :data="tableData" :bordered="false" />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { NButton } from 'naive-ui';

defineOptions({ name: 'DashboardAnalysisBottomPart' });


interface TableData {
  key: number;
  device: string;
  user: string;
  status: string;
  details: string;
}

interface TimelineData {
  type: 'default' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  content: string;
  time: string;
}

const timelines: TimelineData[] = [
  { type: 'success', title: 'GPM 1', content: 'Ran Zhang 切换到 close', time: '2023-06-10 20:48' },
  { type: 'success', title: 'GPM 1', content: 'Ran Zhang 切换到 running', time: '2023-06-10 20:48' },
  { type: 'error',   title: 'GPM 0', content: 'Zheng Cong 切换到 running', time: '2023-06-10 20:47' },
  { type: 'warning', title: 'GPM 2', content: 'Zheng Cong 切换到 running', time: '2023-06-10 20:46' },
  { type: 'success', title: 'GPM 1', content: 'Haotian Zheng 切换到 close', time: '2023-06-10 20:46' }
];


const columns = [
  {
    title: 'Device',
    key: 'device'
  },
  {
    title: 'User',
    key: 'user',
		// render: (row: any) => {
		// 		return `
		// 			<div>
		// 				<i class="${row.user.icon}"></i>
		// 				<span>${row.user.name}</span>
		// 			</div>
		// 		`
		// 	}
  },
  {
    title: 'Status',
    key: 'status',
		// render: (row: any) => {
		// 	return `
		// 		<div>
		// 			<i class="${row.status.icon}"></i>
		// 			<span>${row.status.name}</span>
		// 		</div>
		// 	`
		// }
  },
  {
    title: 'Details',
    key: 'details',
    render(row: TableData) {
			  return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            // onClick: () => play(row)
          },
          { default: () => 'DETAILS' }
        )
      }
  }
];

const tableData: TableData[] = [
	// { device: '设备A',
	// 	user: { name: '用户A', icon: 'fa fa-user' },
	// 	status: { name: '在线', icon: 'fa fa-check' },
	// 	details: '备注1'
	// },
	// {
	// 	device: '设备B',
	// 	user: { name: '用户B', icon: 'fa fa-user' },
	// 	status: { name: '离线', icon: 'fa fa-times' },
	// 	details: '备注2'
	// },
	{
    key: 1,
    device: 'GPM 1',
    user: 'Ran Zhang',
    status: 'Running',
    details: "1"
  },
  {
    key: 2,
    device: 'GPM 2',
    user: 'Zheng Cong',
    status: 'Running',
    details: "1"
  },
  {
    key: 3,
    device: 'GPM 3',
    user: 'Ran Zhang',
    status: 'Closed',
    details: "1"
  },
  {
    key: 4,
    device: 'GPM 4',
    user: 'Ran Zhang',
    status: 'Running',
    details: "1"
  },
  {
    key: 5,
    device: 'GPM 5',
    user: 'Haojie Shi',
    status: 'Running',
    details: "1"
  },
	{
    key: 6,
    device: 'GPM 6',
    user: 'Haotian Zheng',
    status: 'Closing',
    details: "1"
  }
];
</script>

<style scoped></style>
