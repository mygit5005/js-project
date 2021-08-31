console.log("NeoSoft");
let s="Shekhar"
let p = s.toUpperCase();
console.log(p)

//Second largest number in array...
let arr= [7,10,8,2,4,44,190,200,201]

//function processData 
function secondLargest(arr){
    let  firstLargestNumber = Math.max(...arr) // firstLargestNumber
    let index = arr.indexOf(firstLargestNumber) // the index of firstLargestNumber
     arr.splice(index, 1) // Delete first largest number
    let secondLargestNumber = Math.max(...arr) // firstlargestNumber got removed, lets find next largest number
     return (secondLargestNumber)  //return the value
}

//input//
console.log(secondLargest(arr))
//output//

function sLargest(arr2) {
    const arrSort = arr2.sort((a, b) => a - b);
    return arrSort[arr2.length - 2];
}
var arr2 = [1, 5, 4, 9, 8,10];
console.log(sLargest(arr2));  
//fibonacci series
function fibonacci(num){
    let a = 0, b = 1, sum
 
console.log ("Fibonacci Series of " + num   );  
for ( var i =0; i < num; i++)  
{  
console.log ("  " + b);  
sum = a + b;  
a = b;  
b = sum;  
}  
// console.log( "" + "<br>");  
// console.log( "Fibonacci Series of " + num + " terms in Reverse Order is " + "<br>");  
} 
fibonacci(6)
// console.log(fibonacci(5))
// print the series in reverse order  
// for ( i = 0; i < num; i++)  
// {  
// document.write( "  " +  a);  
// res = b - a;  
// b = a;  
// a = res;  
// }  
//
//closure
function demo(){
    let x =10;
    return function(){
        x++;
        console.log(x);
    }
}

let closureOutput = demo();
closureOutput();
closureOutput();
//promise
let applyDiscount = new Promise(function (resolve,reject){
    let discount = true;
    if (discount){
        resolve ('Discount Applied');
    }
    else {
        reject('Dsicount  failed');
    }
 
})
applyDiscount.then(function(result){
    console.log(result)
}).catch(function(result){
    console.log(result);
})

//async await
let getData = async()=>{
    let x = await "Hello World";
    console.log(x);
}
console.log(1)
getData()
console.log(2)
//remove duplicate from an array
let array2= [1,2,3,1,2,3,true,true];
let filterCopy = [...new Set (array2)];
console.log(filterCopy);
//remove duplicate second method + sum ofnumbers
let array3 = [1,2,3,4,1,2,3,4];
let array4 = [];
array3.forEach((el) => {
    if (!array4.includes(el)){
        array4.push(el)
    }

});
let sum= array4.reduce(function(total,ele){
    return total + ele
},0)
console.log(sum);
function primeNo(num){
    let divider = 2;
    while(divider < num){
    if (num % divider==0){
    return num +'is not primenumber'
    }
    else{
    divider++;
    }
    return num +'is prime number'
    }
}
console.log(primeNo(21));
console.log("git init");
console.log("second commit");
console.log("Third commit");


