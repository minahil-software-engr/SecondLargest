Method 1 secondLargestBySort:
Sub-expression new Set(array) array ke sabhi elements ko process karta hai aur duplicate values ko filter-out kar deta hai. Set JavaScript mein primitive values ka unique collection hota hai.
Unique elements ko wapas Array instance banane ke liye Array.from() ka istemal hota hai. Is step ke bina hum .sort() method apply nahi kar sakte kyunki Set ke paas array prototype methods nahi hote.
Line uniqueArray.length < 2 guard clause ki tarah kaam karti hai. Agar Array mein unique values ek se kam bachi hain (jaise [5, 5, 5]), toh code direct "no second integer" return kar deta hai.
Callback function (a, b) => b - a values ko descending order (bade se chota) mein arrange karta hai. Jab result positive aata hai, values swap hoti hain aur internal pointer neighbor checking karta hai.
Sorting complete hote hi uniqueArray[1] se second highest value direct return ho jati hai.

Method 2 secondLargestTwoPass:
Pehla for...of loop pooray array mein iterate karta hai aur sabse pehle absolute highest element (largest) locate karta hai. Starting point -Infinity set kiya jata hai taake negative numbers bhi sahi handle ho skein.
Pehle loop ke finish hone ke baad, doosra for...of loop shuru hota hai. Ye loop bhi pooray array par chalta hai lekin isme ek strict check hota hai: number != largest.
Second loop un tamaam numbers ko process karta hai jo overall largest ke barabar nahi hain. Is tarah duplicate highest values skip ho jati hain aur bachi hui values mein se highest integer secondLargest ban jata hai.
Loop execution complete hone ke baad agar secondLargest apni initial state (-Infinity) par hi rehta hai, toh output "No second largest" milta hai, warna final value string template ke sath return hoti hai.

Method 3 secondLargestSinglePass:
Ye method poore array ko sirf ek dafa read karta hai. Loop ke sath do tracking variables (largest aur secondLargest) continuously sync hote hain.
Jab number > largest ki condition true hoti hai, toh existing largest ki value secondLargest mein shift ho jati hai, aur current number naya largest ban jata hai.
Agar current number global maximum se chota hai lekin secondLargest se bada hai, toh condition number > secondLargest && number != largest trigger hoti hai. Is se secondLargest update hota hai aur duplicate values ignore rehti hain.
Multiple passes na hone ki wajah se execution time minimal hota hai aur memory utilization baseline standard par rehti hai.

Method 4 ThirdLargest :
Is strategy mein 3 tracking variables (largest, secondLargest, thirdLargest) initialize hote hain aur loop single-pass par hi run karta hai.
Jab naya supreme maximum milta hai (number > largest), ek cascading chain trigger hoti hai: thirdLargest = secondLargest, secondLargest = largest, aur largest = number.
Jab number largest se chota lekin secondLargest se bada hota hai, toh thirdLargest = secondLargest aur secondLargest = number execute hota hai.
Jab number pehle dono variables se chota lekin thirdLargest se bada hota hai, toh direct update: thirdLargest = number execution hoti hai (saath duplicate restrictions number != secondLargest && number != largest verify hone ke baad).
Agar array mein 3 unique distinct elements na miley hon, toh thirdLargest -Infinity hi rehta hai, jise identify karke "no third largest" statement pass kar di jati hai.

Comparison:
1 method: Is method ki time complexity o(n log n) hoti hai aur space complexity o(n) hoti hai (kyunki Set aur naya array banta hai). Complex sorting operations aur extra memory allocation ki wajah se ye baaki dono methods ke muqable sabse slow tareeqa hai.
2 method: Is method ki time complexity o(n) hoti hai aur space complexity o(1) rehti hai. Performance ke hisab se ye sorting se kafi behtar hai, lekin output nikalne ke liye isko array par do alag-alag loops chalane padte hain (array ko 2 baar scan karna padta hai).
3 method: Is method ki time complexity bhi o(n) aur space complexity o(1) hoti hai. Lekin Two-Pass ke muqable ye ziada fast aur optimal hai kyunki ye poore array ko sirf ek hi baar scan ( single loop ) karta hai aur ek hi iteration mein variables ko shift karke result nikal leta hai.
method 2 sabse acha aur ideal method hai!
