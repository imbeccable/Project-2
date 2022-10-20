
//setTimeOut is a javascript method
let colorPicked = false;

let colorSet1 = [
    "blue",
    "yellow",
    "red",
    "green"
];
let colorSet2 = [
    "darkorange",
    "purple",
    "lightgreen",
    "pink"
];

// function options() {
//     //top
//     fill(colorSet1[0]);
//     triangle(0,0,windowWidth,0,windowWidth/2,windowHeight/2);
//     //left
//     fill(colorSet1[1]);
//     triangle(0,0,0,windowHeight,windowWidth/2,windowHeight/2);
//     //bottom
//     fill(colorSet1[2]);
//     triangle(0,windowHeight,windowWidth,windowHeight,windowWidth/2,windowHeight/2);
//     //right
//     fill(colorSet1[3]);
//     triangle(windowWidth,windowHeight,windowWidth,0,windowWidth/2,windowHeight/2);
    
// }

function changeTriColor() {
    tlist = document.getElementsByClassName("triangle");
    
    t0 = tlist[0];
    t1 = tlist[1];
    t2 = tlist[2];
    t3 = tlist[3];

    t0.style.borderBottomColor = colorSet1[0]
    //console.log(t0);
    //TODO: for chosen color, loop through length of color word and change the
    //color for each i. wait an amount of time between each change
    for (i=0;i<colorSet1[0].length;i++) {
        setTimeout(() => {            
            if (t0.style.borderBottomColor == colorSet1[0]) 
                {t0.style.borderBottomColor = colorSet2[0];}
            else if(t0.style.borderBottomColor == colorSet2[0]) 
                {t0.style.borderBottomColor = colorSet1[0]}              
            },1000);
    }
    // t1.style.borderBottomColor = colorSet2[1];
    // t2.style.borderBottomColor = colorSet2[2];
    // t3.style.borderBottomColor = colorSet2[3];
    //console.log(t0.style.borderBottomColor);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);    
}


function draw() {
    
    //options();

    if (!colorPicked) {
        fill("white");
        textSize(50);
        textAlign("center");
        text("Pick a color!",windowWidth/2,windowHeight/4);

        //on click, colorPicked = true
    }

    let colorPick = "";
    
    //switch case for deciding story path
    switch(colorPick) {
        case 'blue':

        case 'red':

        case 'yellow':

        case 'green':

        default:
            //error "choose one of the visible colors"
    }

    //could use alert for fortunes

    // get by ID via html
    // let h1 = document.getElementById('headerOne');
    // h1.style.color = 'blue';
    // h1.style.backgroundColor;

    // get by tag name
    //let headTwo = document.getElementsByTagName('h2');

    //navigate like an array
    //headTwo[0].style.color = 'red';

    //let listItems = document.getElementsByTagName('li')
    //listItms[2].textContent = 'third item'
}