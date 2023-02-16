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

let [title, description, installation, usage, contributing, instructions, username, address, license] = questions;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    let {projectTitle, projectDescription} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: title,
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: description,
        },
    ])
    console.log(projectTitle, projectDescription);
}

// function call to initialize program
init();
