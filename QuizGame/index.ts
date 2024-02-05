import inquirer from "inquirer"
import chalk from "chalk"


let apiLink ="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";


let fetchData =async (data:string) => {
    let fetchQuiz:any =await fetch(data)
    let res =await fetchQuiz.json();
    return res.results
    
}
let data = await fetchData(apiLink)


let startQuiz =async () => {
    let score =0;
    let name = await inquirer.prompt({
        type:"input",
        name:"name",
        message:"Enter your name"
    })
    

    for (let i = 1; i < 10; i++) {
        let answer = [...data[i].incorrect_answers ,data[i].correct_answer];
        let quiz = await inquirer.prompt({
            type:"list",
            name:"ans",
            message:data[i].question,
            choices:answer

        })
        
        if (quiz.ans == data[i].correct_answer) {
            score++;
            
        }
    }

    console.log(`${chalk.bold.cyanBright(name.name)} `);
    console.log(chalk.italic.green("Thank you for join Quiz Game"));
    console.log(chalk.italic.green("Your Score is",chalk.bold.redBright(score)));


}

console.log(chalk.bold.bgGray("WELCOME INTO QUIZ GAME"));
startQuiz();


