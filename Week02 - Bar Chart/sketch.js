let screenW= 500;
let screenH= 500;

let chartW= 400;
let chartH= 400;
let margin= 20;
let spacing= 10;
let numChecks= 10;
let checkSpacing= chartW/numChecks;
let checkIncrements;
let labelSpacing= 5;

let data        = [50, 110, 200, 150, 50, 40, 60, 80, 100, 120, 30, 80];
let dataLabels  = ["d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "a", "a"]
let scaledData= []

let availableWidth= chartW- ((margin*2)+(spacing*(data.length-1)));
let barWidth= availableWidth/ data.length;

function setup(){
    createCanvas(screenW, screenH);
    background(20);

    maxValue = max(data)
    checkIncrements= Math.round(maxValue/ numChecks);

    for(let i=0; i<data.length; i++){
        let tempVal= map(data[i], 0, max(data), 0, chartH);
        scaledData.push(tempVal);
    }
}

function draw(){
    background(0);

    push();
    translate(50, 450);

    fill(255);
    stroke(255, 180);
    strokeWeight(2.5);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    //vertical check lines (the numbers that denote values on the chart)
    for(k= 0; k<=numChecks; k++){
        stroke(255);
        strokeWeight(1.3);
        line(0, -checkSpacing*k, -checkSpacing/4, -checkSpacing*k);

        // check text 
        fill(230, 30, 130);
        noStroke();
        textAlign(RIGHT, CENTER);
        textSize(12);
        text(k*checkIncrements, -checkSpacing/3, -checkSpacing*k);
    }

    //bars
    translate(margin, 0);
    //translates to margin from the graph's (0, 0) (aggregate translation)
    for(i= 0; i<scaledData.length; i++){
        fill(110, 40+ i*30, 130);
        noStroke();
        rect((barWidth+ spacing)* i, 0, barWidth, -scaledData[i]);

        //text declaring height (AKA data amount)
        fill(0, 200, 130);
        textAlign(CENTER, BOTTOM);
        textSize(15);
        text(data[i], (barWidth+ spacing)* i + barWidth/2, -scaledData[i]);

        // label text
        fill(0, 200, 130);
        textAlign(CENTER, TOP);
        textSize(15);
        text(dataLabels[i], (barWidth+ spacing)* i + barWidth/2, labelSpacing);
    }
}