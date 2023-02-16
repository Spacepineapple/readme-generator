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

let [title, description, installation, usage, contributing, test, username, address, license] = questions;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    let {projectTitle, projectDescription, projectInstallation, projectUsage, projectContributing, projectTest, projectUsername, projectAddress, projectLicense} = await inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: title,
        },
        {
            type: "input",
            name: "projectDescription",
            message: description,
        },
        {
            type: "input",
            name: "projectInstallation",
            message: installation,
        },
        {
            type: "input",
            name: "projectUsage",
            message: usage,
        },
        {
            type: "input",
            name: "projectContributing",
            message: contributing,
        },
        {
            type: "input",
            name: "projectTest",
            message: test,
        },
        {
            type: 'input',
            name: 'projectUsername',
            message: username,
        },
        {
            type: 'input',
            name: 'projectAddress',
            message: address,
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: license,
            choices: [
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License",
                "European Union Public License 1.1",
                "MIT",
                "Mozilla Public License 2.0",
                "Open Software License 3.0",
                "The Unlicense"
            ],
        },
    ])
    console.log(projectTitle, projectDescription, projectInstallation, projectUsage, projectContributing, projectTest, projectUsername, projectAddress, projectLicense);
}

// function call to initialize program
init();
