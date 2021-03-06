/***
 * After this comment I have defined a javascript reference of our fields from the HTML document and the paragraph in which we'll have our result displayed
 * Notice the '#num1' is the id="num1" from the HTML? this is how we create references
 * To get the actual value of the field we have this code (which is used in all exercise functions below) 'nameOfReference.value' where nameOfReference is the name of the selected element
 *  TIP: the values of the fields will always be strings, so to convert them we use Number.parseFloat(nameOfVariable) which returns the number if it's able to convert it
 *  Bonus points for making the code look clean and well formatted with properly named constants/variables in english
 *  Bonus points for creating more fields and defining references in javascript
 *  TIP: reuse functions
 *  TIP: you can use google, we're not communist school teachers
 */
const field1 = document.querySelector('#num1');
const field2 = document.querySelector('#num2');
const resultContainer = document.querySelector('#resultParagraph');
function checkValid(a) {
    return (!isNaN(a)) && (a > 0)
}


function firstExercise() {
    const val1 = field1.value; //  here I assign val1 the value of the first field at the time this function is called - these two are only accessible in this function
    const val2 = field2.value; //  here I assign val2 the value of the second field at the time this function is called - this is by default a string
    /***
    *  Exercise 1:
     *  a) define a function that validates the first field's value to be a whole positive number greater than 0, (returns true or false)
     *  b) define a function that returns the factorial of the parameter it's given and display the result on the page (not using alert/console.log), see below
     *  if the input is invalid show a proper message 'Invalid number'
    ***/

    function factorial(a) {
        let rezultat = 1;
        for (let i = 1; i <= a; i++) {
            rezultat = i * rezultat;
        }
        a = rezultat;
        return a;
    }



    const isValid = checkValid(val1) && checkValid(val2);
    const isFactorial = factorial(val1) + factorial(val2);
    resultContainer.innerHTML = isValid ? isFactorial : 'invali number';//This is how you show the result (what is after the equal will be displayed in the page)
}

function secondExercise() {
    const val1 = field1.value;
    const val2 = field2.value;
    /***
     *  Exercise 2:
     *  a) Define a function that takes as parameters: 2 numbers, and a function reference
     *  this function should return the value the function it's given only if both the numbers are even, otherwise, return undefined
     *  b) define 3 functions:
     *      1) take in a number parameter and square it
     *      2) take in a parameter and return the square root
     *      3) takes in a parameter and console logs and returning nothing
     *  display the added value of calling the function 3 times each with the different function passed as the 3rd parameter
     *  Acceptance criteria: program runs without throwing errors and proper result is displayed
     ***/
    function check(number1, number2, functie) {
        if (number1 % 2 == 0 && number2 % 2 == 0)
            return functie(number1);
        else
            return undefined;
    }
    function square(a) {
        return a * a;
    }
    function radical(a) {
        return Math.sqrt(a);
    }
    function afisare(a) {
        alert(a);
    }
    resultContainer.innerHTML = (check(val1, val2, square) ?? 0) + (check(val1, val2, radical) ?? 0) + (check(val1, val2, afisare) ?? 0);

}

function thirdExercise() {
    const val1 = field1.value;
    const val2 = field2.value;
    /***
     *  Exercise 3:
     *  Create a function that compares the two numbers after validating them
     *  should return 0 if equal, -1 if num1 < num2 and 1 if num1 > num2
     *  use the function previously to validate the input
     *  Use this function to display the biggest value from the two
     ***/
    function compare(number11, number12) {
        if (checkValid(number11) && checkValid(number12)) {
            if (number11 == number12)
                return 0;
            else {
                if (number11 > number12)
                    return 1;
                else
                    return -1;
            }
        }
    }
    /*let comparatie = compare(val1, val2);
    let a = (comparatie == 0) ? val1 :
        ((comparatie == 1) ? val1 :
            val2);
    alert(a);
*/
    let a=compare(val1,val2); let result;
    switch (a) {
        case 0:
            result = val1;   
            break;
        case 1:
            result=val1;
            break;
        case -1:
            result=val2;
            break;
        default:
            result=undefined;
            break;
    }


    resultContainer.innerHTML = result;
}

function fourthExercise() {
    const val1 = field1.value;
    /***
     *  Exercise 4:
     *  Create a function that strips a string of non-numeric characters and converts the result into a whole number.
     *  Use this function to extract the number from the first field
     ***/
    function findNum(sir)
    {
        let num=0;
        for(let i=0;i<sir.length;i++)
        {
            if(!isNaN(sir[i]))
                num=+sir[i]+num*10;
        }
        return num;}
    
    resultContainer.innerHTML = findNum(val1);;

}

function fifthExercise() {

    const val1 = field1.value;
    /***
     *  Exercise 5:
     *  Sort the digits of the number entered by the user in descending order and display them
     *  Use the function written previously to validate the input
     *  Program should show the repeating digits as well
     ***/
    function sortare(a = '')
    {
        if(checkValid(a))
            return a.split('').sort().reverse();
        else
            return "invalid";
    }


    resultContainer.innerHTML = sortare(val1);
}
function sixthExercise() {

    /***
     *  Exercise 6:
     *  write a function that returns the next 20 leap years (an bisect) as a string separated by a ', ' after each year
     *  display the value returned
     ***/
    function years()
    {
        let result="";
        let today=new Date();
        let yyyy = today.getFullYear();
        today=yyyy;
        let i=0;
        while(i<20)
        {
            if (today%4==0)
            {
                result=`${result}, ${today}`;
                i++;
                today++;
            }
            else
                today++;
        }
        return result;
    }
    


    resultContainer.innerHTML = years();
}

/***
 SPECIAL NOTES:
 This is not a test but a learning experience.
 ask any question, google things, tinker, refine, etc
 final form of this program should be the best quality possible, no matter the time spend or resources used to create it

 Have fun!
 if you finish all of these and want more
 https://adriann.github.io/programming_problems.html
 here are some cool problems to figure out

 no stress no grades just engineering
 ***/
