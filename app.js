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

// Main function to run the application 
async function init(){
        console.log("*********************************")
            var genAnswersData = await inquirer.prompt(questions)
            var title=genAnswersData.title;
            switch (title){
                case "Manager":

               var managerInfo= await askUserForManagerInfo();

               const allManagerInfo = {
                ...genAnswersData,
                ...managerInfo
                 };
                 const manager=new Manager(allManagerInfo.name,allManagerInfo.id,allManagerInfo.email,allManagerInfo.officeNo)
                 employeeList.push(manager)
                break;
                case "Intern":
                const internInfo= await askInternInfo();
                var allInternInfo={
                    ...genAnswersData,
                    ...internInfo
                };
                const intern=new Manager(allInternInfo.name,allInternInfo.id,allInternInfo.email,allInternInfo.school)
                employeeList.push(intern)
                
                break;
                case "Engineer":
                    const engineerInfo= await askEngineerInfo();
                const allEngineerInfo={
                    ...genAnswersData,
                    ...engineerInfo
                };  
                const engineer=new Engineer(allEngineerInfo.name,allEngineerInfo.id,allEngineerInfo.email,allEngineerInfo.github)
                employeeList.push(engineer);
                
                
                break;
            }
            
           const askAdd=await askAddMember();

           if(askAdd.finish=="Yes"){
               init();
           }else{
                          
            const html=  render(employeeList);
            await writeFile(outputPath, html);
            console.log('team.html was written successfully');
               return;
           }
           
    }
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

    init();




   



