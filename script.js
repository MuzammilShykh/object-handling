// program 1

var div = document.getElementById("divProgram1");
var pTag = document.createElement("p");
div.appendChild(pTag)
pTag.style.color = "green"

function program1() {
    var fullDate = new Date()
    month = fullDate.getMonth() + 1


    var date = `"${month}/${fullDate.getDate()}/${fullDate.getFullYear()}"`
    console.log(date);
    pTag.innerHTML = `Current Date =>> ${date}`

}



// program 2
var div2 = document.getElementById("divProgram2");
var pTag2 = document.createElement("p");
div2.appendChild(pTag2)
pTag2.style.color = "green"
function program2() {
    var monthName = document.getElementById("selectMonth").value;
    //console.log(monthName)

    var days;


    switch (monthName) {

        case "january":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "febraury":
            days = "28 or 29"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "march":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "april":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "may":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "june":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "july":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "august":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "september":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "october":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "november":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "december":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;

        default:
            pTag2.style.color = "red"
            pTag2.innerHTML = `Please Select atleast one option`
            break;
    }







}



// program 3 
var div3 = document.getElementById("divProgram3");
var pTag3 = document.createElement("p");
div3.appendChild(pTag3)
pTag3.style.color = "green"



function program3() {
    try {
        var getDate = document.getElementById("program3").value;

        var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var getMonth = new Date(getDate)
        getMonth = getMonth.getMonth()
        monthName = months[getMonth]
        // console.log(monthName);
        if (monthName === undefined) {
            throw "Please Follow the Correct Format"
        }
        else {
            pTag3.innerHTML = `Month Name =>> ${monthName}`
        }
    }
    catch (err) {
        pTag3.style.color = "red"
        pTag3.innerHTML = err
    }



}





// program 4
var div4 = document.getElementById("divProgram4");
var pTag4 = document.createElement("p");
div4.appendChild(pTag4)
pTag4.style.color = "green"

function program4() {
    try {
        var minutes = document.getElementById("program4").value;
        minutes = parseInt(minutes)

        var date = new Date()

        date.setMinutes(minutes)

        if (date == "Invalid Date") {
            throw "Please Enter a Number"
        } else {
            console.log(date);
            pTag4.innerHTML = `${date}`
        }
    }

    catch (err) {
        pTag4.style.color = "red"
        pTag4.innerHTML = err
    }

}






//program 5
var div5 = document.getElementById("divProgram5");
var pTag5 = document.createElement("p");
div5.appendChild(pTag5)
pTag5.style.color = "green"

function program5() {


    try {
        var date = document.getElementById("program5").value;
        date = parseInt(date)
        var month = document.getElementById("program5a").value;
        month = parseInt(month)
        var year = document.getElementById("program5b").value;
        year = parseInt(year)
        //  var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var getDate = new Date()
        getDate.setDate(date)
        getDate.setMonth(month - 1)
        getDate.setFullYear(year)
        var day = getDate.getDay()
        console.log(day);
        if (isNaN(day) !== false) {

            throw "Please Follow the Correct Format / Invalid Values"
        }
        if (day == 0 || day == 6) {
            console.log("Happy Weekend");
            pTag5.innerHTML = `Happy Weekend!`
        }

        else {
            console.log("Not a Weekend");
            pTag5.innerHTML = `Not a Weekend`
        }





    }
    catch (err) {
        pTag5.style.color = "red"
        pTag5.innerHTML = err
    }



}



//program 6
var div6 = document.getElementById("divProgram6");
var pTag6 = document.createElement("p");
div6.appendChild(pTag6)
pTag6.style.color = "green"

function program6() {
    try {
        var date = document.getElementById("program6").value;
        date = parseInt(date)
        var month = document.getElementById("program6a").value;
        month = parseInt(month)
        var year = document.getElementById("program6b").value;
        year = parseInt(year)
        var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var oldDate = new Date(`${date} ${months[month]},${year}`)

        var getDate = new Date(`${date} ${months[month]},${year}`)
        var getDay = getDate.getDay()
        var daySingle = days[getDay]
        console.log(getDate);
        getDate.setDate(date - 1)

       


        if (getDate == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            console.log(date);
            pTag6.innerHTML = `Input Day=>> ${oldDate} <br> Output =>> ${getDate} `
        }
    }

    catch (err) {
        pTag6.style.color = "red"
        pTag6.innerHTML = err
    }






}



