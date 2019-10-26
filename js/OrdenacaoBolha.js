function ordenarArray(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i; j < array.length; j++) {

            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}




//let dados = ['sapato', 'solar', 'bolsa', 'zebra', 'naris', 'pai', 'jaca', 'sol', 'yogurt', 'tapete', 'sapato', 'solar', 'bolsa', 'zebra', 'naris', 'pai', 'jaca', 'sol', 'yogurt', 'tapete']; //[5, 3, 7, 6, 1, 8, 9, 2, 0, 45, 60, 23, 16, 80, 9, 45, 2000, 3];
let dados = [5, 3, 7, 6, 1, 8, 9, 2, 0, 45, 60, 23, 16, 80, 9, 45, 2000, 3];

console.log(dados);
console.assert(ordenarArray(dados) != null, console.log(dados));