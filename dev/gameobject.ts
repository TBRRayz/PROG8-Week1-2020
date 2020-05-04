abstract class GameObject extends HTMLElement {

    
    constructor() {
        super()
        
    }

    abstract update() : void
    abstract draw() : void
}