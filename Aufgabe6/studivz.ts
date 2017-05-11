/*
Aufgabe: Aufgabe 6b - StudiVZ
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 07.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let data: string[] = _input.split(",");
        let student: StudentData = {
            matrikel: parseInt(data[0]),
            name: data[1],
            vorname: data[2],
            alter: parseInt(data[3]),
            geschlecht: parseInt(data[4]) == 0,
            kommentar: data[5]
        };

        let gender: string;
        if (data[4] == " 0") {
            gender = "weiblich";
        }
        if (data[4] == "0") {
            gender = "weiblich";
        }
        if (data[4] == " 1") {
            gender = "männlich";
        }
        if (data[4] == "1") {
            gender = "männlich";
        }

        students.push(student);

        return "Gespeicherte Daten:\n"
            + "\nMatrikelnummer: " + student.matrikel
            + "\nName: " + student.name
            + "\nVorname: " + student.vorname
            + "\nAlter: " + student.alter
            + "\nGeschlecht: " + gender
            + "\nKommentar: " + student.kommentar;


    }

    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            var gender: string = students[i].geschlecht ? "weiblich" : "männlich";
            if (students[i].matrikel == _matrikel) {
                return "Unter der Matrikelnummer " + students[i].matrikel + " wurden folgende Daten gespeichert:\n"
                    + "\nMatrikelnummer: " + students[i].matrikel
                    + "\nName: " + students[i].name
                    + "\nVorname: " + students[i].vorname
                    + "\nAlter: " + students[i].alter
                    + "\nGeschlecht: " + gender
                    + "\nKommentar: " + students[i].kommentar;
            }
            else {
                return "Unter dieser Matrikelnummer sind keine Daten gespeichert.";
            }
        }
    }
}