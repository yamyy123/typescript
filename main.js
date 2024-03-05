var a;
var b;
var c;
var e;
var f = [1, 2, 3];
var g = [1, '0', true];
var colours;
(function (colours) {
    colours[colours["blue"] = 0] = "blue";
    colours[colours["red"] = 1] = "red";
    colours[colours["green"] = 2] = "green";
})(colours || (colours = {}));
;
var background = colours.blue;
console.log(background);
