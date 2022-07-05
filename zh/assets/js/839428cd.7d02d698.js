"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3315],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3734:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n"},p=void 0,s={unversionedId:"DeveloperManuals/DeveloperSetup",id:"DeveloperManuals/DeveloperSetup",title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n",source:"@site/docs/DeveloperManuals/04-DeveloperSetup.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DeveloperSetup",permalink:"/zh/docs/DeveloperManuals/DeveloperSetup",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/04-DeveloperSetup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n"},sidebar:"docsSidebar",previous:{title:"Temporal Setup",permalink:"/zh/docs/UserManuals/TemporalSetup"},next:{title:"DB Migration",permalink:"/zh/docs/DeveloperManuals/MIGRATIONS"}},u={},c=[{value:"Requirements",id:"requirements",level:4},{value:"How to setup dev environment",id:"how-to-setup-dev-environment",level:4}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://docs.docker.com/get-docker",target:"_blank"},"Docker v19.03.10+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://golang.org/doc/install",target:"_blank"},"Golang v1.17+")),(0,i.kt)("li",{parentName:"ul"},"Make",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mac (Already installed)"),(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("a",{parentName:"li",href:"http://gnuwin32.sourceforge.net/packages/make.htm"},"Download")),(0,i.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get install build-essential libssl-dev"))))),(0,i.kt)("h4",{id:"how-to-setup-dev-environment"},"How to setup dev environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to where you would like to install this project and clone the repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/apache/incubator-devlake\ncd incubator-devlake\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies for plugins:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/refdiff#development"},"RefDiff")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Go packages"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go get\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the sample config file to new local file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the following variables in the file ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql:3306")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3306")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the MySQL and Grafana containers:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Make sure the Docker daemon is running before this step.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d mysql grafana\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run lake and config UI in dev mode in two separate terminals:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# install mockery\ngo install github.com/vektra/mockery/v2@latest\n# generate mocking stubs\nmake mock\n# run lake\nmake dev\n# run config UI\nmake configure-dev\n")),(0,i.kt)("p",{parentName:"li"},"Q: I got an error saying: ",(0,i.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3: cannot open share object file: No such file or directory")),(0,i.kt)("p",{parentName:"li"},"A: Make sure your program can find ",(0,i.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH")," can be assigned like this if your ",(0,i.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3")," is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/lib"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit config UI at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000")," to configure data connections."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate to desired plugins pages on the Integrations page"),(0,i.kt)("li",{parentName:"ul"},"Enter the required information for the plugins you intend to use."),(0,i.kt)("li",{parentName:"ul"},"Refer to the following for more details on how to configure each one:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/jira"},"Jira")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/gitlab"},"GitLab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/jenkins"},"Jenkins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/github"},"GitHub"),": For users who'd like to collect GitHub data, we recommend reading our ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/github-user-guide-v0.10.0"},"GitHub data collection guide")," which covers the following steps in detail."))),(0,i.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,i.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000/pipelines/create")," to RUN a Pipeline and trigger data collection."))),(0,i.kt)("p",null,'   Pipelines Runs can be initiated by the new "Create Run" Interface. Simply enable the ',(0,i.kt)("strong",{parentName:"p"},"Data Connection Providers")," you wish to run collection for, and specify the data you want to collect, for instance, ",(0,i.kt)("strong",{parentName:"p"},"Project ID")," for Gitlab and ",(0,i.kt)("strong",{parentName:"p"},"Repository Name")," for GitHub."),(0,i.kt)("p",null,"   Once a valid pipeline configuration has been created, press ",(0,i.kt)("strong",{parentName:"p"},"Create Run")," to start/run the pipeline.\nAfter the pipeline starts, you will be automatically redirected to the ",(0,i.kt)("strong",{parentName:"p"},"Pipeline Activity")," screen to monitor collection activity."),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"Pipelines")," is accessible from the main menu of the config-ui for easy access."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manage All Pipelines: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Pipeline RUN: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/create"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Track Pipeline Activity: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/activity/[RUN_ID]")),(0,i.kt)("p",{parentName:"li"},"For advanced use cases and complex pipelines, please use the Raw JSON API to manually initiate a run using ",(0,i.kt)("strong",{parentName:"p"},"cURL")," or graphical API tool such as ",(0,i.kt)("strong",{parentName:"p"},"Postman"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," the following request to the DevLake API Endpoint."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        {\n            "plugin": "github",\n            "options": {\n                "repo": "lake",\n                "owner": "merico-dev"\n            }\n        }\n    ]\n]\n')),(0,i.kt)("p",{parentName:"li"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/create-pipeline-in-advanced-mode"},"Pipeline Advanced Mode")," for in-depth explanation."))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("em",{parentName:"p"},"View Dashboards")," button in the top left when done, or visit ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3002")," (username: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", password: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,i.kt)("p",{parentName:"li"},"We use ",(0,i.kt)("a",{href:"https://grafana.com/",target:"_blank"},"Grafana")," as a visualization tool to build charts for the ",(0,i.kt)("a",{href:"https://github.com/merico-dev/lake/wiki/DataModel.Domain-layer-schema"},"data stored in our database"),". Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,i.kt)("p",{parentName:"li"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/GRAFANA"},"Grafana Doc"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) To run the tests:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make test\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For DB migrations, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/DeveloperManuals/MIGRATIONS"},"Migration Doc"),"."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))))}d.isMDXComponent=!0}}]);