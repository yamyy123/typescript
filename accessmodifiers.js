var Pointee = /** @class */ (function () {
    //  constructor( private x?:number,y?:number,z? :number){
    //    this.x= x;
    //    this.y=y;
    //    this.z=z;
    // }  // if we give like this means there will be a error it knows x is private but it didnt knows y and z are public or private
    function Pointee(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log(_this.c + _this.c);
        };
        this.drawrectangle = function () {
            _this.draw();
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Pointee;
}());
var clas = new Pointee(4, 8, 9);
var hi = clas.c;
clas.draw();
var clas2 = new Pointee(111, 222, 5);
clas2.draw();
