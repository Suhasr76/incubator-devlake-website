"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7257],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>p});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(i),p=n,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return i?o.createElement(f,a(a({ref:t},l),{},{components:i})):o.createElement(f,a({ref:t},l))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var c=2;c<r;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},73358:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=i(87462),n=(i(67294),i(3905));const r={title:"Added Lines of Code",description:"Added Lines of Code\n",sidebar_position:7},a=void 0,d={unversionedId:"Metrics/AddedLinesOfCode",id:"version-v0.13/Metrics/AddedLinesOfCode",title:"Added Lines of Code",description:"Added Lines of Code\n",source:"@site/versioned_docs/version-v0.13/Metrics/AddedLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/AddedLinesOfCode",permalink:"/zh/docs/v0.13/Metrics/AddedLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/AddedLinesOfCode.md",tags:[],version:"v0.13",sidebarPosition:7,frontMatter:{title:"Added Lines of Code",description:"Added Lines of Code\n",sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Commit Count",permalink:"/zh/docs/v0.13/Metrics/CommitCount"},next:{title:"Deleted Lines of Code",permalink:"/zh/docs/v0.13/Metrics/DeletedLinesOfCode"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The accumulated number of added lines of code."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"identify potential bottlenecks that may affect the output"),(0,n.kt)("li",{parentName:"ol"},"Encourage the team to implement a development model that matches the business requirements; develop excellent coding habits")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by summing the additions of commits in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project/team dimension, observe the accumulated change in Added lines to assess the team activity and code growth rate"),(0,n.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the active time distribution of code changes, and evaluate the effectiveness of project development model."),(0,n.kt)("li",{parentName:"ol"},"From the member dimension, observe the trend and stability of code output of each member, and identify the key points that affect code output by comparison.")))}u.isMDXComponent=!0}}]);