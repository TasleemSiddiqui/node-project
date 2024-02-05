import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.underline.bgBlue.white("WELCOME TO THE ADVENTURE GAME"));



class Player {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }
    healthIncrease() {
        let health = 100;
        this.health = health;
        
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
class Opponent {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "select",
    message: "please Enter your name..."
});
let p1 = new Player(player.select);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Choose you opponent",
    choices: ["Skeleton", "Assasin", "Zombie"]
});
let o1 = new Opponent(opponent.select);
console.log(`${chalk.bold.green(player.select)} vs ${chalk.bold.red(opponent.select)}`);
if (opponent.select == "Skeleton" || "Assasin" || "Zombie") {
    while (true) {
        let num = Math.floor(Math.random() * 2);
        let option = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Choose your Action",
            choices: ["Atack", "Drink Health", "Quit"]
        });
        if (option.select == "Atack") {
            if (num != 0) {
                o1.healthDecrease();
                if (o1.health <= 0) {
                    console.log(chalk.bold.greenBright(p1.name, "WIN the match "));
                    process.exit();
                }
                console.log(`${chalk.bold.green(p1.name)}  health  ${chalk.bold.green(p1.health)}% ${chalk.yellow.italic(" vs ")} ${chalk.bold.red(o1.name)}  health ${chalk.bold.red(o1.health)}%`);
            }
            else {
                p1.healthDecrease();
                if (p1.health <= 0) {
                    console.log(chalk.bold.redBright(p1.name, "Oops! you loose the match"));
                    process.exit();
                }
                console.log(`${chalk.bold.green(p1.name)}  health ${chalk.bold.green(chalk.bold.green(p1.health))}% ${chalk.yellow.italic(" vs ")}${chalk.bold.red(o1.name)}  health ${chalk.bold.red(o1.health)}%`);
            }
        }
        if (option.select == "Drink Health") {
            p1.healthIncrease();
            console.log(`${chalk.bold.green(p1.name)}  health ${chalk.bold.green(chalk.bold.green(p1.health))}% ${chalk.yellow.italic(" vs ")}${chalk.bold.red(o1.name)}  health ${chalk.bold.red(o1.health)}%`);

        }
        if (option.select == "Quit") {
            console.log(chalk.italic.redBright("You quit the game"));
            process.exit();
        }
    }
}
