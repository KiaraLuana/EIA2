/*
Aufgabe: Aufgabe 8 - Inheritance
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L8_Inheritance {
    export class Flower {
        x: number;
        y: number;
        color: string;
        fanCol: string[] = ["#ffe6ea", "#EDE275"];
        moonCol: string[] = ["#6EFFFF", "#CCCCFF"];

        constructor(_x: number, _y: number) {
            console.log("Create flower");
            //this.setRandomStyle();
            this.setRandomPosition();
            // this.x = _x;
            // this.y = _y;
        }

        update(): void {
            this.draw();
        }

        draw(): void {
            // abstract
        }


        setRandomPosition(): void {
            this.x = Math.random() * 150;
            this.y = Math.random() * 200;
        }

        // different random style
        //setRandomStyle(): void {
        //this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    }
}
//}