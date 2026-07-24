const ThirdLargest=(array)=>{ //same logic task 3 wali 
    let largest=-Infinity;
    let secondLargest=-Infinity;
    let thirdLargest=-Infinity;  //3rd largest start may infinity rakha
    for(let number of array){
        if(number>largest){
            thirdLargest=secondLargest; //3rd largest ko update kiya
            secondLargest=largest;
            largest=number;
        }
        else if(number>secondLargest && number!=largest){
            thirdLargest=secondLargest;  //yha bhi 3rd largest ko update kiya
            secondLargest=number;
        }
        else if(number>thirdLargest && number!=secondLargest && number!=largest){
            thirdLargest=number;
        }
    }
    if(thirdLargest==-Infinity){
        return "no third largest";
    }
    else{
        return `third Largest is: ${thirdLargest}`;
    }
}
const array=[10,5,20,8,15];
const duplicatesArray=[5,5,5,5];
let result1=ThirdLargest(array);  //array kay sath
console.log(result1);
let result2=ThirdLargest(duplicatesArray); //duplicate dhkany kay liya
console.log(result2);
