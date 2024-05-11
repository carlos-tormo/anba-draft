document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.backgroundImage = 'url(https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png)';
            this.style.backgroundSize = 'cover';
            this.children[0].style.display = 'none'; // Hide the number
        });
    });
});
