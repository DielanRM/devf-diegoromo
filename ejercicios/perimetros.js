var figura = (prompt("Cuantos lados tiene la figura?"));

function perimetro() {
    var lados = [0];

    for (let i = 0; i < figura; i++) {
        var medida = parseFloat(prompt("cuanto mide el lado?"));
        lados = [].push(medida);
        }

        console.log(lados);
        console.log(medida);
    //return lados;
}

perimetro();