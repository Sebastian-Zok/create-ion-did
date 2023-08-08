# Ion DID Creation and Blockchain Anchoring

This project allows you to effortlessly create a new Ion Decentralized Identifier (DID) and securely anchor it onto the blockchain. With this tool, you can establish a digital identity and ensure its immutability through blockchain integration.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Step 1: Generate Key Pair](#step-1-generate-key-pair)
  - [Step 2: Configure DID](#step-2-configure-did)
  - [Step 3: Blockchain Anchoring (optional)](#step-3-blockchain-anchoring-optional)
  - [Step 4: Create DID](#step-4-create-did)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Microsoft Ion is a protocol for decentralized identity systems. This script streamlines the process of creating a new Ion DID and binding it to the blockchain, facilitated by a public Ion node provided by Microsoft. By following the steps outlined below, you can create a DID and optionally anchor it onto the Bitcoin blockchain.

## Prerequisites

Before you begin, ensure you have the following in place:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Basic understanding of DIDs and blockchain concepts

## Getting Started

Follow these steps to create your Ion DID and anchor it onto the blockchain:

### Step 0: Install

Clone this repo and run the following command in the root directory of this project

```bash
npm install
```

### Step 1: Generate Key Pair

Run the following command to generate a key pair (public and private keys):

```bash
node createKeypair.js
```

The keys will be stored in seperate files (publikJwk.json and privateJwk.json)
Remember to save these keys in a safe location, also they will be overwritten and lost if you rerun this command.

### Step 2: Configure DID

Edit the `createDID.js` file to customize your DID according to your requirements. For example you can add additional services like DIDComm to enhance your digital identity.

### Step 3: Blockchain Anchoring (optional)

If you want to anchor your DID onto the Bitcoin blockchain, uncomment the relevant section at the bottom of the `createDID.js` file. Note that this anchoring process might take some time.

### Step 4: Create DID

Execute the following command to create your Ion DID:

```bash
node createDID.js
```

Your new Ion DID will now be generated and, if chosen, anchored onto the blockchain.

## Contributing

We welcome contributions to enhance this script and make the process even more seamless. If you have any ideas or improvements, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.

---

_Disclaimer: This project is not officially affiliated with Microsoft._
