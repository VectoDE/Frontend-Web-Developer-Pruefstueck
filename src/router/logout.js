export function logout() {
    // Hier können Sie die Logik für die Abmeldung implementieren
    // Zum Beispiel: Benutzer aus der lokalen Speicherung entfernen und zur Anmeldeseite weiterleiten
    localStorage.removeItem('user'); // Beispiel: Benutzer aus der lokalen Speicherung entfernen
}