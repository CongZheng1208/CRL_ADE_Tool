import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  IronBird_overview: () => import('./IronBird/overview/index.vue'),
  IronBird_resourceList: () => import('./IronBird/resourceList/index.vue'),
  IronBird_tools_debugTool: () => import('./IronBird/tools/debugTool/index.vue'),
  IronBird_tools_loadTool_bankOne_leftCabinet: () => import('./IronBird/tools/loadTool/bankOne/leftCabinet/index.vue'),
  IronBird_tools_loadTool_bankOne_rightCabinet: () => import('./IronBird/tools/loadTool/bankOne/rightCabinet/index.vue'),
  IronBird_tools_loadTool_bankTwo_leftCabinet: () => import('./IronBird/tools/loadTool/bankTwo/leftCabinet/index.vue'),
  IronBird_tools_loadTool_bankTwo_rightCabinet: () => import('./IronBird/tools/loadTool/bankTwo/rightCabinet/index.vue'),
  IronBird_tools_printTool: () => import('./IronBird/tools/printTool/index.vue'),
  IronBird_topologyGraph: () => import('./IronBird/topologyGraph/index.vue'),
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  fiveG_overview: () => import('./fiveG/overview/index.vue'),
  fiveG_resourceList: () => import('./fiveG/resourceList/index.vue'),
  fiveG_tools_debugTool: () => import('./fiveG/tools/debugTool/index.vue'),
  fiveG_tools_loadTool_leftCabinet: () => import('./fiveG/tools/loadTool/leftCabinet/index.vue'),
  fiveG_tools_loadTool_rightCabinet: () => import('./fiveG/tools/loadTool/rightCabinet/index.vue'),
  fiveG_tools_printTool: () => import('./fiveG/tools/printTool/index.vue'),
  fiveG_topologyGraph: () => import('./fiveG/topologyGraph/index.vue'),
  oneB_analysis: () => import('./oneB/analysis/index.vue'),
  oneB_workbench: () => import('./oneB/workbench/index.vue')
};
