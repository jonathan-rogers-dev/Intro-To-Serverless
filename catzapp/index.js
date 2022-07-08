const button = document.getElementById('button1');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const name4 = document.getElementById('name4');

button.addEventListener('click', 
function () {
    const nameList = [name1.value, name2.value, name3.value, name4.value];
    const imageList = [image1, image2, image3, image4];

    for (let i = 0; i < 4; i++) {
        let cat = nameList[i];
        image = 'https://jonathanrogersbitprojectserverless2022.azurewebsites.net/api/twocatz?code=1F9TlA5QmsHoWjUt1fVaFSbIOWZEtl_g6QKH7TXSrYLgAzFuo52pNg%3D%3D&name=' + cat
        imageList[i].src = 'data:image/png;base64,' + image;
    }
});
