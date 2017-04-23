/*

Aufgabe: Aufgabe 4 - Blumenwiese

Name: Kiara Luana Oßwald

Matrikel: 254140

Datum: 23.04.2017

    

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var L4_Canvas;
(function (L4_Canvas) {
    let crc2;
    let canvas;
    window.addEventListener("load", init);
    //Initialisierung
    function init(_event) {
        console.log("Initialisierung");
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawCanvas();
    }
    //Gesamtes Bild
    function drawCanvas() {
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
        //Einzelne Blumen
        drawLilypad(340, 330, "#006600", "#006600");
        drawWaterlily(340, 325, "#f2f2f2", "#f2f2f2");
        drawStalk(200, 255, "#000000", "#000000");
        drawDandelion(200, 250, "#FFFFFF", "#FFFFFF");
        drawStalk(180, 265, "#000000", "#000000");
        drawDandelion(180, 270, "#FFFFFF", "#FFFFFF");
        drawStalk(350, 420, "#000000", "#000000");
        drawMoonflower1(350, 398, "#6EFFFF", "#6EFFFF");
        drawPetal(350, 400, "#FFFFFF", "#FFFFFF");
        drawStalk(250, 370, "#000000", "#000000");
        drawMoonflower2(250, 368, "#CCCCFF", "#CCCCFF");
        drawPetal(250, 370, "#FFFFFF", "#FFFFFF");
        drawStalk(280, 235, "#000000", "#000000");
        drawPinkfan(280, 240, "#ffe6ea", "#ffe6ea");
        drawStalk(190, 385, "#000000", "#000000");
        drawPinkfan(190, 385, "#ffe6ea", "#ffe6ea");
        drawStalk(380, 255, "#000000", "#000000");
        drawGoldenrain(380, 260, "#EDE275", "#EDE275");
        //Blumenfelder (xMin, xMax, yMin, yMax, Anzahl)
        drawFlowerField(0, 150, 260, 400, 10);
        drawFlowerField(400, 600, 260, 400, 12);
    }
    //Umgebung
    function drawMoon(_x, _y, _strokeColor, _fillColor) {
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
    function drawSmallMountain(_x, _y, _strokeColor, _fillColor) {
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
    function drawMiddleMountain(_x, _y, _strokeColor, _fillColor) {
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
    function drawBigMountain(_x, _y, _strokeColor, _fillColor) {
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
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
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
    function drawPond(_x, _y, _strokeColor, _fillColor) {
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
    function drawLilypad(_x, _y, _strokeColor, _fillColor) {
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
    function drawWaterlily(_x, _y, _strokeColor, _fillColor) {
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
    function drawDandelion(_x, _y, _strokeColor, _fillColor) {
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
    function drawStalk(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 0, _y + 50);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    function drawMoonflower1(_x, _y, _strokeColor, _fillColor) {
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
    function drawMoonflower2(_x, _y, _strokeColor, _fillColor) {
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
    function drawPetal(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 20, 1.1 * Math.PI, 1.9 * Math.PI, true);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    function drawPinkfan(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 1.1 * Math.PI, 1.9 * Math.PI, false);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    function drawGoldenrain(_x, _y, _strokeColor, _fillColor) {
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
                    drawStalk(_x, _y, "#000000", "#000000");
                    drawDandelion(_x, _y, "#FFFFFF", "#FFFFFF");
                    break;
                case 1:
                    drawStalk(_x, _y, "#000000", "#000000");
                    drawMoonflower1(_x, _y, "#6EFFFF", "#6EFFFF");
                    drawPetal(_x, _y, "#FFFFFF", "#FFFFFF");
                    break;
                case 2:
                    drawStalk(_x, _y, "#000000", "#000000");
                    drawMoonflower2(_x, _y, "#CCCCFF", "#CCCCFF");
                    drawPetal(_x, _y, "#FFFFFF", "#FFFFFF");
                    break;
                case 3:
                    drawStalk(_x, _y, "#000000", "#000000");
                    drawPinkfan(_x, _y, "#ffe6ea", "#ffe6ea");
                    break;
                case 4:
                    drawStalk(_x, _y, "#000000", "#000000");
                    drawGoldenrain(_x, _y, "#EDE275", "#EDE275");
                    break;
            }
        }
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=blumenwiese.js.map