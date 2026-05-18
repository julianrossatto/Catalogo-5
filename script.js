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

const categorias = document.querySelectorAll(".categoria");

categorias.forEach(categoria => {
    const btn = categoria.querySelector(".toggleBtn");
    const conteudo = categoria.querySelector(".conteudo");

    let aberto = true;

    // 🔥 altura inicial correta
    conteudo.style.height = conteudo.scrollHeight + "px";

    btn.addEventListener("click", () => {
        if (aberto) {
            conteudo.style.height = conteudo.scrollHeight + "px";

            requestAnimationFrame(() => {
                conteudo.style.height = "0px";
                conteudo.classList.add("escondido");
            });

            btn.textContent = "Mostrar";
        } else {
            conteudo.classList.remove("escondido");
            conteudo.style.height = conteudo.scrollHeight + "px";

            setTimeout(() => {
                conteudo.style.height = "auto";
            }, 400);

            btn.textContent = "Ocultar";
        }

        aberto = !aberto;
    });
});