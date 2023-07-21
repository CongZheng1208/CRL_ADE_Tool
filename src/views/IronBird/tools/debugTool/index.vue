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

interface ResponseData {
  field: string;
  error: string;
  // 根据实际返回的数据结构添加其他属性
}

async function sendPostRequest() {
  const url = '指定的IP地址';
  const data = {
    // 你想要发送的数据
  };

  try {
    const response = await axios.post<ResponseData>(url, data);
    const responseData = response.data;

    if (responseData.field === 'success') {
      // 显示正常页面内容
    } else {
      // 显示异常页面
      alert(responseData.error);
    }
  } catch (error) {
    // 发生错误时，显示异常页面
    alert(error);
  }
}



</script>

<style scoped></style>
