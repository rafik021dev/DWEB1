dadosPessoais("Rafael Sardinha", 19, "Bar do Barba", "12345-123", "123.456.789-00");
maiorNumero([10, 20, 30]);
podeVotar(19);

/**
 * Exercício 01 - Mostra os dados pessoais
 */
function dadosPessoais(sNome, iIdade, sEndereco, sCep, sCpf) {
    console.log("Nome: " + sNome);
    console.log("Idade: " + iIdade);
    console.log("Endereço: " + sEndereco);
    console.log("CEP: " + sCep);
    console.log("CPF: " + sCpf);
}

/**
 * Exercício 02 - Mostra o maior número 
 * @param {array} aNumeros 
 */
function maiorNumero(aNumeros) {
    let iMaior = aNumeros[0];
    aNumeros.forEach(function(iNum) {
      if (iNum > iMaior) {
        iMaior = iNum;
      }
    });
    console.log("O maior número é:", iMaior);
}

/**
 * Exercício 03 - Verifica se a pessoa pode votar
 * @param {int} iIdade 
 */
function podeVotar(iIdade) {
    if (iIdade >= 18) {
        console.log("Voto obrigatório.");
    } else if (iIdade >= 16 && iIdade < 18) {
        console.log("Voto opcional.");
    } else {
        console.log("Não vota");
    }
}
