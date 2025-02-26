const contenedorCartoes = document.getElementById("produtos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearProductosInicio(produtos){
  produtos.forEach(produto => {
    const novoProduto = document.createElement("div");
    novoProduto.classList = "cartao-producto";
    novoProduto.innerHTML =`
    <img src = ${produto.img}>
    <h3>${produto.nombre}</h3>
    <p>${produto.precio}</p>
    <button>adicionar ao carrinho</button>
    `
    contenedorCartoes.appendChild(novoProduto);
    
});
}

crearProductosInicio (produtos);