<template>
  <div>
    <n-menu
			:options="cabinets"
			mode="horizontal"
			@update:value="handleMenuChange"
		/>

    <div v-if="selectedKey">{{ `你选择了${selectedKey}菜单项` }}</div>
    <n-button @click="addMenuItem">添加菜单项</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NButton, NMenu } from "naive-ui";

export default defineComponent({
  name: "MyPage",
  components: {
    NButton,
    NMenu,
  },
  setup() {
    const selectedKey = ref("");
		const menuOptions = ref([
			{ label: "菜单项1", key: "1" },
			{ label: "菜单项2", key: "2" },
		]);
		const cabinets = ref([
      { label: "机柜1", key: "cabinet1",
        children: [
          ...menuOptions.value,
        ],
      },
      { label: "机柜2", key: "cabinet2",
        children: [],
      },
    ]);


		// 在用户添加新菜单项时保存到本地存储
		const addMenuItem = () => {
			const len = menuOptions.value.length + 1;
			const newMenuItem = { label: `菜单项${len}`, key: len.toString() };
			menuOptions.value.push(newMenuItem);

			// 将更新后的菜单选项保存到本地存储
			localStorage.setItem("menuOptions", JSON.stringify(menuOptions.value));
		};

    const handleMenuChange = (key: string | number) => {
      selectedKey.value = key.toString();
    };

		// 在页面加载时从本地存储中获取菜单选项
		const initialMenuOptions = localStorage.getItem("menuOptions");
		if (initialMenuOptions) {
			menuOptions.value = JSON.parse(initialMenuOptions);
		}

    return {
      selectedKey,
      menuOptions,
			cabinets,
      addMenuItem,
      handleMenuChange,
    };
  },
});
</script>
