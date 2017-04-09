/*
Aufgabe: Aufgabe 3a: Sissas Summe
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 09.04.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Zu 2a: Dieser Code wurde zusammen mit Alfred Müller und mit Hilfestellung von Moritz Giuliani erstellt.
Zu 3a: Dieser Code wurde mit Hilfestellung von Moritz Giuliani erstellt.

*/

/*Aufgabe 2a*/

document.addEventListener("DOMContentLoaded", function(): void {
    console.log("test");


    let board: HTMLElement = document.createElement("section");
    document.body.appendChild(board);
    var total: number = 0;

    for (var i: number = 0; i < 64; i++) {
        let field: HTMLDivElement = document.createElement("div");
        board.appendChild(field);
        let rice: number = Math.pow(2, i);
        field.innerText = "" + rice;

        console.log(i);

    }

    /*Aufgabe 3a*/

    for (let i: number = 0; i < 8; i++) {
        console.log("Schleife");
        let fields: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
        fields[i].addEventListener("click", function() {
            fields[i].classList.toggle("selection");

            console.log(fields[i]);

            let selected: NodeListOf<Element> = document.getElementsByClassName("selection");

            console.log(selected);

            if (selected.length == 0) {
                document.getElementById("Summe").style.display = "none";
            }

            else {
                document.getElementById("Summe").style.display = "inline-block";
            }

            document.getElementById("Summe").textContent = "Summe der Weizenkörner - " + "Dezimal: " + total.toString() + ";" + " Hexadezimal: " + total.toString(16);


            for (let i: number = 0; i < selected.length; i++) {
                total += Number(selected[i].textContent);
            }
        });
    }
    document.addEventListener("mousemove", function(Event) {
        document.getElementById("Summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("Summe").style.top = (Event.clientY + 10) + "px";
    });


});