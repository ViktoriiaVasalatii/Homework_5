let array = [];
for (let i1 = 20; i1 <= 30; i1 += 0.5) {
    array.push(i1);
}
console.log(array);
// Аналогичный случай с выводом в консоль 
// ------------------------------------------------

const dollar = 27;
for (let i2 = 10; i2 <= 100; i2 += 10) {
    console.log(dollar * i2);
}

// ------------------------------------------------
const number = +prompt("Enter an integer");
for (let i3 = 1; i3 <= 100; i3++) {
    if (i3 * i3 < number) {
        console.log(i3);
    }
}

// ------------------------------------------------
let iteration = 0;
const number2 = +prompt("Enter an integer");
if (number2 > 1) {
    for (let i4 = 1; i4 <= number2; i4++) {
        if (number2 % i4 === 0) {
            iteration += 1;
        }
    }
    if (iteration <= 2) {
        console.log(`Yes, ${number2} is a prime number`)
    }
    else {
        console.log(`No, ${number2} is not a prime number`)
    }
}

// ------------------------------------------------
const number3 = +prompt("Enter some number");
let counter = 0;
for(let i5 =1; i5<=number3; i5++){
    if (3 ** i5 === number3) {
        console.log(`Yes, if the exponent  = ${i5}`);
        break;
    } 
    // else {
    //     console.log(`No, if the exponent = ${i5}`);
    // }
}


