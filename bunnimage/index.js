const bunnForm = document.getElementById('bunnForm');

bunnForm.addEventListener('submit', async function (event) {
   event.preventDefault()
   const username = document.getElementById("username").value
   const output = document.getElementById("output")
   if (username == "") {
      alert("No name error.")
      return;
   }

   var payload = new FormData(bunnForm);
   const endpoint = "https://jonathanrogersbitprojectserverless2022.azurewebsites.net/api/bunnimage-upload?code=yoYzMMIxkrUHq6kcSe5g3ZH5c2ib6rF8PhrQdhD6qQLkAzFuqQtaiQ=="
   const options ={
        "method": "POST",
        "body": payload,
        headers: {
            'username':username,
            'Content-Type': 'multipart/form-data'
        }
    }
   const resp = await fetch(endpoint, options)
   const data = await resp.text();
   output.textContent = "Your image has been stored successfully."

   output.textContent = username + "❤" 
});

const downloadButton = document.getElementById('button1');

downloadButton.addEventListener("click", async function (event) {
   var username = document.getElementById("downloadUsername").value;
   console.log("attempting to download your image...")

   const url = "https://jonathanrogersbitprojectserverless2022.azurewebsites.net/api/bunnimage-download?code=7UOFJ2QTt_y7GjxbWdKGfO2HphsdvKQeSainV_8zQdnGAzFuqv0B4w==";

   const resp = await fetch(url, {
      method: "GET",
      headers: {
         username:username,
      },
   });

   const data = await resp.json();
   console.log("Image has been received.")
   console.log(data)

   window.open(date.downloadUri, "_self");
});