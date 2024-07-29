
//counter//
document.addEventListener('DOMContentLoaded', function() {
const counter = document.getElementById("counter");
const board = document.getElementById("board");

let score = 0;

counter.addEventListener('click', () => {
    score++;
    counter.innerHTML = score;
});


//click thingies//
class Clickies {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();
        
    }

    createDomElm(){
        this.domElm = document.createElement("div");
    
        this.domElm.className = "clickies"; 
        this.domElm.style.width = this.width + "vw"; 
        this.domElm.style.height = this.height + "vh"; 
        this.domElm.style.left = this.positionX + "vw"; 
        this.domElm.style.bottom = this.positionY + "vh"; 
    
        board.appendChild(this.domElm);
    
        console.log('Created a clickie:', this.domElm);
    }
}

new Clickies();

});