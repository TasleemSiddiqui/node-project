import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.student = [];
    }
    addStudent(val) {
        this.student.push(val);
    }
}
const persons = new Person();
const StartProgram = async (Person) => {
    do {
        console.log("Welcome to my OOP project");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Who should you talk to?",
            choices: ["Our self", "Student", "Exit"],
            name: "select"
        });
        switch (ans.select) {
            case "Our self":
                console.log("I'm good what about you......");
                break;
            case "Student":
                const ans = await inquirer.prompt({
                    type: "input",
                    message: "Enter the Name of student Whom you want to talk to?",
                    name: "select"
                });
                const students = Person.student.find((val) => val.name == ans.select);
                if (!students) {
                    const name = new Student(ans.select);
                    Person.addStudent(name);
                    console.log(`Hi Good morning ${name.name},\n How are you`);
                    console.log(persons.student);
                }
                else {
                    console.log(`Hi Good morning ${Student.name},\n How are you`);
                    console.log(persons.student);
                }
                break;
            case "Exit":
                process.exit();
                break;
            default:
                break;
        }
    } while (true);
};
StartProgram(persons);
