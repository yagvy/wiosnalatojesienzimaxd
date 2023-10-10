document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    images.forEach((image) => {
        image.addEventListener("click", function () {
            const fullscreenContainer = document.createElement("div");
            fullscreenContainer.className = "fullscreen-container";

            const fullscreenImage = document.createElement("img");
            fullscreenImage.src = this.src;
            fullscreenImage.className = "fullscreen-image";

            fullscreenContainer.appendChild(fullscreenImage);

            document.body.appendChild(fullscreenContainer);

            fullscreenContainer.addEventListener("click", function () {
                document.body.removeChild(this);
                //amen
            });
        });
    });
});
