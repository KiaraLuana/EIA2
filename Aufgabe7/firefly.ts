/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L7_Klassen {

 

 

    export class Firefly {

        x: number;

        y: number;

        size: number;

        color: string;

        fireflyCol: string[] = ["#fffacd", "#E3E4FA", "#FFFFFF"];

 

        constructor(_x: number, _y: number) {

            console.log("firefly konstruiert");

            this.setRandomStyle();

            //this.setRandomPosition();

            this.x = _x;

            this.y = _y;

        }

 

        update(): void {

            this.move();

            this.draw();

        }

 

        draw(): void {

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

 

        move(): void {

            this.x += Math.random() * 3 - 5;

            this.y += Math.random() * 20 - 12;

        }

 

        setRandomStyle(): void {

            this.size = Math.random() * 30 + 10;

            this.color = this.fireflyCol[Math.floor(Math.random() * this.fireflyCol.length)];

 

        }

 

    }

} // Namespace Ende