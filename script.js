// initialize array food[20]
let food = new Array(20).fill(0)
let moss = 0
let poop = 0

// function: increase food
function increaseFood() {
    let added = false;
    for (let i= 0; i <20; i++){

        if (food[i] == 0){
            food[i] = 1;
            added = true;
            break;
        }
    }        
    if (added == false) {
        console.log("FULL")
        increaseMoss(moss)
    }

    updateDisplay();
}

// function: increase moss
function increaseMoss(moss) {
    moss++;
}

// function Consume food 
function consumeFood() {
    let consumed = false;

    for (let i= 19; i => 0; i--){

        if (food[i] == 1){
            food[i] = 0;
            consumed = true;
            break;
        }        
    }
    if (consumed == false) console.log("EMPTY")
}

// function: increase poop
function increasePoop(poop) {
    poop++;
}

function Clean() {
    moss = 0;
    poop = 0;
    food.fill(0);

    updateDisplay();
}

class Fish {
  constructor(name) {
    this.fishName = name;
    this.health = new Array(100).fill(50);
    this.happy = new Array(10).fill(5);
  }
}

function updateDisplay() {
    const display = document.getElementById('Display');
    display.innerHTML = food.map((f, i) => f ? '🍎' : '⬜').join('');
}

document.getElementById('btn1').addEventListener('click', increaseFood);
document.getElementById('btn2').addEventListener('click', Clean);


updateDisplay();