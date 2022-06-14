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
    

    const respOne = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
        method: 'GET'
    });
    const respTwo = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
        method: 'GET'
    });
    
    const dataOne = await respOne.arrayBuffer()
    const dataTwo = await respTwo.arrayBuffer()

    var base64dataOne = Buffer.from(dataOne).toString('base64')
    var base64dataTwo = Buffer.from(dataTwo).toString('base64')

    context.res = {
        body: {
            cat1: base64dataOne,
            cat2: base64dataTwo,
            names: [getName(), getName()]
        }
    }
}