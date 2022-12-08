let array=[];
for(let a1=10; a1<=20; a1++){
    array.push(a1);
}
console.log(array);

// Единственный способ, который я придумала, чтобы вывести все числа через запятую это массив 

// ------------------------------------------------
for (let a2 = 10; a2 <= 20; a2++) {
    console.log(a2 * a2);
}

// ------------------------------------------------
const number = 7;
for (let a3 = 1; a3 <= 10; a3++) {
    console.log(`${a3} * ${number} = ${a3 * number}`);
}

// ------------------------------------------------
let sum = 0;
for (let a4 = 1; a4 <= 15; a4++) {
    sum += a4;
}
console.log(sum);

// ------------------------------------------------
let sub = 1;
for (let a5 = 15; a5 <= 35; a5++) {
    sub = sub * a5;
}
console.log(sub);
// ------------------------------------------------
let average = 0;
for (let a6 = 1; a6 <= 500; a6++) {
    average += a6;
}
console.log(average / 500);

// ------------------------------------------------
let sumEvenNumber = 0
for (let a7 = 30; a7 <= 80; a7++) {
    if (a7 % 2 === 0) {
        sumEvenNumber += a7;
    }
}
console.log(sumEvenNumber);

// ------------------------------------------------
for (let a8 = 100; a8 <= 200; a8++) {
    if (a8 % 3 === 0) {
        console.log(a8);
    }
}

// ------------------------------------------------
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників.Знайти суму його парних дільників.

let evenDivisors = 0;
let sumDivisors = 0; 
const naturalNumber = +prompt("Enter natural number");
 if( naturalNumber > 0){
    for(let a9 = 1; a9 <= naturalNumber; a9++){
        if(naturalNumber % a9 === 0){
            console.log(`Divisor of a number ${naturalNumber} : ${a9}`); 
            while (a9 % 2 === 0)
            {
                evenDivisors += 1;
                sumDivisors += a9;
                break;
            }
        }
    }
    console.log(`Number of even divisors: ${evenDivisors}`);
    console.log(`Sum of even divisors: ${sumDivisors}`);
}
else{
    alert("Repeat the topic: Natural numbers");
}

// ------------------------------------------------
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


