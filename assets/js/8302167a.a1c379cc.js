"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Bug Count per 1k Lines of Code",description:"Bug Count per 1k Lines of Code\n",sidebar_position:12},a=void 0,s={unversionedId:"Metrics/BugCountPer1kLinesOfCode",id:"version-v0.13/Metrics/BugCountPer1kLinesOfCode",title:"Bug Count per 1k Lines of Code",description:"Bug Count per 1k Lines of Code\n",source:"@site/versioned_docs/version-v0.13/Metrics/BugCountPer1kLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/BugCountPer1kLinesOfCode",permalink:"/docs/v0.13/Metrics/BugCountPer1kLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/BugCountPer1kLinesOfCode.md",tags:[],version:"v0.13",sidebarPosition:12,frontMatter:{title:"Bug Count per 1k Lines of Code",description:"Bug Count per 1k Lines of Code\n",sidebar_position:12},sidebar:"docsSidebar",previous:{title:"Pull Request Count",permalink:"/docs/v0.13/Metrics/PRCount"},next:{title:"PR Merge Rate",permalink:"/docs/v0.13/Metrics/MergeRate"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"Amount of bugs per 1,000 lines of code."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Defect drill-down analysis to inform the development of design and code review strategies and to improve the internal QA process"),(0,i.kt)("li",{parentName:"ol"},"Assist teams to locate projects/modules with higher defect severity and density, and clean up technical debts"),(0,i.kt)("li",{parentName:"ol"},"Analyze critical points, identify good/to-be-improved practices that affect defect count or defect rate, to reduce the amount of future defects")),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"The number of bugs divided by total accumulated lines of code (additions + deletions) in the given data range."),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("p",null,"This metric relies on "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"issues collected from Jira, GitHub or TAPD."),(0,i.kt)("li",{parentName:"ul"},"commits collected from GitHub, GitLab or BitBucket.")),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"This metric relies on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Issue type mapping" in Jira, GitHub or TAPD\'s transformation rules page to let DevLake know what type(s) of issues can be regarded as bugs.'),(0,i.kt)("li",{parentName:"ul"},'"PR-Issue Mapping" in GitHub, GitLab\'s transformation rules page to let DevLake know the bugs are fixed by which PR/MRs.')),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the project or team dimension, observe the statistics on the total number of defects, the distribution of the number of defects in each severity level/type/owner, the cumulative trend of defects, and the change trend of the defect rate in thousands of lines, etc."),(0,i.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the statistics on the cumulative trend of the number of defects/defect rate, which can be used to determine whether the growth rate of defects is slowing down, showing a flat convergence trend, and is an important reference for judging the stability of software version quality"),(0,i.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of test defects, defect rate to locate the key items/key points"),(0,i.kt)("li",{parentName:"ol"},"Evaluate whether the software quality and test plan are reasonable by referring to CMMI standard values")))}d.isMDXComponent=!0}}]);