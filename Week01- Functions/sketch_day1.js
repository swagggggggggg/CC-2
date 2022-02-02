// let distance= 5

// String "dickhead"
// Float 2
// int 3
// Boolean false
// Array[]

// Object()


// doSomething
// ^ VARIABLE CALL EXAMPLE

// someFunc(2, 7)
// addUp(5, 6)
// ^ FUNCTION/ METHOD CALL EXAMPLES

let numOfBoxes= 7
let boxW= 21
let boxH= 21
let boxSpace= 30

let xOffset= 150
let yOffset= 150
// improve later with screenW/H.....
 

function setup(){
    createCanvas(500, 500);
    background(205);
}

function draw(){
    drawBoxes();
}

// if(x==2){
//     console.log("hiii");
// }
// ^if statement -> CONDITIONAL STATEMENT
// = -> ASSIGNS X VALUE 2
// == -> CHECKS IF X EQUALS 2

function drawBoxes(){
    fill(200, 30, 140);
    noStroke();

    // rect(100, 100, 20, 20);
    // rect(130, 100, 20, 20);
    // rect(160, 100, 20, 20);
    // ^ OBV GARBAGE!!!

    for(let c= 0; c<numOfBoxes; c++){
        for(let b= 0; b<numOfBoxes; b++){
            rect(xOffset + b*boxSpace, yOffset + c*boxSpace, boxW, boxH);
        }
    }
}

function someFunc(num1, num2){
    // ^ FUNCTION DECLARATION/ INITIALISATION

    let loopCount= num2- num1

        for(let i=0; i<=loopCount; i++){
        console.log("deez " + (num1+i));
        }

    return "A";
    // ^ STATEMENT (anything inside {}) (maybe)
}

function addUp(addNum1, addNum2){
    let G= addNum1 + addNum2;
    console.log("um");
    return G;
}


//yfvfylfyilyil