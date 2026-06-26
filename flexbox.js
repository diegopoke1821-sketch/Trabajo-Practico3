const inventario = [
    { nombre: "Gilera SMX 200 Adventure", categoria: "Moto" },
    { nombre: "Honda GLH 150", categoria: "Moto" },
    { nombre: "Samsung Galaxy S26 Ultra", categoria: "Tecnologia" },
    { nombre: "Pizza", categoria: "Comida" },
    { nombre: "Hamburguesa", categoria: "Comida" },
    { nombre: "Fortnite", categoria: "Juegos" }
];

const contenedor = document.getElementById("contenedor-tarjetas");
const btnFiltrar = document.getElementById("btn-filtrar");
const btnTodos = document.getElementById("btn-todos");

function renderizarTarjetas(lista) {
    contenedor.innerHTML = "";
    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "tarjeta-flex";
        div.innerHTML = `<h3>${item.nombre}</h3><p>Categoría: ${item.categoria}</p>`;
        contenedor.appendChild(div);
    });
}

btnFiltrar.addEventListener("click", () => {
    const filtrados = inventario.filter(item => item.categoria === "Moto");
    renderizarTarjetas(filtrados);
});

btnTodos.addEventListener("click", () => renderizarTarjetas(inventario));

renderizarTarjetas(inventario);