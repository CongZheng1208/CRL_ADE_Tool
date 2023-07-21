<!-- <template>
  <div class="h-full">
    <n-card title="5G - Debug工具" class="h-full shadow-sm rounded-16px">
			<div class="flex-center h-380px">
				<icon-local-banner class="text-400px sm:text-320px text-primary" />
			</div>
		</n-card>
  </div>
</template> -->


<template>
  <div>
    <table class="n-table">
      <thead>
        <tr>
          <th>设备</th>
          <th>用户</th>
          <th>状态</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td style="text-align: center">{{ item.device }}</td>
          <td >
            <div class="user-info" >
							<svg-icon :icon="item.icon" class="text-25px" />
              <div class="user-name">{{ item.user }}</div>
              <div class="user-index"><sup>{{ item.index }}</sup></div>
            </div>
          </td>
					<td >
            <div class="user-info" >
							<svg-icon :icon="item.icon" class="text-25px" />
              <div class="user-name">{{ item.status }}</div>
            </div>
          </td>
          <td style="text-align: center">
            <n-button>{{ item.details }}</n-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NAvatar, NButton } from 'naive-ui'

interface TableDataType {
  device: string;
  user: string;
  icon: string;
  index: number;
  status: string;
  details: string;
}

export default defineComponent({
  name: 'MyTable',
  components: {
    NAvatar,
    NButton
  },
  data() {
    const tableData: TableDataType[] = [
      { device: 'iPhone', user: 'John', icon: 'uil:user-circle', index: 1, status: 'online', details: 'View Details' },
      { device: 'iPad', user: 'Mary', icon: 'uil:user-circle', index: 2, status: 'offline', details: 'View Details' },
      { device: 'Macbook', user: 'Tom', icon: 'uil:user-circle', index: 3, status: 'online', details: 'View Details' },
      // more data...
    ]
    return {
      tableData,
    }
  }
})
</script>


<style scoped>
/* Custom styles... */
.n-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.n-table th,
.n-table td {
  padding: 0.5rem;
  text-align: left;
  vertical-align: top;
  border: 1px solid #eaeaea;
	text-align: center;
}

.n-table th {
  background-color: #f5f5f5;
}

.user-info {
  display: flex;
  flex-direction: column;
	align-items:center;
}

.user-name {
  font-weight: bold;
}

.user-index {
  font-size: smaller;
  color: gray;
}
</style>



