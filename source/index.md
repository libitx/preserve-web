---
title: Deploy websites to the Bitcoin blockchain
description: Deploy HTML pages, static files and entire websites to the Bitcoin (SV) blockchain.
---

## On-chain websites

Rather than reinventing the World Wide Web, *Preserve* leverages the same battle-tested tools that have been powering the Web for the last 30 years.

This means everything you're already familiar with &mdash; domain names, human-friendly URLs and routing, machine readable and searchable documents &mdash; all works the way you expect it to, and is all accessed through your favourite everyday web-browser or device.

On the surface it is *just* the Web. But underneath, *Preserve* is Bitcoin!

## Ultimate internet archive

 Each file is a Bitcoin (SV) transaction - an immutable record that stays on the blockchain forever. *Preserve* also creates a unique sitemap transaction for every deployed revision, making it possible to observe the entire history of a website - down to every last change.

## Global CDN

*Preserve* makes use of `c://` [content addressable files](https://c.bitdb.network/) to map normal URLs to files on the blockchain. Each unique file has one universal reference, meaning it is never necessary for *Preserve* to publish the same resource more than once, and turning Bitcoin into a global CDN for everything.

## How does it work

Website owners point their domain to a [FB Agent](https://github.com/functional-bitcoin/agent) node, and associate their domain with a Bitcoin address by creating a signed TXT DNS record.

<figure><img src="/images/how-it-works.jpg" /></figure>

Upon receving a request, the Agent can resolve the request host to a Bitcoin address and pull the latest sitemap from the blockchain. It is then able to map the request path to a `c://` content addressable file and respond to the user request with the file.