//program 7 

var div7 = document.getElementById("divProgram7");
var pTag7 = document.createElement("p");
div7.appendChild(pTag7)
pTag7.style.color = "green"

function program7() {
    var inputstr = document.getElementById("program7").value;
    var inputChar = document.getElementById("program7a").value;
    indexCal = ""
    if ((/[a-zA-Z]/).test(inputChar, inputstr)) {

        if (inputstr.search(inputChar) !== -1) {

            for (let i = 0; i < inputstr.length; i++) {
                if (inputstr.charAt(i) == inputChar) {
                    indexCal += i + ","

                }

            }
            console.log(`${inputChar} Occurs at index : ${indexCal}`);
            pTag7.innerHTML = `${inputChar} Occurs at index : ${indexCal}`
        }
        else {
            pTag7.style.color = "red"
            pTag7.innerHTML = `Characater Not Found`
        }




    }
    else {
        pTag7.style.color = "red"
        pTag7.innerHTML = `invalid input`
    }
}




// prgram 8 
var div8 = document.getElementById("divProgram8");
var pTag8 = document.createElement("p");
div8.appendChild(pTag8)
pTag8.style.color = "green"

function program8() {
    var inputstr = document.getElementById("program8").value;
    var inputChar = document.getElementById("program8a").value;
    var count = 0;
    if ((/[a-zA-Z]/).test(inputChar, inputstr)) {

        if (inputstr.search(inputChar) !== -1) {

            for (let i = 0; i < inputstr.length; i++) {
                if (inputstr.charAt(i) == inputChar) {
                    count = count + 1
                }

            }
            pTag8.innerHTML = ` Your character occurs ${count} times`








        } else {
            pTag8.style.color = "red"
            pTag8.innerHTML = `Characater Not Found`
        }







    }
    else {

        pTag8.style.color = "red"
        pTag8.innerHTML = `Invalid Input`
    }
}





// program 9 
var div9 = document.getElementById("divProgram9");
var pTag9 = document.createElement("p");
div9.appendChild(pTag9)
pTag9.style.color = "green"
function program9() {
    var inputstr = document.getElementById("program9").value;
    var inputChar = document.getElementById("program9a").value;
    if ((/[a-zA-Z]/).test(inputChar, inputstr)) {
        if (inputstr.search(inputChar) !== -1) {
            var index = inputstr.search(inputChar);
            var newStr = inputstr.slice(0, index) + inputstr.slice(index + 1)
            pTag9.innerHTML = `${newStr}`

        } else {
            pTag9.style.color = "red"
            pTag9.innerHTML = `Character not found`
        }



    }
    else {
        pTag9.style.color = "red"
        pTag9.innerHTML = `Invalid Input`
    }



}






//program 10
var div10 = document.getElementById("divProgram10");
var pTag10 = document.createElement("p");
div10.appendChild(pTag10)
pTag10.style.color = "green"


function program10() {
    var inputstr = document.getElementById("program10").value;
    var inputChar = document.getElementById("program10a").value;
    if ((/[a-zA-Z]/).test(inputChar, inputstr)) {
        if (inputstr.search(inputChar) !== -1) {
            var index = inputstr.lastIndexOf(inputChar);
            var newStr = inputstr.slice(0, index) + inputstr.slice(index + 1)
            pTag10.innerHTML = `${newStr}`

        } else {
            pTag10.style.color = "red"
            pTag10.innerHTML = `Character not found`
        }



    }
    else {
        pTag10.style.color = "red"
        pTag10.innerHTML = `Invalid Input`
    }
}


//program  11
var div11 = document.getElementById("divProgram11");
var pTag11 = document.createElement("p");
div11.appendChild(pTag11)
pTag11.style.color = "green"


function program11() {
    var inputstr = document.getElementById("program11").value;
    var inputChar = document.getElementById("program11a").value;
    var index = ""
    if ((/[a-zA-Z]/).test(inputChar, inputstr)) {
        if (inputstr.search(inputChar) !== -1) {
            for (let i = 0; i < inputstr.length; i++) {
                if (inputstr.charAt(i) == inputChar) {
                    index += i + ""


                    console.log(index);
                    newArray = inputstr.split("")

                    console.log(newArray);








                }


            }

            indexArray = index.split()


            //var index = inputstr.lastIndexOf(inputChar);

            //pTag11.innerHTML = `${newStr}`
            //console.log(index);

        } else {
            pTag11.style.color = "red"
            pTag11.innerHTML = `Character not found`
        }



    }
    else {
        pTag11.style.color = "red"
        pTag11.innerHTML = `Invalid Input`
    }
}







