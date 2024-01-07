import inquirer from "inquirer";
let user = [
    {
        id: "moiz",
        pin: 123,
        balance: 20000
    },
    {
        id: "tasleem",
        pin: 123,
        balance: 20000
    },
    {
        id: "kashan",
        pin: 123,
        balance: 25000
    }
];
// let user_id:string = "tasleem";
// let user_pin:number =123;
// let balance= 12000 ;
let current_balance;
let post = await inquirer.prompt([{
        type: "input",
        name: "userID",
        message: "please enter user name"
    },
    {
        type: "number",
        name: "userPin",
        message: "please enter user name"
    }]);
if (user[1].id == post.userID && user[1].pin == post.userPin) {
    console.log(`Hi ${user[1].id} how was the day 
    you are login`);
    let operations = await inquirer.prompt({
        type: "list",
        name: "operation",
        message: "Select what do you want",
        choices: ["CashWithDraw", "deposite", "fundTransfer", "balanceInquiry"]
    });
    switch (operations.operation) {
        case 'CashWithDraw':
            let Cashamount = await inquirer.prompt({
                type: "number",
                name: "cashamount",
                message: "Enter the amount"
            });
            if (Cashamount.cashamount <= user[1].balance) {
                current_balance = user[1].balance - Cashamount.cashamount;
                console.log(`your transaction is sucessfully complete
   your remaining balance is ${current_balance}`);
            }
            break;
        case 'deposite':
            let Cashdeposite = await inquirer.prompt({
                type: "number",
                name: "cashamount",
                message: "Enter the amount"
            });
            current_balance = user[1].balance + Cashdeposite.cashamount;
            console.log(`your transaction is sucessfully complete
 your Current balance is ${current_balance}`);
            break;
        case 'fundTransfer':
            let FundTransfer = await inquirer.prompt({
                type: "number",
                name: "transferAmount",
                message: "Enter the amount"
            });
            if (FundTransfer.transferAmount <= user[1].balance) {
                FundTransfer.transferAmount + user[2].balance;
                current_balance = user[1].balance - FundTransfer.transferAmount;
                console.log(`PKR${FundTransfer.transferAmount} sent to ${user[2].id}`);
                console.log(`your transaction is sucessfully complete
    your Current balance is ${current_balance}`);
            }
            else {
                console.log("you have insufficent balance");
            }
            break;
        case 'balanceInquiry':
            console.log(`hi ${user[1].id}
 your current balance is PKR${user[1].balance} `);
            break;
    }
}
else if (user[1].id != post.userID) {
    console.log("please enter Right id name");
}
else if (user[1].pin != post.userPin) {
    console.log("please enter Right Pin code");
}
else {
    console.log("wrong credentials");
}
