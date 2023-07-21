declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
   */
  type RootRouteKey = 'root';

  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
   */
  type NotFoundRouteKey = 'not-found';

  /**
   * the route key
   * @translate 页面路由
   */
  type RouteKey =
    | 'IronBird'
    | 'IronBird_overview'
    | 'IronBird_resourceList'
    | 'IronBird_tools'
    | 'IronBird_tools_debugTool'
    | 'IronBird_tools_loadTool'
    | 'IronBird_tools_loadTool_bankOne'
    | 'IronBird_tools_loadTool_bankOne_leftCabinet'
    | 'IronBird_tools_loadTool_bankOne_rightCabinet'
    | 'IronBird_tools_loadTool_bankTwo'
    | 'IronBird_tools_loadTool_bankTwo_leftCabinet'
    | 'IronBird_tools_loadTool_bankTwo_rightCabinet'
    | 'IronBird_tools_printTool'
    | 'IronBird_topologyGraph'
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'fiveG'
    | 'fiveG_overview'
    | 'fiveG_resourceList'
    | 'fiveG_tools'
    | 'fiveG_tools_debugTool'
    | 'fiveG_tools_loadTool'
    | 'fiveG_tools_loadTool_leftCabinet'
    | 'fiveG_tools_loadTool_rightCabinet'
    | 'fiveG_tools_printTool'
    | 'fiveG_topologyGraph'
    | 'oneB'
    | 'oneB_analysis'
    | 'oneB_workbench';

  /**
   * last degree route key, which has the page file
   * @translate 最后一级路由(该级路有对应的页面文件)
   */
  type LastDegreeRouteKey = Extract<
    RouteKey,
    | 'IronBird_overview'
    | 'IronBird_resourceList'
    | 'IronBird_tools_debugTool'
    | 'IronBird_tools_loadTool_bankOne_leftCabinet'
    | 'IronBird_tools_loadTool_bankOne_rightCabinet'
    | 'IronBird_tools_loadTool_bankTwo_leftCabinet'
    | 'IronBird_tools_loadTool_bankTwo_rightCabinet'
    | 'IronBird_tools_printTool'
    | 'IronBird_topologyGraph'
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'fiveG_overview'
    | 'fiveG_resourceList'
    | 'fiveG_tools_debugTool'
    | 'fiveG_tools_loadTool_leftCabinet'
    | 'fiveG_tools_loadTool_rightCabinet'
    | 'fiveG_tools_printTool'
    | 'fiveG_topologyGraph'
    | 'oneB_analysis'
    | 'oneB_workbench'
  >;
}
