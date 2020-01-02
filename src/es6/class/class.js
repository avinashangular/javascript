class Department {
    constructor(department){
        this.department = department;
    }

    DepartmentDetails(){
        console.log(`
            Department Details:
            Department Name : ${this.department};
        `)
    }
}

class Account {
    constructor(salary){
        this.salary = salary;
    }

    SalaryDetails(){
        console.log(`
            Salary Details:
            Net Salary : ${this.salary}
        `)
    }
}

export class Employee extends Department, Account {

    constructor(name, age, address, department){
        super(department);
        this.name = name;
        this.age = age;
        this.address = address;
    }

    EmployeeDetails(){
        console.log(`
            Employee details:
            Name : ${this.name}
            Age : ${this.age}
            Address : ${this.address}
            Department : ${this.department}
        `);
    }
}

var emp1 = new Employee('Avinash',30,'New Delhi','Development');
emp1.EmployeeDetails();