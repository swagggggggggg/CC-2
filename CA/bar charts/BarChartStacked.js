class SBarChart{
    constructor(_data){
        this.stackedData = _data;
        this.title= titleStacked;
        this.posX = screenW - screenW + posX;
        this.posY = screenH - 35;
        this.chartWidth = chartW;
        this.chartHeight = chartH;
        this.margin = margin;
        this.spacing = spacing;

        this.showLabels = showLabels;
        this.showValues = showValues;
        this.rotateLabels= rotateLabels;

        this.numTicks = numTicks;

        this.remainingSpace;
        this.barWidth;
        this.tickSpacing;
        this.tickIncrement;
        this.maxValue;

        this.updateValues();
    }

    updateValues() {
        this.remainingSpace = this.chartWidth - (this.margin * 2) - (this.spacing * (this.stackedData.length - 1));
        this.barWidth = this.remainingSpace / this.stackedData.length;
        this.tickSpace = this.chartHeight / this.numTicks;
        let listValues = this.stackedData.map(function(x) { return x.total });
        this.maxValue = max(listValues);
        this.tickIncrement = (this.maxValue / this.numTicks);
    }

    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawBars();
        //this.drawAverageLine();
        this.drawAxis();
        pop();
    }

    // will potentially be finished and working on github submission
    // drawAverageLine(){
    //     push();
    //     translate(this.margin, 0);

    //     stroke(255);
    //     strokeCap(SQUARE);
    //     strokeWeight(10);
    //     beginShape(LINES);
    //     vertex((this.barWidth + this.spacing) + this.barWidth / 2, -this.scaledData(this.stackedData[0].average));
    //     vertex(120, -300);
    //     // vertex(i * (this.barWidth + this.spacing) + this.barWidth / 2, this.stackedData[1].average);
    //     endShape();

    //     pop();

    //     // vertex(this.barWidth/2, stackedData[i].average);
    // }

    drawTicks() {
        textSize(12);
        textAlign(RIGHT, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(1);
            line(0, i * -this.tickSpace, 0, i * -this.tickSpace);

            stroke(255, 50);
            strokeWeight(1);
            line(0, i * -this.tickSpace, this.chartWidth, i * -this.tickSpace);

            noStroke();
            fill(255, 200);
            text(round(i * this.tickIncrement), -10, -i * this.tickSpace);
        }
    }

    drawAxis() {
        translate(-this.margin, 0)
        //title
        fill(255);
        textSize(20);
        textAlign(CENTER, BOTTOM);
        text(this.title, this.chartWidth/2, -this.chartHeight- 20);
        //y Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, 0, -this.chartHeight);
        //x Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, this.chartWidth, 0);
    }

    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
        return newValue;
    }

    drawBars() {
        translate(this.margin, 0);
        for (let i = 0; i < this.stackedData.length; i++) {
            push();

            for (let w = 0; w < this.stackedData[i].values.length; w++) {
                let colorNum = w % 4;
                fill(colors[colorNum]);

                noStroke();
                rect(i * (this.barWidth + this.spacing), 0, this.barWidth, this.scaledData(-this.stackedData[i].values[w]));

                translate(0, this.scaledData(-this.stackedData[i].values[w]));
            }

            pop();
            
            if (this.showValues) {
                noStroke();
                fill(255, 199);
                textSize(12);
                textAlign(CENTER, BOTTOM);
                text((this.stackedData[i].total).toFixed(2), i * (this.barWidth + this.spacing) + this.barWidth / 2, this.scaledData(-this.stackedData[i].total) - 3);
            }

            if(this.stackedData.length>4){
                this.rotateLabels= true;
            } else{
                this.rotateLabels= false;
            }

            if (this.showLabels) {
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(255);
                    textSize(13);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, -(this.chartHeight-this.chartHeight)+10);
                    rotate(PI/2);
                    text(this.stackedData[i].label, 0, 0);
                    pop();
                } else { 
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(CENTER, BOTTOM);
                    text(this.stackedData[i].label, i * (this.barWidth + this.spacing) + this.barWidth / 2, 25);
                }
            }

        }
    }


}