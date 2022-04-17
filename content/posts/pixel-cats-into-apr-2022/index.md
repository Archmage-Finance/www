---
title: Pixel Cats
author: deif
date: "2022-04-14"
draft: false
---

On Sunday 17th April 2022 1800 UTC minting will go live on our newly released [Pixel Cats](https://www.pixel-cats.art) NFT project on the Fantom ecosystem. The entire project will be open sourced, allowing artists and developers to fork the code and use it for themselves to get a huge headstart on creating their own projects. Head on over to the NFT site to get the rundown on the more basic details, like why it's being released on Fantom, and how many can be minted at a time, etc. Today we're going over the reasons behind building the project.

## The state of NFTs

It's fair to say that NFTs are pretty popular. Having a unique token which have their own unique value and metadata is groundbreaking and exciting. A lot of people have made money from trading them, a lot of people have not. A lot of projects simply do not put in any effort to build their tokens securely and fairly. Let's go over some of the problems and how it affects everyday users when little effort is put into an NFT project:

### Fairness

Most projects open their minting from the first token and end on the last token. Fairness implies that no matter when you mint, you are unable to determine which token you are going to get. The team that created the project knows where its rarest tokens are because they generated them! It follows then that if a team knows which ids are rare, that they could mint the rarest ones themselves by sniping it from other users.

Example: Gregory knows token 5 is ultra rare. He waits for the first 4 tokens to be minted, then mints token 5 himself, stealing the token from other users that think they're competing in a fair game.

The fair thing to do is verifiably randomise the order of the minting so that no-one knows where the rarest tokens are.

### Verification

Another common problem is the fact that tokens are released with zero verification. Storing data on-chain is expensive, which is why most contracts store their metadata on IPFS. If your NFT image is stored off-chain, then how can you be sure as the owner of a specific token that it is the same one as the one you minted? How do you know that any of the tokens had their attributes locked before being revealed?

The answer to this is provenance hashes. It's not a new concept as [BAYC](https://boredapeyachtclub.com/#/) popularised the approach in 2021. There should always be a way to verifiably and easily determine if your token is  unchanged, and was fairly created before it was minted. A provenance hash is the hashed output of all token ids concatenated together so that any user can hash their own token and see  that it is contained within the provenance.

### Exposed Metadata

Even if you have fair minting, and verifiable metadata you're still left with the problem of knowing how rare a token is before minting it. As IPFS is a public space, it's quite hard to obscure your metadata in a way that bad actors can't crawl your IPFS CID for the rarest tokens and try to obtain them from unknowing users. Some projects circumvent this by not releasing the `BASE_URI` until after all tokens are minted, but we feel that it's more fun for owners if they can get all the info as soon as they mint their token, whilst protecting the metadata until that point.

## The lowdown

We've created 1024 unique generative art pieces in the form of pixelated cats. They have no utility (yet...) and can be minted for 5 FTM. If you like what we're doing, this is a perfect way to support the Archmage project.

<img src="cats.gif" alt="Hidden cats" style="width:400px" />

They will be instantly revealed upon mint without rarity information, allowing you to admire the art and/or sell the token immediately. The provenance hashes have already been released and you can verify that the token is part of the provenance on-chain! We'll go over how you can verify tokens in a later post, but for now you can look at the verified contract and its public methods on [FTMScan](https://ftmscan.com/address/0x2bB70b039b6516AC754eA1de7A0F75C92069d74F).

The mint order is randomised using a Sloth verified delay function so that the order is impossible to determine before the block has already been mined. Much like rollups, computational functions like this take a long time to calculate, but can be verified much quicker, allowing a contract to verifiably create a random number. The token id start index is therefore unknown to us, and additionally the mint order is also randomised using a psuedo-random number generator. Of course, it is possible to access the offset token id even though it is a private variable, which is why we have to use a psuedo-random number generator.

Additionally we use an approach that [Beardies](https://medium.com/paint-swap-finance/announcing-beardies-6161a72ae3da) used for their NFT project where token id metadata is hashed using unknown and unguessable strings so that it's impossible for anyone to crawl the metadata looking for the rarest tokens before they have been minted.

## Stretch Goals

We'll be releasing the code for the full NFT project over time once we hit specific mint goals (which can be seen on the Pixel Cats site). There are three separate projects that will be open sourced:

1. Solidity contracts - These include a full unit test suite with full coverage, annotated contract code using the latest `ERC2981` royalty standards and `ERC721Enumerable` OpenZeppelin contracts. In here is also primitive merkle tree generation and functions for verifying and generating `supportsInterface` XOR bytes from public interfaces.

2. Web3 site - Built on Vue3 Composition API and the very latest web3 standards we feel that this offers a much friendlier developer experience and an alternative to React. A custom built Web3 connection modal is included that connects to Metamask and WalletConnect, as well as minting and data retrieval from the above contracts.

3. Photoshop generation scripts - Written in Typescript that compile down to Photoshop compatible Javascript, these scripts allow you to automate the generation of a custom amount of tokens using weighted inputs to show and hide layers. The scripts also generate metadata json that conforms to the latest NFT Marketplace standards, as well as rarity calculations via various mean methods and upload scripts to Pinata.

If you're thinking about developing your own project then once the above projects have been open sourced you'll be saving yourself a lot of time!

Any questions or suggestions then let us know on [Twitter](https://twitter.com/archmagefi_)!