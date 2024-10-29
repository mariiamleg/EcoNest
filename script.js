window.addEventListener('scroll', function() {
    const newItems = document.querySelector('.new-items');
    const position = newItems.getBoundingClientRect().top;
    if (position < window.innerHeight) {
        newItems.classList.add('visible');
    }
});
