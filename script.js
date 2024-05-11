document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const rowImages = document.querySelectorAll('.image-row-item');

    boxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            // Set background image from data attribute
            const imageUrl = this.getAttribute('data-image-url');
            this.style.backgroundImage = `url('${imageUrl}')`;
            this.style.backgroundSize = 'cover';
            this.children[0].style.display = 'none'; // Hide the number

            // Fade out the corresponding image in the row
            if (rowImages[index]) { // Check if the image exists
                rowImages[index].style.opacity = '0';
            }
        });
    });
});
