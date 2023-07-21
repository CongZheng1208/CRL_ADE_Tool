<template>
  <n-space :vertical="true" :size="16">
		<control-part />
    <bottom-part />
  </n-space>
</template>

<script lang="ts" setup>
import { BottomPart, ControlPart } from './components';
</script>

<style scoped></style>
