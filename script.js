const counter = document.getElementById("counter");
const board = document.getElementById("board");
const countingTime = document.getElementById("timer");

let score = 0;
let timeLeft = 120;


//click thingies//
class Clickie {
    constructor() {
        this.width = 5;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();

        this.domElm.addEventListener('click', () => {
            this.domElm.remove();
            timeLeft--;
            score++;
            counter.innerHTML = score;
            setInterval(function () {
                this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
                this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
                this.createDomElm();
            }, 1000)

            setInterval(function () {
                countingTime.innerHTML = timeLeft--;
                
            if (timeLeft === 0) {
                location.href = "gameover.html";
            }
            }, 100);
        });
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
}

const clickie = new Clickie();
