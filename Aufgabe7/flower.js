/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Klassen;
(function (L7_Klassen) {
    class Fan {
        constructor(_x, _y) {
            this.fanCol = ["#ffe6ea", "#EDE275"];
            console.log("Fächerblume konstruiert");
            this.setRandomStyle();
            this.setRandomPosition(_x, _y);
            //this.x = _x;
            //this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            L7_Klassen.crc2.beginPath();
            L7_Klassen.crc2.fillStyle = this.color;
            L7_Klassen.crc2.strokeStyle = this.color;
            L7_Klassen.crc2.moveTo(this.x, this.y);
            L7_Klassen.crc2.arc(this.x, this.y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
            L7_Klassen.crc2.stroke();
            L7_Klassen.crc2.fill();
            L7_Klassen.crc2.closePath();
            //Stalk
            L7_Klassen.crc2.beginPath();
            L7_Klassen.crc2.fillStyle = this.color;
            L7_Klassen.crc2.strokeStyle = this.color;
            L7_Klassen.crc2.moveTo(this.x, this.y);
            L7_Klassen.crc2.lineTo(this.x + 0, this.y + 50);
            L7_Klassen.crc2.stroke();
            L7_Klassen.crc2.fill();
            L7_Klassen.crc2.closePath();
        }
        setRandomStyle() {
            this.color = this.fanCol[Math.floor(Math.random() * this.fanCol.length)];
        }
        setRandomPosition(_x, _y) {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
    }
    L7_Klassen.Fan = Fan;
})(L7_Klassen || (L7_Klassen = {}));
//# sourceMappingURL=flower.js.map