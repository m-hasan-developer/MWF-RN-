// MATH EXPRESSIONS  

// 1. Write a program that take two numbers & 
// add them in a new variable.

// var num1 = 13;
// var num2 = 9;
// var num3 = num1+num2

// var ans =`sum of ${num1} and ${num2} is ${num3}  `;

// alert=(ans);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// var num1 = 13;
// var num2 = 9;
// var num3 = num1-num2

// var ans =`subtraction of ${num1} and ${num2} is ${num3}  `;

// alert=(ans);

// var num1 = 13;
// var num2 = 9;
// var num3 = num1*num2

// var ans =`multiplication of ${num1} and ${num2} is ${num3}  `;

// alert=(ans);

// var num1 = 13;
// var num2 = 9;
// var num3 = num1/num2

// var ans =`division of ${num1} and ${num2} is ${num3}  `;
// console.log("🚀 ~ ans:", ans)

// alert=(ans);

// var num1 = 13;
// var num2 = 9;
// var num3 = num1%num2;

// var ans =`modulus of ${num1} and ${num2} is ${num3}  `;

// alert=(ans);


// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
//  b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
//  Page 2 of 11 MATH EXPRESSIONS | JAVASCRIPT 
//  c. Initialize the variable with some number. 
//  d. Show the value of variable in your browser like “Initial value: 3”. 
//  e. Increment the variable. 
//  f. Show the value of variable in your browser like “Value after increment is: 4”.
//   g. Add 7 to the variable.
//    h. Show the value of variable in your browser like “Value after addition is: 11”. 
//     i. Decrement the variable. 
//     j. Show the value of variable in your browser like “Value after decrement is: 10”.
//      k. Show the remainder after dividing the variable’s value by 3. 
//      Output : “The remainder is : 1” 

// var num0 ;
// document.write(`<p> Value after variable declaration is:${num0}</p> <br>`);
// num0 = 3;
// document.write(`<p> Initial value: ${num0}</p> <br>`);
// document.write(`<p> Value after increment is: ${++num0}</p> <br>`);
// num0 += 7;
// document.write(`<p> Value after addition is:  ${num0} </p> <br>`);
// document.write(`<p> Value after decrement is:  ${--num0} </p> <br>`);
// console.log("🚀 ~ num0:", num0)
// document.write(`<p> The remainder is : ${num0 % 3} </p> <br>`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable 
// & calculate the cost of buying 5 tickets to a movie.


// var ticket = 600;
// var buy = 5;

// var ans =`Total Cost is ${ticket*5} `;
// document.write(`<p>${ans}</p> <br>`)

// 5. Write a script to display multiplication table of any number in your browser. 
// var four = 4;

// document.write(`<h1>Multiplication Table of 2<h1/> <br>`);
// document.write(`<p>4 x 1 = ${four * 1}</p> <br>`);
// document.write(`<p>4 x 2 = ${four * 2}</p> <br>`);
// document.write(`<p>4 x 3 = ${four * 3}</p> <br>`);
// document.write(`<p>4 x 4 = ${four * 4}</p> <br>`);
// document.write(`<p>4 x 5 = ${four * 5}</p> <br>`);
// document.write(`<p>4 x 6 = ${four * 6}</p> <br>`);
// document.write(`<p>4 x 7 = ${four * 7}</p> <br>`);
// document.write(`<p>4 x 8 = ${four * 8}</p> <br>`);
// document.write(`<p>4 x 9 = ${four * 9}</p> <br>`);
// document.write(`<p>4 x 10 = ${four * 10}</p> <br>`);

// 6.)) The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a. Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. MATH EXPRESSIONS | JAVASCRIPT
//  c. Now store a Fahrenheit temperature into a variable. 
//  d. Convert it to Celsius & output “NNoF is NNoC”.
//   Conversion Formulae: Example Output: 

