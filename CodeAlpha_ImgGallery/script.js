let currentIndex = 0;
let images = [];
function filterImages(category) {
    let items = document.querySelectorAll(".image");
    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(category) ? "block" : "none";
        }
    });
}
function openLightbox(img) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    images = Array.from(document.querySelectorAll(".gallery img"));
    currentIndex = images.indexOf(img);

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex].src;
}