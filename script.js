document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const container = carousel.querySelector('.topicos');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');

    const card = container.querySelector('.card');
    const scrollAmount = card.offsetWidth + 20;

    nextBtn.addEventListener('click', () => {
        container.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener('click', () => {
        container.scrollLeft -= scrollAmount;
    });
});