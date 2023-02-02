#3. Write a program to find whether a given number is special number or not
let num1 = 145
var result = 0

function specialno(num1)
{
while(num1>0){
   let digit = num1%10
    let fact = 1
   for( i=1;i<=digit; i++){
    fact = fact*i
    
    }
    result = fact + result
   num1 = parseInt(num1/10)
   
}
return result


}

var specialno1 = specialno(num1)
if(num1==specialno1)
{
    console.log(`is special Number ${num1}`)
        
}

else{
console.log(`is not special number ${num1}`)
}

