class EmployeeData{

    get id(){return this.id};
    set id(id){
        this._id = id;
    }

    get name(){return this.name};
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,} [ ]{1} [A-Z]{1}[A-Za-z]{2,}$");
        if(nameRegex.test(document.getElementById(name)))
        this.name = name;
        else throw 'Name is incorrect'
    }

    get Profile_pc(){return this.Profile_pc};
    set Profile_pc(Profile_pc){
        this._Profile_pc = Profile_pc;
    }

    get gender(){return this.gender};
    set gender(gender){
        this._gender = gender;
    }

    get department(){return this.department};
    set department(department){
        this._department = department;
    }

    get salary(){return this.salary};
    set salary(salary){
        this._salary = salary;
    }

    get note(){return this.note};
    set note(note){
        this._note = note;
    }

    get startDate(){return this.startDate};
    set startDate(startDate){
        this._startDate = startDate;

    }

    

    //method
    toString(){
        return "id" + this.id + ", name" + this.name + ", gender =" + this.gender +
        ", profile pic = " + this.Profile_pc + ", department = " + this.department
        + ", salary = " + this.salary + ", startDate = " + this.startDate + ", note = " + this.note;
    }
}