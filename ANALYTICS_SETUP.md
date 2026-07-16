# Analytics & Search Console – Setup-Anleitung

Umgesetzt: Plausible Analytics (Web-Statistiken) + Vorbereitung Google Search Console (Suchbegriffe) + Conversion-Tracking fürs Kontaktformular.

## Warum Plausible statt Google Analytics

- **Cookielos, keine personenbezogenen Daten** → nach aktueller Rechtslage ist **kein Consent-Banner nötig** (§ 25 TTDSG greift nur bei Cookies/Endgerätezugriff). Einfacher, schneller, keine UX-Reibung.
- **EU-Server** (Hetzner, Deutschland) → kein US-Datentransfer-Problem wie bei GA4.
- Ein 1-Zeilen-Script (< 1 KB), kein Einfluss auf Ladezeit/Core Web Vitals.
- Liefert genau das Gewünschte: Besucherzahl, Herkunftsland, Quelle/Referrer (z. B. "Google organisch", "LinkedIn", "Direktaufruf"), meistbesuchte Seiten.
- Zeigt **keine** Suchbegriffe – dafür ist Google Search Console da (siehe unten).

## Was im Code bereits eingebaut ist

1. **Plausible-Snippet** in [index.html](index.html) `<head>` – zeigt sich selbst als "not configured" an, bis der Domain-Name in deinem Plausible-Konto angelegt ist. Nichts weiter im Code zu tun.
2. **Conversion-Ziel "Kontaktanfrage"** in [script.js](script.js) – wird bei jeder erfolgreich abgeschickten Kontaktanfrage ausgelöst. Zeigt dir später: *Besucher → wie viele wurden zur Anfrage*.
3. **Datenschutzerklärung** ([datenschutz.html](datenschutz.html), Abschnitt 5) bereits um Plausible + Search Console ergänzt.
4. **Platzhalter für Search-Console-Meta-Tag** in [index.html](index.html) `<head>` (auskommentiert) – nur nötig, falls du die HTML-Meta-Methode statt DNS-TXT nutzt (siehe unten).

## Was DU extern anlegen/verifizieren musst

### 1. Plausible-Konto
1. Auf [plausible.io](https://plausible.io) registrieren (kostenpflichtig ab ca. 9 €/Monat, 30 Tage kostenlos testen; Alternative: selbst hosten, aber bei IONOS-Static-Hosting unpraktisch).
2. Neue Site anlegen mit Domain `robopowersolutions.de`.
3. Fertig – sobald die Domain im Konto hinterlegt ist, erfasst das bereits eingebaute Script automatisch Daten. Kein weiterer Code-Schritt nötig.

### 2. Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console) öffnen, mit Google-Konto anmelden.
2. Property-Typ **"Domain"** wählen (nicht "URL-Präfix") und `robopowersolutions.de` eingeben.
3. Google zeigt dir einen **DNS-TXT-Eintrag** an (z. B. `google-site-verification=abc123...`).
4. Diesen TXT-Eintrag bei IONOS im DNS-Bereich deiner Domain anlegen (Typ: TXT, Name: `@` bzw. leer, Wert: der von Google angezeigte String).
5. Zurück in Search Console auf "Bestätigen" klicken. DNS-Propagation kann bis zu 24 Std. dauern.

   *Alternative, falls du DNS nicht anfassen willst:* Property-Typ "URL-Präfix" wählen → Methode "HTML-Tag" → den gelieferten Code in [index.html](index.html) an der markierten Stelle (`<!-- Google Search Console Verifizierung ... -->`) eintragen und die Kommentarzeichen entfernen.

6. Danach in Search Console unter "Sitemaps" die vorhandene [sitemap.xml](sitemap.xml) einreichen (URL: `https://robopowersolutions.de/sitemap.xml`).

## Wie du später die Daten ausliest

- **Plausible-Dashboard** (plausible.io, nach Login): Besucher, Quellen, Top-Seiten, unter "Goals" das Ziel "Kontaktanfrage" → Conversion-Rate.
- **Search Console**: Menüpunkt "Leistung" → zeigt Suchbegriffe, Klicks, Impressionen, Position. Daten laufen erst ab dem Tag der Verifizierung auf – je früher verifiziert, desto mehr Historie liegt bis Januar 2027 vor.

## Bewusst nicht umgesetzt (auf später verschoben)

- **Consent-Banner**: nicht nötig, da Plausible cookielos/anonym arbeitet. Falls ihr später doch ein Tool mit Cookies einsetzt (z. B. Besucher-Firmenerkennung), muss das nachgezogen werden.
- **Besucher-Firmenerkennung (B2B-Deanonymisierung, z. B. Echobot/Leadfeeder) & Google Ads**: bewusst erst zum Akquise-Start Januar 2027, da laufende Kosten und aktuell kein aktiver Vertrieb.
