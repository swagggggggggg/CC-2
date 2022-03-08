class HBarChart {
    constructor(_data) {
        this.data = _data;
        this.posX = screenW - chartW - posX;
        this.posY = posY;
        this.chartWidth = chartW;
        this.chartHeight = chartH;
        this.margin = margin;
        this.spacing = spacing;

        this.showLabels = showLabels;
        this.showValues = showValues;

        this.numTicks = numTicks;

        this.remainingSpace;
        this.barWidth;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;

        this.updateValues();
    }

    updateValues() {
        this.remainingSpace = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartWidth / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = (this.maxValue / this.numTicks);
    }

    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawAxis();
        this.drawBars();
        pop();
    }

    drawTicks() {
        textSize(12);
        textAlign(RIGHT, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(1);
            line(i * this.tickSpace, 0, i * this.tickSpace, 0);

            stroke(255, 50);
            strokeWeight(1);
            line(i * this.tickSpace, 0, i * this.tickSpace, -this.chartWidth);

            noStroke();
            fill(255, 200);
            text((round(i * this.tickIncrement)), 5 + (i * this.tickSpace), 15);
        }
    }

    drawAxis() {
        //title
        fill(255);
        textSize(30);
        textAlign(CENTER, BOTTOM);
        text("fart", this.chartWidth/2, -this.chartHeight);

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
        translate(1, -this.chartHeight + this.margin)
        for (let i = 0; i < this.data.length; i++) {
            let colorNum= i%4;

            fill(colors[colorNum]);
            strokeWeight(0);
            rect(0, i * (this.barWidth + this.spacing), this.scaledData(this.data[i].value), this.barWidth);

            //stacked???
            // rect(0, i * (this.barWidth + this.spacing), this.barWidth, -this.scaledData(-this.data[i].value));


            if (this.showValues) {
                noStroke();
                fill(255, 199);
                textSize(12);
                textAlign(LEFT, CENTER);
                text(this.data[i].value, this.scaledData(this.data[i].value) + 3, i * (this.barWidth + this.spacing) + this.barWidth / 2);
            }

            if (this.showLabels) {
                noStroke();
                fill(255);
                textSize(12);
                textAlign(RIGHT, CENTER);
                text(this.data[i].label, -10, i * (this.barWidth + this.spacing) + this.barWidth / 2);
                }
            }
    }


}