const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
        method: 'GET'
    });
    
    const data = await resp.arrayBuffer()
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

    var base64data = Buffer.from(data).toString('base64')

    context.res = {
        body: { base64data }
    }
}