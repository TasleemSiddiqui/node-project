import inquirer from "inquirer";
import chalk from "chalk";
//Insert Api 
let api_link = "https://v6.exchangerate-api.com/v6/c6401006806e337922797f1e/latest/PKR";
//collect data for countries
let fetch_data = async (data) => {
    let fdata = await fetch(data);
    let res = await fdata.json();
    return res.conversion_rates;
};
let data = await fetch_data(api_link);
let countries = Object.keys(data);
//1st inquirer
let rupee = await inquirer.prompt({
    type: "number",
    name: "rupee",
    message: `write the amount you want to convert in other currency `
});
//2nd inquirer
let firstcountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: `Convert from`,
    choices: countries
});
//3rd inquirer
let secondcountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: `Convert to`,
    choices: countries
});
//create link for conversion
let Cnv = `https://v6.exchangerate-api.com/v6/c6401006806e337922797f1e/pair/${firstcountry.name}/${secondcountry.name}`;
///conversion rate function
let cnvdata = async (data) => {
    let cnvdata = await fetch(data);
    let res = await cnvdata.json();
    return res.conversion_rate;
};
let cnvrate = await cnvdata(Cnv);
//show result
let result = cnvrate * rupee.rupee;
result.toFixed(2);
console.log(`Your Amount ${chalk.greenBright.bold(rupee.rupee)} ${chalk.green.bold(firstcountry.name)} convert to ${chalk.green.bold(secondcountry.name)} is ${chalk.redBright.bold(result)}`);
