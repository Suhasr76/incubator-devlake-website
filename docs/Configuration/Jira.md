---
title: "Jira"
sidebar_position: 4
description: Config UI instruction for Jira
---

Visit config-ui: `http://localhost:4000`.

### Step 1 - Add Data Connections
![jira-add-data-connections](/img/ConfigUI/jira-add-data-connections.png)

#### Connection Name
Name your connection.

#### Endpoint URL
This should be a valid REST API endpoint
   - If you are using Jira Cloud, the endpoint will be `https://<mydomain>.atlassian.net/rest/`
   - If you are self-hosting Jira v8+, the endpoint will look like `https://jira.<mydomain>.com/rest/`
The endpoint url should end with `/`.

#### Username / Email
Input the username or email of your Jira account.

#### Password
- If you are using Jira Cloud, please input the [Jira personal access token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html).
- If you are using Jira Server v8+, please input the password of your Jira account.

#### Proxy URL (Optional)
If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. `http://your-proxy-server.com:1080`

#### Fixed Rate Limit (Optional)

DevLake uses a dynamic rate limit to collect Jira data. You can adjust the rate limit if you want to increase or lower the speed. If you encounter a 403 error during data collection, please lower the rate limit.

Jira(Cloud) uses a dynamic rate limit and has no clear rate limit. For Jira Server's rate limiting, please contact your Jira Server admin to [get or set the maximum rate limit](https://repository.prace-ri.eu/git/help/security/rate_limits.md) of your Jira instance. Please do not use a rate that exceeds this number.


#### Test and Save Connection
Click `Test Connection`, if the connection is successful, click `Save Connection` to add the connection.


### Step 2 - Setting Data Scope
![jira-set-data-scope](/img/ConfigUI/jira-set-data-scope.png)

#### Projects
Choose the Jira boards to collect.

#### Data Entities
Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed.
- Issue Tracking: Jira issues, issue comments, issue labels, etc.
- Cross Domain: Jira accounts, etc.

### Step 3 - Adding Transformation Rules (Optional)
![jira-add-transformation-rules-list](/img/ConfigUI/jira-add-transformation-rules-list.png)
 
Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.<br/>

Each Jira board has at most ONE set of transformation rules.

![jira-add-transformation-rules](/img/ConfigUI/jira-add-transformation-rules.png)

#### Issue Tracking

- Requirement: choose the issue types to be transformed to "REQUIREMENT".
- Bug: choose the issue types to be transformed to "BUG".
- Incident: choose the issue types to be transformed to "INCIDENT".
- Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".
- Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".

#### Additional Settings
- Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between `issues` and `commits` can be created. You can directly use the regular expression `/commit/([0-9a-f]{40})$`.

### Step 4 - Setting Sync Frequency
You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule.


## Troubleshooting

If you run into any problem, please check the [Troubleshooting](/Troubleshooting/Configuration.md) or [create an issue](https://github.com/apache/incubator-devlake/issues)
