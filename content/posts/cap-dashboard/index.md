---
title: Cap.finance Dashboard
author: deif
date: "2022-03-21"
draft: false
---

On the arbitrum network there is a neat platform called [Cap.finance](https://www.cap.finance) that allows users wanting to earn yield on their ETH or USDC to become the casino and allow traders limited use of their funds as leverage. Due to the age old phrase 'The House always wins', it follows that over time the pools will increase in size as traders, on average, lose.

{{< image-proc cap-icon.jpg "Fit" "200x200" >}}

## Archmage Dashboard

What's lacking is a good way to view if traders are winning or losing overall and the general health of the dapp. Archmage are proud to release our [Cap Dashboard](https://cap-dashboard.archmage.fi/) that shows the health and expected yield returns for both the ETH and USDC pools. This dashboard utilises the heavy caching layer used by the main Archmage app, pulling in trade information from [The Graph](https://thegraph.com).

## Subgraph

The main Cap.finance graph is out of date and enabled for an old version of their trading contract, so we've updated and released our [own version](https://thegraph.com/hosted-service/subgraph/hmmdeif/capv3) for others to use as they wish. If the underlying contracts change then we'll keep it updated too.

Any questions or suggestions then let us know on [Twitter](https://twitter.com/archmagefi_)!