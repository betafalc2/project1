const counter = document.getElementById("counter");
const board = document.getElementById("board");
const countingTime = document.getElementById("timer");
const start = document.getElementById("start");

let score = 0;
let timeLeft = 120;

start.addEventListener('click', ()=>{
setInterval(() => {
    countingTime.innerHTML = timeLeft--;

    if (timeLeft === 0) {
        location.href = "./gameover.html";
    }
}, 100);

start.style.display = "none";
});

//click thingies//
class Clickie {
    constructor() {
        this.width = 5;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();
        this.clickClikie();
    }

    createDomElm() {
        this.domElm = document.createElement("div");

        this.domElm.className = "clickies";
        this.domElm.style.width = this.width + "vw";
        this.domElm.style.height = this.height + "vh";
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";
        
        board.appendChild(this.domElm);
    }

    clickClikie(){
        this.domElm.addEventListener('click', () => {
            score++;
            counter.innerHTML = score;

            this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
            this.positionY = Math.floor(Math.random() * (100 - this.height + 1));

            this.domElm.style.left = this.positionX + "vw";
            this.domElm.style.bottom = this.positionY + "vh";
        });
    }
    
}

const clickie = new Clickie();
