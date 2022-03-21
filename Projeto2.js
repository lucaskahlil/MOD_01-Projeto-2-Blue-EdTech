const prompt = require('prompt-sync')();
console.clear();

// jogo jokempô 

let elementosJogo = [`Pedra`,`Papel`,`Tesoura`];
let escolhaJogador;
let jogada;
let escolhaPC = elementosJogo[Math.floor(Math.random()*(3))];
let pontosJogador;
let pontosPc;
let empate;
let rodadas;
let loop;

do {
    console.clear();
    console.log(`Vamos dar início ao jogo`);

    console.log(`Sabendo que Pedra ganha de tesoura, tesoura ganha de papel e papel ganha de pedra...`);

    rodadas = +prompt(`Quantas rodadas você gostaria de jogar? `)
    
    pontosJogador = 0;
    pontosPc = 0;
    empate = 0;

    for (i = 0; i < rodadas; i++) {
        do {
            jogada = +prompt(`Faça sua jogada: [1] Pedra [2] Papel  [3] Tesoura: `)
                if (jogada == 1) {
                    escolhaJogador = elementosJogo[0] 
                } else if (jogada == 2) {
                    escolhaJogador = elementosJogo[1]
                } else if (jogada == 3) {
                    escolhaJogador = elementosJogo[2]
                } else {
                    console.log(`Digite uma alternativa válida`)
                }
        } while (jogada != 1 && jogada != 2 && jogada != 3);

        console.log();
        console.log(`Você escolheu ${escolhaJogador}`);
        console.log(`A máquina escolheu ${escolhaPC = elementosJogo[Math.floor(Math.random()*(3))]}`);
        console.log();

        if (escolhaJogador == escolhaPC) {
            empate = empate + 1
            console.log(`Vocês empataram.`)
        } else if ((escolhaJogador == elementosJogo[0] && escolhaPC == elementosJogo[1]) || (escolhaJogador == elementosJogo[1] && escolhaPC == elementosJogo[2]) || (escolhaJogador == elementosJogo[2] && escolhaPC == elementosJogo[0])){
            pontosPc = pontosPc + 1
            console.log(`PC ganhou esta rodada.`)
        }  else if ((escolhaJogador == elementosJogo[1] && escolhaPC == elementosJogo[0]) || (escolhaJogador == elementosJogo[2] && escolhaPC == elementosJogo[1]) || (escolhaJogador == elementosJogo[0] && escolhaPC == elementosJogo[2])){
            pontosJogador = pontosJogador + 1
            console.log(`Você ganhou esta rodada.`)
        } 
        console.log();
        console.log(`Você está com ${pontosJogador} vitorias`);
        console.log(`A máquina está com ${pontosPc} vitorias`);
        console.log(`Vocês empataram ${empate} vezes`);
        console.log();
    }
    
    if ((empate > pontosJogador) && (empate > pontosPc)) {
        console.log(`Vocês empataram mais vezes do que obtiveram vitorias, o ideal seria tentar novamente.`)
    } else if ((empate == pontosJogador) && (empate == pontosPc)) {
        console.log(`Vocês estão empatados com o mesmo número de vitorias e empates, o ideal seria jogar novamente.`)
    } else if (pontosJogador > pontosPc) {
        console.log(`Parabéns jogador, você obteve a vitória no geral por maior quantidade de vitorias.`)
    } else if (pontosJogador < pontosPc) {
        console.log(`Não foi dessa vez :(`)
        console.log(`Por maior quantidade de vitórias a máquina foi a grande vencedora.`)
        }
    console.log()
    
    do {
        loop = +prompt(`Você gostaria de tentar novamente? [1] SIM [2] NÃO `);
        console.log();
        if (loop == 2) {
            console.log(`Muito obrigado por ter jogado o Jokempô, até a próxima! :)`)
        } else if (loop != 1 && loop != 2) {
            console.log(`Digite uma resposta válida. `)
        }
    } while (loop != 1 && loop != 2)
} while (loop == 1);
