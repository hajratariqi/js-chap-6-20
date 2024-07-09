// question 1
var a = 10
document.write(a++,'the value of a++ is: ','<br>')
document.write('the value of a++ is: ' , a++,'<br>')
document.write('the value of a++ is:  ' , a++,'<br>')
document.write('the value of a++ is:  ' , a,'<br>')
document.write('the value of a-- is:  ' , a--,'<br>')
document.write('the value of a-- is:  ' , a--,'<br> <br>')


// question 2
var num = 2
var b = 1
var result = --num - --b + ++b + b--
document.write('a is' , num,'<br>')
document.write('b is' , b,'<br>')
document.write(result,'<br><br><br>')

// question 3
var userGreet = prompt("Hello Welcome back :)")

// question 4
var TableNum = prompt("Enter a multiplication Number","5")

for(var i = 1; i <= 10; i++){
    document.write(TableNum,' x ', i , ' = ' , TableNum*i ,'<br> <br>')
}

// question 5

var subject1 = prompt("enter subject name ","English ")
var marks1 = +prompt("enter marks for " + subject1)

var subject2 = prompt("enter subject name ","SST")
var marks2 = +prompt("enter marks for " + subject2)

var subject3 = prompt("enter subject name","Urdu")
var marks3 = +prompt("enter marks for " + subject3)

const totalMarksPerSubject = 100;

var obtainMarks = marks1 + marks2 + marks3

var StudentsMark = totalMarksPerSubject / obtainMarks

document.write(subject1 , marks1 ,'<br><br>',subject2 , marks2 ,'<br><br>',subject3 , marks3 ,'<br><br>','total Subject marks',totalMarksPerSubject,'<br><br>','obtainMarks',obtainMarks)

// question 6