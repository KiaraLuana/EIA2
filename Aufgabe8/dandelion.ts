/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L8_Inheritance {
    export class Dandelion extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create dandelion");
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Stalk

            crc2.beginPath();
            crc2.fillStyle = "#268C4C";
            crc2.strokeStyle = "#268C4C";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 0, this.y + 50);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
    }
}