//program 12

var div12 = document.getElementById("divProgram12");
var pTag12 = document.createElement("p");
div12.appendChild(pTag12)
pTag12.style.color = "green"




function program12() {
    var numInput = document.getElementById("program12").value;
    numInput = parseInt(numInput)
    //console.log(numInput);
    var sum = 0;
    for (let i = 1; i < numInput; i++) {
        sum = sum + i;

    }
    //console.log(sum);
    pTag12.innerHTML = `Sum = ${sum}`
}


//program 13

var div13 = document.getElementById("divProgram13");
var pTag13 = document.createElement("p");
div13.appendChild(pTag13)
pTag13.style.color = "green"


function program13() {
    var numInput = document.getElementById("program13").value;
    numInput = parseInt(numInput)
    var sum = 0
    if ((/^[0-9]+$/).test(numInput)) {
        for (let i = 0; i < numInput; i++) {
            if (i % 2 == 0) {
                sum = sum + i
            }

        }

        console.log(sum);
        pTag13.innerHTML = `Sum = ${sum}`
    }
    else {

        pTag13.innerHTML = `please Enter a number`
    }

}




// program 14


var div14 = document.getElementById("divProgram14");
var pTag14 = document.createElement("p");
div14.appendChild(pTag14)
pTag14.style.color = "green"



function program14() {

    var numInput = document.getElementById("program13").value;
    numInput = parseInt(numInput)
    var sum = 0
    if ((/^[0-9]+$/).test(numInput)) {
        for (let i = 0; i < numInput; i++) {
            if (i % 2 !== 0) {
                sum = sum + i
            }

        }

        console.log(sum);
        pTag13.innerHTML = `Sum = ${sum}`
    }
    else {

        pTag13.innerHTML = `please Enter a number`
    }

}







// program 15

var div15 = document.getElementById("divProgram15");
var pTag15 = document.createElement("p");
div15.appendChild(pTag15)
pTag15.style.color = "green"



function program15() {

    var numInput = document.getElementById("program15").value;
    numInput = parseInt(numInput)
    var result = ""
    if ((/^[0-9]+$/).test(numInput)) {

        for (let i = 1; i <= 10; i++) {
            calculation = numInput * i
            result = result + `${numInput} * ${i} = ${calculation} <br>`
        }

        pTag15.innerHTML = `Your Table is here : <br> ${result}`
    }



    else {
        pTag15.innerHTML = `please Enter a number`
    }

}

// PROGRAM 16

var div16 = document.getElementById("divProgram16");
var pTag16 = document.createElement("p");
div16.appendChild(pTag16)
pTag16.style.color = "green"


function program16() {
    var numInput = document.getElementById("program16").value;
    var lastIndex = numInput.length - 1;
    // console.log(lastIndex);
    var firstDigit = numInput.charAt(0)
    var lastDigit = numInput.charAt(lastIndex)

    pTag16.innerHTML = `First Digit => ${firstDigit} <br> Last Digit => ${lastDigit}`
}






// program 17
var div17 = document.getElementById("divProgram17");
var pTag17 = document.createElement("p");
div17.appendChild(pTag17)
pTag17.style.color = "green"



function program17() {
    var numInput = document.getElementById("program17").value;
    var lastIndex = numInput.length - 1;
    // console.log(lastIndex);
    var firstDigit = numInput.charAt(0)
    var lastDigit = numInput.charAt(lastIndex)
    var intDigit1 = parseInt(firstDigit)
    var intDigit2 = parseInt(lastDigit)
    var sum = intDigit1 + intDigit2
    console.log(sum);
    pTag17.innerHTML = `Sum = ${sum}`
}



// program  18
var div18 = document.getElementById("divProgram18");
var pTag18 = document.createElement("p");
div18.appendChild(pTag18)
pTag18.style.color = "green"


