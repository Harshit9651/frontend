const imageCards = document.querySelectorAll('.image-card');

// Add click event listeners to each card
imageCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove the 'active' class from all cards
        imageCards.forEach(card => card.classList.remove('active'));

        // Add the 'active' class to the clicked card
        card.classList.add('active');
    });
});