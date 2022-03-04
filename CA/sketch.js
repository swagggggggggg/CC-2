let screenH= 500;
let screenW= 500;

let data= [
    {label: "Peaches", value: 20},
    {label: "Apples", value: 40},
    {label: "Raspberries", value: 70},
];

// let data = [{ name: "Oranges", total: 23 },
// { name: "Bananas", total: 34 },
// { name: "Pears", total: 23 },
// { name: "Bananas", total: 34 },
// { name: "Pears", total: 23 },
// ];


let listValues = data.map(function(x) { return x.total })


let chartW = 300;
let chartH = 300;
let scaledData = [];
let spacing = 11;
let margin = 30;
let numTicks = 10;
let posX = 50;
let posY = 400;
let tickIncrements;
let maxValue;
let numPlaces = 0;

let showValues = true;
let showLabels = true;
let rotateLabels;

if(data.length>6){
    rotateLabels= true;
} else{
    rotateLabels= false;
}


let colors;

let tickSpacing = chartH / numTicks; //space between ticks on  the left 
let availableWidth = chartW - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

let x;

function setup(){
    createCanvas(screenH, screenW);
    background(0);

    colors = [
        color(120, 30, 100), 
        color(255, 255, 100), 
        color(10, 180, 100), 
        color(250, 70, 120)
    ];

    x= new BarChart(data)
}

function draw(){
    background(30);

    x.render();
}


// function setup() {
//     createCanvas(screenH, screenW);
//     background(0);


//     colors = [
//         color(120, 30, 100), 
//         color(255, 255, 100), 
//         color(10, 180, 100), 
//         color(250, 70, 120)
//     ];

    
//     maxValue = max(listValues);
//     tickIncrements = maxValue / numTicks;

//     for (let i = 0; i < data.length; i++) {
//         let tempVal = map(data[i].total, 0, maxValue, 0, chartH);
//         scaledData.push(tempVal);
//     }


// }



// function draw() {
//     background(50);

//     translate(posX, posY);

//     //chart
//     stroke(255, 180);
//     strokeWeight(1);
//     line(0, 0, 0, -chartH); //y
//     line(0, 0, chartW, 0); //x

//     for (let i = 0; i <= numTicks; i++) {
//         //ticks
//         stroke(255);
//         strokeWeight(1)
//         line(0, tickSpacing * -i, -10, tickSpacing * -i);

//         //horizontal line
//         stroke(255, 50);
//         strokeWeight(1)
//         line(0, tickSpacing * -i, chartW, tickSpacing * -i);

//         //numbers (text)
//         if (showValues) {

//             fill(255, 200);
//             noStroke();
//             textSize(14);
//             textAlign(RIGHT, CENTER);
//             text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
//         }
//     }

//     translate(margin, 0);
//     for (let i = 0; i < scaledData.length; i++) {
//         let colorNumber = i % 4;

//         //bars
//         fill(colors[colorNumber]);
//         noStroke();
//         rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

//         //numbers (text)
//         noStroke();
//         fill(255);
//         textSize(16);
//         textAlign(CENTER, BOTTOM);
//         text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);

//         //text
//         if(showLabels){
//             if(rotateLabels){
//                 push();
//                 noStroke();
//                 fill(255);
//                 textSize(13);
//                 textAlign(LEFT, CENTER);
//                 translate(((barWidth + spacing) * i) + barWidth / 2, 10);
//                 rotate(PI/2);
//                 text(data[i].name, 0, 0);
//                 pop();
//             } else { 
//                 noStroke();
//                 fill(255);
//                 textSize(12);
//                 textAlign(CENTER, BOTTOM);
//                 text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
//             }
//         }
//     }
// }