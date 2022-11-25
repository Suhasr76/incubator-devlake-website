"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5831],{80700:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=i(87462),o=(i(67294),i(3905));i(61839);const n={title:"PR Review Time",description:"PR Review Time\n",sidebar_position:17},s=void 0,r={unversionedId:"Metrics/PRReviewTime",id:"Metrics/PRReviewTime",title:"PR Review Time",description:"PR Review Time\n",source:"@site/docs/Metrics/PRReviewTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRReviewTime",permalink:"/docs/next/Metrics/PRReviewTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRReviewTime.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"PR Review Time",description:"PR Review Time\n",sidebar_position:17},sidebar:"docsSidebar",previous:{title:"PR Pickup Time",permalink:"/docs/next/Metrics/PRPickupTime"},next:{title:"PR Deploy Time",permalink:"/docs/next/Metrics/PRDeployTime"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The time it takes to complete a code review of a PR before it gets merged. "),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"Code review should be conducted almost in real-time and usually take less than two days. Abnormally long PR Review Time may indicate one or more of the following problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The PR size is too large that makes it difficult to review."),(0,o.kt)("li",{parentName:"ol"},"The team is too busy to review code.")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric is the time frame between when the first comment is added to a PR, to when the PR is merged."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"review time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.pull_requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n  review_timespan/60 as 'PR Review Time(h)'\nFROM\n  pull_requests\n")),(0,o.kt)("p",null,"If you want to measure the monthly trend of ",(0,o.kt)("inlineCode",{parentName:"p"},"PR review time")," in the screenshot below, please run the following SQL in Grafana. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(81922).Z,width:"1114",height:"298"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(created_date), INTERVAL -DAY(date(created_date))+1 DAY) as time,\n  avg(review_timespan)/60 as 'PR Review Time(h)'\nFROM pull_requests\nGROUP BY 1\nORDER BY 1\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,o.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,o.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,o.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}c.isMDXComponent=!0},81922:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/pr-review-time-monthly-93c08cf08a68a91a810a143e188e7a17.png"}}]);