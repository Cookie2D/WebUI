class Student {
  constructor(fullName, direction) {
    this.fullName = fullName;
    this.direction = direction;
  }

  get direction() { return this._direction; }
  set direction(value) { this._direction = value; }

  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc');
  }

  showFullName() {
    return this.fullName;
  }

  nameIncludes(data) {
    return this.showFullName().includes(data);
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1.nameIncludes('Ivan')); // true
console.log(stud1.nameIncludes('Denysenko')); // false
console.log(stud2.nameIncludes('Koval')); // true

stud2.direction = 'C#';
console.log(stud2);

console.log(stud3.showFullName(), stud3.direction);
