function integerDivision(dividend, divisor){
    return Math.floor(dividend/divisor);
}

let weeksInAYear = integerDivision(365, 7);
console.log(weeksInAYear);

let applesCount = 7;
let peopleCount = 3;
let applesPerPerson = integerDivision(applesCount, peopleCount);
console.log(`Each person gets ${applesPerPerson} apples`);