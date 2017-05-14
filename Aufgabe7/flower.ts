/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L7_Klassen {

    export class Fan {
        x: number;
        y: number;
        color: string;
        fanCol: string[] = ["#ffe6ea", "#EDE275"];
    

    constructor(_x: number, _y: number) {
        console.log("Fächerblume konstruiert");
        this.setRandomStyle();
        this.setRandomPosition();
        this.x = _x;
        this.y = _y;
    }

    update(): void {
        this.draw();
    }


    draw(): void {
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x, this.y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 0, this.y + 50);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    
    
    setRandomStyle(): void {
            this.color = this.fanCol[Math.floor(Math.random() * this.fanCol.length)];
        }
        
          setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        
        }
    
}