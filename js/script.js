'use strict';

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    };
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        if (this.isYear(this.year)) {
            return this.currentYear - this.year;
        }

    }

    get currentYear() {
        const currentData = new Date();
        return currentData.getFullYear();
    }

    getCourseRange (year) {
        return this.currentYear - year;
    }

    isYear(year) {
        console.log(this.getCourseRange(year))
        if (typeof year !== 'number') {
            alert('Type error')
            return false;
        } else if (((this.getCourseRange(year)) < 1)  ||
            ((this.getCourseRange(year)) > 5)) {
            alert('Range error')
            return false;
        }
        return true;
    }
}


const test1 = new Student('asa', 'adaaaa', 2012);
console.log(test1);
console.log(test1.getCourse());

