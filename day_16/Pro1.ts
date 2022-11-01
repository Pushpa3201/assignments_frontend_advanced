interface IGPS{
    getCoordinates():void;
}

interface IMediaPlayer{
    start():void;
    stop():void;
    pause():void;
}

class SmartPhone implements IGPS, IMediaPlayer{
    public x:number;
    public y:number; 
    public status:boolean;

    constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }
    getCoordinates(): void {
            console.log("The coordinates are ");
            console.log("x : "+this.x);
            console.log("y : "+this.y);
    }

    start(): void {
        console.log("The video is started");
    }
    stop(): void {
        console.log("The video is stopped");
    }
    pause(): void {
        console.log("The video has been paused");
    }

}

var obj : SmartPhone = new SmartPhone(231, 154);
obj.getCoordinates();
obj.start();
obj.pause();
obj.stop();