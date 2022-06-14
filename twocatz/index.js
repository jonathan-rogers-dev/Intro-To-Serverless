const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    function getName() {
        let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
        let random_value = Math.floor(names.length * Math.random())
        console.log(random_value)
        let resultname = names[random_value]
        console.log(resultname)

        return resultname
    }
    
    async function getImage() {
        let resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
            method: 'GET'
        });

        let data = await resp.arrayBuffer();

        var base64data = Buffer.from(data).toString('base64');

        return base64data

    }

    var firstcat = await getImage();
    var secondcat = await getImage();
    var name1 = await getName();
    var name2 = await getName();

    context.res = {
        body: {
            cat1: firstcat,
            cat2: secondcat,
            names: [name1, name2]
        }
    }
}