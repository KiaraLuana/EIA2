/*

    Aufgabe: Aufgabe 3b: Mau - Mau

Name: Kiara Luana Oßwald

Matrikel: 254140

Datum: 20.04.2017

    

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde zusammen mit Alfred Müller erstellt.

*/

 

 

var deck: string[] = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass",

    "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",

    "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass",

    "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass"];

 

var nummer1: number = 0;

var nummer2: number = 0;

var kartenwert: number;

var karteh: string;

 

function ziehen(): void {

    //zieht zufällige Stelle aus Array

    kartenwert = Math.floor((Math.random() * deck.length) + 0);

    //Gewählte Karte gem. Kartenwert

    karteh = deck[kartenwert];

    console.log("Kartenwert: ", kartenwert);

 

 

    if (deck.length > 0 && nummer1 < 5) {

        //Entfernt Karte aus deck

        deck.splice(kartenwert, 1);

 

        document.getElementById("kartendeck").innerHTML = "Kartenanzahl: " + deck.length;

        console.log("Deck Inhalt: ", deck);

 

    }

 

    if (nummer1 < 5) {

        nummer1++;

        document.getElementById("karte" + nummer1).textContent = karteh;

 

    }

 

}

function myFunction1(): void {

    //Prüft ob Kartenfeld 1 eine Karte zugewiesen hat (innerHTML also Inhalt hat)

    if (document.getElementById("karte1").innerHTML != "") {

        document.getElementById("karte1").innerHTML = "";

        nummer1 --;

        nummer2++;

        document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;

    }

}

 

function myFunction2(): void {

    //Prüft ob Kartenfeld 2 eine Karte zugewiesen hat (innerHTML also Inhalt hat)

    if (document.getElementById("karte2").innerHTML != "") {

        document.getElementById("karte2").innerHTML = "";

        nummer1 --;

        nummer2++;

        document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;

    }

}

 

function myFunction3(): void {

    //Prüft ob Kartenfeld 3 eine Karte zugewiesen hat (innerHTML also Inhalt hat)

    if (document.getElementById("karte3").innerHTML != "") {

        document.getElementById("karte3").innerHTML = "";

        nummer1 --;

        nummer2++;

        document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;

    }

}

 

function myFunction4(): void {

    //Prüft ob Kartenfeld 4 eine Karte zugewiesen hat (innerHTML also Inhalt hat)

    if (document.getElementById("karte4").innerHTML != "") {

        document.getElementById("karte4").innerHTML = "";

        nummer1 --;

        nummer2++;

        document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;

    }

}

 

function myFunction5(): void {

    //Prüft ob Kartenfeld 5 eine Karte zugewiesen hat (innerHTML also Inhalt hat)

    if (document.getElementById("karte5").innerHTML != "") {

        document.getElementById("karte5").innerHTML = "";

        nummer1 --;

        nummer2++;

        document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;

    }

}