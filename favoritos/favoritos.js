exibirFavoritos();

// Função para adicionar livro aos favoritos
function adicionarFavorito(titulo, preco, imagem) {
    // Obtenha a lista atual de favoritos do localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Crie um objeto representando o livro
    const livroFavorito = {
        titulo: titulo,
        preco: preco,
        imagem: imagem
    };

    // Verifica se o livro já está nos favoritos
    const jaExiste = favoritos.some(livro => livro.titulo === titulo);
    if (!jaExiste) {
        // Adicione o novo livro aos favoritos
        favoritos.push(livroFavorito);
        // Armazene a lista atualizada no localStorage
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Livro adicionado aos favoritos!');
    } else {
        alert('Este livro já está nos favoritos!');
    }
}

// Exibir os livros favoritos (pode ser chamado quando a página "Favoritos" carregar)
function exibirFavoritos() {
    const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const containerFavoritos = document.getElementById('favoritos-container');

    containerFavoritos.innerHTML = ''; // Limpa o container
    listaFavoritos.forEach(livro => {
        containerFavoritos.innerHTML += `
            <div class="card text-center p-3" style="width: 18rem;">
                <img src="${livro.imagem}" class="card-img-top" alt="${livro.titulo}">
                <div class="card-body">
                    <h6 class="card-title">${livro.titulo}</h6>
                    <p class="card-preco">R$ ${livro.preco}</p>
                </div>
            </div>
        `;
    });
}
