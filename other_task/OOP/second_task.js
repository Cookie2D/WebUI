class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return `${super.showFullName()} ${middleName}`;
  }

  showCourse() {
    let course = 2021 - this.year;
    return (1 <= course && course <= 6) ? course : "no";
  }
}

const ivan = new Person("Ivan", "Pazan");
console.log(ivan.showFullName())
const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4