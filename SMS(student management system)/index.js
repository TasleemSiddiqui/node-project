import inquirer from "inquirer";
//Start Class
class Student {
    constructor(name) {
        this.name = name;
        this.Id = generateID();
        this.balance = 10000;
        this.courses = [""];
    }
    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} you are enroll in ${course} course`);
    }
    viewBalance() {
        console.log(`\n ${this.name} \n your balance is :\n ${this.balance}`);
    }
    payTutionfee(amount) {
        let newbalace = this.balance - amount;
        console.log(`
    ${this.name}
    paid $${amount} towards tuition.
    remaing balance is ${newbalace}`);
    }
    viewDetails() {
        console.log(`
    ID   :${this.Id}
    Name : ${this.name}
    Course: ${this.courses.join(',')}
    Balance: ${this.balance} 
    `);
    }
}
//end Class
//Create unique id
function generateID() {
    let studentid = Math.floor(10000 + Math.random() * 90000).toString();
    return `ST${studentid}`;
}
//declare variable
let students = [];
//function add student
let addStudent = async () => {
    let ans = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter student name:'
    }).then((answer) => {
        let newStudent = new Student(answer.name);
        students.push(newStudent);
        console.log(`New Student Added Successfull ${newStudent.Id}`);
        showMenu();
    });
};
//function enrollStudent
let enrollStudent = async () => {
    let ans = await inquirer.prompt({
        type: 'input',
        name: 'SID',
        message: 'Enter student ID:'
    }).then((answer) => {
        let student = students.find(s => s.Id == answer.SID);
        if (student) {
            inquirer.prompt({
                type: "list",
                name: "crs",
                message: "please select the course ",
                choices: ["web development", "Graphic Designing", "Mobile Application"]
            }).then((answer) => {
                student?.enroll(answer.crs);
                showMenu();
            });
        }
        else {
            console.log("Student not Found");
            showMenu();
        }
    });
};
//function viewBalance
let viewBalance = async () => {
    inquirer.prompt({
        type: 'input',
        name: 'studentID',
        message: 'Enter student ID:'
    }).then((answers) => {
        const student = students.find(s => s.Id === answers.studentID);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log('Student not found.');
        }
        showMenu();
    });
};
//function payTution
let payTution = async () => {
    inquirer.prompt({
        type: 'input',
        name: 'studentID',
        message: 'Enter student ID:'
    }).then((answers) => {
        const student = students.find(s => s.Id === answers.studentID);
        if (student) {
            inquirer.prompt({
                type: 'input',
                name: 'amount',
                message: 'Enter tuition amount to pay:'
            }).then((ans) => {
                const amount = parseFloat(ans.amount);
                student.payTutionfee(amount);
                showMenu();
            });
        }
        else {
            console.log('Student not found.');
            showMenu();
        }
    });
};
//function showDetails
let showDetails = async () => {
    inquirer.prompt({
        type: "input",
        name: "SID",
        message: "Please Enter Student id"
    }).then((answer) => {
        let student = students.find(s => s.Id == answer.SID);
        if (student) {
            student.viewDetails();
            showMenu();
        }
        else {
            console.log("Student not found");
            showMenu();
        }
    });
};
///Main Menu
//Start page
function showMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add Student', 'Enroll Student', 'View Balance', 'Pay Tuition', 'Show Status', 'Exit']
    }).then((answers) => {
        switch (answers.action) {
            case 'Add Student':
                addStudent();
                break;
            case 'Enroll Student':
                enrollStudent();
                break;
            case 'View Balance':
                viewBalance();
                break;
            case 'Pay Tuition':
                payTution();
                break;
            case 'Show Status':
                showDetails();
                break;
            case 'Exit':
                console.log('Exiting Student Management System.');
                break;
        }
    });
}
console.log('Welcome to Student Management System!\n');
//MAin menu Call here
showMenu();
