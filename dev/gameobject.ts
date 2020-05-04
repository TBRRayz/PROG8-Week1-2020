abstract class GameObject extends HTMLElement {

    protected speed : number
    
    constructor() {
        super()
    }

    abstract update() : void
    abstract draw() : void
}