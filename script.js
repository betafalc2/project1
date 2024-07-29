const counter = document.getElementById("counter");
const board = document.getElementById("board");

let score = 0;

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
            score++;
            counter.innerHTML = score;
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

let timer = 0;

function appearDisappear() {
    setInterval(function () {
        timer++;
        if (timer % 2 !== 0) {
            this.domElm.style.display = "block";
        }
        else {
            this.domElm.style.display = "none";
        }
    }, 1000)

    appearDisappear();
}