var SmartPhone = /** @class */ (function () {
    function SmartPhone(x, y) {
        this.x = x;
        this.y = y;
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log("The coordinates are ");
        console.log("x : " + this.x);
        console.log("y : " + this.y);
    };
    SmartPhone.prototype.start = function () {
        console.log("The video is started");
    };
    SmartPhone.prototype.stop = function () {
        console.log("The video is stopped");
    };
    SmartPhone.prototype.pause = function () {
        console.log("The video has been paused");
    };
    return SmartPhone;
}());
var obj = new SmartPhone(231, 154);
obj.getCoordinates();
obj.start();
obj.pause();
obj.stop();
