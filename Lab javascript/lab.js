// Challenge 00
const sayHello = function () {
    return "Hello!";
}
console.log(sayHello());

// Challenge 01
const addOne = function(number) {
    return (number+1); 
}
console.log(addOne(4));
// Challenge 02
const addTwoNumbers = function (number1, number2){
    if (isNaN(number1) || isNaN(number2)) {
        return "NaN";
    }else {
    return (number1+number2);
    }
}
console.log(addTwoNumbers(22, 11));
console.log(addTwoNumbers("Hello", 11));
// Challenge 03
let sum = 0;
const sumNumbers = function (myArray) {
    if (myArray.length === 0)
        return 0;
    else {    
    for (i=0; i<myArray.length; i++ ) {
        sum= myArray[i]+ sum
       }   return sum;
    }
}
console.log(sumNumbers([1,2,3,4,5,6,7,10]));
console.log(sumNumbers([]));

// Challenge 04
const addList = function(...args) {
   let sum = 0;
   for (i=0; i<args.length; i++) {
        sum += args[i];
   }
   return sum;
}
console.log(addList(55,44,100));
// Challenge 05
const computeRemainder = function (num1, num2) {
    if (num2 === 0) {
        return ("Infinity");
    }
    else if ((num1<0 && num2>0) || (num1>0 && num2<0)) {
        remainder = num2*((num1/num2) - (Math.ceil((num1/num2))))
        return (Math.round(remainder)); 
    }
    else {
        remainder = num2*((num1/num2) - (Math.floor((num1/num2))));
        return (Math.round(remainder)); 
    }
}
console.log(computeRemainder(-120,0));

// Challenge 06
const range = function (firstNumber, secondNumber){
    let rangeArray = [];
    if (firstNumber<=secondNumber){ 
        for (i=firstNumber; i< secondNumber; i++) {
        rangeArray.push(i);  
    }
    }else {
        return ("First argument must be less than second");
    }
    return rangeArray;
}
console.log(range(33,44));
// Challenge 07
function reverseUpcaseString (textHere) {
    textHere = textHere.toUpperCase();
    const textArray = textHere.split('');
    textArray.reverse();
    textHere= textArray.join('');
    return textHere;
}
console.log(reverseUpcaseString("Hello World!"));

//Challenge 08 
function removeEnds (stringHere){
    if (stringHere.length < 3){
        return " ";
    }
    else{
        stringHere = stringHere.slice(1,(stringHere.length - 1));
        return stringHere;    
    }     
}
console.log(removeEnds("Hello World"));

//Challenge 09

function charCount (newString){
    const count ={};
    newStringArray = newString.split('');
    newStringArray.forEach(item => {
        count[item] = count[item] ? (count[item] + 1): 1;
    }); 
    return count;    
}
  /* 
    function charCount(newString) {
    const counter ={};
    nSArr = newString.split('');
    for (i=0; i<nSArr;i++) {
        counter[nSArr[i]]={};
        for (x=0; x<nSArr.length; x++){
            if(!counter[nSArr[i]][nSArr[x]]) {
                counter[nSArr[i]][nSArr[x]] = 1;
            }else {
                counter[nSArr[i]][nSArr[x]]++;
            }
        } return counter;
        console.log(counter);
    }
}
*/
console.log(charCount("TTToday ttthe"));

//Challenge 10 
function formattingWithPadding(numberToFormat, charToPad, lengthToPad){
    const numberString = numberToFormat.toString();
     
    if ( lengthToPad > numberString.length ){
        const newNumberString = numberString.padStart(lengthToPad, charToPad);
        return newNumberString;
    }else{
        return numberString;
    }
}
console.log(formattingWithPadding(22334, "#",17));

//Challenge 11
function isPalindrome(string1) {
    string1 =string1.toUpperCase().split(" ").join('');
    stringRev = string1.split("").reverse().join('');
    //console.log(string1+"_______"+ stringRev);
    if (string1 === stringRev ) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome(""));
//Challenge 12
function hammingDistance (firstString, secondString){
    let count = 0;
    if (firstString.length !== secondString.length) {
        return "NaN";
    } else {
        for (i=0;i<firstString.length; i++) {
            if(firstString[i] !== secondString[i]) {
                count+=1;
            }
        } return count;
    } 
}
console.log(hammingDistance("aaasa","ssabd"));

//Challenge 13 
function mummble (mString) {
    let mmString = "";
    mString.toString();
    for (i=0;i< mString.length; i++) {
        mmString += mString[i].repeat(i+1)+"-";
        
    } return (mmString.slice(0,-1));
    console.log(mmString -"-");
}
console.log(mummble("55bfd"));

//Challenge 14 

function fromPairs(nestedArray) {
    let obj1 = {};
    for (i=0; i<nestedArray.length;i++) {    
        for (x=0; x<nestedArray[i].length; x++) {
           
            const key = nestedArray[i][0];
            const value = nestedArray[i][x];
            obj1[key] = value;
            //console.log(nestedArray[i][x]);
        } 
    }return obj1;
}
console.log(fromPairs([['a', 1],['b', 2],['c', 3],['b',5]]));