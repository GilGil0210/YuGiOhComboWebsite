const slider = document.querySelector(".card-slider");
const cards = document.querySelectorAll(".card-track img");

const cardWidth = 150;
const gap = 20;
const spacing = cardWidth + gap;

const speed = 1;

let positions = [];

cards.forEach((card, index) => {
    positions[index] = index * spacing;
});

function animate() {
    cards.forEach((card, index) => {
        positions[index] += speed;

        // If card completely leaves the RIGHT edge
        if (positions[index] > slider.offsetWidth) {
            // Find leftmost position among ALL OTHER cards (excluding this one)
            const otherPositions = positions.filter((_, i) => i !== index);
            const leftMost = Math.min(...otherPositions);

            positions[index] = leftMost - spacing;
        }

        card.style.transform = `translateX(${positions[index]}px)`;
    });

    requestAnimationFrame(animate);
}

animate();