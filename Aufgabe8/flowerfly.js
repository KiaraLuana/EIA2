/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Flowerfly extends L8_Inheritance.Firefly {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create flowerflies");
            this.speed = 0.1;
            //this.setRandomPosition();
            this.setRandomTargetPosition();
        }
        update() {
            this.move();
        }
        setRandomTargetPosition() {
            this.xTarget = Math.random() * L8_Inheritance.crc2.canvas.width;
            this.yTarget = Math.random() * L8_Inheritance.crc2.canvas.height;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    L8_Inheritance.Flowerfly = Flowerfly;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=flowerfly.js.map