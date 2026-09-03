const slider = document.querySelector(".card-slider");
const cards = document.querySelectorAll(".card-track img");

const cardWidth = 150;
const gap = 20;
const spacing = cardWidth + gap;

const speed = 1;

// Start cards spread out across the screen
let positions = [];

cards.forEach((card, index) => {
    positions[index] = index * spacing;
});

function animate() {

    cards.forEach((card, index) => {

        // Move the card to the RIGHT
        positions[index] += speed;

        // If card completely leaves the RIGHT
        if (positions[index] > slider.offsetWidth) {

            // Find the card currently furthest LEFT
            const leftMost = Math.min(...positions);

            // Put this card OUTSIDE the LEFT edge
            positions[index] = leftMost - spacing;
        }

        // Move the actual image
        card.style.transform =
            `translateX(${positions[index]}px)`;
    });

    requestAnimationFrame(animate);
}

animate();