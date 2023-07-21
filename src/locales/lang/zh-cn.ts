import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'CRL开发者工具'
    },
    routes: {
			IronBird: {
        _value: '铁鸟实验室',
				overview: '概览',
				resourceList: '资源列表',
				topologyGraph: '拓扑图例',
				tools: {
          _value: '工具',
          debug: 'Debug工具',
					load: {
						_value: '加载工具',
						bankOne: {
							_value: '板卡1',
							leftCabinet: '左机柜',
							rightCabinet: '右机柜'
						},
						bankTwo: {
							_value: '板卡2',
							leftCabinet: '左机柜',
							rightCabinet: '右机柜'
						},
					},
					print: '打印工具',
        }
      },
			oneB: {
        _value: '1B办公室',
        analysis: '分析页',
        workbench: '工作台'
      },
			fiveG: {
        _value: '5G远程实验室',
				overview: '概览',
				resourceList: '资源列表',
				topologyGraph: '拓扑图例',
        tools: {
          _value: '工具',
          debug: 'Debug工具',
					load: {
						_value: '加载工具',
						leftCabinet: '左机柜',
						rightCabinet: '右机柜'
					},
					print: '打印工具',
        }
      },
			exception: {
        _value: '异常页',
        403: '403',
        404: '404',
        500: '500'
      },
    }
  }
};

export default locale;
