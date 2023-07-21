import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'SoybeanAdmin'
    },
    routes: {
			IronBird: {
				_value: 'Iron Bird Lab',
				overview: 'Overview',
				resourceList: 'Resource List',
				topologyGraph: 'Topology Graph',
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
        _value: '1B Lab',
        analysis: 'Analysis',
        workbench: 'Workbench'
      },
			fiveG: {
        _value: '5G Remote Lab',
				overview: 'Overview',
				resourceList: 'Resource list',
				topologyGraph: 'Topology Graph Legend',
				tools: {
          _value: 'Tools',
          debug: 'Debug tools',
					load: {
						_value: 'Load tools',
						leftCabinet: 'left cabinet',
						rightCabinet: 'right cabinet'
					},
					print: 'Print tools',
        }
      },
			exception: {
        _value: 'Exception',
        403: '403',
        404: '404',
        500: '500'
      },
    }
  }
};

export default locale;
