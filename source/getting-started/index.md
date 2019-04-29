---
title: Getting started
description: Learn how to create on-chain websites using the Bitcoin (SV) blockchain.
---

The *Preserve* CLI can be used to deploy files from any folder on your computer, and works great with any static site generator. It requires a Node.js runtime environment, so if necessary [install Node.js](https://nodejs.org/en/download/) first.

1. [Install Preserve CLI](#1-Install-Preserve-CLI)
2. [Add Preserve to your project](#2-Add-Preserve-to-your-project)
3. [View your sitemap](#3-View-your-sitemap)
4. [Deploy your files](#4-Deploy-your-files)
5. [Configure DNS](#5-Configure-DNS)

## 1. Install Preserve CLI

Install the *Preserve CLI* on your machine.

```bash
npm install -g preserve-cli
```

## 2. Add Preserve to your project

From the root directory of your web project, initialise *Preserve*.

```bash
preserve init
```

A new Bitcoin address and private key are generated and saved to a hidden `.bit` file in your working directory.
**Remember to add it to your `.gitignore` file**.

You'll need to send a small amount of Bitcoin (SV) to deploy files. If deploying many files or larger sized files, your wallet should be prepared by splitting the balance into many small UTXOs and waiting for all to confirm.

```bash
# Display wallet address and balance
preserve wallet
# Split UTXO set
preserve wallet split
```

## 3. View your sitemap

Before deploying any files, view the sitemap to see an overview of the files *Preserve* will deploy.

```bash
preserve status [path]
# eg: get status of assets in the 'public' folder
preserve status public
```

The displayed sitemap shows a list of all the files in your project, along with file size, `sha256` hash, and whether the file has already been deployed or not.

## 4. Deploy your files

When ready to deploy the files, and assuming your Bitcoin address has enough funds, *Preserve* will create and send transactions for every file to the Bitcoin (SV) network.

```bash
preserve deploy [path]
# eg: deploy assets in the 'public' folder
preserve deploy public
```

Network rules currently limit a chain of more than 25 unconfirmed transactions. *Preserve* will stop if it hits this limit. If this happens, wait for a confirmation, then try again.

## 5. Configure DNS

The final step is to configure the DNS for your domain. *Preserve* will generate two DNS records for you to configure with your DNS provider.

```bash
preserve dns [hostname]
# eg: generate DNS records for 'www.example.com'
preserve dns www.example.com
```

The generated DNS records will look like this.

```text
Host:  www.example.com
Type:  CNAME
Data:  dns.preserve.bitpaste.app

Host:  id._bsv.www.example.com
Type:  TXT
Data:  a=138A7KoTj1hbWEfBRYQQAujRk2EV3cLoRh; s=IC5+Ldu3i0Q6KHItq316ez9Bs5a4dmjtGJUWUrPVBn50SzLWx1jm0I+CCwFvm/3lUFcRHELr6eREDHfJWUHCnRA=
```
The first `CNAME` record points requests to your domain to a [Preserve Agent](https://github.com/libitx/preserve-agent) node to handle the request. `dns.preserve.bitpaste.app` is a public Preserve Agent node. Alternatively you can run the Agent on your own server.

The second `TXT` record contains your Bitcoin address and signature, and is used by the Agent to identify the latest router transaction associated with your domain.

