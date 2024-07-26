function add(a,b) {
    return a + b
}
function subt(a,b) {
    return a - b
}
function multiplication(a,b) {
    return a * b
}
function divide(a,b) {
    if(b === 0){
        alert("Error: 0 is not diviable")
    }
    return a / b
}
divide()

function calculator(){
    var firstNum = +prompt("Enter Fisrt number");
    var opr = prompt("Enter Operator");
    var secNum = +prompt("Enter sec num");
    var result;
    
    switch (opr) {
        case '+' :
            result = add(firstNum, secNum)
            break;
            case '-':
                result = subt(firstNum, secNum)
            break;
            case '*':
                result = multiplication(firstNum, secNum)
            break;
            case '/':
                result = divide(firstNum, secNum)
            break;
            default:
                console.log("Error");
    }
    console.log("The result is: ", result);
}
calculator()

// qustion 1
var arr = []
var matrix = [
    [1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for(var i =0; i < matrix.length; i++){
    document.write(matrix[i], "<br>")
}

// question 2
for(var i = 0; i <= 10; i++){
    document.write(i, "<br>")
}

// qustion 3
var tableNum = prompt("Enter Table number",2)
var tableLength = prompt("Enter lenght of table", 10)
for(var  i =1; i <= tableLength; i++){
    document.write(`${tableNum} x ${i} = ${tableNum*i} <br>`)
}

// question 4
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for(var i = 0; i < fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]} <br> <br>`)
}

// question 5

var num = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        document.write(`Even ${num[i]} <br>`)
    }else{
        document.write(`odd ${num[i]} <br>`)
    }
}

// question 6
var series = [1,5,10]

for(var i = 0; i < series.length; i++){
    var diff = series[i + 1] - series[i]
    if(diff > 1){
        for(var j = 1; j < diff; j++){
            result = series[i] + j;
            console.log(i,j);
           series.splice(i+j, 0, result)
        }
    }
}

document.write("Series ",series+ "<br> <br>");

// question 7
var searchItem = prompt("Welcome to ABC bakery, what do you want to order")
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
for(var i = 0; i < items.length; i++){
    if(searchItem == items[i]){
       document.write(`${searchItem} is avalible at index ${i} in our bakery`)
    }else{
        document.write(`We are sorry. ${searchItem} is  not available in our bakery`)
    }
}


// question 8
var numList = [24, 53, 78, 91, 12];
for(var i = 0; i < numList.length; i++){
    var maxNum = numList[i - 1] > numList[i]
    if(maxNum){
        document.write("Largest number is " , numList[i - 1], "<br>");
    } 
}

// question 9
var numList = [24, 53, 78, 91, 12];
for(var i = 0; i < numList.length; i++){
    var maxNum = numList[i - 1] > numList[i]
    if(maxNum){
        document.write("smallest number is " , numList[i]);
    } 
}

// question 10
var num = 5;
for(var i = 1; i <= 20; i++){
    document.write(num*i, "<br>");
}

// question 11
function passwordGenerator(){
var passLenght = +document.getElementById("passLenght").value
var passText = document.getElementById("passText")

if(isNaN(passLenght) || passLenght < 4 || passLenght === "" ){
    alert("Password must be 4 or more characters long")
}else{
var latters = "qRaBvgUrdYBbhjnY";
var symbol = "£$%|#&})";
var num = "1234567890";
var allChar =  symbol + latters + num;
var result = ""
console.log(allChar);
var i = 0;
while(i < passLenght){
    result += allChar.charAt(Math.floor(Math.random()*allChar.length))
    i++
}
}
passText.innerHTML = result
}