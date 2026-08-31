// Lightbox
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".card-img-top");

    images.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            const lightbox = document.createElement("div");

            lightbox.style.position = "fixed";
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            lightbox.style.display = "flex";
            lightbox.style.alignItems = "center";
            lightbox.style.justifyContent = "center";
            lightbox.style.zIndex = "9999";

            const enlargedImage = document.createElement("img");
            enlargedImage.src = image.src;
            enlargedImage.style.maxWidth = "80%";
            enlargedImage.style.maxHeight = "80%";

            lightbox.appendChild(enlargedImage);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

});
