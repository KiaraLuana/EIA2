/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HarryPotter;
(function (HarryPotter) {
    class Cauldron {
        constructor(_x, _y) {
            console.log("Create Cauldron");
            this.x = _x;
            this.y = _y;
            this.strokeColor = "#000000";
        }
        update() {
            this.draw();
        }
        draw() {
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = "#000000";
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(this.x, this.y);
            HarryPotter.crc2.arc(this.x, this.y, 150, 1 * Math.PI, 2 * Math.PI, true);
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = "#000000";
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(530, 545);
            HarryPotter.crc2.lineTo(560, 630);
            HarryPotter.crc2.lineTo(580, 630);
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = "#000000";
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(475, 545);
            HarryPotter.crc2.lineTo(445, 630);
            HarryPotter.crc2.lineTo(425, 630);
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = "#000000";
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(510, 545);
            HarryPotter.crc2.lineTo(495, 630);
            HarryPotter.crc2.lineTo(510, 630);
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = "#4d4d4d";
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(350, 450);
            HarryPotter.crc2.quadraticCurveTo(500, 170, 650, 450);
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.stroke();
        }
    }
    HarryPotter.Cauldron = Cauldron;
    class Potion extends Cauldron {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Empty Potion");
            this.potionColor = "#00FA9A";
            this.draw(); //später weg
            this.drawPotion();
        }
        update() {
            this.drawPotion();
        }
        drawPotion() {
            HarryPotter.crc2.beginPath();
            HarryPotter.crc2.fillStyle = this.potionColor;
            HarryPotter.crc2.strokeStyle = this.strokeColor;
            HarryPotter.crc2.moveTo(650, 450);
            HarryPotter.crc2.quadraticCurveTo(500, 500, 350, 450);
            HarryPotter.crc2.shadowColor = this.potionColor;
            HarryPotter.crc2.shadowBlur = 20;
            HarryPotter.crc2.shadowOffsetX = 0;
            HarryPotter.crc2.shadowOffsetY = 0;
            HarryPotter.crc2.stroke();
            HarryPotter.crc2.fill();
            HarryPotter.crc2.closePath();
            HarryPotter.crc2.shadowBlur = 0;
        }
    }
    HarryPotter.Potion = Potion;
})(HarryPotter || (HarryPotter = {}));
//# sourceMappingURL=class.js.map