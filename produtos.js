const grid = document.getElementById("produtos")

let categoriaAtual = "todos"

function mostrarProdutos(lista) {

    grid.innerHTML = ""

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    lista.forEach(produto => {

        const ativo = favoritos.includes(produto.nome)

        const card = document.createElement("article")
        card.classList.add("produto-card")

        card.innerHTML = `

        <figure>
        <img src="${produto.imagem}">
        </figure>

        <div class="produto-info">
        <h3>${produto.nome}</h3>

        <span 
        class="favorito ${ativo ? "ativo" : ""}" 
        onclick="toggleFavorito('${produto.nome}')">
        ${ativo ? "❤" : "♡"}
        </span>

        </div>
        `

        grid.appendChild(card)

    })
}

function filtrar(categoria) {

    categoriaAtual = categoria

    if (categoria === "todos") {
        mostrarProdutos(produtos)
        return
    }

    const filtrados = produtos.filter(p => p.categoria === categoria)

    mostrarProdutos(filtrados)
}

function toggleFavorito(nome) {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    if (favoritos.includes(nome)) {
        favoritos = favoritos.filter(p => p !== nome)
    } else {
        favoritos.push(nome)
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos))

    filtrar(categoriaAtual)
}

const params = new URLSearchParams(window.location.search)
const categoriaURL = params.get("categoria")

if (categoriaURL) {
    filtrar(categoriaURL)
} else {
    mostrarProdutos(produtos)
}