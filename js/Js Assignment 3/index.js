var Maths = parseInt(prompt("Enter Your Maths Marks"));
var Phy = parseInt(prompt("Enter Your Phy Marks"));
var Urdu = parseInt(prompt("Enter Your Urdu Marks"));
var Eng = parseInt(prompt("Enter Your Eng Marks"));
var Pst = parseInt(prompt("Enter Your Pst Marks"));

var Total_Num = 500;

var Obt_Num   = Maths + Phy + Urdu + Eng + Pst;

var Percentage = (Obt_Num/Total_Num)*100;

if ( Percentage >= 90 && Percentage <=100 ) {

console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is A`);
    alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is A`);
}
else if( Percentage >= 80 && Percentage <=100 )
    {
     console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is B`);  
     alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is B`); 
    }
    else if (Percentage >= 70 && Percentage <=100) {
        console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is C`);
     alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is C`);
    }
    else if (Percentage >= 60 && Percentage <=100) {
        console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is D`);
     alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is D`);
    }
    else if (Percentage >= 50 && Percentage <=100) {
        console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is E`);
     alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is E`);
    }
  else{
      console.log(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is F`);
     alert(`Your total marks are ${Total_Num}, your obtained marks are ${Obt_Num}
    , your percentage is ${Percentage}%, and your grade is F`);
  }
