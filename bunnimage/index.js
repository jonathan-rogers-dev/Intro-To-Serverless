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
   const endpoint = "https://jonathanrogersbitprojectserverless2022.azurewebsites.net/api/bunnimage-upload?code=yoYzMMIxkrUHq6kcSe5g3ZH5c2ib6rF8PhrQdhD6qQLkAzFuqQtaiQ%3D%3D"
   const options ={
        "method": "POST",
        "body": payload,
        headers: {
            "codename": username
        }
    }
   const resp = await fetch(endpoint, options)
   const data = await resp.text();
   output.textContent = "Your image has been stored successfully."

   output.textContent = username + "❤" 
});