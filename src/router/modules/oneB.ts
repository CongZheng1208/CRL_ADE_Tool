const oneB: AuthRoute.Route = {
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
};

export default oneB;
