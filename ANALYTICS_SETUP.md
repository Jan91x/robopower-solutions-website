# Analytics & Search Console – Stand und Plan

**Stand: August 2026**

## Aktueller Zustand

| Baustein | Status | Was es liefert |
|---|---|---|
| **Google Search Console** | ✅ aktiv (per DNS-TXT verifiziert) | Suchbegriffe, Klicks, Impressionen, Position, gefundene Seiten – kostenlos |
| **Web-Analytics (Besucherzahlen)** | ⛔ bewusst noch nicht aktiv | – |
| **Conversion-Tracking Kontaktformular** | 🕓 im Code vorbereitet, inaktiv | – |

## Warum noch kein Web-Analytics läuft

Ursprünglich war Plausible eingebunden – allerdings ohne dass je ein Konto angelegt wurde, d. h. das Script lief ins Leere und hat **nie Daten erfasst**. Im August 2026 wurde entschieden, den Start bewusst auf Januar 2027 (Akquise-Beginn) zu legen. Gründe:

- **Bis dahin gibt es praktisch keinen Traffic zu messen.** Ohne aktive Akquise ist die „Historie", die man kaufen würde, nahezu leer.
- **Die Gratis-Testphase lässt sich nicht als Datensammler zweckentfremden.** Laut Plausible-Doku wird bei Ablauf der 30 Tage die *Erfassung gestoppt* (nicht nur das Dashboard gesperrt). Ein Start im August hätte einen leeren Monat gebracht und die einmalige Testphase verbraucht.
- **Search Console deckt den wertvollsten Teil schon kostenlos ab** – nämlich wonach Leute suchen, wenn sie die Seite finden.

Der tote Script-Aufruf wurde deshalb aus `index.html` und `en/index.html` entfernt (spart bei jedem Seitenaufruf eine sinnlose Anfrage), und die Datenschutzerklärung (Abschnitt 5) wurde korrigiert – sie hatte zuvor Plausible als aktiv genutzten Dienst beschrieben.

## Wie du jetzt schon Daten ausliest

**Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console) → Menüpunkt **„Leistung"**.
Dort siehst du: über welche Suchbegriffe Leute auf die Seite kommen, wie viele klicken, wie oft die Seite in Suchergebnissen erscheint, und auf welcher Position. Historie: ca. 16 Monate.

## To-do im Januar 2027 (Akquise-Start)

1. **Anbieter wählen** (Preise/Konditionen bitte neu prüfen – Stand der Recherche: August 2026):
   - **Plausible Starter** – ca. 9 $/Monat bei 10.000 Seitenaufrufen. Estnische Firma, Server bei Hetzner in Deutschland, cookiefrei, Conversion-Ziele bereits im günstigsten Tarif enthalten. 30 Tage kostenlos testen ohne Kreditkarte.
   - **Pirsch Analytics** – ca. 6 $/Monat. Deutsche GmbH, in Deutschland gehostet, cookiefrei, **mit AVV (Auftragsverarbeitungsvertrag)** – relevant, falls dir formale DSGVO-Papiere wichtig sind.
   - Beide erfüllen die Kernanforderung: cookiefrei → **kein Consent-Banner nötig**.
2. **Snippet einbauen:** an der markierten Stelle im `<head>` von `index.html` **und** `en/index.html` (Kommentarblock „Web-Analytics ... Geplanter Start Januar 2027").
3. **Conversion-Ziel aktivieren:** In `script.js` (Funktion `initForm`) steht bereits `if (window.plausible) window.plausible('Kontaktanfrage');`. Bei Plausible reicht es, im Dashboard ein Custom-Event-Ziel namens `Kontaktanfrage` anzulegen – am Code ändert sich nichts. Bei einem anderen Anbieter muss diese eine Zeile auf dessen Event-Syntax angepasst werden.
4. **Datenschutzerklärung ergänzen:** Abschnitt 5 in `datenschutz.html` beschreibt aktuell korrekt „kein Analysedienst". Beim Aktivieren dort den gewählten Dienst eintragen (Anbieter, Sitz, Serverstandort, Cookiefreiheit, Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO, Link zur Datenschutzerklärung des Anbieters).

## Was du dir dabei sparst

Konsequent nichts zahlen bis Januar spart rund 45 $ – ohne nennenswerten Datenverlust, weil in diesem Zeitraum ohnehin kaum Besucher zu erwarten sind.

## Bewusst offen / für später

- **Bing Webmaster Tools** – Microsoft Copilot arbeitet auf dem Bing-Index, nicht auf Google. Für KI-Sichtbarkeit über Copilot wäre eine Verifizierung dort der direkteste Hebel. Noch nicht eingerichtet.
- **Besucher-Firmenerkennung (B2B) & Google Ads** – erst zum Akquise-Start sinnvoll, laufende Kosten.
- **Consent-Banner** – aktuell nicht nötig (keine Cookies, kein Tracking). Wird erst relevant, falls ein Tool mit Cookies eingesetzt wird (z. B. Firmenerkennung).
