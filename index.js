const API_BASE = "https://api.frankfurter.app"

/** Ruft die Currencies ab, die von https://api.frankfurter.app unterstützt werden. Gibt ein Objekt zurück, dessen Keys die Währungssymbole (z.B. EUR, USD), und dessen Values die Namen der Währungen (z.B. "Euro", "United States Dollar") sind. */
async function getCurrencies() {

}

/** Wandelt mithilfe von https://api.frankfurter.app einen bestimmten `amount` einer Währung `from` in den Wert einer Währung `to` um, entsprechend dem aktuellen Wechselkurs. Der Rückgabewert ist der konvertierte Betrag als Number. */
async function convertCurrency(from, to, amount) {

}

async function initialize() {
    
    // AUFGABE 1: Implementiere die Funktionen a) getCurrencies und b) convertCurrency.
    // Beachte dazu die Kommentare an den Funktionen.
    // Nutze `fetch`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // Nutze das "Frankfurter"-API: https://frankfurter.dev/
    document.write(JSON.stringify(await getCurrencies(), undefined, 2))
    document.write("<br>")
    document.write("Kurs EUR zu USD:", await convertCurrency("EUR", "USD", 1))

    
    // AUFGABE 2: Kommentiere zunächst die `document.write`-Aufrufe aus.
    // Sorge nun dafür, dass die beiden Dropdowns mit den möglichen Währungen gefüllt werden.
    
    // a) Mit `getCurrency` aus Aufgabe 1 kannst du die Währungen abrufen.
    
    // b) Dann musst du die beiden Select-Elemente mit entsprechenden DOM-Methoden auswählen (siehe VL Web Apps II)
    
    // c) Jetzt musst du mit dem DOM-API Option-Elemente erstellen und dann beim Select-Element einfügen. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select


    
    // AUFGABE 3: Sorge dafür, dass der Rechner-Output jedes Mal aktualisiert wird, wenn sich der Eingabe-Betrag ODER die Eingabe-Währung ODER die Ausgabe-Währung ändern.
    
    // Zunächst definieren wir eine asynchrone Funktion `onChange`, die...
    // a) bei Aufruf den Wert aller Eingabefelder (amount, from, to) abruft
    // b) dann mit `convertCurrency` aus Aufgabe 1 die Währung umwandelt
    // c) und schließlich das Ergebnis im Output-Element anzeigt.

    // d) Füge jetzt noch den Listener zu den Input- und Select-Elementen hinzu.
}

initialize()