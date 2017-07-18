/*
Aufgabe: Abschlussaufgabe - Freie Arbeit
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 14.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace HarryPotter {


    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    window.addEventListener("load", init);


    //Initialisierung

    function init(_event: Event): void {
        console.log("Initialisierung");

        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawCanvas();






    }

    function drawCanvas(): void {


        //Hintergrund
        //#FFF8DC

        crc2.fillStyle = "#4d4d4d";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Tisch

        crc2.fillStyle = "#773d22";
        crc2.fillRect(0, 490, 1000, 250);


        //Ingredients


        //drawAshwinderEgg(600, 75, "#B22222", "#B22222");
        //drawPowderedMoonstone(550, 75, "#000000", "#000000");
        //drawUnicornHorn(500, 150, "#FFF0F5", "#FFF0F5");
        //drawDragonEye(450, 75, "#FFFFFF", "#FFFFFF");





        //Objekte


        drawCauldron(500, 450, "#000000", "#000000");
        drawCandle(800, 480, "#990000", "#990000");
        drawCandle(750, 510, "#990000", "#990000");
        drawCandle(825, 510, "#990000", "#990000");
        drawHeadline(20, 50, "#F4A460", "#F4A460");
        drawRecipe1(20, 110, "#F4A460", "#F4A460");
        drawRecipe2(20, 160, "#F4A460", "#F4A460");
        drawRecipe3(20, 210, "#F4A460", "#F4A460");
        drawRecipe4(20, 260, "#F4A460", "#F4A460");
        drawRecipe5(20, 310, "#F4A460", "#F4A460");
        drawWand(210, 400, "#502916", "#502916");
        drawBook(180, 510, "#2d2d86", "#2d2d86");
        drawWindow(750, 40, "#000000", "#000000");
        drawMoon(900, 75, "#FFFFFF", "#FFFFFF");
        drawFlame1(808, 473, "#ffcc80", "#ffcc80");
        drawFlame2(758, 503, "#ffcc80", "#ffcc80");
        drawFlame3(833, 503, "#ffcc80", "#ffcc80");








    }


    function drawCauldron(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 150, 1 * Math.PI, 2 * Math.PI, true);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#00FA9A";
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(650, 450);
        crc2.quadraticCurveTo(500, 500, 350, 450);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(530, 545);
        crc2.lineTo(560, 630);
        crc2.lineTo(580, 630);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(475, 545);
        crc2.lineTo(445, 630);
        crc2.lineTo(425, 630);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
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
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(350, 450);
        crc2.quadraticCurveTo(500, 170, 650, 450);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawCandle(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.fillRect(_x, _y, 20, 50);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 10, _y);
        crc2.lineTo(_x + 10, _y - 8);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }


    function drawHeadline(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "50px 'Great Vibes', cursive";
        crc2.fillText("Recipes", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawRecipe1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "30px 'Great Vibes', cursive";
        crc2.fillText("Love Potion", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawRecipe2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "30px 'Great Vibes', cursive";
        crc2.fillText("Felix Felicis", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawRecipe3(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "30px 'Great Vibes', cursive";
        crc2.fillText("Draught of Living Death", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawRecipe4(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "30px 'Great Vibes', cursive";
        crc2.fillText("Draught of Peace", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawRecipe5(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.font = "30px 'Great Vibes', cursive";
        crc2.fillText("Veritaserum", _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    function drawWand(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x - 25, _y + 20);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawBook(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.fillRect(_x, _y, 120, 100);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 10, _y + 10);
        crc2.fillRect(_x + 10, _y + 10, 100, 80);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 60, _y + 10);
        crc2.lineTo(_x + 60, _y + 90);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 20);
        crc2.lineTo(_x + 50, _y + 20);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 30);
        crc2.lineTo(_x + 50, _y + 30);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 40);
        crc2.lineTo(_x + 50, _y + 40);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 50);
        crc2.lineTo(_x + 50, _y + 50);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 60);
        crc2.lineTo(_x + 50, _y + 60);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 70);
        crc2.lineTo(_x + 50, _y + 70);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 20, _y + 80);
        crc2.lineTo(_x + 50, _y + 80);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 20);
        crc2.lineTo(_x + 100, _y + 20);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 30);
        crc2.lineTo(_x + 100, _y + 30);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 40);
        crc2.lineTo(_x + 100, _y + 40);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 50);
        crc2.lineTo(_x + 100, _y + 50);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 60);
        crc2.lineTo(_x + 100, _y + 60);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 70);
        crc2.lineTo(_x + 100, _y + 70);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 70, _y + 80);
        crc2.lineTo(_x + 100, _y + 80);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawFlame1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(808, 473);
        crc2.quadraticCurveTo(808, 440, 813, 473);
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

    function drawFlame2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(758, 503);
        crc2.quadraticCurveTo(760, 470, 763, 503);
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

    function drawFlame3(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(833, 503);
        crc2.quadraticCurveTo(834, 470, 838, 503);
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


    function drawWindow(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#2d2d86";
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.fillRect(_x, _y, 200, 160);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 100, _y);
        crc2.lineTo(_x + 100, _y + 160);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x, _y + 80);
        crc2.lineTo(_x + 200, _y + 80);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    function drawMoon(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.shadowColor = "#FFFFFF";
        crc2.shadowBlur = 15;
        crc2.shadowOffsetX = 0;
        crc2.shadowOffsetY = 0;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    //Ingredients

    function drawAshwinderEgg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(610, 100, 620, 75);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(610, 50, 620, 75);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawPowderedMoonstone(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 1 * Math.PI, 2 * Math.PI, true);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(575, 75);
        crc2.quadraticCurveTo(550, 90, 525, 75);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }
    
    function drawUnicornHorn(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x - 25, _y + 0);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        

    }
    
    function drawDragonEye(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 15, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x -2, _y - 5);
        crc2.arc(_x -2, _y - 5, 5, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

}