/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Flower {
        constructor(_x, _y) {
            this.fanCol = ["#ffe6ea", "#EDE275"];
            this.moonCol = ["#6EFFFF", "#CCCCFF"];
            console.log("Create flower");
            //this.setRandomStyle();
            this.setRandomPosition();
            // this.x = _x;
            // this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            // abstract
        }
        setRandomPosition() {
            this.x = Math.random() * 150;
            this.y = Math.random() * 200;
        }
    }
    L8_Inheritance.Flower = Flower;
})(L8_Inheritance || (L8_Inheritance = {}));
//} 
//# sourceMappingURL=superflower.js.map