/*
Aufgabe: Aufgabe 10 - ClientServer
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.06.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde mit der Hilfe von Moritz Giuliani erstellt.
*/
var Ice;
(function (Ice) {
    window.addEventListener("load", init);
    //Variablen
    let flavour;
    let flavours = ["Vanilla ", "Chocolate ", "Stracciatella ", "Pistachio ",
        "Cinnamon ", "Tiramisu ", "Coconut ", "Cookies ",
        "Coffee ", "Caramel ", "Bueno ", "Rafaello ",
        "Almond ", "Hazelnut "
    ];
    let inputflavour = [];
    let fruit;
    let fruits = ["Strawberry", "Raspberry", "Cherry", "Green Apple",
        "Pineapple", "Melon", "Cantaloupe", "Mango", "Kiwi", "Grapefruit", "Pomegranate"
    ];
    let topping;
    let toppings = ["Whipped Cream ", "Brittle ", "Couverture "];
    let inputtopping = [];
    let container;
    let containers = ["Cone ", "Bowl ", "Brittle Cone "];
    let inputcontainer = [];
    let order;
    let creation;
    let creations;
    //Initialisierung
    function init() {
        flavour = document.getElementById("flavours");
        topping = document.getElementById("toppings");
        container = document.getElementById("containers");
        order = document.getElementById("order");
        creation = document.getElementById("send");
        icecreamKit();
        flavour.addEventListener("change", calculateOrder);
        topping.addEventListener("change", calculateOrder);
        container.addEventListener("change", calculateOrder);
        creation.addEventListener("click", orderInput);
    }
    //CHECK ORDER
    function orderInput() {
        let warning = ["Invalid Entry: \n"];
        let name = document.getElementById("name");
        let street = document.getElementById("street");
        let location = document.getElementById("location");
        let delivery = 0;
        let container = 0;
        let scoop = 0;
        //Fehlende Angaben - Kunde
        if (name.validity.valid == false)
            warning.push("Please enter your name \n");
        if (street.validity.valid == false)
            warning.push("Please enter your street \n");
        if (location.validity.valid == false)
            warning.push("Please enter your location \n");
        //Eiscreme
        for (let i = 0; i < inputflavour.length; i++) {
            if (parseInt(inputflavour[i].value) > 0)
                scoop += 1;
        }
        if (scoop == 0)
            warning.push("No ice cream selected\n");
        //Darbietung
        for (let i = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked)
                container += 1;
        }
        if (container == 0)
            warning.push("No ice container selected\n");
        //Bestellung unvollständig
        if (warning.length > 1) {
            for (let i = 0; i < warning.length; i++)
                warning.push;
            alert(warning.join(""));
        }
    }
    //Eiscreme Auswahl
    function icecreamKit() {
        for (let i = 0; i < flavours.length; i++) {
            createInput(flavours[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i = 0; i < containers.length; i++) {
            createRadio(containers[i]);
        }
    }
    //Stepper
    function createInput(_sort) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _sort;
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _sort;
        input.name = _sort;
        label.appendChild(input);
        flavour.appendChild(label);
        inputflavour.push(input);
    }
    //Checkboxes
    function createCheckbox(_topping) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        label.id = _topping;
        input.name = _topping;
        label.innerText = _topping;
        label.appendChild(input);
        topping.appendChild(label);
        inputtopping.push(input);
    }
    //Radio Buttons
    function createRadio(_darbietung) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "container";
        label.innerText = _darbietung;
        input.required = true;
        label.id = _darbietung;
        input.name = _darbietung;
        label.appendChild(input);
        container.appendChild(label);
        inputcontainer.push(input);
    }
    //Zusammenrechnen der Bestellung
    function calculateOrder() {
        let total = 0;
        for (let i = 0; i < inputflavour.length; i++) {
            total += parseInt(inputflavour[i].value);
        }
        for (let i = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked)
                total += .25;
        }
        showOrder(total);
    }
    //Kreation + Bestellung des Kunden abfragen
    function showOrder(_sum) {
        creations = document.getElementById("creation");
        creations.innerText = "";
        for (let i = 0; i < inputflavour.length; i++) {
            if (parseInt(inputflavour[i].value) > 0) {
                creations.innerText += (parseInt(inputflavour[i].value)) + " scoop(s) of " + flavours[i] + " " + "\n";
            }
        }
        for (let i = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked) {
                creations.innerText += toppings[i] + "\n";
            }
        }
        for (let i = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked) {
                creations.innerText += containers[i] + "\n";
            }
        }
        let completeSum = document.getElementById("total");
        completeSum.innerText = _sum.toString() + " €";
    }
})(Ice || (Ice = {}));
//# sourceMappingURL=ice.js.map