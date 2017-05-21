/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Fan extends L8_Inheritance.Flower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create fan");
        }
        draw() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.strokeStyle = this.color;
            L8_Inheritance.crc2.moveTo(this.x, this.y);
            L8_Inheritance.crc2.arc(this.x, this.y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.closePath();
            //Stalk
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#268C4C";
            L8_Inheritance.crc2.strokeStyle = "#268C4C";
            L8_Inheritance.crc2.moveTo(this.x, this.y);
            L8_Inheritance.crc2.lineTo(this.x + 0, this.y + 50);
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.closePath();
        }
        setRandomStyle() {
            this.color = this.fanCol[Math.floor(Math.random() * this.fanCol.length)];
        }
    }
    L8_Inheritance.Fan = Fan;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=fan.js.map