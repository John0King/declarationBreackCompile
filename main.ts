
class demo{
    constructor(x:number){
        let d = Math.random();
        this.id = plus(d,x);
    }
    private id:number;
    sayHi(){
        
        //console.log("good");
        //console.ban();
    }
    start(socket:MyWebSocket){
        throw new Error(`not implement yet`)
    };
}