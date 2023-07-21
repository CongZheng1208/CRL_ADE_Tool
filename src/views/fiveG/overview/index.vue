<template>
  <n-space :vertical="true" :size="16">
		<workbench-header />
    <top-chart />
  </n-space>
</template>

<script lang="ts" setup>
import { TopChart,WorkbenchHeader } from './components';
</script>

<style scoped></style>
