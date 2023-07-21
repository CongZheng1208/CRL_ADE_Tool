import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'Инструменты разработчика CRL'
    },
    routes: {
			IronBird: {
				_value: 'Лаборатория железной птицы',
				overview: 'Обзор',
				resourceList: 'Список ресурсов',
				topologyGraph: 'Граф топологии',
				tools: {
					_value: 'Tools',
					debug: 'Debug Tools',
					load: {
						_value: 'Load Tools',
						bankOne: {
							_value: 'Bank 1',
							leftCabinet: 'Left Cabinet',
							rightCabinet: 'Right Cabinet'
						},
						bankTwo: {
							_value: 'Bank 2',
							leftCabinet: 'Left Cabinet',
							rightCabinet: 'Right Cabinet'
						}
					},
					print: 'Print Tools'
				}
		  },
			oneB: {
        _value: 'Офис 1B',
        analysis: 'Страница анализа',
        workbench: 'Рабочая платформа'
      },
			fiveG: {
        _value: 'Удаленная лаборатория 5G',
				overview: 'Обзор',
				resourceList: 'Список ресурсов',
				topologyGraph: 'Граф топологии',
				tools: {
					"_value": "Инструменты",
					"debug": "Инструменты отладки",
					"load": {
						"_value": "Инструменты загрузки",
						"leftCabinet": "Левый шкаф",
						"rightCabinet": "Правый шкаф"
					},
					"print": "Печатные инструменты"
				}
      },
			exception: {
        _value: 'Страница ошибки',
        403: '403 ошибка',
        404: '404 ошибка',
        500: '500 ошибка'
      },
    }
  }
};

export default locale;
