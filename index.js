#! /user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from "chalk";
async function sleep() {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
}
async function Welcome() {
    const cal = chalkAnimation.rainbow("LETS BEGIN CALCULATION!");
    await sleep();
    cal.stop();
}
await Welcome();
async function myCal() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "What operation do you want to perform?\n",
            choices: ["Addition", "Subtraction", "Multiply", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Pleaes Enter num1?\n",
        },
        {
            type: "number",
            name: "num2",
            message: "Pleaes Enter num2?\n",
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2}  =  ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.yellow(`${answers.num1} - ${answers.num2}  =  ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiply") {
        console.log(chalk.red(`${answers.num1} * ${answers.num2}  =  ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.bgYellow(`${answers.num1} / ${answers.num2}  =  ${answers.num1 / answers.num2}`));
    }
}
;
async function againstart() {
    do {
        await myCal();
        var now = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want Perform another operation? YES or NO"
        });
    } while (now.restart == "y" || now.restart == "Y" || now.restart == "yes");
}
againstart();
