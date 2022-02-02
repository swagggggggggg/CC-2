function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    boxGrid(20, color(255, 20, 140), 3)
    boxGrid(50, color("white"), 1)
}


// myArray[1]
// will call the array and display index 1

// myObject.age
// will call the object and diplay the value for age- better for clarity and readability of code


// different coordinate sytems (layers)

// function setup(){
//     ..
//     rectMode(CENTER)
//     angleMode(DEGREES)
// }

// function draw(){
//     background(255);

//     push()
//     translate(50, 50)
//     fill(255, 0, 0)
//     rotate(..)
//     rect(..)
//     pop()

//     rect(..)

// }