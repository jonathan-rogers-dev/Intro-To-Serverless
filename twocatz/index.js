const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    async function getImage(name) {

        let resp = await fetch(`https://bit-cat.azurewebsites.net/cat/says/${name}`, {
            method: 'GET'
        });

        let data = await resp.arrayBuffer();

        var base64data = Buffer.from(data).toString('base64');

        return base64data

    }

    let nameParms = req.query.name;

    var cat = await getImage(nameParms);

    context.res = {
        body: {
            cat: cat,
            // names: [name1, name2]
        }
    }
}