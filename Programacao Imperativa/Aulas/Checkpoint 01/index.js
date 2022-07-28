
var readlineSync = require("readline-sync")

console.log("-------------- M I C R O W A V E --------------");

const timePopcorn = 10;
const timePasta = 8;
const timeMeat = 15;
const timeBean = 12;
const timeBrigadeiro = 8;

let options = readlineSync.question(`

Hello, choose your food function:
*****************************************************
      1 - Popcorn             
      2 - Pasta           
      3 - Meat
      4 - Bean
      5 - Brigadeiro

*****************************************************

`);

let chooseTime = readlineSync.questionInt(`

Wich time to your food..

`);

microwave(options,chooseTime);

function microwave(options, time){
    let timeDefault = 0;

    switch (options){
        case '1':
            timeDefault = timePopcorn;
            break;

        case '2':
            timeDefault = timePasta;
            break;

        case '3':
            timeDefault = timeMeat;
            break;

        case '4':
            timeDefault = timeBean;
            break;

        case '5':
            timeDefault = timeBrigadeiro;
            break;

        default:
            console.log("Error: choose a number betwen 1 and 5");
    }

    if (chooseTime < timeDefault){
        console.log("Insufficient time")

    }  else if (chooseTime >= timeDefault && chooseTime < (timeDefault * 2)){
        console.log("Food done! Enjoy your food!")

    } else if (chooseTime >= (chooseTime * 2) && chooseTime < (timeDefault * 3)){
        console.log("Your food burned!")

    } else if (chooseTime >= (timeDefault * 3)) {
        console.log("Kabooooom")
    
    } else {
        console.log("Prato pronto, bom apetite!!!")
    }
}    





