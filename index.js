const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
