let screenH= 1000;
let screenW= 1000;

let data= [
    {label: "Peaches", value: 20},
    {label: "Apples", value: 40},
    {label: "Raspberries", value: 70},
    {label: "Coconuts", value: 35},
];

let barChart01;

let posX = 50;
let posY = 400;
let chartW = 300;
let chartH = 300;
let margin = 30;
let spacing = 11;

let showLabels = true;
let showValues = true;

let rotateLabels;

if(data.length>4){
    rotateLabels= true;
} else{
    rotateLabels= false;
}

let numTicks = 10;
let colors;

function setup(){
    createCanvas(screenH, screenW);
    background(0);

    colors = [
        color(120, 30, 100), 
        color(255, 255, 100), 
        color(10, 180, 100), 
        color(250, 70, 120)
    ];

    barChart01= new BarChart(data)
}

function draw(){
    background(30);

    barChart01.updateValues();
    barChart01.render();
}