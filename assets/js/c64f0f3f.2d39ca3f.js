"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2638],{92188:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},s=void 0,l={unversionedId:"Configuration/GitHub",id:"version-v0.15/Configuration/GitHub",title:"GitHub",description:"Config UI instruction for GitHub",source:"@site/versioned_docs/version-v0.15/Configuration/GitHub.md",sourceDirName:"Configuration",slug:"/Configuration/GitHub",permalink:"/docs/Configuration/GitHub",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Configuration/GitHub.md",tags:[],version:"v0.15",sidebarPosition:2,frontMatter:{title:"GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},sidebar:"docsSidebar",previous:{title:"BitBucket(Beta)",permalink:"/docs/Configuration/BitBucket"},next:{title:"GitLab",permalink:"/docs/Configuration/GitLab"}},r={},u=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Auth Token(s)",id:"auth-tokens",level:4},{value:"GitHub personal access tokens(Recommended)",id:"github-personal-access-tokensrecommended",level:6},{value:"Fine-grained personal access tokens",id:"fine-grained-personal-access-tokens",level:6},{value:"Use Graphql APIs",id:"use-graphql-apis",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"CI/CD",id:"cicd",level:4},{value:"Code Review",id:"code-review",level:4},{value:"Additional Settings (Optional)",id:"additional-settings-optional",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-data-connections",src:i(49016).Z,width:"915",height:"713"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.github.com/"),". The URL should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"auth-tokens"},"Auth Token(s)"),(0,a.kt)("p",null,"You can use one of the following GitHub tokens: personal access tokens(PATs) or fine-grained personal access tokens."),(0,a.kt)("h6",{id:"github-personal-access-tokensrecommended"},"GitHub personal access tokens(Recommended)"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"how to create a GitHub personal access token"),". The following permissions are required to collect data from repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo:status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo_deployment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read:org"))),(0,a.kt)("p",null,"The data collection speed is restricted by the ",(0,a.kt)("strong",{parentName:"p"},"rate limit of ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests")," per hour per token")," (15,000 requests/hour if you pay for GitHub enterprise). You can accelerate data collection by configuring ",(0,a.kt)("em",{parentName:"p"},"multiple")," personal access tokens. Please note that multiple tokens should be created by different GitHub accounts. Tokens belonging to the same GitHub account share the rate limit."),(0,a.kt)("h6",{id:"fine-grained-personal-access-tokens"},"Fine-grained personal access tokens"),(0,a.kt)("p",null,"Note: this token doesn't support GraphQL APIs. You have to disable ",(0,a.kt)("inlineCode",{parentName:"p"},"Use GraphQL APIs")," on the connection page if you want to use it. However, this will significantly increase the data collection time."),(0,a.kt)("p",null,"If you're concerned with giving classic PATs full unrestricted access to your repositories, you can use fine-grained PATs announced by GitHub recently. With fine-grained PATs, GitHub users can create read-only PATs that only have access to repositories under certain GitHub orgs. But in order to do that, org admin needs to enroll that org with fine-grained PATs beta feature first. Please check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token"},"this doc")," for more details.\nThe token should be granted read-only permission for the following entities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Discussions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pull requests"))),(0,a.kt)("h4",{id:"use-graphql-apis"},"Use Graphql APIs"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com")," or your on-premise GitHub version supports GraphQL APIs, toggle on this setting to collect data quicker."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GraphQL APIs are 10+ times faster than REST APIs, but they may not be supported in GitHub on-premise versions."),(0,a.kt)("li",{parentName:"ul"},"Instead of using multiple tokens to collect data, you can use ONLY ONE token because GraphQL APIs are quick enough.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect GitHub data. You can adjust the rate limit if you want to increase or lower the speed."),(0,a.kt)("p",null,"The maximum rate limit for GitHub is ",(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests/hour"))," (15,000 requests/hour if you pay for GitHub enterprise). Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-set-data-scope",src:i(34086).Z,width:"917",height:"892"})),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)("p",null,'Enter the GitHub repos to collect. If you want to collect more than 1 repo, please separate repos with comma. For example, "apache/incubator-devlake,apache/incubator-devlake-website".'),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain GitHub entities, you can unselect some entities to accelerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: GitHub issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: GitHub repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: GitHub PRs, PR comments and reviews, etc."),(0,a.kt)("li",{parentName:"ul"},"CI/CD: GitHub Workflow runs, GitHub Workflow jobs, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: GitHub accounts, etc.")),(0,a.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-transformation-rules-list",src:i(59430).Z,width:"921",height:"341"}),"\n",(0,a.kt)("img",{alt:"github-add-transformation-rules",src:i(52924).Z,width:"877",height:"1633"})),(0,a.kt)("p",null,'Without adding transformation rules, you can still view the "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/DataSources/GitHub"},"GitHub Metrics"),'" dashboard. However, if you want to view "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/QAEngineers/WeeklyBugRetro"},"Weekly Bug Retro"),'", "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/OSSMaintainers/WeeklyCommunityRetro"},"Weekly Community Retro"),'" or other pre-built dashboards, the following transformation rules, especially "Type/Bug", should be added.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each GitHub repo has at most ONE set of transformation rules."),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Severity: Parse the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," from issue labels."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'severity/p0', 'severity/p1', 'severity/p2', then input 'severity/(.","*",")$'"),(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'p0', 'p1', 'p2', then input '(p0|p1|p2)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Component: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Priority: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type/Requirement: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' of issues with labels that match given regular expression will be set to "REQUIREMENT". Unlike "PR.type", submatch does nothing, because for issue management analysis, users tend to focus on 3 kinds of types (Requirement/Bug/Incident), however, the concrete naming varies from repo to repo, time to time, so we decided to standardize them to help analysts metrics.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Bug: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "BUG".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Incident: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "INCIDENT".'))),(0,a.kt)("h4",{id:"cicd"},"CI/CD"),(0,a.kt)("p",null,"This set of configurations is used for calculating ",(0,a.kt)("a",{parentName:"p",href:"/docs/DORA"},"DORA metrics"),"."),(0,a.kt)("p",null,"If you're using GitHub Action to conduct ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments"),', please select "Detect Deployment from Jobs in GitHub Action", and input the RegEx in the following fields:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment: A GitHub Action job with a name that matches the given regEx will be considered as a deployment."),(0,a.kt)("li",{parentName:"ul"},"Production: A GitHub Action job with a name that matches the given regEx will be considered a job in the production environment.")),(0,a.kt)("p",null,"A GitHub workflow run has many jobs. Each GitHub workflow run is converted to a\ncicd_pipeline in the domain layer and each GitHub Action job is converted to a cicd_task in the domain layer.\n",(0,a.kt)("img",{alt:"github-action-run",src:i(96961).Z,width:"1194",height:"446"}),"\n",(0,a.kt)("img",{alt:"github-action-job",src:i(38843).Z,width:"1194",height:"612"})),(0,a.kt)("p",null,"The deployment and production regex is always applied to the records in the cicd_tasks table."),(0,a.kt)("p",null,'You can also select "Not using Jobs in GitHub Action as Deployments" if you\'re not using GitHub action to conduct deployments.'),(0,a.kt)("h4",{id:"code-review"},"Code Review"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of pull requests will be parsed from PR labels by given regular expression. For example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'type/feature-development', 'type/bug-fixing' and 'type/docs', please input 'type/(.","*",")$'"),(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'feature-development', 'bug-fixing' and 'docs', please input '(feature-development|bug-fixing|docs)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Component: The ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," of pull requests will be parsed from PR labels by given regular expression."))),(0,a.kt)("h4",{id:"additional-settings-optional"},"Additional Settings (Optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Limit: It\'ll compare the last N pairs of tags to get the "commit diff\', "issue diff" between tags. N defaults to 10.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"commit diff: new commits for a tag relative to the previous one"),(0,a.kt)("li",{parentName:"ul"},"issue diff: issues solved by the new commits for a tag relative to the previous one"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tags Pattern: Only tags that meet given regular expression will be counted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Order: Only "reverse semver" order is supported for now.'))),(0,a.kt)("p",null,"Please click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," to save the transformation rules for the repo. In the data scope list, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step")," to continue configuring."),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},38843:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-action-job-9c30243e63c1731fcac7f35f1e6e9aa5.png"},96961:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-action-run-321793e23959ffae0597e53aab1bd8f5.png"},49016:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-data-connections-9c8dc2defe0a0fbc55241f7dc155a7a5.png"},59430:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-transformation-rules-list-9d6c597eacefebd636cf9bc91bb1c349.png"},52924:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-transformation-rules-d90499d4fa29ba28de7e56feec90cd18.png"},34086:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-set-data-scope-c887a9ddc98ad09d41bf387e2c1cb723.png"}}]);