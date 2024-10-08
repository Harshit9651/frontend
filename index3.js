const imageCards = document.querySelectorAll('.image-card');
imageCards.forEach(card => {
    card.addEventListener('click', () => {
        imageCards.forEach(card => card.classList.remove('active'));
        card.classList.add('active');
    });
});