const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNo){

        super(name, id, email);

        this.officeNumber = officeNo;
        
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;

// var manager=new Manager("mudur",123,"md@md.com",99);

// console.log(manager)