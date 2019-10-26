function criarCampo(campo, x, y) {

    for (i = 0; i < x; i++) {

        for (j = 0; j < y; j++) {

            if (campo[i][j] == '*') {

                if (i >=0 && i == (x-1)) {

                    campo[i + 1][j] = campo[i + 1][j] + 1;

                    if (j >= 0 && j ==(y-1)) {

                        campo[i + 1][j + 1] = campo[i + 1][j + 1] + 1;
                        campo[i][j + 1] = campo[i][j + 1] + 1;
                        

                    }
                    if(j > 0){
                        campo[i][j - 1] = campo[i][j - 1] + 1;
                        
                        campo[i + 1][j - 1] = campo[i + 1][j - 1] + 1;
                       
                    }
                }

                if (i > 0){

                    campo[i - 1][j] = campo[i - 1][j] + 1;

                    if (j >= 0 && j ==(y-1)) {

                        campo[i - 1][j + 1] = campo[i - 1][j + 1] + 1;
                        campo[i][j + 1] = campo[i][j + 1] + 1;
                        

                    }
                    if(j > 0){
                        campo[i][j - 1] = campo[i][j - 1] + 1;
                        
                        campo[i - 1][j - 1] = campo[i - 1][j - 1] + 1;
                       
                    }
                }

               

            }
        }
    }

}

let x = 4; let y = 4;
let cmp = [
    ['*', 0, 0, 0],
    [0, 0, 0, 0],
    [0, '*', 0, 0],
    [0, 0, 0, 0]
];

criarCampo(cmp, x, y);
console.table(cmp);