/*
Aufgabe: Aufgabe 9 - FormElements
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 04.06.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Eisdieler;
(function (Eisdieler) {
    window.addEventListener("load", init);
    //GLOBAL VARIABLES
    let flavour;
    let flavours = ["Vanilla", "Chocolate", "Stracciatella", "Pistachio", "Cinnamon"];
    let inputflavour = [];
    let topping;
    let toppings = ["Whipped Cream", "Brittle", "Couverture"];
    let inputtopping = [];
    let container;
    let containers = ["Cone", "Bowl", "Brittle Cone"];
    let inputcontainer = [];
    let order;
    let creation;
    let creations;
    //INITIALIZE
    function init() {
        //Ini fieldsets
        flavour = document.getElementById("flavours");
        topping = document.getElementById("toppings");
        container = document.getElementById("containers");
        order = document.getElementById("order");
        creation = document.getElementById("send");
        //Ini ice selections
        icecreamKit();
        //Ini change listener
        flavour.addEventListener("change", calculateOrder);
        topping.addEventListener("change", calculateOrder);
        container.addEventListener("change", calculateOrder);
        //Ini check listener
        creation.addEventListener("click", checkInput);
    }
    //CHECK ORDER
    function checkInput() {
        let warning = ["Invalid Entry: \n"];
        let name = document.getElementById("name");
        let street = document.getElementById("street");
        let location = document.getElementById("location");
        let delivery = document.getElementById("delivery");
        let container = 0;
        //Check for missing inputs
        if (name.validity.valid == false)
            warning.push("Please enter your name \n");
        if (street.validity.valid == false)
            warning.push("Please enter your street \n");
        if (location.validity.valid == false)
            warning.push("Please enter your location \n");
        //Delivery??
        if (delivery.value != "Foot" && delivery.value != "Express")
            warning.push("Please choose your preferred delivery option \n");
        //If no Ice selected???
        //If no container (radio) checked
        for (let i = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked)
                container += 1;
        }
        if (container == 0)
            warning.push("No ice container selected");
        //Create warning message
        if (warning.length > 1) {
            for (let i = 0; i < warning.length; i++)
                warning.push; //can't find mistake
            alert(warning.join(""));
        }
        else {
            alert("Your order has been submitted.");
        }
    }
    //Create Ice Selection
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
    //Create Stepper
    function createInput(_sort) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        //Create values
        label.innerText = _sort;
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _sort;
        //Add values
        label.appendChild(input);
        flavour.appendChild(label);
        inputflavour.push(input);
    }
    //Create Checkboxes
    function createCheckbox(_topping) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        //Create values
        input.type = "checkbox";
        label.id = _topping;
        label.innerText = _topping;
        //Add values
        label.appendChild(input);
        topping.appendChild(label);
        inputtopping.push(input);
    }
    //Create Radio Button
    function createRadio(_darbietung) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        //Create values
        input.type = "radio";
        input.name = "container";
        label.innerText = _darbietung;
        input.required = true;
        label.id = _darbietung;
        //Add values
        label.appendChild(input);
        container.appendChild(label);
        inputcontainer.push(input);
    }
    //CHANGE ICE HANDLER
    function calculateOrder() {
        let total = 0; //total price amount
        for (let i = 0; i < inputflavour.length; i++) {
            total += parseInt(inputflavour[i].value); //add ice selection price
        }
        for (let i = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked)
                total += .4; //add topping price (40 cent)
        }
        showOrder(total); //submit sum (parameter: total) to changeCart function
    }
    //CHANGE CART
    function showOrder(_sum) {
        creations = document.getElementById("creation");
        creations.innerText = "";
        //Create selected Ice list
        for (let i = 0; i < inputflavour.length; i++) {
            if (parseInt(inputflavour[i].value) > 0) {
                creations.innerText += flavours[i] + " " + "\n";
            }
        }
        //Create selected topping list
        for (let i = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked) {
                creations.innerText += toppings[i] + "\n";
            }
        }
        //Show selected container
        for (let i = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked) {
                creations.innerText += containers[i] + "\n";
            }
        }
        //Show total price
        let summeHtml = document.getElementById("total");
        summeHtml.innerText = _sum.toString() + " €";
    }
})(Eisdieler || (Eisdieler = {})); // END OF NAMESPACE
//# sourceMappingURL=ice.js.map