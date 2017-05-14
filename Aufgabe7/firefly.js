/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Klassen;
(function (L7_Klassen) {
    let crc2;
    class Firefly {
        constructor(_x, _y) {
            this.fireflyCol = ["#fffacd", "#E3E4FA", "#FFFFFF"];
            console.log("firefly konstruiert");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.shadowColor = "#ffffff";
            crc2.shadowBlur = 20;
            crc2.shadowOffsetX = 0;
            crc2.shadowOffsetY = 0;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        move() {
            this.x += Math.random() * 3 - 5;
            this.y += Math.random() * 20 - 12;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = this.fireflyCol[Math.floor(Math.random() * this.fireflyCol.length)];
        }
    }
    L7_Klassen.Firefly = Firefly;
})(L7_Klassen || (L7_Klassen = {}));
//# sourceMappingURL=firefly.js.map