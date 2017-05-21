/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L8_Inheritance {
    export class Firefly {
        x: number;
        y: number;
        color: string;
        fireflyCol: string[] = ["#fffacd", "#E3E4FA", "#FFFFFF"];

        constructor(_x: number, _y: number) {
            console.log("Create fireflies");
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
            crc2.shadowColor = "#FFFFFF";
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

            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
            if (this.y > crc2.canvas.height) {
                this.y = 0;
            }
        }


        setRandomStyle(): void {
            this.color = this.fireflyCol[Math.floor(Math.random() * this.fireflyCol.length)];
        }
    }
}