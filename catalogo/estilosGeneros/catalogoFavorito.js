<<<<<<< HEAD
// Seleciona todos os ícones de favoritos
const icons = document.querySelectorAll('.icone_catalogo_favorito i');
=======
<<<<<<< HEAD
// Seleciona todos os ícones de favoritos
const icons = document.querySelectorAll('.icone_catalogo_favorito i');

// Adiciona eventos para cada ícone
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        icon.style.color = '#000'; // Garante a cor preta ao preencher
    });

    icon.addEventListener('mouseleave', () => {
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        icon.style.color = ''; // Remove a cor para restaurar a aparência padrão
    });
});

=======
// script - preencher o coração ao passar o mouse
const icon = document.querySelector('.icone_catalogo_favorito i');
>>>>>>> 6b74727b9a67de0a00900b782895348a4c818991

// Adiciona eventos para cada ícone
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        icon.style.color = '#000'; // Garante a cor preta ao preencher
    });

    icon.addEventListener('mouseleave', () => {
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        icon.style.color = ''; // Remove a cor para restaurar a aparência padrão
    });
});

<<<<<<< HEAD
=======
icon.addEventListener('mouseleave', () => {
    icon.classList.replace('bi-heart-fill', 'bi-heart');
});


>>>>>>> 7aba58d6be99f6161ed20337f4c44da3db319799
>>>>>>> 6b74727b9a67de0a00900b782895348a4c818991
// script - Inserir informações do livro em favoritos.
document.addEventListener("DOMContentLoaded", function() {
    const favoritoBtns = document.querySelectorAll(".favorito-btn");

    favoritoBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const card = btn.closest(".card");
            const livro = {
                titulo: card.querySelector(".card-title-um, .card-title-dois, .card-title-tres, .card-title-quatro, .card-title-cinco, .card-title-seis, .card-title-sete, .card-title-oito, .card-title-nove").textContent,
                autor: card.querySelector(".card-paragrafo-um, .card-paragrafo-dois, .card-paragrafo-tres, .card-paragrafo-quatro, .card-paragrafo-cinco, .card-paragrafo-seis, .card-paragrafo-sete").textContent,
                preco: card.querySelector(".card-valor-um, .card-valor-dois, .card-valor-tres, .card-valor-quatro, .card-valor-cinco, .card-valor-seis, .card-valor-sete").textContent,
                img: card.querySelector("img").getAttribute("src")
            };

            // Recupera favoritos existentes no localStorage ou cria um array vazio
            let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

            // Adiciona o novo livro ao array e salva no localStorage
            favoritos.push(livro);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

            alert(`${livro.titulo} foi adicionado aos favoritos!`);
        });
    });
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6b74727b9a67de0a00900b782895348a4c818991







// // Seleciona todos os ícones de favoritos
// const icons = document.querySelectorAll('.icone_catalogo_favorito i');

// // Adiciona eventos para cada ícone
// icons.forEach(icon => {
//     icon.addEventListener('mouseenter', () => {
//         icon.classList.replace('bi-heart', 'bi-heart-fill');
//     });

//     icon.addEventListener('mouseleave', () => {
//         icon.classList.replace('bi-heart-fill', 'bi-heart');
//     });
// });

// // script - Inserir informações do livro em favoritos.
// document.addEventListener("DOMContentLoaded", function() {
//     const favoritoBtns = document.querySelectorAll(".favorito-btn");

//     favoritoBtns.forEach((btn, index) => {
//         btn.addEventListener("click", function() {
//             const card = btn.closest(".card");
//             const livro = {
//                 titulo: card.querySelector(".card-title-um, .card-title-dois, .card-title-tres, .card-title-quatro, .card-title-cinco, .card-title-seis, .card-title-sete, .card-title-oito, .card-title-nove").textContent,
//                 autor: card.querySelector(".card-paragrafo-um, .card-paragrafo-dois, .card-paragrafo-tres, .card-paragrafo-quatro, .card-paragrafo-cinco, .card-paragrafo-seis, .card-paragrafo-sete").textContent,
//                 preco: card.querySelector(".card-valor-um, .card-valor-dois, .card-valor-tres, .card-valor-quatro, .card-valor-cinco, .card-valor-seis, .card-valor-sete").textContent,
//                 img: card.querySelector("img").getAttribute("src")
//             };

//             // Recupera favoritos existentes no localStorage ou cria um array vazio
//             let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

//             // Adiciona o novo livro ao array e salva no localStorage
//             favoritos.push(livro);
//             localStorage.setItem("favoritos", JSON.stringify(favoritos));

//             alert(`${livro.titulo} foi adicionado aos favoritos!`);
//         });
//     });
// });

<<<<<<< HEAD
=======
=======
>>>>>>> 7aba58d6be99f6161ed20337f4c44da3db319799
>>>>>>> 6b74727b9a67de0a00900b782895348a4c818991
