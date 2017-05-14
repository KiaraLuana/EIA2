/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Klassen;
(function (L7_Klassen) {
    let canvas;
    let background;
    let xJar = 520;
    let yJar = 345;
    let fireflyCol = ["#fffacd", "#E3E4FA", "#FFFFFF"];
    let fireflies = [];
    let nFirefly = 10;
    window.addEventListener("load", init);
    //Initialisierung
    function init(_event) {
        console.log("Initialisierung");
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L7_Klassen.crc2 = canvas.getContext("2d");
        console.log(L7_Klassen.crc2);
        drawCanvas();
        window.setTimeout(animation, 20);
    }
    //Hintergrund
    function drawCanvas() {
        //Himmel
        L7_Klassen.crc2.fillStyle = "#131354";
        L7_Klassen.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Wiese
        L7_Klassen.crc2.fillStyle = "#54B863";
        L7_Klassen.crc2.fillRect(0, 250, 600, 250);
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
        //Glühwürmchen
        for (let i = 0; i < nFirefly; i++) {
            let f = new L7_Klassen.Firefly(xJar, yJar);
            fireflies[i] = f;
        }
        background = L7_Klassen.crc2.getImageData(0, 0, 600, 450);
    }
    //Animation
    function animation() {
        L7_Klassen.crc2.putImageData(background, 0, 0);
        console.log("Animate called");
        //Firefly Positionsveränderung
        for (let i = 0; i < fireflies.length; i++) {
            let f = fireflies[i];
            f.update();
        }
        //Neues Glühwürmchen 
        canvas.addEventListener("click", addFirefly);
        canvas.addEventListener("push", addFirefly);
        window.setTimeout(animation, 80);
    }
    function addFirefly() {
        let f = new L7_Klassen.Firefly(xJar, yJar);
        fireflies.push(f);
        console.log("Neue Firefly erstellt");
    }
    function drawJar(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.fillRect(_x, _y, 30, 40);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawLid(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.lineTo(_x + 15, _y + 25);
        L7_Klassen.crc2.lineWidth = 2;
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    //Umgebung
    function drawMoon(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawSmallMountain(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.lineTo(_x + 50, _y - 75);
        L7_Klassen.crc2.lineTo(_x + 100, _y + 0);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawMiddleMountain(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.lineTo(_x + 100, _y - 150);
        L7_Klassen.crc2.lineTo(_x + 200, _y + 0);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawBigMountain(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.lineTo(_x + 150, _y - 200);
        L7_Klassen.crc2.lineTo(_x + 300, _y + 0);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.arc(_x - 30, _y + 1, 20, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.arc(_x - 25, _y + 15, 20, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.arc(_x + 25, _y + 15, 25, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.arc(_x + 30, _y + 1, 25, 0, 2 * Math.PI);
        L7_Klassen.crc2.fill();
    }
    function drawPond(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.quadraticCurveTo(350, 250, 150, 350);
        L7_Klassen.crc2.quadraticCurveTo(200, 450, 400, 350);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    //Blumen
    function drawLilypad(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 20, 0 * Math.PI, 1.8 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawWaterlily(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 10, -0.2 * Math.PI, 1.2 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawDandelion(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawStalk(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.lineTo(_x + 0, _y + 50);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
    }
    function drawMoonflower1(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawMoonflower2(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.stroke();
    }
    function drawPetal(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 20, 1.1 * Math.PI, 1.9 * Math.PI, true);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
    }
    function drawPinkfan(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
    }
    function drawGoldenrain(_x, _y, _strokeColor, _fillColor) {
        L7_Klassen.crc2.beginPath();
        L7_Klassen.crc2.fillStyle = _fillColor;
        L7_Klassen.crc2.strokeStyle = _strokeColor;
        L7_Klassen.crc2.moveTo(_x, _y);
        L7_Klassen.crc2.arc(_x, _y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
        L7_Klassen.crc2.stroke();
        L7_Klassen.crc2.fill();
        L7_Klassen.crc2.closePath();
    }
    //Blumenwiese
    function drawFlowerField(xMin, xMax, yMin, yMax, flowers) {
        console.log("Ein Blumenfeld von: ", xMin, "bis: ", xMax, "(Horizontal) und von: ", yMin, "bis: ", yMax, "(Vertical)");
        var i;
        let random;
        let _x;
        let _y;
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
    }
})(L7_Klassen || (L7_Klassen = {})); // Namespace Ende
//# sourceMappingURL=main.js.map