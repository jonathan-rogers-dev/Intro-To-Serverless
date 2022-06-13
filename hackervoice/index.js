module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let password = req.query.password;
    let response = "Access denied.";

    if (password === "letmein") {
        response = "Access granted.";
    }

    const your_response = response;


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: your_response
    };
}