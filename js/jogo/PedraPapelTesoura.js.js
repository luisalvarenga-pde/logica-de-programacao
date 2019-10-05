var pedra = "pedra";
var papel = "papel";
var tesoura = "tesoura";

function teste(jogada1, jogada2) {

    if (jogada1 === jogada2) {
        return "empate";
    }
    else if (jogada1 == pedra) {
        if (jogada2 == tesoura) {

            return "jogada 1 venceu";
        } else {
            return "jogada 2 venceu";
        }
    }
    else if (jogada1 == papel) {
        if (jogada2 == tesoura) {
            return "jogada2 venceu";
        } else {
            return "jogada 1 venceu";
        }
    }
    else if (jogada1 == tesoura) {
        if (jogada2 == pedra) {
            return "jogada 2 venceu";
        }
        else {
            return "jogada 1 venceu";
        }
    }
   
}

console.log(teste(papel, tesoura)); 
console.log(teste(papel, papel)); 
console.log(teste(tesoura, papel)); 
console.log(teste(pedra, tesoura)); 