function program18() {
    var sum = 0
    var numInput = document.getElementById("program18").value;



    for (let i = 0; i < numInput.length; i++) {
        sum = sum + parseInt(numInput.charAt(i))

    }


    pTag18.innerHTML = `Sum of all Digits = ${sum}`

}

// program 19..........


var div19 = document.getElementById("divProgram19");
var pTag19 = document.createElement("p");
div19.appendChild(pTag19)
pTag19.style.color = "green"


function program19() {
    var numInput = document.getElementById("program19").value;
    var result = 1;
    for (let i = 0; i < numInput.length; i++) {
        result = result * parseInt(numInput.charAt(i))

    }


    //console.log(countNum);
    pTag19.innerHTML = `Product of Digits ${result}`
}


// program 20

var div20 = document.getElementById("divProgram20");
var pTag20 = document.createElement("p");
div20.appendChild(pTag20)
pTag20.style.color = "green"

function program20() {
    var numInput = document.getElementById("program20").value;
    if (numInput > 9) {
        var lastIndex = numInput.length - 1;

        var firstDigit = numInput.charAt(0)
        var lastDigit = numInput.charAt(lastIndex)

        newNum = lastDigit + numInput.slice(1, lastIndex) + firstDigit
        pTag20.style.color = "green"

        pTag20.innerHTML = `Swapping First & Last Digits : ${newNum}`;
    } else {
        pTag20.style.color = "red"
        pTag20.innerHTML = `Please Enter Atleast Two Digit Number`
    }

}




// program 21
var div21 = document.getElementById("divProgram21");
var pTag21 = document.createElement("p");
div21.appendChild(pTag21)
pTag21.style.color = "green"


function program21() {

    var strInput = document.getElementById("program21").value;
    var char1 = document.getElementById("program21a").value;
    var char2 = document.getElementById("program21b").value;
    console.log(strInput);
    console.log(char1);
    console.log(char2);

    if ((/[a-zA-Z]/).test(char1, strInput, char2)) {
        if (strInput.search(char1) !== -1) {
            // for (let i = 0; i < strInput.length; i++) {
            //if (strInput.charAt(i) == char1) {

            newStr = strInput.replace(char1, char2)
            pTag21.innerHTML = `New String :${newStr}`





        }


        else {
            pTag21.style.color = "red"
            pTag21.innerHTML = `Character not found`


        }

    }

    else {
        pTag21.style.color = "red"
        pTag21.innerHTML = `Invalid Input`
    }

}







// program 22

var div22 = document.getElementById("divProgram22");
var pTag22 = document.createElement("p");
div22.appendChild(pTag22)
pTag22.style.color = "green"


function program22() {

    var strInput = document.getElementById("program22").value;
    var char1 = document.getElementById("program22a").value;
    var char2 = document.getElementById("program22b").value;
    //console.log(strInput);
    // console.log(char1);
    // console.log(char2);

    if ((/[a-zA-Z]/).test(char1, strInput, char2)) {
        if (strInput.search(char1) !== -1) {
            for (let i = 0; i < strInput.length; i++) {
                if (strInput.charAt(i) == char1) {
                    index = strInput.lastIndexOf(strInput.charAt(i))
                    //console.log(index);




                    var newStr = strInput.split("")

                    //console.log(newStr);

                    newStr.splice(index, 1, char2)
                    //console.log(newStr);
                    var finalStr = newStr.join("")



                    //strInput[index] = char2
                    pTag22.innerHTML = `New String : ${finalStr}`
                    // console.log(finalStr);


                }


            }


        }

        else {
            pTag22.style.color = "red"
            pTag22.innerHTML = `Character not found`


        }

    }

    else {
        pTag22.style.color = "red"
        pTag22.innerHTML = `Invalid Input`
    }

}







// program 23
var div23 = document.getElementById("divProgram23");
var pTag23 = document.createElement("p");
div23.appendChild(pTag23)
pTag23.style.color = "green"



