let colorSet1 = [
    "blue",
    "yellow",
    "red",
    "green"
];
let colorSet2 = [
    "purple",
    "orange",
    "pink",
    "indigo"
];

function options() {
    //top
    fill(colorSet1[0]);
    triangle(0,0,windowWidth,0,windowWidth/2,windowHeight/2);
    //left
    fill(colorSet1[1]);
    triangle(0,0,0,windowHeight,windowWidth/2,windowHeight/2);
    //bottom
    fill(colorSet1[2]);
    triangle(0,windowHeight,windowWidth,windowHeight,windowWidth/2,windowHeight/2);
    //right
    fill(colorSet1[3]);
    triangle(windowWidth,windowHeight,windowWidth,0,windowWidth/2,windowHeight/2);
    
}