
//setTimeOut is a javascript method
let colorpick1;
let numberPicked;
let i = 0;

let colorSet1 = [
    "blue",
    "yellow",
    "red",
    "green"
];
let colorSet2 = [
    "lightseagreen",
    "darkorange",
    "violet",
    "olivedrab"
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

    if (isNaN(value)) {
        colorpick1 = value;
        
        if ((colorpick1 == 'red' || colorpick1 == 'green' || colorpick1 == 'blue' || colorpick1 == 'yellow') && keyCode == 'Enter') {
            document.getElementById("next_stage").style.display = 'block';
            colors = setInterval(() => {
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
                    i = 0;
                    clearInterval(colors);
                }
                }, 1000);
            
        }
    } else {
        numberPicked = value;
        if (keyCode == "Enter") {            
            numbers = setInterval(() => {
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
                if (i>=value) {
                    i = 0;
                    clearInterval(numbers);
                    // enables the relevant buttons
                    if (t0.style.borderBottomColor == colorSet1[0]) {
                        document.getElementById("redbutton").disabled = false;
                        document.getElementById("bluebutton").disabled = false;
                        document.getElementById("yelbutton").disabled = false;
                        document.getElementById("grebutton").disabled = false;
                        document.getElementById("orgbutton").disabled = true;
                        document.getElementById("tealbutton").disabled = true;
                        document.getElementById("pinkbutton").disabled = true;
                        document.getElementById("olivebutton").disabled = true;
                    } else if (t0.style.borderBottomColor == colorSet2[0]) {
                        document.getElementById("orgbutton").disabled = false;
                        document.getElementById("tealbutton").disabled = false;
                        document.getElementById("pinkbutton").disabled = false;
                        document.getElementById("olivebutton").disabled = false;
                        document.getElementById("redbutton").disabled = true;
                        document.getElementById("bluebutton").disabled = true;
                        document.getElementById("yelbutton").disabled = true;
                        document.getElementById("grebutton").disabled = true;
                    }
                }
                }, 1000);
            }
        }
}

function hideFirstStage() {
    //removes first stage instructions
    document.getElementById("first instruction").style.display = "none";
    document.getElementById("first input").style.display = "none";    
}

function showSecondStage() {
    //reveals second stage instructions
    document.getElementById("second instruction").style.display = "block";
    document.getElementById("second input").style.display = "block";
    document.getElementById("next_stage").style.display = "none";
}

function revealButtons() {
    tlist = document.getElementsByClassName("triangle");
    t0 = tlist[0];
    
    document.getElementById("redbutton").style.display = "inline";
    document.getElementById("bluebutton").style.display = "inline";
    document.getElementById("yelbutton").style.display = "inline";
    document.getElementById("grebutton").style.display = "inline";
    document.getElementById("orgbutton").style.display = "inline";
    document.getElementById("olivebutton").style.display = "inline";
    document.getElementById("tealbutton").style.display = "inline";
    document.getElementById("pinkbutton").style.display = "inline";
}

function fortunes(colorpick2) {

    // hide the buttons and instructions
    document.getElementById("second instruction").style.display = "none"
    document.getElementById("second input").style.display = "none"
    document.getElementById("triangle").style.display = "none"
    document.getElementById("redbutton").style.display = "none";
    document.getElementById("bluebutton").style.display = "none";
    document.getElementById("yelbutton").style.display = "none";
    document.getElementById("grebutton").style.display = "none";
    document.getElementById("orgbutton").style.display = "none";
    document.getElementById("olivebutton").style.display = "none";
    document.getElementById("tealbutton").style.display = "none";
    document.getElementById("pinkbutton").style.display = "none";
    //reveal the play again option
    document.getElementById("play again").style.display = "block";
    //reveal prompt
    document.getElementById("fortune").style.display = "block";
    
    if(colorpick1 == "blue") {
                    
        if (colorpick1 == 'red') {
            document.getElementById("1blue1red").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("twoblue").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1blue1yel").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1blue1gre").style.display = "block";

        }
    }

    else if(colorpick1 == "red") {
        if (colorpick1 == 'red') {
            document.getElementById("twored").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1red1blue").style.display = "block"

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1red1yel").style.display = "block"

        } else if (colorpick1 == 'green') {
            document.getElementById("1red1gre").style.display = "block"
            
        }
    }

    else if(colorpick1 == "yellow") {
        if (colorpick1 == 'red') {
            document.getElementById("1yel1red").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1yel1blue").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("twoyel").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1yel1gre").style.display = "block";
            
        }
    }

    else if(colorpick1 == "green") {
        if (colorpick1 == 'red') {
            document.getElementById("1gre1red").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1gre1blue").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1gre1yel").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("twogre").style.display = "block";
            
        }
    }

    else if(colorpick1 == "orange") {
        if (colorpick1 == 'red') {
            document.getElementById("1red1org").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1blue1org").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1yel1org").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1gre1org").style.display = "block";
            
        }
    }

    else if(colorpick1 == "pink") {
        if (colorpick1 == 'red') {
            document.getElementById("1red1pink").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1blue1pink").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1yel1pink").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1gre1pink").style.display = "block";
            
        }
    }

    else if(colorpick1 == "olive") {
        if (colorpick1 == 'red') {
            document.getElementById("1red1oli").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1blue1oli").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1yel1oli").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1gre1oli").style.display = "block";
            
        }
    }

    else if(colorpick1 == "teal") {
        if (colorpick1 == 'red') {
            document.getElementById("1red1t").style.display = "block";

        } else if (colorpick1 == 'blue') {
            document.getElementById("1blue1t").style.display = "block";

        } else if (colorpick1 == 'yellow') {
            document.getElementById("1yel1t").style.display = "block";

        } else if (colorpick1 == 'green') {
            document.getElementById("1gre1t").style.display = "block";
            
        }
    }   
    
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    //background(0);    
}


function draw() {

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