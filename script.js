class Student {
    constructor(fullname, direction) {
      this.fullname = fullname;
      this._direction = direction;
    }
  
    showFullName() {
      return this.fullname
    }
   
    nameIncludes(data) {
      if (this.showFullName().includes(data)) {
        return true
      } else { return false }
    }

    static studentBuilder(fullname, direction){
        return new Student (fullname, direction);

    }

    get direction(){
        return this._direction
    }
    set direction(value){
        if (typeof value === 'undefined'){
            alert('set direction');
            return;
        }
        this._direction = value;

    }

    
  }

  const stud1 = new Student('Ivan Petrenko', 'web');
  const stud2 = new Student('Sergiy Koval', 'python');
  const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');
  console.log(stud1.showFullName());
  console.log(stud1.nameIncludes('Ivan'));
  console.log(stud1.nameIncludes('Denysenko'));
  console.log(stud3.nameIncludes('Denysenko'));
 






  