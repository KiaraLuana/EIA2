/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L8_Inheritance {
    export class Flowerfly extends Firefly {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create flowerflies");
            this.speed = 0.1;
            //this.setRandomPosition();
            this.setRandomTargetPosition();
        }

        update(): void {
            this.move();
        }

        setRandomTargetPosition(): void {
            this.xTarget = Math.random() * crc2.canvas.width;
            this.yTarget = Math.random() * crc2.canvas.height;
        }



        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
}