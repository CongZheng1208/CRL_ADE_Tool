export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
		{
			name: 'fiveG',
			path: '/fiveG',
			component: 'basic',
			meta: { title: 'fiveG', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.fiveG._value' },
			children: [
				{
					name: 'fiveG_overview',
					path: '/fiveG/overview',
					component: 'self',
					meta: { title: 'fiveG_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.fiveG.overview' }
				},
				{
					name: 'fiveG_resourceList',
					path: '/fiveG/resourceList',
					component: 'self',
					meta: { title: 'fiveG_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.fiveG.resourceList' }
				},
				{
					name: 'fiveG_topologyGraph',
					path: '/fiveG/topologyGraph',
					component: 'self',
					meta: { title: 'fiveG_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.fiveG.topologyGraph' }
				},
				{
					name: 'fiveG_tools',
					path: '/fiveG/tools',
					component: 'multi',
					meta: { title: 'fiveG_tools', icon: 'ic:round-construction', i18nTitle: 'message.routes.fiveG.tools._value' },
					children: [
						{
							name: 'fiveG_tools_loadTool',
							path: '/fiveG/tools/loadTool',
							component: 'self',
							meta: { title: 'fiveG_tools_loadTool', icon: 'icon-park-outline:workbench', i18nTitle: 'message.routes.fiveG.tools.load' }
						},
						{
							name: 'fiveG_tools_printTool',
							path: '/fiveG/tools/printTool',
							component: 'self',
							meta: { title: 'fiveG_tools_printTool', icon: 'prime:print', i18nTitle: 'message.routes.fiveG.tools.print' }
						},
						{
							name: 'fiveG_tools_debugTool',
							path: '/fiveG/tools/debugTool',
							component: 'self',
							meta: { title: 'fiveG_tools_debugTool', icon: 'mdi:monitor-dashboard', i18nTitle: 'message.routes.fiveG.tools.debug' }
						}
					]
				}
			]
		},
		{
			name: 'IronBird',
			path: '/IronBird',
			component: 'basic',
			meta: { title: 'IronBird', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.IronBird._value' },
			children: [
				{
					name: 'IronBird_overview',
					path: '/IronBird/overview',
					component: 'self',
					meta: { title: 'IronBird_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.IronBird.overview' }
				},
				{
					name: 'IronBird_resourceList',
					path: '/IronBird/resourceList',
					component: 'self',
					meta: { title: 'IronBird_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.IronBird.resourceList' }
				},
				{
					name: 'IronBird_topologyGraph',
					path: '/IronBird/topologyGraph',
					component: 'self',
					meta: { title: 'IronBird_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.IronBird.topologyGraph' }
				},
			]
		},
		{
			name: 'oneB',
			path: '/oneB',
			component: 'basic',
			meta: { title: 'oneB', icon: 'ic:baseline-mosque', i18nTitle: 'message.routes.oneB._value' },
			children: [
				{
					name: 'oneB_analysis',
					path: '/oneB/analysis',
					component: 'self',
					meta: { title: 'oneB_analysis', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.analysis' }
				},
				{
					name: 'oneB_workbench',
					path: '/oneB/workbench',
					component: 'self',
					meta: { title: 'oneB_workbench', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.workbench' }
				}
			]
		}
  ],
  admin: [
		{
			name: 'fiveG',
			path: '/fiveG',
			component: 'basic',
			meta: { title: 'fiveG', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.fiveG._value' },
			children: [
				{
					name: 'fiveG_overview',
					path: '/fiveG/overview',
					component: 'self',
					meta: { title: 'fiveG_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.fiveG.overview' }
				},
				{
					name: 'fiveG_resourceList',
					path: '/fiveG/resourceList',
					component: 'self',
					meta: { title: 'fiveG_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.fiveG.resourceList' }
				},
				{
					name: 'fiveG_topologyGraph',
					path: '/fiveG/topologyGraph',
					component: 'self',
					meta: { title: 'fiveG_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.fiveG.topologyGraph' }
				},
				{
					name: 'fiveG_tools',
					path: '/fiveG/tools',
					component: 'multi',
					meta: { title: 'fiveG_tools', icon: 'ic:round-construction', i18nTitle: 'message.routes.fiveG.tools._value' },
					children: [
						{
							name: 'fiveG_tools_loadTool',
							path: '/fiveG/tools/loadTool',
							component: 'self',
							meta: { title: 'fiveG_tools_loadTool', icon: 'icon-park-outline:workbench', i18nTitle: 'message.routes.fiveG.tools.load' }
						},
						{
							name: 'fiveG_tools_printTool',
							path: '/fiveG/tools/printTool',
							component: 'self',
							meta: { title: 'fiveG_tools_printTool', icon: 'prime:print', i18nTitle: 'message.routes.fiveG.tools.print' }
						},
						{
							name: 'fiveG_tools_debugTool',
							path: '/fiveG/tools/debugTool',
							component: 'self',
							meta: { title: 'fiveG_tools_debugTool', icon: 'mdi:monitor-dashboard', i18nTitle: 'message.routes.fiveG.tools.debug' }
						}
					]
				}
			]
		},
		{
			name: 'IronBird',
			path: '/IronBird',
			component: 'basic',
			meta: { title: 'IronBird', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.IronBird._value' },
			children: [
				{
					name: 'IronBird_overview',
					path: '/IronBird/overview',
					component: 'self',
					meta: { title: 'IronBird_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.IronBird.overview' }
				},
				{
					name: 'IronBird_resourceList',
					path: '/IronBird/resourceList',
					component: 'self',
					meta: { title: 'IronBird_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.IronBird.resourceList' }
				},
				{
					name: 'IronBird_topologyGraph',
					path: '/IronBird/topologyGraph',
					component: 'self',
					meta: { title: 'IronBird_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.IronBird.topologyGraph' }
				},
			]
		},
		{
			name: 'oneB',
			path: '/oneB',
			component: 'basic',
			meta: { title: 'oneB', icon: 'ic:baseline-mosque', i18nTitle: 'message.routes.oneB._value' },
			children: [
				{
					name: 'oneB_analysis',
					path: '/oneB/analysis',
					component: 'self',
					meta: { title: 'oneB_analysis', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.analysis' }
				},
				{
					name: 'oneB_workbench',
					path: '/oneB/workbench',
					component: 'self',
					meta: { title: 'oneB_workbench', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.workbench' }
				}
			]
		}
  ],
  user: [
		{
			name: 'fiveG',
			path: '/fiveG',
			component: 'basic',
			meta: { title: 'fiveG', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.fiveG._value' },
			children: [
				{
					name: 'fiveG_overview',
					path: '/fiveG/overview',
					component: 'self',
					meta: { title: 'fiveG_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.fiveG.overview' }
				},
				{
					name: 'fiveG_resourceList',
					path: '/fiveG/resourceList',
					component: 'self',
					meta: { title: 'fiveG_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.fiveG.resourceList' }
				},
				{
					name: 'fiveG_topologyGraph',
					path: '/fiveG/topologyGraph',
					component: 'self',
					meta: { title: 'fiveG_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.fiveG.topologyGraph' }
				},
				{
					name: 'fiveG_tools',
					path: '/fiveG/tools',
					component: 'multi',
					meta: { title: 'fiveG_tools', icon: 'ic:round-construction', i18nTitle: 'message.routes.fiveG.tools._value' },
					children: [
						{
							name: 'fiveG_tools_loadTool',
							path: '/fiveG/tools/loadTool',
							component: 'self',
							meta: { title: 'fiveG_tools_loadTool', icon: 'icon-park-outline:workbench', i18nTitle: 'message.routes.fiveG.tools.load' }
						},
						{
							name: 'fiveG_tools_printTool',
							path: '/fiveG/tools/printTool',
							component: 'self',
							meta: { title: 'fiveG_tools_printTool', icon: 'prime:print', i18nTitle: 'message.routes.fiveG.tools.print' }
						},
						{
							name: 'fiveG_tools_debugTool',
							path: '/fiveG/tools/debugTool',
							component: 'self',
							meta: { title: 'fiveG_tools_debugTool', icon: 'mdi:monitor-dashboard', i18nTitle: 'message.routes.fiveG.tools.debug' }
						}
					]
				}
			]
		},
		{
			name: 'IronBird',
			path: '/IronBird',
			component: 'basic',
			meta: { title: 'IronBird', icon: 'ic:baseline-home-work', i18nTitle: 'message.routes.IronBird._value' },
			children: [
				{
					name: 'IronBird_overview',
					path: '/IronBird/overview',
					component: 'self',
					meta: { title: 'IronBird_overview', icon: 'ic:outline-file-copy', i18nTitle: 'message.routes.IronBird.overview' }
				},
				{
					name: 'IronBird_resourceList',
					path: '/IronBird/resourceList',
					component: 'self',
					meta: { title: 'IronBird_resourceList', icon: 'ic:round-settings-input-composite', i18nTitle: 'message.routes.IronBird.resourceList' }
				},
				{
					name: 'IronBird_topologyGraph',
					path: '/IronBird/topologyGraph',
					component: 'self',
					meta: { title: 'IronBird_topologyGraph', icon: 'ic:round-qr-code', i18nTitle: 'message.routes.IronBird.topologyGraph' }
				},
			]
		},
		{
			name: 'oneB',
			path: '/oneB',
			component: 'basic',
			meta: { title: 'oneB', icon: 'ic:baseline-mosque', i18nTitle: 'message.routes.oneB._value' },
			children: [
				{
					name: 'oneB_analysis',
					path: '/oneB/analysis',
					component: 'self',
					meta: { title: 'oneB_analysis', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.analysis' }
				},
				{
					name: 'oneB_workbench',
					path: '/oneB/workbench',
					component: 'self',
					meta: { title: 'oneB_workbench', icon: 'mdi:menu', i18nTitle: 'message.routes.oneB.workbench' }
				}
			]
		}
  ]
};
