"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"GitHub",description:"GitHub Plugin\n"},o=void 0,l={unversionedId:"Plugins/github",id:"version-v0.13/Plugins/github",title:"GitHub",description:"GitHub Plugin\n",source:"@site/versioned_docs/version-v0.13/Plugins/github.md",sourceDirName:"Plugins",slug:"/Plugins/github",permalink:"/docs/v0.13/Plugins/github",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Plugins/github.md",tags:[],version:"v0.13",frontMatter:{title:"GitHub",description:"GitHub Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitExtractor",permalink:"/docs/v0.13/Plugins/gitextractor"},next:{title:"GitLab",permalink:"/docs/v0.13/Plugins/gitlab"}},u={},s=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Screenshot",id:"screenshot",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Sample Request",id:"sample-request",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin gathers data from ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub")," to display information to the user in ",(0,i.kt)("inlineCode",{parentName:"p"},"Grafana"),". We can help tech leaders answer such questions as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is this month more productive than last?"),(0,i.kt)("li",{parentName:"ul"},"How fast do we respond to customer requirements?"),(0,i.kt)("li",{parentName:"ul"},"Was our quality improved or not?")),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Here are some examples metrics using ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub")," data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avg Requirement Lead Time By Assignee"),(0,i.kt)("li",{parentName:"ul"},"Bug Count per 1k Lines of Code"),(0,i.kt)("li",{parentName:"ul"},"Commit Count over Time")),(0,i.kt)("h2",{id:"screenshot"},"Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(29777).Z,width:"1229",height:"431"})),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuring GitHub via ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.13/UserManuals/ConfigUI/GitHub"},"config-ui"),".")),(0,i.kt)("h2",{id:"sample-request"},"Sample Request"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "github",\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "github 20211126",\n    "tasks": [[{\n        "plugin": "github",\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')))}c.isMDXComponent=!0},29777:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/github-demo-79e8e82fb6d7778e8ea342d81182e46e.png"}}]);