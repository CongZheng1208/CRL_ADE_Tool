<template>
  <exception-base type="404" />
</template>

<script lang="ts">
import axios from 'axios';
// import { ref } from 'vue';

export default {
  mounted() {
    sendPostRequest();
  }
}

// 在页面加载时发送POST请求
async function sendPostRequest() {
    const url = '指定的IP地址';
    const data = {
        // 你想要发送的数据
    };

    try {
        const response = await axios.post(url, data);
        const responseData = response.data; // 返回的数据

        // 根据返回的数据判断显示页面内容还是异常页面
        if (responseData.field === 'success') {
            // 显示正常页面内容
        } else {
            // 显示异常页面
            // 弹窗打印错误信息
            alert(responseData.error);
        }
    } catch (error) {
        // 发生错误时，显示异常页面
        // 弹窗打印错误信息
        alert(error);
    }
}




</script>

<style scoped></style>
