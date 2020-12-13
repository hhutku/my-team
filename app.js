// Initiate all the requirements
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const writeFile = fs.writeFileSync;
const questions=require("./lib/questions")
var validator = require('validator');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");

const employeeList=[];


// function for manager part
   function askUserForManagerInfo(){
         return inquirer.prompt([
            {
                type: "input",
                message: "What is your Manager's Office Number?",
                name: "officeNo",
                validate: val => validator.isAlphanumeric(val)
            }
        ])
    }
    // function for manager intern part
    function askInternInfo(){
        return inquirer.prompt([
            {
                type: "input",
                message: "What school is your Intern attending?",
                name: "school",
                validate: val => /[a-zA-Z]/gi.test(val)
            }
       ])
   }
   //function for  engineer info
   function askEngineerInfo(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Engineer's GitHub?",
            name: "github",

        }
   ])
}
// function for adding new member
function askAddMember(){

    return inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to add a new employee?: ",
            choices: [
                 "Yes",
                 "No"
            ]
         },])
}

   




   



