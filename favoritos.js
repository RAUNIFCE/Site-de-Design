const grid = document.getElementById("favoritosGrid")

function mostrarFavoritos() {

    grid.innerHTML = ""

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    if (favoritos.length === 0) {
        grid.innerHTML = `
        <p style="text-align:center;width:100%;font-family:Inter;">
        Você ainda não tem favoritos.
        </p>
        `
        return
    }

    const produtosFavoritos = produtos.filter(produto =>
        favoritos.includes(produto.nome)
    )

    produtosFavoritos.forEach(produto => {

        const card = document.createElement("article")
        card.classList.add("produto-card")

        card.innerHTML = `
        <figure>
            <img src="${produto.imagem}">
        </figure>

        <div class="produto-info">
            <h3>${produto.nome}</h3>
            <span class="favorito ativo">❤</span>
        </div>
        `

        grid.appendChild(card)
    })
}

mostrarFavoritos()