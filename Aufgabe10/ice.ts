/*
Aufgabe: Aufgabe 9 - FormElements
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 04.06.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde mit der Hilfe von Moritz Giuliani erstellt.
*/

namespace Ice {
    window.addEventListener("load", init);

    //Variablen

    let flavour: HTMLElement;
    let flavours: string[] = ["Vanilla ", "Chocolate ", "Stracciatella ", "Pistachio ",
        "Cinnamon ", "Tiramisu ", "Coconut ", "Cookies ",
        "Coffee ", "Caramel ", "Bueno ", "Rafaello ",
        "Almond ", "Hazelnut "
    ];
    let inputflavour: HTMLInputElement[] = [];

    let fruit: HTMLElement;
    let fruits: string[] = ["Strawberry", "Raspberry", "Cherry", "Green Apple",
        "Pineapple", "Melon", "Cantaloupe", "Mango", "Kiwi", "Grapefruit", "Pomegranate"
    ];

    let topping: HTMLElement;
    let toppings: string[] = ["Whipped Cream ", "Brittle ", "Couverture "];
    let inputtopping: HTMLInputElement[] = [];

    let container: HTMLElement;
    let containers: string[] = ["Cone ", "Bowl ", "Brittle Cone "];
    let inputcontainer: HTMLInputElement[] = [];

    let order: HTMLElement;
    let creation: HTMLElement;
    let creations: HTMLElement;
    



    //Initialisierung
    function init(): void {

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
    function orderInput(): void {

        let warning: string[] = ["Invalid Entry: \n"];
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        let location: HTMLInputElement = <HTMLInputElement>document.getElementById("location");
        let delivery: number = 0;
        let container: number = 0;
        let scoop: number = 0;

        //Fehlende Angaben - Kunde
        if (name.validity.valid == false)
            warning.push("Please enter your name \n");
        if (street.validity.valid == false)
            warning.push("Please enter your street \n");
        if (location.validity.valid == false)
            warning.push("Please enter your location \n");
        
        //Eiscreme

        for (let i: number = 0; i < inputflavour.length; i++) {
            if (parseInt(inputflavour[i].value) > 0)
                scoop += 1;
        }
        if (scoop == 0)
            warning.push("No ice cream selected\n");
        

        //Darbietung
        for (let i: number = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked)
                container += 1;
        }
        if (container == 0)
            warning.push("No ice container selected\n");

        //Bestellung unvollständig
        if (warning.length > 1) {
            for (let i: number = 0; i < warning.length; i++)
                warning.push;
            alert(warning.join(""));

        }


    }



    //Eiscreme Auswahl
    
    function icecreamKit(): void {

        for (let i: number = 0; i < flavours.length; i++) {
            createInput(flavours[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < containers.length; i++) {
            createRadio(containers[i]);
        }
    }




    //Stepper
    function createInput(_sort: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

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
    function createCheckbox(_topping: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        input.type = "checkbox";
        label.id = _topping;
        input.name = _topping;
        label.innerText = _topping;

        label.appendChild(input);
        topping.appendChild(label);
        inputtopping.push(input);
    }

    //Radio Buttons
    function createRadio(_darbietung: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        input.type = "radio";
        input.name = "container";
        label.innerText = _darbietung;
        input.required = true;
        label.id = _darbietung;

        label.appendChild(input);
        container.appendChild(label);
        inputcontainer.push(input);
    }



    //Zusammenrechnen der Bestellung
    function calculateOrder(): void {
        let total: number = 0; 
        for (let i: number = 0; i < inputflavour.length; i++) {
            total += parseInt(inputflavour[i].value); 
        }
        for (let i: number = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked)
                total += .25; 
        }

        showOrder(total);
    }

    //Kreation + Bestellung des Kunden abfragen
    function showOrder(_sum: number): void {
        creations = document.getElementById("creation");
        creations.innerText = "";

        
        for (let i: number = 0; i < inputflavour.length; i++) {
            if (parseInt(inputflavour[i].value) > 0) {
                creations.innerText += (parseInt(inputflavour[i].value)) + " scoop(s) of " + flavours[i] + " " + "\n";
            }
        }

        for (let i: number = 0; i < inputtopping.length; i++) {
            if (inputtopping[i].checked) {
                creations.innerText += toppings[i] + "\n";
            }
        }

        for (let i: number = 0; i < inputcontainer.length; i++) {
            if (inputcontainer[i].checked) {
                creations.innerText += containers[i] + "\n";
            }
        }

        let completeSum: HTMLElement = document.getElementById("total");
        completeSum.innerText = _sum.toString() + " €";
    }

}