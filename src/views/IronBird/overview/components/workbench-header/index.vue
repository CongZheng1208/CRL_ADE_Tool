<template>
  <n-card :bordered="false" class="rounded-16px shadow-sm">
    <div class="flex-y-center justify-between">
      <div class="flex-y-center">
        <!-- <icon-local-avatar class="text-70px" /> -->
        <div class="pl-12px">
          <h3 class="text-18px font-semibold">早安！</h3>
          <p class="leading-30px text-#999">今天又是充满活力的一天。</p>
        </div>
      </div>
      <n-space :size="24" :wrap="false">
        <n-statistic v-for="item in statisticData" :key="item.id" class="whitespace-nowrap" v-bind="item"></n-statistic>
      </n-space>
    </div>
  </n-card>
</template>

<script setup lang="ts">

defineOptions({ name: 'DashboardWorkbenchHeader' });


interface StatisticData {
  id: number;
  label: string;
  value: string;
}

const statisticData: StatisticData[] = [
  {
    id: 0,
    label: '在线节点',
    value: '32'
  },
  {
    id: 1,
    label: '运行任务数',
    value: '131'
  },
  {
    id: 2,
    label: '离线节点',
    value: '1'
  }
];
</script>

<style scoped></style>
