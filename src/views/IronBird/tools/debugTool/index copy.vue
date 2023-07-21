<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="32"
        :width="180"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
				  mode="horizontal"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="cabinets"
          :render-label="renderMenuLabel"
          @update:value="handleValue"
        />
      </n-layout-sider>
      <n-layout>
        <span v-if="selectedKey === 'GPM 1'">内容1</span>
        <span v-else-if="selectedKey === 'GPM 2'">内容2</span>
        <span v-else>默认内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { h, ref, defineComponent, nextTick } from "vue";
import type { MenuOption } from "naive-ui";


export default defineComponent({
  setup() {
    const collapsed = ref(true);
    const selectedKey = ref('');
    const menuOptions = ref([
      {
        label: "GPM 1",
        key: "GPM 1",
      },
      {
        label: "GPM 2",
        key: "GPM 2",
      },
    ]);

    const cabinets: MenuOption[] = [
      {
        label: "机柜1",
        key: "cabinet1",
        children: [
          ...menuOptions.value,
          {
            label: "添加",
            key: "add",
          },
        ],
      },
      {
        label: "机柜2",
        key: "cabinet2",
        children: [],
      },
    ];

    const renderMenuLabel = (option: MenuOption) => {
      if ("href" in option) {
        return h(
          "a",
          { href: option.href, target: "_blank" },
          option.label as string
        );
      }
      return option.label as string;
    };

    const handleValue = async (key: string | number, item: MenuOption) => {
      selectedKey.value = key.toString();

			console.log(key)

      if (key === "add") {
        menuOptions.value.push({
          label: "GPM " + (menuOptions.value.length + 1),
          key: "GPM " + (menuOptions.value.length + 1),
        });

        await nextTick();
        cabinets[0].children = [
          ...menuOptions.value,
          { label: "添加", key: "add" },
        ];
      }
    };

    return {
      collapsed,
      selectedKey,
      menuOptions,
      cabinets,
      renderMenuLabel,
      handleValue,
    };
  },
});
</script>


<!-- 这段是可添加子菜单的多级菜单 示例-->

<!-- <template>
  <div>
    <n-menu
			:options="cabinets"
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


			const len = cabinets.value[0].children.length + 1;
			const newMenuItem = { label: `菜单项${len}`, key: len.toString() };
			// menuOptions.value.push(newMenuItem);
			cabinets.value[0].children.push(newMenuItem);

			console.log(menuOptions)

			// 将更新后的菜单选项保存到本地存储
			localStorage.setItem("menuOptions", JSON.stringify(cabinets.value[0].children));
		};

    const handleMenuChange = (key: string | number) => {
      selectedKey.value = key.toString();
    };

		// 在页面加载时从本地存储中获取菜单选项
		const initialMenuOptions = localStorage.getItem("menuOptions");
		if (initialMenuOptions) {
			cabinets.value[0].children = JSON.parse(initialMenuOptions);
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
</script> -->



