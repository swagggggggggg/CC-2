let screenH= 900;
let screenW= 900;

let vert;
let hori;
let stacked;

let titleVertical= "Phone Screen Time (in hours)";
let titleHorizontal= "Most Used Apps Over a Week (in hours)";
let titleStacked= "Average Steps Over a Month (in weeks)";

let data= [
    {label: "Monday", value: 14},
    {label: "Tuesday", value: 10},
    {label: "Wednesday", value: 9},
    {label: "Thursday", value: 11},
    {label: "Friday", value: 16},
    {label: "Saturday", value: 19},
    {label: "Sunday", value: 18},
];

let horizontalData= [
    {label: "Youtube", value: 14.99},
    {label: "Spotify", value: 20.08},
    {label: "Instagram", value: 6.52},
    {label: "TikTok", value: 9.88},
    {label: "Netflix", value: 3.25},
]

let stackedData= [
    {label: "April '21", total: 33224, values: [3041, 8954, 7030, 14199], average: [8306]},
    {label: "September '21", total: 160330, values: [41184, 52810, 18620, 47716], average: [40082.5]},
    {label: "December '21", total: 91566, values: [13113, 29460, 15614, 33369], average: [22891.5]},
];

let posX = 60;
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
    hori= new HBarChart(horizontalData)
    stacked= new SBarChart(stackedData);
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