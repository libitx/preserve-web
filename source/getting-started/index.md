---
title: Getting started
---

The *Preserve* CLI requires a Node.js environment. Once installed it can be used to deploy files from any folder and works great with any static site generators.

* [Installation & setup](#Installation-amp-setup)
* [Usage](#Usage)
* [Configuring DNS](#Configuring-DNS)

## Installation & setup

```bash
npm install -g preserve-cli
```

From the root directory of your web project, initialise *Preserve*.

```bash
preserve init
```

This will generate a new Bitcoin address and private keys and save them to a hidden `.bit` file in your working directory. **Remember to add it to your `.gitignore` file**. You'll need to send a small amount of Bitcoin (SV) to your new address before using *Preserve*.

## Usage

