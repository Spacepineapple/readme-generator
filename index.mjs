import fs from "fs";
import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
    "What is the title of your project?",
    "Please give a short description of your project",
    "Please provide any installation instructions for your project",
    "Please provide usage information for your project",
    "Please mention whether you are happy for others to contribute to your project",
    "Please provide test instructions for your project",
    "Please provide your GitHub username",
    "Please provide your email address",
    "Please select a license"
];

let [title, description, installation, usage, contributing, test, username, email, license] = questions;

// function to write README file
function writeToFile(data) {
    let fileName = './generated_readme/README.md';
    let markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        err ? console.error(err) : console.log("README generated!");
    }); 
}

// function to initialize program
async function init() {
    let inputData = await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: title,
        },
        {
            type: "input",
            name: "description",
            message: description,
        },
        {
            type: "input",
            name: "installation",
            message: installation,
        },
        {
            type: "input",
            name: "usage",
            message: usage,
        },
        {
            type: "input",
            name: "contributing",
            message: contributing,
        },
        {
            type: "input",
            name: "test",
            message: test,
        },
        {
            type: 'input',
            name: 'username',
            message: username,
        },
        {
            type: 'input',
            name: 'email',
            message: email,
        },
        {
            type: 'list',
            name: 'license',
            message: license,
            choices: [
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What the F*ck You Want to Public License",
                "MIT",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ],
        },
    ])
    writeToFile(inputData);
}

// function call to initialize program
init();
