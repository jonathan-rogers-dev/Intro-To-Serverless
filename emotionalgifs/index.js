const multipart = require('parse-multipart');
const fetch = require('node-fetch');


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // here's your boundary:
    const boundary = multipart.getBoundary(req.headers['content-type']);
    
    // TODO: assign the body variable the correct value
    const body = req.body;

    // parse the body
    const parts = multipart.Parse(body, boundary);


    const result = await analyzeImage(parts[0].data);

    let emotions = result[0].faceAttributes.emotion;
    let objects = Object.values(emotions);
    const main_emotion = Object.keys(emotions).find(key => emotions[key] === Math.max(...objects));


    //const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY
    const resp = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + GIPHY_API_KEY + "&limit=1&s=" + main_emotion);
    const jsonResult = await resp.json();

    context.log(jsonResult);

    context.res = {
        body: jsonResult.data.url
    };
    console.log(result)
    context.done(); 
}

async function analyzeImage(img){

    // const subscriptionKey = process.env.SUBSCRIPTIONKEY;
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';


    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'emotion'     //FILL IN THIS LINE
    })

    let resp = await fetch(uriBase + "?" + params.toString(), {
        method: 'POST',
        body: img,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': process.env.subscriptionKey
        }
    });

    let data = await resp.json();

    return data;
}