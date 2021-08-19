import * as emp from "./Employee";
console.log(emp.age);

let empObj = new emp.EmployeeForExport(1, "Bill Gates");
empObj.displayEmployee();
