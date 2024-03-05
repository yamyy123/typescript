var Pointers = /** @class */ (function () {
    // constructor(x:number,y:number,z:number){
    //    this.x= x;
    //    this.y=y;
    //    this.z=z;
    // }  // like this we can do when we definitely need a constructor 
    //but when you need as no matter how many arguments u send..the which u doesnt sended should reamin undefined we need o add ? mark before colon
    function Pointers(x, y, z) {
        var _this = this;
        this.draw = function () {
            console.log(_this.x + _this.y);
        };
        this.drawrectangle = function () {
            _this.draw();
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Pointers;
}());
var clas = new Pointers(4, 8, 9);
clas.draw();
var clas2 = new Pointers(111, 222, 5);
clas2.draw();
