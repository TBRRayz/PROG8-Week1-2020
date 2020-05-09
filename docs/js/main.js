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
        this.addEventListener("click", (e) => this.handleMouseClick(e));
    }
    update() {
        if (this.posy > innerHeight + 200) {
            this.posy = -400;
            this.posx = Math.floor(Math.random() * Math.floor(innerWidth));
            this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
            Game.instance().destroyBuilding();
        }
        this.posy = this.posy + this.speed;
        this.draw();
    }
    handleMouseClick(e) {
        this.posy = -400;
        this.posx = Math.floor(Math.random() * Math.floor(innerWidth));
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
        Game.instance().scorePoint();
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
        this.addEventListener("click", (e) => this.handleMouseClick(e));
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
    }
    update() {
        if (this.posx > window.innerWidth + 150) {
            this.posx = Math.floor(Math.random() * Math.floor(400) - 650);
            this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
        }
        this.posx = this.posx + this.speed;
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
    }
    handleMouseClick(e) {
        this.posx = Math.floor(Math.random() * Math.floor(400) - 650);
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1);
        Game.instance().buildBuilding();
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.destroyed = 0;
        this.request = 0;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bombs = new Array();
        this.car = new Car();
        for (let i = 0; i < 4; i++) {
            this.bombs.push(new Bomb());
        }
        this.gameLoop();
    }
    static instance() {
        if (!Game._instance)
            Game._instance = new Game();
        return Game._instance;
    }
    gameLoop() {
        console.log("updating the game");
        for (let bomb of this.bombs) {
            bomb.update();
        }
        this.car.update();
        if (this.destroyed < 4) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    buildBuilding() {
        this.destroyed = 0;
        this.statusbar.style.backgroundPositionX = "0px";
    }
    destroyBuilding() {
        this.destroyed++;
        console.log("buildings destroyed " + this.destroyed);
        if (this.destroyed == 1) {
            this.statusbar.style.backgroundPositionX = "-72px";
        }
        else if (this.destroyed == 2) {
            this.statusbar.style.backgroundPositionX = "-144px";
        }
        else if (this.destroyed == 3) {
            this.statusbar.style.backgroundPositionX = "-216px";
        }
        else if (this.destroyed >= 4) {
            this.statusbar.style.backgroundPositionX = "-288px";
        }
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
}
window.addEventListener("load", function () {
    Game.instance();
});
//# sourceMappingURL=main.js.map