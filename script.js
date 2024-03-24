const images = document.querySelectorAll('.slider-image');

let currentImageIndex = 0;

function showImage(index) {
    images.forEach(image => {
        image.style.display = 'none';
    });
    images[index].style.display = 'block';
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

showImage(currentImageIndex);

// 이미지를 클릭하면 다음 이미지로 전환
images.forEach(image => {
    image.addEventListener('click', nextImage);
});
