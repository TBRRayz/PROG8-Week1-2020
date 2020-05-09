class Game {

    private static _instance : Game;
    
    private score: number = 0
    public destroyed: number = 0
    private textfield: HTMLElement
    private statusbar: HTMLElement
    private bomb: Bomb
    private car: Car
    private bombs : Array<Bomb>
    private request: number = 0;

    public static instance() : Game {
        if(!Game._instance) Game._instance = new Game();
        return Game._instance;
    }
    
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
        if(this.destroyed < 4) {
        requestAnimationFrame(() => this.gameLoop())
        }
        
    }

    public buildBuilding() {
        this.destroyed = 0;
        this.statusbar.style.backgroundPositionX = "0px";
    }

    public destroyBuilding(){
        this.destroyed ++
        console.log("buildings destroyed " + this.destroyed)

        
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
       
    public scorePoint() {
        this.score ++
        this.textfield.innerHTML = "Score: " + this.score
    }

} 

window.addEventListener("load", function() {
    Game.instance();
});