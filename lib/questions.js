var validator = require('validator');

// Inquirer prompts to gather user generated data
var questions= [
    {
        type: "input",
        message: `What is employee's name?`,
        name: "name",
        validate:  val => /[a-zA-Z]/gi.test(val)

    },
    {
        type: "input",
        message: `What is the employee's id?`,
        name: "id",
        validate: val => validator.isAlphanumeric(val)

    },
    {
        type: "input",
        message: `What is the employee's Email?`,
        name: "email",
        validate: val => validator.isEmail(val)

    },
    {
        type: "list",
        message: `What is the employee's title?`,
        name: "title",
        choices: ["Engineer", "Intern", "Manager"]
    }

];

module.exports = questions;
