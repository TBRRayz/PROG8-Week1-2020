class Car extends HTMLElement{
    
    private posx: number
    private posy: number
        
    constructor() {
        super()

        let foreground  = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this);
        
        
        this.posx = 0
        this.posy = window.innerHeight - 150
        
    }

    public update():void {
        if (this.posx > window.innerWidth + 150) {
            this.posx = -150
        }
        this.posx++
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}

window.customElements.define("car-component", Car as any)
