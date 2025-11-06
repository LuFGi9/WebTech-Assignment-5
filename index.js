const API_BASE = "https://api.frankfurter.dev/v1"

/**
 * Ruft die Currencies ab, die von https://api.frankfurter.dev unterstützt werden.
 * @returns {Promise<object>} Gibt ein Objekt zurück, dessen Keys die Währungssymbole (z.B. EUR, USD), und dessen Values die Namen der Währungen (z.B. "Euro", "United States Dollar") sind.
 */
async function getCurrencies() {

}

/**
 * Wandelt mithilfe von https://api.frankfurter.dev einen bestimmten `amount` einer Währung `from` in den Wert einer Währung `to` um, entsprechend dem aktuellen Wechselkurs. 
 * @param {string} from Ursprungswährung
 * @param {string} to Zielwährung
 * @param {Number} amount
 * @returns {Promise<Number>} Rückgabewert ist der konvertierte Betrag als Number.
 */
async function convertCurrency(from, to, amount) {

}

async function initialize() {

    // AUFGABE 1: Implementieren Sie Funktionen a) getCurrencies und b) convertCurrency.
    // Beachten Sie dazu die Kommentare an den Funktionen.
    // Nutzen Sie `fetch`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // Schauen Sie sich evtl. die async-await Syntax aus VL Web Apps I erneut an
    // Nutzen Sie die "Frankfurter"-API: https://api.frankfurter.dev/ (Dokumentation unter https://frankfurter.dev/ verfügbar)
    async function addTestOutputExcercise1() {
        let testsElement = document.getElementById("tests")
        let titleElement = document.createElement('h3')
        titleElement.textContent = "Tests für Aufgabe 1";

        let currencyElement = document.createElement("p");
        currencyElement.textContent = "Währungen: " + JSON.stringify(await getCurrencies(), undefined, 2);

        let conversionElement = document.createElement("p");
        conversionElement.textContent = "Kurs EUR zu USD: " + await convertCurrency("EUR", "USD", 1);
        testsElement.append(titleElement, currencyElement, conversionElement);
    }
    await addTestOutputExcercise1();
    // AUFGABE 2: Kommentieren Sie zunächst den Aufruf der Funktion addTestOutputExcercise1() aus.
    // Sorgen Sie nun dafür, dass die beiden Dropdowns mit den möglichen Währungen gefüllt werden.

    // a) Mit `getCurrency` aus Aufgabe 1 können Sie die Währungen abrufen.

    // b) Anschließend müssen Sie die beiden Select-Elemente mit entsprechenden DOM-Methoden auswählen (siehe VL Web Apps II)

    // c) Jetzt müssen Sie mit der DOM-API Option-Elemente erstellen und dann beim Select-Element einfügen. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select



    // AUFGABE 3: Sorgen Sie dafür, dass der Rechner-Output jedes Mal aktualisiert wird, wenn sich der Eingabe-Betrag ODER die Eingabe-Währung ODER die Ausgabe-Währung ändern.

    // Zunächst definieren wir eine asynchrone Funktion `onChange`, die...
    // a) bei Aufruf den Wert aller Eingabefelder (amount, from, to) abruft
    // b) dann mit `convertCurrency` aus Aufgabe 1 die Währung umwandelt
    // c) und schließlich das Ergebnis im Output-Element anzeigt.

    // d) Füge jetzt noch den Listener zu den Input- und Select-Elementen hinzu.
}

initialize()