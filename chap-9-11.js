// question 1
var city = prompt("Enter Your City",'karachi')
if(city == 'karachi'){
    document.write('welcome to city of lights')
}else{
    document.write('welcome to ', city)
}

// question 2
var gender = prompt('Enter your gender', 'female')
if(gender === 'female'){
    document.write('Good Morning Ma’am.')
}else{
    document.write('Good Morning Sir.')
}

// question 3
var trafficSignal = prompt('Enter color of road traffic')
if(trafficSignal === red){
    document.write('must Stop')
}else if(trafficSignal === yellow){
    document.write('Ready to move')
}else if(trafficSignal === green){
    document.write('Move Now')
}else{
    document.write('Please Enter a Valid trafic Signal')
}

// question 5
var checkNumber = prompt('Enter a number',4)
if(checkNumber % 2 === 0){
    document.write('its even number ', checkNumber)
}else{
    document.write('odd ', checkNumber)
}

// // question 6
var divisible = prompt('enter number that is divisible by three')
if(divisible % 3 === 0){
    document.write('the number is divisible by', divisible ,divisible % 3 )
}

// question 7 
var firstNum = +prompt('Enter First calculate number','3')
var operater = prompt('Enter operater','+')
var lastNum = +prompt('Eenter last number','3')

var result 
if(operater === '+'){
    result = firstNum + lastNum
}
else if(operater === '-'){
    result = firstNum - lastNum
}
else if(operater === '%'){
    result = firstNum % lastNum
}
else if(operater === '/'){
    result = firstNum / lastNum
}
else if(operater === '*'){
    result = firstNum * lastNum
}
else {
    result = "Invalid operation";
}
document.write(result)