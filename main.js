//1

// let num1 = +prompt("Write first number.");
// let num2 = +prompt("Write second number.");
// let plus = (num1 + num2);
// let minus = (num1 - num2);
// let divide = (num1 / num2);
// let multiply = ( num1 * num2);
// let answer = ( plus +' '+ minus +' '+ divide +' '+ multiply);
// if(answer.includes('NaN')){
//     let answer = ("Wrong entry!")
// }else{
//    continue}
// alert(answer);

//2

// let item = +prompt("How much did it cost?");
// let count = +prompt("How much did you get?");
// let price = count * item;
// if(price > 20000){
//     price *= 0.7
//     discount = ("30%")
// }else if(price > 10000){
//     price *= 0.8  
//     discount = ("20%")
// }else if(price > 5000){
//     price *=0.1
//     discount = ("10%")
// }
// alert(price + "$ And "+ discount +" discount")

//3

// let san = +prompt("Find the Number 1-100")
// let answer = Math.random()*100
// let num = Math.floor(answer)
// for(let i = 0;i <= 8 ;i++){
// if(num == san){
//     alert("You Found The Number")
// }else if(num <= san && num + 5 <= san){
//     san = +prompt("Try lower")
    
// }else if(num  <= san && num + 5 >= san){
//     san = +prompt("Try little lower")

// }else if(num >= san && num - 5 >= san){
//     san = +prompt("Try higher")

// }else if(num >= san && num - 5 <= san){
//     san = +prompt("Try little higher")

// }
// }

//Bonus

let a = 15;
let b = 20;

a = b
b = (a/a+a/a+a/a+a/a+a/a)*(a/a+a/a+a/a)

alert(a)
alert(b)