export let age: number = 20;
export class EmployeeForExport {
  empCode: number;
  empName: string;
  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
  displayEmployee() {
    console.log(
      "Employee Code: " + this.empCode + "\r\nEmployee Name: " + this.empName
    );
  }
}

let companyName: string = "Comm100";
