/*
Aufgabe: Abschlussaufgabe - Freie Arbeit
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 14.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HarryPotter;
(function (HarryPotter) {
    let canvas;
    let ingredient;
    let ingredients = [
        " Ashwinder Egg ",
        " Unicorn Horn ",
        " Powdered Moonstone ",
        " Dragon Eye ",
        " Rose Thorn ",
        " Bezoar ",
        " Pearl Dust ",
        " Basilisk Fang ",
        " Acromantula Venom ",
        " Phoenix Tears ",
        " Occamy Eggshell ",
        " Night Shade ",
        " Mermaid Scale ",
        " Veela Hair ",
        " Peppermint ",
        " Cinnamon ",
        " Pumpkin Juice "
    ];
    let inputingredient = [];
    //Arrays
    HarryPotter.cauldron = [];
    let potionMix = [];
    let potionLove = [" Ashwinder Egg ", " Powdered Moonstone ", " Rose Thorn ", " Pearl Dust ", " Peppermint "];
    let potionLuck = [" Phoenix Tears ", " Occamy Eggshell ", " Veela Hair ", " Cinnamon ", " Pumpkin Juice "];
    let potionCalm = [" Unicorn Horn ", " Powdered Moonstone ", " Phoenix Tears ", " Night Shade ", " Mermaid Scale "];
    let potionTruth = [" Dragon Eye ", " Bezoar ", " Basilisk Fang ", " Acromantula Venom ", " Mermaid Scale "];
    let potionPoly = [" Ashwinder Egg ", " Unicorn Horn ", " Powdered Moonstone ", " Dragon Eye ", " Rose Thorn ", " Bezoar ", " Pearl Dust ",
        " Basilisk Fang ", " Acromantula Venom ", " Phoenix Tears ", " Occamy Eggshell ", " Night Shade ",
        " Mermaid Scale ", " Veela Hair ", " Peppermint ", " Cinnamon ", " Pumpkin Juice "];
    window.addEventListener("load", init);
    //Initialisierung
    function init(_event) {
        console.log("Initialisierung");
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let height = window.innerHeight;
        let ratio = canvas.width / canvas.height;
        let width = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        HarryPotter.crc2 = canvas.getContext("2d");
        console.log(HarryPotter.crc2);
        drawCanvas();
        ingredient = document.getElementById("ingredients");
        ingredientBasket();
        document.getElementById("love").addEventListener("click", ingLove);
        document.getElementById("luck").addEventListener("click", ingLuck);
        document.getElementById("calm").addEventListener("click", ingCalm);
        document.getElementById("truth").addEventListener("click", ingTruth);
        document.getElementById("poly").addEventListener("click", ingPoly);
        document.getElementById("btnBrew").addEventListener("click", brew);
    }
    //Zutaten erstellen
    function ingredientBasket() {
        for (let i = 0; i < ingredients.length; i++) {
            createCheckbox(ingredients[i]);
        }
    }
    //Trank brauen
    function brew() {
        let realPotion;
        let output;
        let checkedBoxes = document.getElementsByTagName("input");
        potionMix.length = 0;
        //Checkbox to mix array
        for (let i = 0; i < checkedBoxes.length; i++) {
            let box = checkedBoxes[i];
            if (box.checked)
                potionMix.push(box.name);
            box.checked = false;
            realPotion = false;
        }
        console.log("Mix:", potionMix);
        //Love Mix
        if (potionMix[0] == potionLove[0] && potionMix[1] == potionLove[1] && potionMix[2] == potionLove[2] && potionMix[3] == potionLove[3] && potionMix[4] == potionLove[4]) {
            HarryPotter.cauldron[0].potionColor = "#FF1493";
            HarryPotter.cauldron[0].update();
            realPotion = true;
            output = "Congratulations!\nYou've successfully brewed Love Potion!\n\nLove potion causes the drinker to become\ninfatuated or obsessed with the person who gave it to them.\nLove potions are considered to be powerful and highly dangerous.\nDespite its power, it doesn't create actual love;\nit's impossible to manufacture or imitate love.";
        }
        //Luck Mix
        if (potionMix[0] == potionLuck[0] && potionMix[1] == potionLuck[1] && potionMix[2] == potionLuck[2] && potionMix[3] == potionLuck[3] && potionMix[4] == potionLuck[4]) {
            HarryPotter.cauldron[0].potionColor = "#FFD700";
            HarryPotter.cauldron[0].update();
            realPotion = true;
            output = "Congratulations!\nYou've successfully brewed Felix Felicis!\n\nFelix Felicis, also called Liquid Luck,\nis a magical potion that makes the drinker lucky for a period of time,\nduring which everything they attempt will be successful.\nIt turns an ordinary day into an extraordinary one. ";
        }
        //Calm Mix
        if (potionMix[0] == potionCalm[0] && potionMix[1] == potionCalm[1] && potionMix[2] == potionCalm[2] && potionMix[3] == potionCalm[3] && potionMix[4] == potionCalm[4]) {
            HarryPotter.cauldron[0].potionColor = "#00FFFF";
            HarryPotter.cauldron[0].update();
            realPotion = true;
            output = "Congratulations!\nYou've successfully brewed Draught of Peace!\n\nThe Draught of Peace is a potion which relieves\nanxiety and agitation.";
        }
        //Truth Mix
        if (potionMix[0] == potionTruth[0] && potionMix[1] == potionTruth[1] && potionMix[2] == potionTruth[2] && potionMix[3] == potionTruth[3] && potionMix[4] == potionTruth[4]) {
            HarryPotter.cauldron[0].potionColor = "#008000";
            HarryPotter.cauldron[0].update();
            realPotion = true;
            output = "Congratulations!\nYou've successfully brewed Veritaserum!\n\nVeritaserum is a powerful truth serum.\nThe potion effectively forces the drinker\nto answer any questions put to them truthfully.";
        }
        //Poly Mix
        if (potionMix[0] == potionPoly[0] && potionMix[1] == potionPoly[1] && potionMix[2] == potionPoly[2] && potionMix[3] == potionPoly[3] && potionMix[4] == potionPoly[4]
            && potionMix[5] == potionPoly[5] && potionMix[6] == potionPoly[6] && potionMix[7] == potionPoly[7] && potionMix[8] == potionPoly[8] && potionMix[9] == potionPoly[9]
            && potionMix[10] == potionPoly[10] && potionMix[11] == potionPoly[11] && potionMix[12] == potionPoly[12] && potionMix[13] == potionPoly[13] && potionMix[14] == potionPoly[14]
            && potionMix[15] == potionPoly[15] && potionMix[16] == potionPoly[16]) {
            HarryPotter.cauldron[0].potionColor = "#FF0000";
            HarryPotter.cauldron[0].update();
            realPotion = true;
            output = "Congratulations!\nYou have uncovered the ingredients of the Secret Potion!\nYou've successfully brewed Polyjuice Potion!\n\nPolyjuice Potion is a potion that allows the drinker\nto assume the form of someone else.\nIt's a complicated and challenging potion\nthat even adult witches and wizards struggle to brew correctly.";
        }
        //Final output
        if (realPotion) {
            console.log("Trank erfolgreich");
            alert(output);
        }
        else {
            console.log("Trank fehlgeschlagen");
            HarryPotter.cauldron[0].potionColor = "#2F4F4F";
            HarryPotter.cauldron[0].update();
            alert("Oh oh... Looks like something went wrong.");
        }
    }
    //Checkboxes
    function createCheckbox(_ingredient) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        label.id = _ingredient;
        input.name = _ingredient;
        label.innerText = _ingredient;
        label.appendChild(input);
        ingredient.appendChild(label);
        inputingredient.push(input);
    }
    //Show Rezept Love
    function ingLove() {
        alert("Try to remember all the ingredients:\n\n- Ashwinder Egg\n- Powdered Moonstone\n- Rose Thorn\n- Pearl Dust\n- Peppermint");
    }
    //Rezept Luck
    function ingLuck() {
        alert("Try to remember all the ingredients:\n\n- Phoenix Tears\n- Occamy Eggshell\n- Veela Hair\n- Cinnamon\n- Pumpkin Juice");
    }
    //Rezept Calm
    function ingCalm() {
        alert("Try to remember all the ingredients:\n\n- Unicorn Horn\n- Powdered Moonstone\n- Phoenix Tears\n- Night Shade\n- Mermaid Scale");
    }
    //Rezept Truth
    function ingTruth() {
        alert("Try to remember all the ingredients:\n\n- Dragoneye\n- Bezoar\n- Acromantula Venom\n- Basilisk Fang\n- Mermaid Scale");
    }
    function ingPoly() {
        alert("Try to figure out the ingredients for this potion yourself.\n\nKeep in mind: Less isn't always more.");
    }
    //CANVAS
    function drawCanvas() {
        HarryPotter.crc2.fillStyle = "#4d4d4d";
        HarryPotter.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Tisch
        HarryPotter.crc2.fillStyle = "#773d22";
        HarryPotter.crc2.fillRect(0, 490, 1000, 250);
        //Objekte
        drawCauldron(500, 450);
        drawCandle(800, 480, "#990000", "#990000");
        drawCandle(750, 510, "#990000", "#990000");
        drawCandle(825, 510, "#990000", "#990000");
        drawHeadline(20, 50, "#F4A460", "#F4A460");
        drawHeadline2(20, 100, "#F4A460", "#F4A460");
        drawWand(230, 435, "#502916", "#502916");
        drawBook(180, 510, "#2d2d86", "#2d2d86");
        drawWindow(750, 40, "#000000", "#000000");
        drawMoon(900, 75, "#FFFFFF", "#FFFFFF");
        drawFlame1(808, 473, "#ffcc80", "#ffcc80");
        drawFlame2(758, 503, "#ffcc80", "#ffcc80");
        drawFlame3(833, 503, "#ffcc80", "#ffcc80");
    }
    //Kessel mit Trank erstellen
    function drawCauldron(_x, _y) {
        let a = new HarryPotter.Potion(_x, _y);
        HarryPotter.cauldron.push(a);
    }
    //OBJEKTE
    //Kerze
    function drawCandle(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(_x, _y);
        HarryPotter.crc2.fillRect(_x, _y, 20, 50);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 10, _y);
        HarryPotter.crc2.lineTo(_x + 10, _y - 8);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
    //Zauberstab
    function drawWand(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(_x, _y);
        HarryPotter.crc2.lineTo(_x + 60, _y - 100);
        HarryPotter.crc2.lineTo(_x - 25, _y + 20);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
    //Buch
    function drawBook(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(_x, _y);
        HarryPotter.crc2.fillRect(_x, _y, 120, 100);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#FFFFFF";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 10, _y + 10);
        HarryPotter.crc2.fillRect(_x + 10, _y + 10, 100, 80);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 60, _y + 10);
        HarryPotter.crc2.lineTo(_x + 60, _y + 90);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 20);
        HarryPotter.crc2.lineTo(_x + 50, _y + 20);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 30);
        HarryPotter.crc2.lineTo(_x + 50, _y + 30);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 40);
        HarryPotter.crc2.lineTo(_x + 50, _y + 40);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 50);
        HarryPotter.crc2.lineTo(_x + 50, _y + 50);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 60);
        HarryPotter.crc2.lineTo(_x + 50, _y + 60);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 70);
        HarryPotter.crc2.lineTo(_x + 50, _y + 70);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 20, _y + 80);
        HarryPotter.crc2.lineTo(_x + 50, _y + 80);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 20);
        HarryPotter.crc2.lineTo(_x + 100, _y + 20);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 30);
        HarryPotter.crc2.lineTo(_x + 100, _y + 30);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 40);
        HarryPotter.crc2.lineTo(_x + 100, _y + 40);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 50);
        HarryPotter.crc2.lineTo(_x + 100, _y + 50);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 60);
        HarryPotter.crc2.lineTo(_x + 100, _y + 60);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 70);
        HarryPotter.crc2.lineTo(_x + 100, _y + 70);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 70, _y + 80);
        HarryPotter.crc2.lineTo(_x + 100, _y + 80);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
    //Flamme 1
    function drawFlame1(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(808, 473);
        HarryPotter.crc2.quadraticCurveTo(808, 440, 813, 473);
        HarryPotter.crc2.shadowColor = "#FFFFFF";
        HarryPotter.crc2.shadowBlur = 20;
        HarryPotter.crc2.shadowOffsetX = 0;
        HarryPotter.crc2.shadowOffsetY = 0;
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.shadowBlur = 0;
    }
    //Flamme 2
    function drawFlame2(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(758, 503);
        HarryPotter.crc2.quadraticCurveTo(760, 470, 763, 503);
        HarryPotter.crc2.shadowColor = "#FFFFFF";
        HarryPotter.crc2.shadowBlur = 20;
        HarryPotter.crc2.shadowOffsetX = 0;
        HarryPotter.crc2.shadowOffsetY = 0;
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.shadowBlur = 0;
    }
    //Flamme 3
    function drawFlame3(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(833, 503);
        HarryPotter.crc2.quadraticCurveTo(834, 470, 838, 503);
        HarryPotter.crc2.shadowColor = "#FFFFFF";
        HarryPotter.crc2.shadowBlur = 20;
        HarryPotter.crc2.shadowOffsetX = 0;
        HarryPotter.crc2.shadowOffsetY = 0;
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.shadowBlur = 0;
    }
    //Fenster
    function drawWindow(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#2d2d86";
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(_x, _y);
        HarryPotter.crc2.fillRect(_x, _y, 200, 160);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x + 100, _y);
        HarryPotter.crc2.lineTo(_x + 100, _y + 160);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = "#000000";
        HarryPotter.crc2.strokeStyle = "#000000";
        HarryPotter.crc2.moveTo(_x, _y + 80);
        HarryPotter.crc2.lineTo(_x + 200, _y + 80);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
    //Mond
    function drawMoon(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.moveTo(_x, _y);
        HarryPotter.crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        HarryPotter.crc2.shadowColor = "#FFFFFF";
        HarryPotter.crc2.shadowBlur = 15;
        HarryPotter.crc2.shadowOffsetX = 0;
        HarryPotter.crc2.shadowOffsetY = 0;
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.shadowBlur = 0;
    }
    function drawHeadline(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.font = "50px 'Calligraffitti', cursive";
        HarryPotter.crc2.fillText("Potter's Potion Kitchen", _x, _y);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
    function drawHeadline2(_x, _y, _strokeColor, _fillColor) {
        HarryPotter.crc2.beginPath();
        HarryPotter.crc2.fillStyle = _fillColor;
        HarryPotter.crc2.strokeStyle = _strokeColor;
        HarryPotter.crc2.font = "30px 'Calligraffitti', cursive";
        HarryPotter.crc2.fillText("Ingredients", _x, _y);
        HarryPotter.crc2.stroke();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.closePath();
        HarryPotter.crc2.fill();
        HarryPotter.crc2.stroke();
    }
})(HarryPotter || (HarryPotter = {}));
//# sourceMappingURL=potions.js.map