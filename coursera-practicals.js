// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {this.energy += 10};
    doSomethingFun() {this.energy -= 10};
}


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp=0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {this.xp += 10}
}

//Task 3: Code an intern object, run methods
var x = intern();
function intern(name='Bob', age=21, energy=110, xp=0, hourlyWage=10) {
    name = 'Bob';
    age = 21;
    energy = 110;
    xp += 10;
    hourlyWage = 10;
    return {name, age, energy, xp, hourlyWage}
}
console.log(x);

//Task 4: Code a manager object, methods
var y = manager()
function manager(name='Alice', age=30, energy= 120, xp=100, hourlyWage=30) {
    name = 'Alice';
    age = 30;
    energy -= 10;
    xp = 100;
    hourlyWage = 30;
    return {name, age, energy, xp, hourlyWage};
}
console.log(y)