console.log("Bem vindo ao desafio classificador de nível Herói, preparado?! Let's go!!");

let nome = "Gabrielly";

let quantXP = 1000;

console.log(`O jogador ${nome} está no nível ${quantXP}:`);

if(quantXP < 1000){
    console.log("Ferro");
}else{
    if(quantXP >= 1000 && quantXP < 2000){
        console.log("Bronze");
    }else{
        if(quantXP >= 2000 && quantXP < 5000){
            console.log("Prata");
        }else{
            if(quantXP >= 6000 && quantXP < 7000){
                console.log("Ouro");
            }else{
                if(quantXP >= 7000 && quantXP < 8000){
                    console.log("Platina Diamante");
                }else{
                    if(quantXP >= 8000 && quantXP < 9000){
                        console.log("Ascendente");
                    }else{
                        if(quantXP >= 9000 && quantXP < 10000){
                            console.log("Imortal");
                        }else{
                            console.log("Radiante");
                        }
                    }
                }
            }
        }
    }
}


