
const finalScore = localStorage.getItem("counter");
const displayScore = document.querySelector(".counter");
const boardGameOver = document.getElementById("board");

displayScore.innerHTML = finalScore;


const nanas = document.getElementById("foto-nanas");

class Nanas {
    constructor() {
        this.width = 35;
        this.height = 35;
        this.positionX = 18;
        this.positionY = 29;
        this.createDomElm();
    }
    createDomElm() {
        this.domElm = document.createElement("div");
        this.domElm.className = "bomb";

        const img = document.createElement("img");
        img.src = 'gatos.gif';
        img.style.width = '180%';
        img.style.height = '180%';
        img.style.objectFit = 'contain';

        this.domElm.style.width = this.width + "vw";
        this.domElm.style.height = this.height + "vh";
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";
        this.domElm.style.position = 'absolute';
        this.domElm.style.zIndex = '-1'

        this.domElm.appendChild(img);
        board.appendChild(this.domElm);
    }
}
const displayNanas = new Nanas();
