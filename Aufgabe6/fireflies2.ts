/*
Aufgabe: Aufgabe 6 - Assoziative Bienen
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 07.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace L4_Canvas {

    var aufgabe6a: any;
    (function(aufgabe6a: any): any {

        let crc2: CanvasRenderingContext2D;
        let canvas: HTMLCanvasElement;
        let background: ImageData;
        let firefly: any = [];
        let n: number = 10;
        let startFirefly: any;
        let xJar: number = 520;
        let yJar: number = 345;


        window.addEventListener("load", init);


        //Initialisierung

        function init(_event: Event): void {
            console.log("Initialisierung");

            canvas = document.getElementsByTagName("canvas")[0];
            console.log(canvas);

            crc2 = canvas.getContext("2d");
            console.log(crc2);

            drawCanvas();

            //Glühwürmchen Startposition

            for (let i: number = 0; i < n; i++) {
                startFirefly = { x: xJar, y: yJar };
                firefly[i] = startFirefly;
            }

            window.setTimeout(animation, 20);
        }



        //Gesamtes Bild

        function drawCanvas(): void {

            //Himmel

            crc2.fillStyle = "#131354";
            crc2.fillRect(0, 0, canvas.width, canvas.height);

            //Wiese

            crc2.fillStyle = "#54B863";
            crc2.fillRect(0, 250, 600, 250);


            //Stroke Color - Fill Color

            drawMoon(500, 50, "#FFFFFF", "#FFFFFF");
            drawBigMountain(70, 250, "#b3b3b3", "#262626");
            drawBigMountain(-20, 250, "#b3b3b3", "#262626");
            drawMiddleMountain(200, 250, "#b3b3b3", "#262626");
            drawSmallMountain(150, 250, "#b3b3b3", "#262626");
            drawCloud(350, 40, "#808080", "#808080");
            drawCloud(480, 130, "#808080", "#808080");
            drawPond(400, 350, "#ccffff", "#ccffff");
            drawJar(500, 350, "#F7E0FF", "#F7E0FF");
            drawLid(530, 350, "#808080", "#808080");

            //Einzelne Blumen

            drawLilypad(340, 330, "#006600", "#006600");
            drawWaterlily(340, 325, "#f2f2f2", "#f2f2f2");
            drawStalk(200, 255, "#268C4C", "#268C4C");
            drawDandelion(200, 250, "#FFFFFF", "#FFFFFF");
            drawStalk(180, 265, "#268C4C", "#268C4C");
            drawDandelion(180, 270, "#FFFFFF", "#FFFFFF");
            drawStalk(350, 420, "#268C4C", "#268C4C");
            drawMoonflower1(350, 398, "#6EFFFF", "#6EFFFF");
            drawPetal(350, 400, "#FFFFFF", "#FFFFFF");
            drawStalk(250, 370, "#268C4C", "#268C4C");
            drawMoonflower2(250, 368, "#CCCCFF", "#CCCCFF");
            drawPetal(250, 370, "#FFFFFF", "#FFFFFF");
            drawStalk(280, 235, "#268C4C", "#268C4C");
            drawPinkfan(280, 240, "#ffe6ea", "#ffe6ea");
            drawStalk(190, 385, "#268C4C", "#268C4C");
            drawPinkfan(190, 385, "#ffe6ea", "#ffe6ea");
            drawStalk(380, 255, "#268C4C", "#268C4C");
            drawGoldenrain(380, 260, "#EDE275", "#EDE275");


            //Blumenfelder (xMin, xMax, yMin, yMax, Anzahl)

            drawFlowerField(0, 150, 260, 400, 10);
            drawFlowerField(400, 600, 260, 400, 5);

            background = crc2.getImageData(0, 0, 600, 450);

        }


        //Animation

        function animation(): void {
            crc2.putImageData(background, 0, 0);
            console.log("Animate called");

            //Flugverhalten


            for (let i: number = 0; i < firefly; i++) {
                firefly[i].x += Math.random() * 3 - 5;
                firefly[i].y += Math.random() * 20 - 12;
                drawFirefly(firefly[i]);
            }


            //Neues Glühwürmchen 

            canvas.addEventListener("click", addFirefly);
            canvas.addEventListener("push", addFirefly);


            //Übergänge - Canvasrand

            if (firefly.x < 0) {
                firefly.x = canvas.width;
            }
            if (firefly.x > canvas.width) {
                firefly.x = 0;
            }
            if (firefly.y < 0) {
                firefly.y = canvas.height;
            }
            if (firefly.y > canvas.height) {
                firefly.y = 0;
            }
            drawFirefly(firefly[i]);
        }

        window.setTimeout(animation, 80);

        function addFirefly(): void {
            firefly.x.push(520);
            firefly.y.push(345);
            n++;
            console.log("Add");
        }

        //Glühwürmchen

        function drawFirefly(firefly: any): void {
            crc2.beginPath();
            crc2.fillStyle = "#fffacd";
            crc2.strokeStyle = "#fffacd";
            crc2.moveTo(firefly.x, firefly.y);
            crc2.arc(firefly.x, firefly.y, 5, 0 * Math.PI, 2 * Math.PI);
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

        function drawJar(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.fillRect(_x, _y, 30, 40);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawLid(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 15, _y + 25);
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


        //Umgebung

        function drawMoon(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawSmallMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 50, _y - 75);
            crc2.lineTo(_x + 100, _y + 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawMiddleMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 100, _y - 150);
            crc2.lineTo(_x + 200, _y + 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawBigMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 150, _y - 200);
            crc2.lineTo(_x + 300, _y + 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawCloud(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.fillStyle = _fillColor;
            crc2.beginPath();
            crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 30, _y + 1, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 25, _y + 15, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 25, _y + 15, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.arc(_x + 30, _y + 1, 25, 0, 2 * Math.PI);
            crc2.fill();
        }

        function drawPond(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(350, 250, 150, 350);
            crc2.quadraticCurveTo(200, 450, 400, 350);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


        //Blumen

        function drawLilypad(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 20, 0 * Math.PI, 1.8 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawWaterlily(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 10, -0.2 * Math.PI, 1.2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawDandelion(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawStalk(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 0, _y + 50);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

        function drawMoonflower1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawMoonflower2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawPetal(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 20, 1.1 * Math.PI, 1.9 * Math.PI, true);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

        function drawPinkfan(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

        function drawGoldenrain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }



        //Blumenwiese

        function drawFlowerField(xMin: number, xMax: number, yMin: number, yMax: number, flowers: number): void {
            console.log("Ein Blumenfeld von: ", xMin, "bis: ", xMax, "(Horizontal) und von: ", yMin, "bis: ", yMax, "(Vertical)");

            var i: number;
            let random: number;
            let _x: number;
            let _y: number;

            for (i = 0; i < flowers; i++) {
                //Zufällige Position im Feld
                _x = Math.random() * (xMax - xMin) + xMin;
                _y = Math.random() * (yMax - yMin) + yMin;

                //Zufälligere Blumentyp
                random = Math.floor((Math.random() * 5) + 0);
                switch (random) {
                    case 0:
                        drawStalk(_x, _y, "#268C4C", "#268C4C");
                        drawDandelion(_x, _y, "#FFFFFF", "#FFFFFF");
                        break;
                    case 1:
                        drawStalk(_x, _y, "#268C4C", "#268C4C");
                        drawMoonflower1(_x, _y, "#6EFFFF", "#6EFFFF");
                        drawPetal(_x, _y, "#FFFFFF", "#FFFFFF");
                        break;
                    case 2:
                        drawStalk(_x, _y, "#268C4C", "#268C4C");
                        drawMoonflower2(_x, _y, "#CCCCFF", "#CCCCFF");
                        drawPetal(_x, _y, "#FFFFFF", "#FFFFFF");
                        break;
                    case 3:
                        drawStalk(_x, _y, "#268C4C", "#268C4C");
                        drawPinkfan(_x, _y, "#ffe6ea", "#ffe6ea");
                        break;
                    case 4:
                        drawStalk(_x, _y, "#268C4C", "#268C4C");
                        drawGoldenrain(_x, _y, "#EDE275", "#EDE275");
                        break;
                }
            }
        } })(aufgabe6a || (aufgabe6a = {}));
}