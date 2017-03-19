/*
Aufgabe: Aufgabe 0 - Arbeitsfähighkeit
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 19.03.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var name;
var willkommen;
document.addEventListener('DOMContentLoaded', function () {
    console.log("Test");
    name = prompt("Wie ist dein Name?");
    willkommen = "Hallo ";
    document.getElementById("welcome").innerHTML = willkommen + name + "! " + "Siehst heute wieder mal super aus!";
});
//# sourceMappingURL=hallo.js.map