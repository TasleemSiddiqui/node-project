import inquirer from "inquirer";
let systemgenerate = Math.floor(Math.random() * 10 + 1);
console.log(systemgenerate);
let atempt = 1;
let guessingnumber = await inquirer.prompt({
    type: 'number',
    name: "num1",
    message: "input your for guessing number game"
});
if (systemgenerate == guessingnumber.num1) {
    console.log("Congratulaion! you guess the  right number");
}
else {
    console.log("play again");
    while (atempt < 4) {
        let guessingnumber = await inquirer.prompt({
            type: 'number',
            name: "num1",
            message: "input your for guessing number game"
        });
        if (systemgenerate == guessingnumber.num1) {
            console.log("Congratulaion! you guess right number");
            atempt = 3;
        }
        else {
            if (atempt == 3) {
                console.log("oops! you lose the right numbers is", systemgenerate);
                atempt = 4;
            }
            else {
                console.log("Play again");
                atempt++;
            }
        }
    }
}
// systemgenerate === guessingnumber.num1 
// ? console.log("Congratulaion! you guess right number")
//  :console.log("oops! you lose");
