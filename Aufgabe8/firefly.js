/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L8_Inheritance;
(function (L8_Inheritance) {
    class Firefly {
        constructor(_x, _y) {
            this.fireflyCol = ["#fffacd", "#E3E4FA", "#FFFFFF"];
            console.log("Create fireflies");
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
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.strokeStyle = this.color;
            L8_Inheritance.crc2.moveTo(this.x, this.y);
            L8_Inheritance.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            L8_Inheritance.crc2.shadowColor = "#FFFFFF";
            L8_Inheritance.crc2.shadowBlur = 20;
            L8_Inheritance.crc2.shadowOffsetX = 0;
            L8_Inheritance.crc2.shadowOffsetY = 0;
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 3 - 5;
            this.y += Math.random() * 20 - 12;
            if (this.x < 0) {
                this.x = L8_Inheritance.crc2.canvas.width;
            }
            if (this.x > L8_Inheritance.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = L8_Inheritance.crc2.canvas.height;
            }
            if (this.y > L8_Inheritance.crc2.canvas.height) {
                this.y = 0;
            }
        }
        setRandomStyle() {
            this.color = this.fireflyCol[Math.floor(Math.random() * this.fireflyCol.length)];
        }
    }
    L8_Inheritance.Firefly = Firefly;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=firefly.js.map