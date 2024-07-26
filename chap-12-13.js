for (let i = 0; i < 5; i++) {
    console.log(i,'outer loop')
    for (let j = 0; j < 3; j++) {
        console.log(j,'inner')
    }
}


// question 2
var num1 = +prompt("Enter any Enteger")
var num2 = +prompt("Enter any Secound Integer")

if(num1 === num2){
    document.write('these both integer are equal')
}else if(num1 >= num2){
    document.write(num1, 'are Greater')
}else if(num1 <= num2){
    document.write(num2 , 'are Greater')
}

// question 3
var checkNumValue = prompt('Enter a positive, negative or zero')
if(checkNumValue == '-'){
    document.write('the value is negative')
}else if(checkNumValue == '+'){
    document.write('the value is possitive')
}else if(checkNumValue == '.'){
    document.write('the value is Faraction')
}else{
    document.write('this is hole number')
}