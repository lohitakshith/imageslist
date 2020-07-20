function getImages(renderImages) {
    console.log("getImages")
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.responseText)

        if (this.readyState == 4 && this.status == 200) {
            const images = JSON.parse(this.responseText)
            renderImages(images.slice(0, 20))
        }
    }
    xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
    xmlHttp.send()
}

getImages(renderImages);

function renderImages(images) {
    const row = document.querySelector(".d-flex")
    let colom = '';
    for (const imageData of images) {
        colom += `<img class="m-2" onclick=showImage("${imageData.url}") data-toggle="modal" data-target="#myModal" src=${imageData.thumbnailUrl}>`

    }
    row.innerHTML = colom;
}

function showImage(url) {
    console.log(url)
    $(".modal-body img").attr("src", url);
}