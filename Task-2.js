const secondLargestTwoPass=(array)=>{
    let largest=-Infinity;  //start may yah negative infinity hay value
    for(let number of array){  //for of loop har array ki value kay liya
        if(number>largest){
            largest=number;
        }
    }
    let secondLargest=-Infinity;
    for(let number of array){ //dosra loop ab 2nd largest kay liya largest tu update hogya hay
        if(number>secondLargest && number!=largest){  
            secondLargest=number;
        }
    }
    if(secondLargest==-Infinity){
        return "No second largest"
    }
    else{
        return `second largest is: ${secondLargest}`
    }
}
const array=[10,5,20,8,15];
const duplicatesArray=[5,5,5,5];
let result1=secondLargestTwoPass(array);  //array kay sath
console.log(result1);
let result2=secondLargestTwoPass(duplicatesArray); //duplicate dhkany kay liya
console.log(result2);