const casos = {
    pedra: {
        tesoura: 'pedra ganhou',
        papel: 'pedra perde'
    },
    tesoura: {
        pedra: 'tesoura perde',
        papel: 'tesoura ganha'
    },
    papel: {
        tesoura: 'papel perde',
        pedra: 'papel ganha'
    },
    jogada: function (primeira, segunda) {
        if (primeira === segunda)
            return 'empate'
        else
            return casos[primeira][segunda];
    }
};

console.log(casos.jogada("pedra", "pedra"));
console.log(casos.jogada("pedra", "papel"));
console.log(casos.jogada("pedra", "tesoura"));
