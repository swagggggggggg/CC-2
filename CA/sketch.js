let screenH= 900;
let screenW= 900;

let data= [
    {label: "Peaches", value: 20},
    {label: "Apples", value: 40},
    {label: "Raspberries", value: 70},
    {label: "Coconuts", value: 100},
    {label: "Pineapples", value: 25},
];

let barChart01;
let barChart02;

let posX = 50;
let posY = 400;
let chartW = 300;
let chartH = 300;
let margin = 30;
let spacing = 11;

let showLabels = true;
let showValues = true;

let rotateLabels;

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

    barChart01= new VBarChart(data)
    barChart02= new HBarChart(data)
}

function draw(){
    background(30);

    barChart01.updateValues();
    barChart01.render();

    barChart02.updateValues();
    barChart02.render();
}