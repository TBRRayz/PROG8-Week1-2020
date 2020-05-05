class Game {
    
    private score: number = 0
    private destroyed: number = 0
    private textfield: HTMLElement
    private statusbar: HTMLElement
    private bomb: Bomb
    private car: Car
    private bombs : Array<Bomb>
    
    constructor() {
        this.textfield  = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar  = document.getElementsByTagName("bar")[0] as HTMLElement

        this.bombs = new Array()
        this.car = new Car()

        for(let i = 0; i < 4 ; i++) {
            this.bombs.push(new Bomb())
        }
        
        this.gameLoop()
        
    }

    
    private gameLoop():void{
        console.log("updating the game")
        
        for(let bomb of this.bombs){
            bomb.update()
        }
    
        this.car.update()
        requestAnimationFrame(() => this.gameLoop())
        
    }

    public destroyBuilding(){
        this.destroyed ++
        console.log("buildings destroyed " + this.destroyed)
    }
       
    public scorePoint() {
        this.score ++
        this.textfield.innerHTML = "Score: " + this.score
    }

} 

window.addEventListener("load", () => new Game())