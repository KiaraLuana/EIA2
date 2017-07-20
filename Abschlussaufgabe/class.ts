/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace HarryPotter {

    export class Cauldron {
        x: number;
        y: number;
        strokeColor: string;
        potionColor: string;

        constructor(_x: number, _y: number) {
            console.log("Create Cauldron");
            this.x = _x;
            this.y = _y;
            this.strokeColor = "#000000";
        }

        update(): void {
            this.draw();
        }

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 150, 1 * Math.PI, 2 * Math.PI, true);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(530, 545);
            crc2.lineTo(560, 630);
            crc2.lineTo(580, 630);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(475, 545);
            crc2.lineTo(445, 630);
            crc2.lineTo(425, 630);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(510, 545);
            crc2.lineTo(495, 630);
            crc2.lineTo(510, 630);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#4d4d4d";
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(350, 450);
            crc2.quadraticCurveTo(500, 170, 650, 450);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


        }
    }


    export class Potion extends Cauldron {

        constructor(_x: number, _y: number) {
            super(_x, _y);

            console.log("Create Empty Potion");

            this.potionColor = "#00FA9A";
            this.draw(); //später weg
            this.drawPotion();
        }

        update(): void {
            this.drawPotion();
        }

        drawPotion(): void {
            crc2.beginPath();
            crc2.fillStyle = this.potionColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(650, 450);
            crc2.quadraticCurveTo(500, 500, 350, 450);
            crc2.shadowColor = this.potionColor;
            crc2.shadowBlur = 20;
            crc2.shadowOffsetX = 0;
            crc2.shadowOffsetY = 0;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.shadowBlur = 0;

        }
    }
}