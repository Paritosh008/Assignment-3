#1. Using for loops, write a Javascript program to output the following,pattern
let rows = 4
let pattern = "";
let count = 1
for(let n = 1;n<=rows;n++){
    for(let num = 1; num<=n;num++){
        pattern += count + " "
        count++
    }
    pattern += '\n'
}
console.log(pattern);
