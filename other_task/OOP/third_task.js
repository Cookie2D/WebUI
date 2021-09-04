class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
    this.salary = this.dayRate * this.workingDays;
    this.salaryWithExperience = this.salary * this.experience;
  }

  get experience() {
    return this._experience;
  }

  set experience(value) {
    if (value < 0) throw new Error("Experience cant be negative");
    this._experience = value;
    this.salaryWithExperience = this.salary * this.experience;
  }

  showSalary() {
    console.log(`${this.fullName} salary: ${this.salary}`);
  }

  showSalaryWithExperience() {
    console.log(`${this.fullName} salary: ${this.salaryWithExperience}`)
  }

  static test(worker) {
    console.log(`\n========= ${worker.fullName} =============`)
    worker.showSalary();
    console.log("New experience: " + worker.experience);
    worker.showSalaryWithExperience();
    worker.experience = 1.5;
    console.log("New experience: " + worker.experience);
    worker.showSalaryWithExperience();
  }
}

const workers = [
  new Worker("John Johnson", 20, 23),
  new Worker("Tom Tomson", 48, 22),
  new Worker("Andy Ander", 29, 23),
]

for (let worker of workers) {
  Worker.test(worker);
}

workers[2].experience = 1.3;
const mostExperiencedWorkers = workers.reduce((most, worker) =>
  worker.experience > most ? worker.experience : most, 1);

const sortedExperiencedWorkers = workers
  .filter(worker => worker.experience === mostExperiencedWorkers)
  .sort((a, b) => a.salary - b.salary);

console.log('\nSorted salary of the most experienced workers:')
for (let worker of sortedExperiencedWorkers) {
  console.log(`${worker.fullName}: ${worker.salaryWithExperience}`)
}