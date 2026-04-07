console.log("Dia da semana: " + diaDaSemana(3));
console.log("Par ou Ímpar: " + parOuImpar(10));
console.log("Nome do mês: " + nomeMes(5));

/**
 * Retorna se o nome do dia da semana por extenso.
 * @param {int} iDia 
 * @return string
 */
function diaDaSemana(iDia) {
    switch (iDia) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido.";
    }
}

/**
 * Retorna se o número é par ou ímpar.
 * @param {int} iNum 
 * @return string
 */
function parOuImpar(iNum) {
    switch (iNum % 2) {
        case 0: return iNum + " é PAR";
        case 1: return iNum + " é ÍMPAR"; 
    }
}

/**
 * Retorna o nome do mês por extenso.
 * @param {int} iMes 
 * @return string
 */
function nomeMes(iMes) {
    switch (iMes) {
        case 1:  return "Janeiro";
        case 2:  return "Fevereiro";
        case 3:  return "Março";
        case 4:  return "Abril";
        case 5:  return "Maio";
        case 6:  return "Junho";
        case 7:  return "Julho";
        case 8:  return "Agosto";
        case 9:  return "Setembro";
        case 10: return "Outubro";
        case 11: return "Novembro";
        case 12: return "Dezembro";
        default: return "Número inválido.";
    }
}

