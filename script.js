
const counter = document.getElementsByClassName("counter");
const countersArr = [...counter];
const board = document.getElementById("board");
const countingTime = document.getElementById("timer");
const start = document.getElementById("start");


let score = 0;
let timeLeft = 60;

//timer//
start.addEventListener('click', () => {
    new ClickieMinina();
    new ClickieNanas();

    setInterval(() => {
        countingTime.innerHTML = timeLeft--;

        if (timeLeft === 0) {
            localStorage.setItem("counter", score);
            location.href = "./gameover.html";
        }
    }, 300);

    setTimeout(() => {
        new Bomb();
    }, 600);

    start.style.display = "none";
});


//click thingies//
class ClickieMinina {
    constructor() {
        this.width = 20;
        this.height = 25;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();
        this.clickClikie();
    }

    createDomElm() {
        this.domElm = document.createElement("div");
        this.domElm.className = "clickies";

        const img = document.createElement("img");
        img.src = 'minina-santa.png';
        img.style.width = '100%';
        img.style.height ='100%';
        img.style.objectFit= 'contain';

        this.domElm.style.width = this.width + "vw";
        this.domElm.style.height = this.height + "vh";
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";

        this.domElm.appendChild(img);
        board.appendChild(this.domElm);
    }

    clickClikie() { //update score and move to random position//
        this.domElm.addEventListener('click', () => {
            score++;
            countersArr.forEach(element => {
                element.innerHTML = score;
            });

            this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
            this.positionY = Math.floor(Math.random() * (100 - this.height + 1));

            this.domElm.style.left = this.positionX + "vw";
            this.domElm.style.bottom = this.positionY + "vh";
        })

    }

}

class ClickieNanas {
    constructor() {
        this.width = 20;
        this.height = 25;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();
        this.clickClikie();
    }

    createDomElm() {
        this.domElm = document.createElement("div");
        this.domElm.className = "clickies";

        const img = document.createElement("img");
        img.src = 'nanas3-santo.png';
        img.style.width = '100%';
        img.style.height ='100%';
        img.style.objectFit= 'contain';

        this.domElm.style.width = this.width + "vw";
        this.domElm.style.height = this.height + "vh";
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";

        this.domElm.appendChild(img);
        board.appendChild(this.domElm);
    }

    clickClikie() { //update score and move to random position//
        this.domElm.addEventListener('click', () => {
            score++;
            countersArr.forEach(element => {
                element.innerHTML = score;
            });

            this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
            this.positionY = Math.floor(Math.random() * (100 - this.height + 1));

            this.domElm.style.left = this.positionX + "vw";
            this.domElm.style.bottom = this.positionY + "vh";
        })

    }

}

class Bomb {
    constructor() {
        this.width = 20;
        this.height = 25;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
        this.createDomElm();
        this.clickBomb();
        this.moveBomb();
    }

    createDomElm() {
        this.domElm = document.createElement("div");
        this.domElm.className = "bomb";

        const img = document.createElement("img");
        img.src = 'cookie-diabo.png';
        img.style.width = '100%';
        img.style.height ='100%';
        img.style.objectFit= 'contain';

        this.domElm.style.width = this.width + "vw";
        this.domElm.style.height = this.height + "vh";
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";

        this.domElm.appendChild(img);
        board.appendChild(this.domElm);
    }

    clickBomb() { //update score and move to random position//
        this.domElm.addEventListener('click', () => {
            localStorage.setItem("counter", score);
            location.href = "./gameover.html";

        })
    }
    moveBomb() {
        setInterval(() => {
            this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
            this.positionY = Math.floor(Math.random() * (100 - this.height + 1));

            this.domElm.style.left = this.positionX + "vw";
            this.domElm.style.bottom = this.positionY + "vh";
        }, 1000);

    }
}