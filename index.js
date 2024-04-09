#! /usr/bin/env node
import inquirer from "inquirer";
const awnser = await inquirer.prompt([{
        message: "Enter First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Which Operation do you want to perform?",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber"
    },
]);
if (awnser.Operator === "Addition") {
    console.log(awnser.firstNumber + awnser.secondNumber);
}
else if (awnser.Operator === "Subtraction") {
    console.log(awnser.firstNumber - awnser.secondNumber);
}
else if (awnser.Operator === "Multiplication") {
    console.log(awnser.firstNumber * awnser.secondNumber);
}
else if (awnser.Operator === "Division") {
    console.log(awnser.firstNumber / awnser.secondNumber);
}
console.log(awnser);
