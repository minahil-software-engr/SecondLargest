const secondLargestBySort=(array)=>{
    const uniqueArray=Array.from(new Set(array));  //set array ko unique bnata hay duplication remove karta hay or Arrayfrom aray may karta hay kukay set osko aik string kar data hanaw
    if(uniqueArray.length <2){  //agar array may 1 hi element rh gya hay
        return "no second integar";
    }
    uniqueArray.sort((a,b)=>{  //sort hora baray say chota ,wasay yah call bac fnction hay loop chalta rahta hay array ki har value kay liya jab tak sort nai ho jata
        return b-a; // -vale pay ab ,+ may ba, 0 pay same jab swap hoga tab a say peechay walay 2 dhakay ga wo a jo phly isnay a may rakha tha
    });
    return uniqueArray[1];  //array sort honay kay badd 2 value start say
}
let array=[10,5,20,8];
let duplicatesArray=[5,5,5,5];
const result1=secondLargestBySort(array);  
console.log(`second largest is: ${result1}`);
const result2=secondLargestBySort(duplicatesArray); //duplicate array kay liya call
console.log(`second largest is: ${result2}`);
