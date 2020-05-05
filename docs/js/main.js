"use strict";
class GameObject extends HTMLElement {
    constructor() {
        super();
    }
}
class Bomb extends GameObject {
    constructor() {
        super();
        this.posy = 0;
        this.posx = 0;
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = Math.floor(Math.random() * Math.floor(innerWidth));
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
    }
    update() {
        if (this.posy > innerHeight + 200) {
            this.posy = -200;
            this.posx = Math.floor(Math.random() * Math.floor(innerWidth));
            this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
        }
        this.posy = this.posy + this.speed;
        this.draw();
    }
    draw() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("bomb-component", Bomb);
class Car extends HTMLElement {
    constructor() {
        super();
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = 0;
        this.posy = window.innerHeight - 150;
    }
    update() {
        if (this.posx > window.innerWidth + 150) {
            this.posx = -150;
        }
        this.posx++;
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.destroyed = 0;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bombs = new Array();
        this.car = new Car();
        for (let i = 0; i < 4; i++) {
            this.bombs.push(new Bomb());
        }
        this.gameLoop();
    }
    gameLoop() {
        console.log("updating the game");
        for (let bomb of this.bombs) {
            bomb.update();
        }
        this.car.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    destroyBuilding() {
        this.destroyed++;
        console.log("buildings destroyed " + this.destroyed);
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map