function boxGrid(numBoxes, strokeColor, strokeGirth){
    let boxSize= width/numBoxes;

    for(let j=0; j<numBoxes; j++){
        for(let i=0; i<numBoxes; i++){
            noFill();
            stroke(strokeColor);
            strokeWeight(strokeGirth)
            rect(i*boxSize, j*boxSize, boxSize, boxSize);
        }
    }

    return boxSize;
}