function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel

    if(saldoVitorias <= 10){
        nivel = "Ferro"
    }else if(saldoVitorias >= 11 && saldoVitorias <=20){
        nivel = "Bronze"
    }else if(saldoVitorias >= 21 && saldoVitorias <=50){
        nivel ="Prata"
    }else if(saldoVitorias >= 51 && saldoVitorias <=80){
        nivel ="Ouro"
    }else if(saldoVitorias >= 81 && saldoVitorias <=90){
        nivel ="Diamante"
    }else if(saldoVitorias >= 91 && saldoVitorias <=100){
        nivel ="Lendário"
    }else if(saldoVitorias >= 101){
        nivel ="Imortal"
    }else{
        nivel = "Desconhecido"
    }

    document.getElementById('return').innerHTML = '</br>O Herói tem de saldo ' + saldoVitorias + ' vitórias e está no nível ' + nivel;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let vitorias = parseInt(document.getElementsByName('vitorias')[0].value) || 0;
    let derrotas = parseInt(document.getElementsByName('derrotas')[0].value) || 0;

    calcularRank(vitorias, derrotas);

    document.getElementsByName('vitorias')[0].value = '';
    document.getElementsByName('derrotas')[0].value = '';
});