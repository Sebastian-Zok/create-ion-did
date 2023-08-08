const ION = require('@decentralized-identity/ion-tools')
const fs = require('fs').promises
const main = async () => {

    const authnKeys = {}
    authnKeys.publicJwk = JSON.parse(await fs.readFile("./publicKey.json", "utf8"))
    authnKeys.privateJwk = JSON.parse(await fs.readFile("./privateKey.json", "utf8"))

    // Create a DID
    const did = new ION.DID({
        content: {
            // Register the public key for authentication
            publicKeys: [
                {
                    id: 'auth-key',
                    type: 'EcdsaSecp256k1VerificationKey2019',
                    publicKeyJwk: authnKeys.publicJwk,
                    purposes: ['authentication']
                }
            ],
            // Register an IdentityHub as a service
            services: [
                {
                    id: "CCWF",
                    type: "DIDCommMessaging",
                    serviceEndpoint: { uri: "http://localhost:3000/api/message/receive" }
                }
            ]
        }
    })
    const didUri = await did.getURI('short');
    console.log("Generated DID:", didUri)



    // Uncomment this if you want to anchor the did onto the Bitcoin blockchain using a public ion node provided by Microsoft
    /*
        const anchorRequestBody = await did.generateRequest()
        const anchorResponse = await ION.anchor(anchorRequestBody)
        const ionOps = await did.getAllOperations();
        console.log(anchorResponse);
        await fs.writeFile('./ion-did-ops-v1.json', JSON.stringify({ ops: ionOps }));
        */
}
main()