function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    //1. soma todos os valores;
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

    //2. divide pela quantidade de números passados;
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;

    //3. Retornar o resultado.
    return resultadoDaMediaDeDoisValores;

}
module.exports = {
    somarDoisNumeros
}