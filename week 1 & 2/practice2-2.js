/*function date(y, m){
    return `it's ${m} ${y}`;
}

console.log(date(2023, "Feb"));


let applesPack = 6;

function add1(CurrentApples) {
    return CurrentApples + 1;
}

console.log(add1(applesPack));
//console.log(add1(applesPack)); (i thought this will increase the value to 8)


function getAgeIn2023(YoB){
    return 2023 - YoB;
}

console.log(`I will be ${getAgeIn2023(1999)}`);
console.log(`Ali will be ${getAgeIn2023(2002)}`);

let gregAge=17;
const minimumAge=18;
let person= "Greg";

if (gregAge >= minimumAge){
console.log(`${person} is old enough to drive.`)
} else { console.log(`${person} is not old enough to drive.`)}
*/
let count=0
let total=0
let multipleOf3=0

while (count < 3){
    count = count+1;
    while (count >= 3 && count <= 7){
        console.log(count);
        total = total+count;

        if (count % 3 === 0){
            multipleOf3 = multipleOf3+count;
        }
        count = count+1;
    
    }
   
}
 console.log(total);
 console.log(multipleOf3);