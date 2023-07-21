const IronBird: AuthRoute.Route = {
  "name": "IronBird",
  "path": "/IronBird",
  "component": "basic",
  "meta": {
    "title": "IronBird",
    "icon": "ic:baseline-home-work",
    "i18nTitle": "message.routes.IronBird._value"
  },
  "children": [
    {
      "name": "IronBird_overview",
      "path": "/IronBird/overview",
      "component": "self",
      "meta": {
        "title": "IronBird_overview",
        "icon": "ic:outline-file-copy",
        "i18nTitle": "message.routes.IronBird.overview"
      }
    },
    {
      "name": "IronBird_resourceList",
      "path": "/IronBird/resourceList",
      "component": "self",
      "meta": {
        "title": "IronBird_resourceList",
        "icon": "ic:round-settings-input-composite",
        "i18nTitle": "message.routes.IronBird.resourceList"
      }
    },
    {
      "name": "IronBird_topologyGraph",
      "path": "/IronBird/topologyGraph",
      "component": "self",
      "meta": {
        "title": "IronBird_topologyGraph",
        "icon": "ic:round-qr-code",
        "i18nTitle": "message.routes.IronBird.topologyGraph"
      }
    },
    {
      "name": "IronBird_tools",
      "path": "/IronBird/tools",
      "component": "multi",
      "meta": {
        "title": "IronBird_tools",
        "icon": "ic:round-construction",
        "i18nTitle": "message.routes.IronBird.tools._value"
      },
      "children": [
        {
          "name": "IronBird_tools_loadTool",
          "path": "/IronBird/tools/loadTool",
          "component": "multi",
          "meta": {
            "title": "IronBird_tools_loadTool",
            "icon": "fluent-mdl2:bulk-upload",
            "i18nTitle": "message.routes.IronBird.tools.load._value"
          },
          "children": [
						{
              "name": "IronBird_tools_loadTool_bankOne",
              "path": "/IronBird/tools/loadTool/bankOne",
              "component": "multi",
              "meta": {
                "title": "IronBird_tools_loadTool_bankOne",
                "icon": "fluent-mdl2:table-branded-column",
								"i18nTitle": "message.routes.IronBird.tools.load.bankOne._value"
              },
              "children": [
								{
                  "name": "IronBird_tools_loadTool_bankOne_leftCabinet",
                  "path": "/IronBird/tools/loadTool/bankOne/leftCabinet",
                  "component": "self",
                  "meta": {
                    "title": "IronBird_tools_loadTool_bankOne_leftCabinet",
                    "icon": "mdi:menu",
										"i18nTitle": "message.routes.IronBird.tools.load.bankOne.leftCabinet"
                  }
                },
                {
                  "name": "IronBird_tools_loadTool_bankOne_rightCabinet",
                  "path": "/IronBird/tools/loadTool/bankOne/rightCabinet",
                  "component": "self",
                  "meta": {
                    "title": "IronBird_tools_loadTool_bankOne_rightCabinet",
                    "icon": "mdi:menu",
										"i18nTitle": "message.routes.IronBird.tools.load.bankOne.rightCabinet"
                  }
                },
              ]
            },
            {
              "name": "IronBird_tools_loadTool_bankTwo",
              "path": "/IronBird/tools/loadTool/bankTwo",
              "component": "multi",
              "meta": {
                "title": "IronBird_tools_loadTool_bankTwo",
                "icon": "fluent-mdl2:table-branded-column",
								"i18nTitle": "message.routes.IronBird.tools.load.bankTwo._value"
              },
              "children": [
								{
                  "name": "IronBird_tools_loadTool_bankTwo_leftCabinet",
                  "path": "/IronBird/tools/loadTool/bankTwo/leftCabinet",
                  "component": "self",
                  "meta": {
                    "title": "IronBird_tools_loadTool_bankTwo_leftCabinet",
                    "icon": "mdi:menu",
										"i18nTitle": "message.routes.IronBird.tools.load.bankTwo.leftCabinet"
                  }
                },
                {
                  "name": "IronBird_tools_loadTool_bankTwo_rightCabinet",
                  "path": "/IronBird/tools/loadTool/bankTwo/rightCabinet",
                  "component": "self",
                  "meta": {
                    "title": "IronBird_tools_loadTool_bankTwo_rightCabinet",
                    "icon": "mdi:menu",
										"i18nTitle": "message.routes.IronBird.tools.load.bankTwo.rightCabinet"
                  }
                },
              ]
            },
          ]
        },
        {
          "name": "IronBird_tools_printTool",
          "path": "/IronBird/tools/printTool",
          "component": "self",
          "meta": {
            "title": "IronBird_tools_printTool",
            "icon": "prime:print",
            "i18nTitle": "message.routes.IronBird.tools.print"
          }
        },
        {
          "name": "IronBird_tools_debugTool",
          "path": "/IronBird/tools/debugTool",
          "component": "self",
          "meta": {
            "title": "IronBird_tools_debugTool",
            "icon": "icon-park-outline:workbench",
            "i18nTitle": "message.routes.IronBird.tools.debug"
          }
        }
      ]
    }
  ]
};





export default IronBird;
