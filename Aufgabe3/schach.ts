/*
Aufgabe: Aufgabe 3a: Sissas Summe
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 02.04.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/



document.addEventListener("DOMContentLoaded", function(): void {
    console.log("test");


    let board: HTMLElement = document.createElement("section");
    document.body.appendChild(board);

    for (var i: number = 0; i < 64; i++) {
        let field: HTMLDivElement = document.createElement("div");
        board.appendChild(field);
        let rice: number = Math.pow(2, i);
        field.innerText = "" + rice;

        console.log(i);

    }

    for (let i: number = 0; i < 8; i++); {
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

            document.getElementById("Summe").textContent = "Test";
        });
    }




});