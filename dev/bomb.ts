/// <reference path="gameobject.ts" />

class Bomb extends GameObject{
    
    private posy: number = 0
    private posx: number = 0
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        
    }

    public update():void {
        if (this.posy > innerHeight + 200) {
            this.posy = -200
        }

        this.posy++
        this.draw()
    }

    public draw() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`

    }
}

window.customElements.define("bomb-component", Bomb as any)
