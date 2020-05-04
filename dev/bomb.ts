/// <reference path="gameobject.ts" />

class Bomb extends GameObject{
    
    private posy: number = 0
    private posx: number = 0
    private speed: number;
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        this.posx = Math.floor(Math.random() * Math.floor(innerWidth))
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1)
        
    }

    public update():void {
        if (this.posy > innerHeight + 200) {
            this.posy = -200
            this.posx = Math.floor(Math.random() * Math.floor(innerWidth))
            this.speed = Math.floor(Math.random() * Math.floor(5) + 1)
        }

        this.posy = this.posy + this.speed
        this.draw()
    }

    public draw() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`

    }
}

window.customElements.define("bomb-component", Bomb as any)
