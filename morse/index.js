const morse = require("morse-code-converter");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const plaintext = req.query.plaintext;

    let code = undefined

    if (typeof plaintext === 'undefined' || plaintext === "") {
        code = "Please enter some text to convert!"
    } else {
        code = morse.textToMorse(plaintext);
    }

    const responseMessage = code

    context.res = {
        body: responseMessage
    };
}