const secondLargestSinglePass=(array)=>{  
    let largest=-Infinity;  //starting may - infinity hay
    let secondLargest=-Infinity;
    for(let number of array){ //for of loop values kay oper directly iterate karta ha
        if(number>largest){  //agar tu number largest say bara hay 
            secondLargest=largest;  //secondLargest ,largest ban jaya ga
            largest=number;  //largest updtae ho jaya ga
        }
        else if(number>secondLargest && number!=largest){ //agar number second largest say bara hayy or largest kay equal nai hay
            secondLargest=number;//second largest update ho jaya ga
        }
    }
    if(secondLargest==-Infinity){
        return "No second largest"
    }
    else{
        return `second largest is: ${secondLargest}`;
    }
}
const array=[10,5,20,8,15];
const duplicatesArray=[5,5,5,5];
let result1=secondLargestSinglePass(array);  //array kay sath
console.log(result1);
let result2=secondLargestSinglePass(duplicatesArray); //duplicate dhkany kay liya
console.log(result2);
