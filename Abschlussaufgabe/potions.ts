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

        crc2.fillStyle = "#FFF8DC";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Tisch

        crc2.fillStyle = "#773d22";
        crc2.fillRect(0, 490, 1000, 250);

        //Objekte

        drawCauldron(500, 450, "#000000", "#000000");
        drawCandle(800, 480, "#990000", "#990000");
        drawCandle(750, 510, "#990000", "#990000");
        drawCandle(825, 510, "#990000", "#990000");
        // drawRecipeList(20, 20, "#F4A460", "#F4A460");
        drawHeadline(20, 50, "#F4A460", "#F4A460");
        drawRecipe1(20, 110, "#F4A460", "#F4A460");
        drawRecipe2(20, 160, "#F4A460", "#F4A460");
        drawRecipe3(20, 210, "#F4A460", "#F4A460");
        drawRecipe4(20, 260, "#F4A460", "#F4A460");
        drawRecipe5(20, 310, "#F4A460", "#F4A460");
        drawWand(210, 400, "#502916", "#502916");

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
        crc2.fillStyle = "#FFF8DC";
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


    function drawRecipeList(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.fillRect(_x, _y, 200, 600);
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
        crc2.strokeText("Recipes", _x, _y);
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
        crc2.strokeText("Love Potion", _x, _y);
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
        crc2.strokeText("Felix Felicis", _x, _y);
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
        crc2.strokeText("Draught of Living Death", _x, _y);
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
        crc2.strokeText("Draught of Peace", _x, _y);
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
        crc2.strokeText("Veritaserum", _x, _y);
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

}