---
title: Roadmap & The Graph
author: deif
date: "2021-12-29"
draft: false
---

In the last round of Graph grants, Archmage was awarded a grant to build the supporting infrastructure to help [The Graph](https://thegraph.com) grow. The main purpose of the grant was to deploy new subgraphs and a front end to provide tooling for market makers to make well-informed decisions as to where they should allocate their capital.

## Subgraphs

Archmage has already released new Uniswap V3 subgraphs to the hosted service - [Uniswap V3](https://thegraph.com/hosted-service/subgraph/archmage-finance/uniswap-v3), and [Uniswap V3 Minimal](https://thegraph.com/hosted-service/subgraph/archmage-finance/uniswap-v3-minimal). The minimal subgraph syncs faster as it does not include any tick data. Going forward, Archmage intends to create working subgraphs for L2s and to respond to issues and PRs in a more timely manner than on Uniswap's subgraph Github.

The subgraph code is open source and available on our [Github](https://github.com/Archmage-Finance/v3-subgraph) and we encourage the community to contribute as they see fit.

The main Uniswap V3 subgraph is also deployed on the decentralised Subgraph Studio that can be used by users and dapps once the hosted service is taken down.

## Uniswap V3 Batching Smart Contract

Available in Q1 2022, Archmage will be releasing a Uniswap V3 batching contract on L1 Ethereum that batches LP position function calls, like collects, reranges, and minting new positions. This will help reduce network utilisation and a small gas saving for users. This code is also open source and available to view on the [Archmage Core](https://github.com/Archmage-Finance/archmage-core) Github repository. A small fee is charged with each batched transaction to contribute to the maintenance and progression of the Archmage app.

## Management App

Shortly after the smart contract is deployed, the front end management app will also be released. Users will be able commit a single transaction that does the following in a far more efficient way than currently available anywhere else in DeFi:

* Close and Collect multiple LPs
* Swap collected tokens ready to fit the relevant tick range
* Reallocate tokens and mint new positions
* Burn unused LPs

Doing this in a single transaction obviously costs a lot of gas, but saves a lot of time waiting for a chain of transactions to complete before the Uniswap deadline modifier hits. The slippage and deadline is, of course, completely customisable, as shown in the example below.

{{< image-proc transaction.png "Fit" "344x462" >}}

We'll update you with further news and updates once we're happy with a release, so watch our [Twitter](https://twitter.com/archmagefi_) to keep up to date!