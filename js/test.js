
//setTimeOut is a javascript method

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fill(0);
    input = createInput('');
    width = textWidth(input);
    console.log(width);
    input.position((windowWidth/2)-width, windowHeight-windowHeight/4);
    
}

function draw() {
    //top
    fill("blue");
    triangle(0,0,windowWidth,0,windowWidth/2,windowHeight/2);
    //left
    fill("yellow");
    triangle(0,0,0,windowHeight,windowWidth/2,windowHeight/2);
    //bottom
    fill("red");
    triangle(0,windowHeight,windowWidth,windowHeight,windowWidth/2,windowHeight/2);
    //right
    fill("green");
    triangle(windowWidth,windowHeight,windowWidth,0,windowWidth/2,windowHeight/2);

    fill("white");
    textSize(50);
    textAlign("center");
    text("Pick a color!",windowWidth/2,windowHeight/4)

    
}