

function getTruthiness(expression) {
  if (expression) {
    return true;
  } else {
    return false;
  }
}

getTruthiness(0); // false
getTruthiness(4);//true
getTruthiness(-1);//true
getTruthiness("");//true (turned out false)
getTruthiness("hello");//true
getTruthiness(undefined);//false
getTruthiness();//false



function getPhoneNumber(number, prefix) {
  if (prefix) {
    if (number.startsWith("0")) {
      number = number.substring(1); // substring(1) removes one character at the start of the string
    }
    return `${prefix}${number}`;
  } else {
    return `${number}`;
  }
}

getPhoneNumber("073858489"); // true, false (not sure what's happening)
getPhoneNumber("73858489", "+49");// will enter both numbers (okay i misunderstood the task. now i understand it, will get it right)
getPhoneNumber("073858489", "+33");// '+3373858489'

////////////////////////////////////////////////////////////////////////////////////////

let animals = ["cat", "dog", "cow"];

animals; // ["cat", "dog", "cow"]
animals.length;// 3
animals[1];//dog
animals[0];//cat

animals[2] = "mouse";
animals;//["cat", "dog", "mouse"]

animals[3] = "elephant";
animals.length;//4
animals;//["cat", "dog", "mouse", "elephant"]


animals[10]="bee";
console.log (animals.length);



const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log (`The 2nd colour of the rainbow is ${colours[1]} (counting from 1) `);
console.log (`There are ${colours.length} colours in a rainbow`); 
// if deleted 1st 2 colours the output = The 2nd colour of the rainbow is green (counting from 1)", "There are 5 colours in a rainbow"

////////////////////////////////////////////////////////////////////////////////////

let stepCounts = [2211, 11745, 7390, 14284, 7902];
let totalSteps = 0;

for (let element of stepCounts){
    totalSteps += element;
    console.log(element);
}
console.log(`There were ${totalSteps} total steps`);

let goalTimes = 0;

for (let element of stepCounts) {
    if (element >= 10000) {
        goalTimes += 1;
    }
}

let timeOrTimes;
if (goalTimes == 1) {
    timeOrTimes = "time";
} else { 
    timeOrTimes = "times";
}

console.log(`You met your goal of 10,000 steps ${goalTimes} ${timeOrTimes}.`);

//////////////////////////////////////////////////////////////////////////////////


const names = ["Karin", "Fatemeh", "Luke", "Michael", "Douglas", "Jyoti"];

let shortNames = [];

for (let item of names){
    if (item.length < 7){
shortNames.push(item);
    }
}

console.log(`the short names are ${shortNames}.`);