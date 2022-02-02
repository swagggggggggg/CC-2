function boxGrid(numBoxes, strokeColor, strokeGirth){
    let boxSize= width/numBoxes;

    for(let j=0; j<numBoxes; j++){
        for(let i=0; i<numBoxes; i++){
            noFill();
            stroke(strokeColor);
            strokeWeight(strokeGirth);

            push()
            translate(i*boxSize, j*boxSize);
            rotate(25);
            rect(0, 0, boxSize, boxSize);
            pop()
        }
    }

    return boxSize;
}