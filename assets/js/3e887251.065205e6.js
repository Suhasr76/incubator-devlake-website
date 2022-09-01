"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Jira",description:"Jira Plugin\n"},o=void 0,l={unversionedId:"Plugins/jira",id:"Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/docs/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/docs/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jira.md",tags:[],version:"current",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/docs/Plugins/jenkins"},next:{title:"RefDiff",permalink:"/docs/Plugins/refdiff"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Project Metrics This Covers",id:"project-metrics-this-covers",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From JIRA",id:"collect-data-from-jira",level:2},{value:"API",id:"api",level:2},{value:"Data Connections",id:"data-connections",level:3},{value:"Type mappings setting",id:"type-mappings-setting",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Jira data through Jira Cloud REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,i.kt)("img",{width:"2035",alt:"jira metric display",src:"https://user-images.githubusercontent.com/2908155/132926143-7a31d37f-22e1-487d-92a3-cf62e402e5a8.png"}),(0,i.kt)("h2",{id:"project-metrics-this-covers"},"Project Metrics This Covers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Lead Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Delivery Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of delivered requirements to all requirements")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Granularity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of story points associated with an issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"bugs are found during testing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"both new and deleted lines count"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bugs Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of bugs per 1000 lines of code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Incident"',(0,i.kt)("br",null),(0,i.kt)("i",null,"incidents are found when running in production"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Incident"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of incidents per 1000 lines of code")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring Jira via ",(0,i.kt)("a",{parentName:"p",href:"/docs/UserManuals/ConfigUI/Jira"},"config-ui"),"."),(0,i.kt)("h2",{id:"collect-data-from-jira"},"Collect Data From JIRA"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("blockquote",null,(0,i.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "plugin": "jira",\n      "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "since": "2006-01-02T15:04:05Z"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,i.kt)("strong",{parentName:"li"},"JIRA Integration")," page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),': JIRA board id, see "Find Board Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"since"),": optional, download data since a specified date only.")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"data-connections"},"Data Connections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'[\n  {\n    "ID": 14,\n    "CreatedAt": "2021-10-11T11:49:19.029Z",\n    "UpdatedAt": "2021-10-11T11:49:19.029Z",\n    "name": "test-jira-connection",\n    "endpoint": "https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "basicAuth",\n    "epicKeyField": "epicKeyField",\n      "storyPointField": "storyPointField"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type"\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Get data connection detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Delete data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},"")),(0,i.kt)("h3",{id:"type-mappings-setting"},"Type mappings setting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"mappings struct ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"/blueprints/{blueprintId}","/blueprints/{blueprintId}":!0},'{\n  "settings": {\n    "connections": \n    [{\n        "scope": \n        [{\n            "transformation":\n            {\n              "epicKeyField": "",\n              "storyPointField": "",\n              "remotelinkCommitShaPattern": "",\n              "typeMappings": \n              {\n                  "<USER_TYPE_1>": \n                  {\n                      "standardType": "<STD_TYPE_1>",\n                      "statusMappings": \n                      {\n                          "<USER_STATUS_a_from_USER_TYPE_1>": { "standardStatus": "<STD_STATUS_1>" },\n                          "<USER_STATUS_a_from_USER_TYPE_2>": { "standardStatus": "<STD_STATUS_2>" }\n                      }\n                  }\n              }\n            }\n        }]\n    }]\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"set mappings example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"PATCH /blueprints/{blueprintId}",PATCH:!0,"/blueprints/{blueprintId}":!0},'{\n  "name": "jira-test",\n  "mode": "NORMAL",\n  "plan": \n  [\n    [\n      {\n        "plugin": "jira",\n        "subtasks": \n        [\n          "collectStatus",\n          "extractStatus",\n          "collectProjects",\n          "extractProjects",\n          "collectBoard",\n          "extractBoard",\n          "collectIssueTypes",\n          "extractIssueType",\n          "collectIssues",\n          "extractIssues",\n          "collectIssueChangelogs",\n          "extractIssueChangelogs",\n          "collectAccounts",\n          "collectWorklogs",\n          "extractWorklogs",\n          "collectRemotelinks",\n          "extractRemotelinks",\n          "collectSprints",\n          "extractSprints",\n          "convertBoard",\n          "convertIssues",\n          "convertWorklogs",\n          "convertIssueChangelogs",\n          "convertSprints",\n          "convertSprintIssues",\n          "convertIssueCommits",\n          "extractAccounts",\n          "convertAccounts",\n          "collectEpics",\n          "extractEpics"\n        ]\n      }\n    ]\n  ],\n  "enable": true,\n  "cronConfig": "0 0 * * *",\n  "isManual": true,\n  "settings": {\n    "connections": \n    [{\n        "connectionId": 1,\n        "plugin": "jira",\n        "scope": \n        [{\n            "entities": \n            [\n              "TICKET",\n              "CROSS"\n            ],\n            "options": { "boardId": 1 },\n            "transformation":\n            {\n              "epicKeyField": "",\n              "storyPointField": "",\n              "remotelinkCommitShaPattern": "",\n              "typeMappings": \n              {\n                  "Task1": \n                  {\n                      "standardType": "Task1",\n                      "statusMappings": \n                      {\n                          "done": { "standardStatus": "hello world" },\n                          "new":  { "standardStatus": "nice to meet you" }\n                      }\n                  },\n                  "Task2": \n                  {\n                      "standardType": "Task2",\n                      "statusMappings": \n                      {\n                          "done": { "standardStatus": "hello world" },\n                          "new":  { "standardStatus": "nice to meet you too" }\n                      }\n                  }\n              }\n            }\n        }]\n    }],\n    "version": "1.0.0"\n  },\n  "id": 1,\n  "createdAt": "2022-08-30T11:25:10.699Z",\n  "updatedAt": "2022-08-30T11:28:22.891Z"\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"API forwarding\nFor example:\nRequests to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://your_devlake_host/plugins/jira/connections/1/proxy/rest/agile/1.0/board/8/sprint"),"\nwould be forwarded to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your_jira_host/rest/agile/1.0/board/8/sprint"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/proxy/rest/*path","/plugins/jira/connections/:connectionId/proxy/rest/*path":!0},'{\n    "maxResults": 1,\n    "startAt": 0,\n    "isLast": false,\n    "values": [\n        {\n            "id": 7,\n            "self": "https://merico.atlassian.net/rest/agile/1.0/sprint/7",\n            "state": "closed",\n            "name": "EE Sprint 7",\n            "startDate": "2020-06-12T00:38:51.882Z",\n            "endDate": "2020-06-26T00:38:00.000Z",\n            "completeDate": "2020-06-22T05:59:58.980Z",\n            "originBoardId": 8,\n            "goal": ""\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);