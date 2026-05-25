window.addEventListener("load", () => {

    const carrossel = document.querySelectorAll('.carrossel-categoria');

    carrossel.forEach(categoria => {
        const topicos = categoria.querySelector('.topicos');
        const botaodireita = categoria.querySelector('.direita');
        const botaoesquerda = categoria.querySelector('.esquerda');

        function getScrollAmount() {
            const card = topicos.querySelector('.card');
            return card.offsetWidth + 20;
        }

        botaodireita.addEventListener('click', () => {
            topicos.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });
        });

        botaoesquerda.addEventListener('click', () => {
            topicos.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });
        });
    });

});

const categorias = document.querySelectorAll(".categoria");

categorias.forEach(categoria => {
    const botao = categoria.querySelector(".alternar-botao");
    const conteudo = categoria.querySelector(".conteudo");

    let aberto = true;

    conteudo.style.height = conteudo.scrollHeight + "px";

    botao.addEventListener("click", () => {
        if (aberto) {
            conteudo.style.height = conteudo.scrollHeight + "px";

            requestAnimationFrame(() => {
                conteudo.style.height = "0px";
                conteudo.classList.add("escondido");
            });

            botao.textContent = "Mostrar";
        } else {
            conteudo.classList.remove("escondido");
            conteudo.style.height = conteudo.scrollHeight + "px";

            setTimeout(() => {
                conteudo.style.height = "auto";
            }, 400);

            botao.textContent = "Ocultar";
        }

        aberto = !aberto;
    });
});