let chartWidth = 300;
let chartHeight = 300;
let posX= 50;
let posY= 450;

let data= [
    {name: "apples", total: 25},
    {name: "oranges", total: 37},
    {name: "raspberries", total: 17},
    {name: "peaches", total: 7}
];

let listValues= data.map(function (x){return x.total});
let maxValue;

let numPlaces= 0;
let showValues= true;
let showLabels= true;
let rotateLabels= false;

let scaledData = [];
// let dataLabels = data.name;

let spacing = 10;
let margin = 20;
let numTicks = 10;

let tickIncrements;

let colors;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(500,500);
    background(0);

    colors= [
        color('#ffe066'),
        color('#fab066'),
        color('#f68f6a'),
        color('#f3646a'),
    ]

    maxValue = max(listValues);
    tickIncrements = maxValue / numTicks;

    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);
    translate(posX, posY);


    //chart
    stroke(255, 200);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight); //y
    line(0, 0, chartWidth, 0); //x

    for(let i=0; i<=numTicks; i++){
        //across graph
        stroke(255, 50);
        line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);

        //ticks
        stroke(255);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

        //numbers (text)
        fill(255);
        noStroke();
        textSize(11);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for(let i=0; i<scaledData.length; i++){
        let colorNumber= i % 4;
        //limits value between 0, 1, 2, 3 through a division: 1/4= 0 REMAINDER 1. the remainder is the value.

        //bars
        fill(colors[colorNumber])
        // fill(110, 40+ i*30, 130);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        //numbers (text)
        if(showValues){
            noStroke();
            fill(255);
            textSize(15);
            textAlign(CENTER, BOTTOM);
            text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        } 

        //text
        if(showLabels){
            if(rotateLabels){
                push();
                noStroke();
                fill(255);
                textSize(13);
                textAlign(LEFT, CENTER);
                translate(((barWidth + spacing) * i) + barWidth / 2, 10);
                rotate(PI/2);
                text(data[i].name, 0, 0);
                pop();
            } else { 
                noStroke();
                fill(255);
                textSize(13);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }
        }
    }
}