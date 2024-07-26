// // question 1
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
for (var j = 0; j < lastNames.length; j++) {

fullNames.push(firstNames[i] + lastNames[j]);
}
}
console.log(fullNames)

// question 2
var arr = []
var StudentName = prompt("Enter Student Name")
arr.push(StudentName)
for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// question 3
var fullName = prompt("Enter Full name", "hajra ashraf qadri");
var result = "";

for(var i = 0; i < fullName.length; i++){
    if(fullName[i - 1] === " "){
        result += fullName[i].toUpperCase()
    }else{
        result += fullName[i]
    }
}
console.log(result)

// question 4
var fullName = prompt("Enter Full name", "hajra ashraf qadri");
var result = "";
for(var i = 0; i < fullName.length; i++){
if(i === 0){
result += fullName[i].toUpperCase()
}

else if(fullName[i] === " "){
    result += " " + fullName[i + 1].toUpperCase()
}
else{
            result += fullName[i]
}
}
console.log(result)



// question 5
var str = "smit saylani smit smit add smit";
var word = "smit";
var rep = "saylani";
var count = 0;

for(var i = 0; i < str.length; i++){
    var find = str.slice(i, i + word.length)
    if(find === word){
        count++
    if(count === 3){
        // str = str.slice(0,i) + rep + str.slice(i + word.length)
        str = str.slice(0,i) + rep + str.slice(i + word.length)
    }
}
}
console.log(str);

// question 6
var studentName = []
var names = ["Hajra", "manahil", "Fatima"];
var nums  =  [1,2,3];
var boolen = [true, false];
var mixed = ["hajra", 1,3, true];
var education = ["SSC", "HSC", "BCS" , "BS", "BCOM", "MS", "Phil", "PhD)"]
for(var i = 0; i < education.length; i++){
    document.write(i, ") " , education[i], "<br>");
}

// // question 7
var studentName = ["hajra", "Kashaf Ud Duja", "fatima"];
var studentScore = [200,300,160];
var totalMarks = 500;
for(var i = 0 ; i < studentName.length; i++){
    console.log(studentScore[i] / totalMarks*100 + '%');
    document.write(`Score of ${studentName[i]} is ${studentScore[i]} . Percentage ${studentScore[i] / totalMarks*100}% <br> <br>`)
}


// question 8
var colorNames = ["red", "Orange", "green"]
var endColor = prompt("Enter a number to end of the array")
var moreBegColor1 = prompt("Enter more 1 Color to the beggining")
var moreBegColor2 = prompt("Enter more 2 Color to the beggining")
var indexColor = prompt("Enter a index that you wanna add color")
var addColor = prompt("Enter Color")
var addIndex = +prompt("Enter a Color at any index!")
var addColor = prompt(`Enter a color at ${addIndex}`)
var indexDel = +prompt("Enter a Any index for deleting an array");
var deleteColor = +prompt("ENter how many color you wanna delete")
colorName.splice(indexDel, deleteColor)


colorNames.push(endColor);
colorNames.unshift(moreBegColor1, moreBegColor2)
colorNames.shift()
colorNames.pop()
console.log(colorNames);
colorNames.splice(addIndex,0,addColor)
console.log(colorNames);


// question 9
var studentScore = [320,230,480,399,120]
document.write(`Score of student is ${studentScore} <br>`)
studentScore.sort()
document.write(`Score of student is ${studentScore} <br> <br> <br>`)

// // question 10
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
document.write(cities , "<br> <br>")
document.write(cities.slice(2,4), "<br> <br>");


// // question 11
var arr =  ['This', "is", "my", "cat"];
document.write(arr.join(" "), "<br> <br>")


var devices = ['keyboard',"mouse", "screen","pc"]
devices.reverse()
for(var i = 0; i<devices.length; i++){
    document.write(`${devices[i]} <br>`)
}


// question 12
var headuser = prompt("Enter head user name");
var tailsUser = prompt("Enter Tails user name");

var toss = Math.floor(Math.random()*2)
if(toss === 1){
    document.write(`${headuser} head user Win`)
}else{
    document.write(`${tailsUser} Tails User win`)
}

// question 13
var optionValues = ['Apple','Samsung', 'Motorola',' Nokia',' Sony',' Haier'];
var options = "";

for(var i = 0; i < optionValues.length; i++ ){
    options += `<option>${optionValues[i]}</option>`
}
var dropdown = `<select>${options}</select`;
document.write(dropdown)
