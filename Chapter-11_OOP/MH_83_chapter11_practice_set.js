// //Question -1
// class ComplexNum {
//     constructor(real, imginary) {
//         this._real = real;
//         this._imginary = imginary;
//     }
//     get real() {
//         return this._real;
//     }
//     get imiginary() {
//         return this._imginary;
//     }
//     set real(newReal){
//         this._real = newReal;
//     }
//     set imginary(newImginary){
//         this._imginary = newImginary;
//     }
//     get ComplexNumber(){
//         return `${this._real} + ${this._imginary}i`;
//     }
//     add(cNumber2){
//         let real_addition = this._real + cNumber2._real;
//         let imginary_addition = this._imginary + cNumber2._imginary;
//         return new ComplexNum(real_addition,imginary_addition);
//     }
// }

// const cNumber1 = new ComplexNum(0,7);
// const cNumber2 = new ComplexNum(10,8);
// let number1  = cNumber1.ComplexNumber;
// let number2  = cNumber2.ComplexNumber;

// let sum = cNumber1.add(cNumber2).ComplexNumber;
// console.log(`Number 1 = ${number1}`);
// console.log(`Number 2 = ${number2}`);
// console.log(`Addition = ${sum}`);

class Human {
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(this.name + "Human is walking")
    }
}

class Student extends Human {
    walk() {
        console.log(this.name + ": Student is walking")
    }
}

let o = new Student("Harry", "Bhindi")
o.walk()

console.log(o instanceof Human);
