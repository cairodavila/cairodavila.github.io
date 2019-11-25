/* https://stackoverflow.com/questions/13975891/change-image-in-html-page-every-few-seconds */

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("modelos").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("modelos").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 2000);
}
var images = [], x = -1;
images[0] = "images/modelos/1.png";
images[1] = "images/modelos/2.png";
images[2] = "images/modelos/3.png";