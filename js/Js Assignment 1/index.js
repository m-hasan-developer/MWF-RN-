// Stu Data
var total_marks = 700;
var Stu_Name = prompt("Enter Your Name");
var Stu_RollNum = parseInt(prompt("Enter Your Roll Num"));
var Stu_Class = parseInt(prompt("Enter Your Class"));

// Stu Sub Marks

var eng = parseInt(prompt("enter your eng marks"));
var maths = parseInt(prompt("enter your maths marks"));
var phy = parseInt(prompt("enter your phy marks"));
var che = parseInt(prompt("enter your che marks"));
var cs = parseInt(prompt("enter your cs marks"));
var ur = parseInt(prompt("enter your ur marks"));
var ist = parseInt(prompt("enter your ist marks"));

var stu_obt_marks = eng + maths + phy +che +cs + ur + ist;

var Stu_percentage = (stu_obt_marks / total_marks) * 100;

//  show data 
document.write( "Student Name ", Stu_Name ,"<br/>" );
document.write( "Roll Num ", Stu_RollNum ,"<br/>" );
document.write( "Class ", Stu_Class ,"<br/>" );
document.write(`Your eng marks is ${eng}` ,"<br/>" );
document.write(`Your maths marks is ${maths}` ,"<br/>" );
document.write(`Your phy marks is ${phy}` ,"<br/>" );
document.write(`Your che marks is ${che}` ,"<br/>" );
document.write(`Your cs marks is ${cs}` ,"<br/>" );
document.write(`Your ur marks is ${ur}` ,"<br/>" );
document.write(`Your ist marks is ${ist}` ,"<br/>" );
document.write("Total Marks " , total_marks ,"<br/>" );
document.write("Obtained Marks " , stu_obt_marks ,"<br/>" );
document.write("Percentage " , Stu_percentage,"%" ,"<br/>" );




