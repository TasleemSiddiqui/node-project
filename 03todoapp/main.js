import inquirer from "inquirer";
//array
//function
//operation
let arr = ["tasleem", "kashan", "shahrukh"];
async function fuc(arr) {
    let exit = true;
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "operation",
            message: "Select an opertion",
            choices: ["add", "update", "delete", "view", "exit"]
        });
        switch (ans.operation) {
            case 'add':
                let res = await inquirer.prompt({
                    type: "input",
                    name: "additem",
                    message: "add item...."
                });
                arr.push(res.additem);
                console.log(arr);
                break;
            case 'update':
                let ans = await inquirer.prompt({
                    type: "list",
                    name: "updatetodo",
                    message: "select item for update",
                    choices: arr.map(item => item)
                });
                let add = await inquirer.prompt({
                    type: "input",
                    name: "additem",
                    message: "add item...."
                });
                let newtodo = arr.filter(val => val != ans.updatetodo);
                arr = [...newtodo, add.additem];
                console.log(arr);
                break;
            case 'delete':
                let del = await inquirer.prompt({
                    type: "list",
                    name: "deletetodo",
                    message: "select item for delete",
                    choices: arr.map(item => item)
                });
                let newtodo2 = arr.filter(val => val != del.deletetodo);
                arr = [...newtodo2];
                console.log(arr);
                break;
            case 'view':
                console.log(arr);
                break;
            case 'exit':
                exit = false;
                break;
        }
    } while (exit);
}
fuc(arr);
