const { BlobServiceClient } = require('@azure/storage-blob');
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const account = "jonathanrogersbitproject";

module.exports = async function (context, myTimer) {
    const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionString);
    const deletecontainer = "images";
    const blobContainerClient = await blobServiceClient.getContainerClient(deletecontainer);

    for await (const blob of blobContainerClient.listBlobsFlat()) {
        context.log(`Deleting blob name ${blob.name}`);
        
        await blobContainerClient.deleteBlob(blob.name)
    }

    context.log("Deleted all files from the container.")
};