const form = document.getElementById("form-personas");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Cálculo IMC: peso / (altura * altura)
    const imc = (peso / (altura * altura)).toFixed(2);

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td><strong>${imc}</strong></td>
        <td class="celda-accion"></td>
    `;

    tablaCuerpo.appendChild(fila);
    form.reset(); // Limpia los inputs
});