#2. Write a program to find whether a given number is armstrong number or not

let num1 = 153
var result = 0

function checkArmos(num1)
{
while(num1>0){
   let digit = num1%10

   result = digit*digit*digit +result
   num1 = parseInt(num1/10)
   
}
return result


}

var checkArmos1 = checkArmos(num1)
if(num1==checkArmos1)
{
    console.log(`is Armstromg number ${num1}`)
        
}

else{
console.log(`is not Armstrong number ${num1}`)
}

