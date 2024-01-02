window.addEventListener("load", function () {
    const botaoAtivar = document.getElementById("btHeroi");
    botaoAtivar.onclick = function () {
        nivelHeroi();
    }

    const butaoLimpar = document.getElementById("btLimpar");
    butaoLimpar.onclick = function () {
        limparCampos();
    }
});

function calcularVitorias(numVitorias, numDerrotas) {
    debugger;
    var saldoTotal = 0;

    saldoTotal = numVitorias - numDerrotas;

    return saldoTotal;
}

function nivelHeroi() {
    debugger;
    var nomeHeroi = document.getElementById("nomeHeroi");
    var numDerrotas = document.getElementById("derrotas");
    var numVitorias = document.getElementById("vitorias");

    var vitorias = Number(numVitorias.value);
    var derrotas = Number(numDerrotas.value);
    var nome = nomeHeroi.value;

    var totalVitorias = calcularVitorias(vitorias, derrotas);

    var nivelHeroi = "";

    if (totalVitorias <= 10) {
        nivelHeroi = "Ferro";
    } else if (totalVitorias >= 11 && totalVitorias <= 20) {
        nivelHeroi = "Bronze";
    } else if (totalVitorias >= 21 && totalVitorias <= 50) {
        nivelHeroi = "Prata";
    } else if (totalVitorias >= 51 && totalVitorias <= 80) {
        nivelHeroi = "Ouro";
    } else if (totalVitorias >= 81 && totalVitorias <= 90) {
        nivelHeroi = "Diamante";
    } else if (totalVitorias >= 91 && totalVitorias <= 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }


    var outHeroi = document.getElementById("outHeroi");
    var titulo = "O Herói de nome " + nome + " tem de saldo de " + totalVitorias + " vitórias está no nível de " + nivelHeroi + ".";
    outHeroi.innerHTML = "<p>" + titulo + "</p>";

}

function limparCampos() {
    location.reload();
    document.getElementById("nomeHeroi").focus();
}