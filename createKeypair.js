const ION = require('@decentralized-identity/ion-tools')
const fs = require('fs').promises
const main = async () => {

    // Create private/public key pair
    const authnKeys = await ION.generateKeyPair('secp256k1')
    console.log("Created private/public key pair")
    console.log("Public key:", authnKeys.publicJwk)
    // Write private and public key to files
    await fs.writeFile(
        'publicKey.json',
        JSON.stringify(authnKeys.publicJwk)
    )
    await fs.writeFile(
        'privateKey.json',
        JSON.stringify(authnKeys.privateJwk)
    )
    console.log("Wrote public key to publicKey.json")
    console.log("Wrote private key to privateKey.json")

}
main()