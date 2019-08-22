"use strict";
var demo = /** @class */ (function () {
    function demo(x) {
        var d = Math.random();
        this.id = plus(d, x);
    }
    demo.prototype.sayHi = function () {
        //console.log("good");
        //console.ban();
    };
    demo.prototype.start = function (socket) {
        throw new Error("not implement yet");
    };
    ;
    return demo;
}());