function program23() {
    var strInput = document.getElementById("program23").value;
    var char1 = document.getElementById("program23a").value;
    var char2 = document.getElementById("program23b").value;
    //console.log(strInput);
    // console.log(char1);
    // console.log(char2);
    var temporaryVariable = []
    if ((/[a-zA-Z]/).test(char1, strInput, char2)) {
        if (strInput.search(char1) !== -1) {
            for (let i = 0; i < strInput.length; i++) {
                if (strInput.charAt(i) == char1) {
                    index = i
                    console.log(index);




                    var newStr = strInput.split("")

                    //console.log(newStr);

                    newStr.splice(index, 1, char2)
                    console.log(newStr);
                    var finalStr = temporaryVariable.join("")
                    console.log(finalStr);


                    //strInput[index] = char2




                }


            }
            console.log(finalStr);
            //pTag23.innerHTML = `New String : ${finalStr}`

        }

        else {
            pTag23.style.color = "red"
            pTag23.innerHTML = `Character not found`


        }

    }

    else {
        pTag23.style.color = "red"
        pTag23.innerHTML = `Invalid Input`
    }

}






// program 24

var div24 = document.getElementById("divProgram24");
var pTag24 = document.createElement("p");
div24.appendChild(pTag24)
pTag24.style.color = "green"


function program24() {


    var strInput = document.getElementById("program24").value;
    for (let i = 0; i < alphabets.length; i++) {
        // if (strInput.charAt(i) ==   ) {

        // } 



    }
    console.log(count);

}






// program 25

var div25 = document.getElementById("divProgram25");
var pTag25 = document.createElement("p");
div25.appendChild(pTag25)
pTag25.style.color = "green"



function program25() {
    var blankSpcStr = document.getElementById("program25").value;
    var blankSpc = blankSpcStr.replace(/ /g, "")
    pTag25.innerHTML = `Answer is : ${blankSpc}`
}


// program  26
var div26 = document.getElementById("divProgram26");
var pTag26 = document.createElement("p");
div26.appendChild(pTag26)
pTag26.style.color = "green"


function program26() {
    var userLeading = document.getElementById("program26").value;
    var leadingStr = userLeading.trimLeft()
    if (userLeading == "") {
        alert("Enter a string value")
    }
    else if (leadingStr == userLeading) {
        console.log(`${userLeading} does not contain any Leading spaces`);
        pTag26.innerHTML = `${userLeading} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before = "${userLeading}" string After = "${leadingStr}"`);
        alert(`String before = "${userLeading}" String After = "${leadingStr}"`)
    }
}




// program 27

var div27 = document.getElementById("divProgram27");
var pTag27 = document.createElement("p");
div27.appendChild(pTag27)
pTag27.style.color = "green"


function program27() {
    var userTrailing = document.getElementById("program27").value;
    var trailingStr = userTrailing.trimRight()
    if (userTrailing == "") {
        alert("Enter a string value")
    }
    else if (trailingStr == userTrailing) {
        console.log(`${userTrailing} does not contain any Leading spaces`);
        pTag27.innerHTML = `${userLeading} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before  = "${userTrailing}" String After = "${trailingStr}"`);
        alert(`String Before = "${userTrailing}" String After = "${trailingStr}"`)
    }

}


// program 4 (28)

var div28 = document.getElementById("divProgram28");
var pTag28 = document.createElement("p");
div28.appendChild(pTag28)
pTag28.style.color = "green"


function program28() {
    var userTL = document.getElementById("program28").value;
    var trimStr = userTL.trim()
    if (userTL == "") {
        alert("Enter a string value")
    }
    else if (trimStr == userTL) {
        console.log(`${userTL} does not contain any Leading spaces`);
        pTag28.innerHTML = `${userTL} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before  = "${userTL}" String After = "${trimStr}"`);
        alert(`String before trim  = "${userTL}" Required string = "${trimStr}"`)
    }


}

// program 5 (29)
var div29 = document.getElementById("divProgram29");
var pTag29 = document.createElement("p");
div29.appendChild(pTag29)
pTag29.style.color = "green"


function program29() {
    var inputArray1 = [];
    var mergeNum1 = document.getElementById("program29").value;
    var inputArray2 = [];
    var mergeNum2 = document.getElementById("program29a").value;

    if (mergeNum1 < 0 || mergeNum2 < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < mergeNum1; i++) {
            inputArray1[i] = prompt(`Array 1 element` + (i + 1));
        }
        for (var i = 0; i < mergeNum2; i++) {
            inputArray2[i] = prompt(`Array 2 element` + (i + 1));
        }
        console.log(inputArray1);
        console.log(inputArray2);
    }
    mergeOutput = inputArray1.concat(inputArray2)
    pTag29.innerHTML = `Array 1 = [${inputArray1}]<br> Array 2 = [${inputArray2}] <br> Merged Array = [${mergeOutput}]`
    //console.log(`Array 1 = [${inputArray1}] Array 2 = [${inputArray2}] Merged Array = [${mergeOutput}]`);


}
// program 30
var div30 = document.getElementById("divProgram30");
var pTag30 = document.createElement("p");
div30.appendChild(pTag30)
pTag30.style.color = "green"

