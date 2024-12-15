// Limpar Favoritos
function limparFavoritos() {
    localStorage.removeItem("favoritos");
    location.reload();
}

// Livros incluídos em fav:
// Carregar Favoritos ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const favoritosContainer = document.getElementById("container_conteudo_livros");

    // Recupera os livros favoritos do localStorage
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = "<p>Você ainda não adicionou nenhum livro aos favoritos.</p>";
    } else {
        favoritos.forEach(livro => {
            const card = document.createElement("div");
            card.classList.add("card", "text-center", "p-3");
            card.style.width = "18rem";

            card.innerHTML = `
                <img src="${livro.img}" class="card-img-top" alt="${livro.titulo}">
                <div class="card-body">
                    <h6 class="card-title">${livro.titulo}</h6>
                    <p class="card-paragrafo">${livro.autor}</p>
                    <h6 class="card-valor">${livro.preco}</h6>
                </div>
            `;

            favoritosContainer.appendChild(card);
        });
    }
});
