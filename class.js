var Pointer = /** @class */ (function () {
    function Pointer() {
        var _this = this;
        this.draw = function () {
            console.log(_this.x + _this.y);
        };
        this.drawrectangle = function () {
            _this.draw();
        };
    }
    return Pointer;
}());
var clas = new Pointer();
clas.x = 1;
clas.y = 2;
clas.drawrectangle();
var clas2 = new Pointer();
clas2.x = 1;
clas2.y = 4;
clas2.drawrectangle();
//we can declare by two also there's no problem