function program30() {
    var inputArray = [];
    var dupNum = document.getElementById("program30").value;
    if (dupNum < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < dupNum; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        //console.log(inputArray);
    }
    inputArray = [...new Set(inputArray)]
    pTag30.innerHTML = `New Array is Here :- <br> [${inputArray}]`
    // console.log(`Array after deleting duplicate elements :- [${inputArray}]`);
}



// program 31

var div31 = document.getElementById("divProgram31");
var pTag31 = document.createElement("p");
div31.appendChild(pTag31)
pTag31.style.color = "green"






function program31() {
    var inputArray = [];
    var numDup = document.getElementById("program31").value;
    if (numDup < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < numDup; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        console.log(inputArray);
    }
    var outputArray = [...new Set(inputArray)].length
    if (outputArray == inputArray.length) {
        outputArray = 0
    }
    else {
        outputArray = (outputArray - inputArray.length) * (-1)
    }

    pTag31.innerHTML = `Number of duplicate elements In Array Are :- <br> ${outputArray}`
    //console.log(`Number of duplicate elements in given array is :- ${outputArray}`);
}





// program 32

var div32 = document.getElementById("divProgram32");
var pTag32 = document.createElement("p");
div32.appendChild(pTag32)
pTag32.style.color = "green"

function program32() {
    var inputArray = [];
    var numUnique = document.getElementById("program32").value;
    if (numUnique < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < numUnique; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        //console.log(inputArray);
    }
    uniqueArray = [...new Set(inputArray)]
    pTag32.innerHTML = `Unique Elements of [${inputArray}] are :- <br> ${uniqueArray}`
    //console.log(`Unique Elements of [${inputArray}] are ${uniqueArray}`);
}


// program 33

var div33 = document.getElementById("divProgram33");
var pTag33 = document.createElement("p");
div33.appendChild(pTag33)
pTag33.style.color = "green"

function program33() {
    var inputArray = [];
    var outputArray = []
    var reverseNum = document.getElementById("program33").value;
    if (reverseNum < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < reverseNum; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        //console.log(inputArray);
    }
    outputArray = inputArray.reverse()
    //console.log(outputArray);
    pTag33.innerHTML = `Reversed Array = ${outputArray}`
}



// program 34

var div34 = document.getElementById("divProgram34");
var pTag34 = document.createElement("p");
div34.appendChild(pTag34)
pTag34.style.color = "green"

function program34() {
    var CP = parseFloat(document.getElementById("program34").value)
    var SP = parseFloat(document.getElementById("program34a").value)
    if (CP > SP) {
        var loss = CP - SP
        pTag34.innerHTML = `Cost Price : ${CP}<br> Sell Price : ${SP}<br>Loss : ${loss}`
    }
    else if (CP < SP) {
        var profit = SP - CP
        pTag34.innerHTML = `Cost Price : ${CP}<br>Sell Price : ${SP}<br>Profit: ${profit}`
    }
    else if (CP == SP) {
        pTag34.innerHTML = `Cost Price :${CP}<br>Sell Price : ${SP}<br>Neither Profit Nor Loss`
    }
    else {
        alert("Enter Valid Prices")
    }
}



// program 35

var div35 = document.getElementById("divProgram35");
var pTag35 = document.createElement("p");
div35.appendChild(pTag35)
pTag35.style.color = "green"

function program35() {
    var root1, root2;
    var a = parseFloat(document.getElementById("program35").value)
    var b = parseFloat(document.getElementById("program35a").value)
    var c = parseFloat(document.getElementById("program35b").value)
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        pTag35.innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
        //console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        pTag35.innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
        // console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else if (discriminant < 0) {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        pTag35.innerHTML = `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        //console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
    else {
        alert("Invalid Input")
    }
}