// var celsius = 25;
// var c_formula = (`${(celsius * 9/5) + 32} `);
// console.log("🚀 ~ c_formula:", c_formula)

// var fahr = 77;

// var c_fahr = (`${(fahr - 32) * 5/9} `);
// console.log("🚀 ~ c_fahr:", c_fahr)



// 7.) Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//  Store the following in variables 
//  a.  Price of item 1 
//  b. Price of item 2 
//  c. Ordered quantity of item 1  
//  d. Ordered Quantity of item 2 
//  e. Shipping charges 


// var item1Price = 560;
// var item2Price = 200;

// var item1Qt = 2;
// var item2Qt = 5;

// var dc = 150;


// document.write(`<p>price of item 1 is ${item1Price}</p>`);
// document.write(`<p>price of item 2 is ${item2Price}</p>`);
// document.write(`<p>quantity of item 1 is ${item1Qt}</p>`);
// document.write(`<p>quantity of item 2 is ${item2Qt}</p>`);
// document.write(`<p>DC is ${dc}</p>`);
// document.write(`<p>total cost is ${item1Price * item1Qt + item2Price * item2Qt + dc}</p>`);



// 8. Write a script to take total marks & marks obtained by a student. Compute the percentage 


// var obtainedMarks =900;
// var TotalMarks =1200;
// var percentage = (900/1200)*100;
// console.log("🚀 ~ percentage:", percentage,"%");

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable.
//  b. Store their birth year in a variable.
//   c. Calculate their 2 possible ages based on the stored values.
//    Output them to the screen like so: “They are either NN or NN years old”. 


// var dob =2000;
// var currentY = 2026;

// var ans = currentY - dob;
// console.log("🚀 ~ ans:", ans)

// var newans = --ans;
// console.log("🚀 ~ newans:", newans)

// console.log(`They are either ${ans} or ${newans} years old`)


// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, 
// and output “The circumference is NN”.  
// (Hint : Circumference of a circle = 2 π r ,   π = 3.142) 
// Calculate the area based on the radius, 
// and output “The area is NN”. 
// (Hint : Area of a circle = π r2,  π = 3.142) 

// var radius = 12;
// var circumference = 2*3.142*12;
// console.log("🚀 ~ circumference:", circumference)

// var area = 3.142 * 12*12;
// console.log("🚀 ~ area:", area)


// 13. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

// var num = 11;
// console.log("🚀 ~ num:", num)
// ++num;
// console.log("🚀 ~ num:", num)
// --num;
// console.log("🚀 ~ num:", num)
// --num
// console.log("🚀 ~ num:", num);

// 14. What will be the output in variables 
// a, b & result after execution of the following script:
//  var a = 2, b = 1; var result = --a   -   --b   +   ++b  +   b--;
//  Explain the output at each stage:
//  --a; --a   -   --b; --a   -   --b   +   ++b; --a   -   --b   +   ++b  +   b--; 
// var a = 2;
// var b = 1;
//               1    -    0    +   1    +   1
// var result = --a   -   --b   +   ++b  +   b--; 
// console.log("🚀 ~ result:", result)


// 15. The Lifetime Supply Calculator:
//  Ever wonder how much a “lifetime supply” of your favorite snack is?
//   Wonder no more.
//    a. Store your favorite snack into a variable 
//    b. Store your current age into a variable. 
//    c. Store a maximum age into a variable. 
//    d. Store an estimated amount per day (as a number). 
//    e. Calculate how many would you eat total for the rest of your life.
//     Page 10 of 11 MATH EXPRESSIONS |
//      JAVASCRIPT  Page 11 of 11  Output the result to the screen like so: 
//      “You will need NNNN to last you until the ripe old age of NN”. 


// var snak = "chilimili";
// var age = 18;
// var  maxage = 19;
// var perdaycost = 15;

// var totalEat = 15 * 365 ;
// console.log("🚀 ~ totalEat:", `You will need ${totalEat} to last you until the ripe old age of ${maxage}`)
