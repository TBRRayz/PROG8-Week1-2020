class Car extends HTMLElement{
    
    private posx: number
    private posy: number
    private speed: number
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        
        this.posx = 0
        this.posy = window.innerHeight - 150
        this.addEventListener("click", (e : MouseEvent) => this.handleMouseClick(e))
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1)
    
        
    }

    public update():void {
        if (this.posx > window.innerWidth + 150) {
            this.posx = Math.floor(Math.random() * Math.floor(400) -650)
            this.speed = Math.floor(Math.random() * Math.floor(5) + 1)
        }
        this.posx = this.posx + this.speed;
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    private handleMouseClick(e:MouseEvent) {
        this.posx = Math.floor(Math.random() * Math.floor(400) -650)
        this.speed = Math.floor(Math.random() * Math.floor(5) + 1)
        Game.instance().buildBuilding();
    }


}

window.customElements.define("car-component", Car as any)
