document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image-url');
            this.style.backgroundImage = `url('${imageUrl}')`;
            this.style.backgroundSize = 'cover';
            this.children[0].style.display = 'none'; // Hide the number
        });
    });
});
