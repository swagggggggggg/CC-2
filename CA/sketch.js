let screenH= 900;
let screenW= 900;

let vert;
let hori;
let stacked;

let titleVertical= "Screen Time (daily)";
let titleHorizontal= "idk!!";
let titleStacked= "Average Steps Over a Month (in weeks)";

let data= [
    {label: "Peaches", value: 20},
    {label: "Apples", value: 40},
    {label: "Raspberries", value: 70.65657},
    {label: "Coconuts", value: 100},
    {label: "Pineapples", value: 25},
];

let stackedData= [
    {label: "April '21", total: 33224, values: [3041, 8954, 7030, 14199], average: [8306]},
    {label: "September '21", total: 160330, values: [41184, 52810, 18620, 47716], average: [40082.5]},
    {label: "December '21", total: 91566, values: [13113, 29460, 15614, 33369], average: [22891.5]},
];

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

    vert= new VBarChart(data)
    hori= new HBarChart(data)
    stacked= new SBarCHart(stackedData);
}

function draw(){
    background(30);
    
    vert.updateValues();
    vert.render();

    hori.updateValues();
    hori.render();

    stacked.updateValues();
    stacked.render();
}