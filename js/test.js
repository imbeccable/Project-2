
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

/* 
function makeKEy() {
    sessionStorage.setItem("gateKey", true);
}

function checkForKey() {
    if (sessionStorage.getItem("gateKey") == true) {
        console.log("got key");
    }
}
*/

function changeTriColor(value, event) {
    var keyCode = event.key;
    tlist = document.getElementsByClassName("triangle");
    t0 = tlist[0];
    let i = 0;

    if (isNaN(value)) {
        if (keyCode == "Enter") {
            
            console.log(i)
            interval = setInterval(() => {
                //bottom triangle
                if (t0.style.borderBottomColor == colorSet1[0]) 
                    {t0.style.borderBottomColor = colorSet2[0];}
                else 
                    {t0.style.borderBottomColor = colorSet1[0];}
                //left triangle   
                if (t0.style.borderLeftColor == colorSet1[1]) 
                    {t0.style.borderLeftColor = colorSet2[1];}
                else 
                    {t0.style.borderLeftColor = colorSet1[1];} 
                //top triangle        
                if (t0.style.borderTopColor == colorSet1[2]) 
                    {t0.style.borderTopColor = colorSet2[2];}
                else 
                    {t0.style.borderTopColor = colorSet1[2];} 
                //right triangle        
                if (t0.style.borderRightColor == colorSet1[3]) 
                    {t0.style.borderRightColor = colorSet2[3];}
                else 
                    {t0.style.borderRightColor = colorSet1[3];}
                i++;
                if (i>value.length) {
                    clearInterval(interval);
                }
                }, 1000);
            
        }
    } else {
        for (i;i<value;i++); {
            console.log(i)
            setInterval(() => {
                //bottom triangle
                if (t0.style.borderBottomColor == colorSet1[0]) 
                    {t0.style.borderBottomColor = colorSet2[0];}
                else 
                    {t0.style.borderBottomColor = colorSet1[0];}
                //left triangle   
                if (t0.style.borderLeftColor == colorSet1[1]) 
                    {t0.style.borderLeftColor = colorSet2[1];}
                else 
                    {t0.style.borderLeftColor = colorSet1[1];} 
                //top triangle        
                if (t0.style.borderTopColor == colorSet1[2]) 
                    {t0.style.borderTopColor = colorSet2[2];}
                else 
                    {t0.style.borderTopColor = colorSet1[2];} 
                //right triangle        
                if (t0.style.borderRightColor == colorSet1[3]) 
                    {t0.style.borderRightColor = colorSet2[3];}
                else 
                    {t0.style.borderRightColor = colorSet1[3];}
                }, 1000);
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //background(0);    
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