const fiveG: AuthRoute.Route = {
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
      meta: {
        title: 'fiveG_resourceList',
        icon: 'ic:round-settings-input-composite',
        i18nTitle: 'message.routes.fiveG.resourceList'
      }
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
          component: 'multi',
          meta: {
            title: 'fiveG_tools_loadTool',
            icon: 'fluent-mdl2:bulk-upload',
            i18nTitle: 'message.routes.fiveG.tools.load._value'
          },
          children: [
            {
              name: 'fiveG_tools_loadTool_leftCabinet',
              path: '/fiveG/tools/loadTool/leftCabinet',
              component: 'self',
              meta: {
                title: 'fiveG_tools_loadTool_leftCabinet',
                icon: 'fluent-mdl2:insert-columns-left',
                i18nTitle: 'message.routes.fiveG.tools.load.leftCabinet'
              }
            },
            {
              name: 'fiveG_tools_loadTool_rightCabinet',
              path: '/fiveG/tools/loadTool/rightCabinet',
              component: 'self',
              meta: {
                title: 'fiveG_tools_loadTool_rightCabinet',
                icon: 'fluent-mdl2:insert-columns-right',
                i18nTitle: 'message.routes.fiveG.tools.load.rightCabinet'
              }
            }
          ]
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
          meta: {
            title: 'fiveG_tools_debugTool',
            icon: 'icon-park-outline:workbench',
            i18nTitle: 'message.routes.fiveG.tools.debug'
          }
        }
      ]
    }
  ]
};

export default fiveG;
