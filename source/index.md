---
title: Deploy websites to the Bitcoin blockchain
---

### On-chain websites

Rather than reinventing the World Wide Web, *Preserve* leverages the same battle-tested technologies and tools that have been powering the Web for the last 30 years.

This means everything you're already familiar with &mdash; domain names, human-friendly URLs and routing, machine readable and search-engine friendly documents &mdash; all works the way you expect it to, and is all accessed through your favourite everyday web-browser or device.

So, everything looks and feels like the Web, but under the surface *Preserve* is Bitcoin!

### Ultimate internet archive

 Each file is a Bitcoin transaction - an immutable record that stays on the blockchain forever. *Preserve* also creates a unique sitemap transaction for every deployed revision, making it possible to observe the entire history of a website - down to every last change.

### Global CDN

*Preserve* makes use of `c://` [content addressable files](https://c.bitdb.network/) to map normal URLs to files on the blockchain. Each unique file has one universal reference, meaning it is never necessary for *Preserve* to publish the same asset more than once, and turning Bitcoin into a global CDN for everything.

### How does it work

<figure><img src="/images/how-it-works.jpg" /></figure>

Domain owners point their domain to a [Functional Bitcoin](https://github.com/functional-bitcoin/agent) Agent node, and associate their domain with a Bitcoin address by creating a TXT DNS record.

Upon receving a request, the Agent can resolve the request host to a Bitcoin address and pull the latest sitemap from the blockchain. It is then able to map the request path to a `c://` content addressable file and respond to the user request with the file.
