/*
Aufgabe: Aufgabe 3b: Mau-Mau
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 09.04.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde zusammen mit ALfred Müller erstellt.

*/
var deck = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass",
    "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
    "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass",
    "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass"];
var nummer = deck.length;
var nummer1 = 0;
var nummer2 = 0;
function ziehen() {
    var karteh = deck[Math.floor(Math.random() * deck.length)];
    if (nummer > 0 && nummer1 < 5) {
        nummer--;
        document.getElementById("kartendeck").innerHTML = "Kartenanzahl: " + nummer;
    }
    if (nummer1 < 5) {
        nummer1++;
        document.getElementById("karte" + nummer1).innerHTML = karteh;
    }
}
function myFunction1() {
    document.getElementById("karte1").innerHTML = "";
    nummer1 = 0;
    nummer2++;
    document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;
}
function myFunction2() {
    document.getElementById("karte2").innerHTML = "";
    nummer1 = 1;
    nummer2++;
    document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;
}
function myFunction3() {
    document.getElementById("karte3").innerHTML = "";
    nummer1 = 2;
    nummer2++;
    document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;
}
function myFunction4() {
    document.getElementById("karte4").innerHTML = "";
    nummer1 = 3;
    nummer2++;
    document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;
}
function myFunction5() {
    document.getElementById("karte5").innerHTML = "";
    nummer1 = 0;
    nummer2++;
    document.getElementById("kd").innerHTML = "abgelegte Karten : " + nummer2;
}
//# sourceMappingURL=karten.js.map