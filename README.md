# 🏥 Medizinische Terminologie - Interaktive Lernprüfung

Eine interaktive Web-Anwendung zum Lernen und Testen von medizinischen Fachbegriffen auf Deutsch. Perfekt für Medizinstudenten, Pflegepersonal und alle, die medizinische Terminologie lernen möchten.

![Medical Terminology Quiz](https://img.shields.io/badge/Medical-Terminology-blue)
![Language](https://img.shields.io/badge/Language-German-green)
![Status](https://img.shields.io/badge/Status-Ready-success)

## ✨ Features

- **📚 Umfassende Prüfungsfragen**: Verschiedene Fragetypen basierend auf medizinischer Terminologie
- **✍️ Multiple Fragetypen**: 
  - **Multiple-Choice**: Klassische Auswahlfragen
  - **Offene Fragen**: Freie Textantworten
  - **Aufzählungen**: Listen mit mehreren Antworten
  - **Zuordnungen**: Matching-Fragen
- **📝 Freie Texteingabe**: Schreiben Sie Ihre Antworten wie auf Papier
- **📊 Echtzeit-Fortschritt**: Verfolge deinen Fortschritt während der Prüfung
- **✅ Sofortiges Feedback**: Erhalte sofortige Rückmeldung zu deinen Antworten mit detaillierten Erklärungen
- **📈 Detaillierte Ergebnisse**: Siehe deine Leistung mit Prozentangaben und Statistiken
- **🔄 Wiederholbare Tests**: Unbegrenzte Versuche zum Lernen
- **📱 Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Smartphone
- **🎨 Modernes UI**: Ansprechendes Design mit Animationen

## 🚀 Live Demo

Besuche die Live-Demo: [GitHub Pages URL einfügen]

## 📋 Voraussetzungen

- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Keine Installation erforderlich - läuft direkt im Browser!

## 🛠️ Installation & Lokale Nutzung

### Option 1: Direkt öffnen

1. Clone das Repository:
```bash
git clone https://github.com/DEIN-USERNAME/medizinische-terminologie-pruefung.git
cd medizinische-terminologie-pruefung
```

2. Öffne `index.html` in deinem Browser:
```bash
# Auf Linux/Mac
open index.html

# Auf Windows
start index.html

# Oder einfach per Doppelklick auf die Datei
```

### Option 2: Mit lokalem Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (mit http-server)
npx http-server
```

Dann öffne `http://localhost:8000` in deinem Browser.

## 🌐 Deployment auf GitHub Pages

### Schritt-für-Schritt Anleitung:

1. **Repository erstellen**
   - Gehe zu GitHub und erstelle ein neues Repository
   - Name: z.B. `medizinische-terminologie-pruefung`
   - Öffentlich (Public) auswählen

2. **Code hochladen**
```bash
# Initialisiere Git (falls noch nicht geschehen)
git init

# Füge alle Dateien hinzu
git add .

# Commit erstellen
git commit -m "Initial commit: Medizinische Terminologie Prüfung"

# Remote Repository hinzufügen
git remote add origin https://github.com/DEIN-USERNAME/medizinische-terminologie-pruefung.git

# Push zum GitHub
git branch -M main
git push -u origin main
```

3. **GitHub Pages aktivieren**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf "Settings"
   - Scrolle zu "Pages" in der linken Sidebar
   - Unter "Source" wähle "main" branch
   - Klicke auf "Save"
   - Nach wenigen Minuten ist deine Seite unter `https://DEIN-USERNAME.github.io/medizinische-terminologie-pruefung/` verfügbar

## 📚 Inhalte der Prüfung

Die Prüfung umfasst folgende Themengebiete:

### Präfixe
- **hyper-**: über, oberhalb, zu viel (z.B. Hypertonie)
- **hypo-**: unter, unterhalb, zu wenig (z.B. Hypotonie)
- **poly-**: viel, mehrere (z.B. Polyurie)
- **brady-**: langsam (z.B. Bradykardie)
- **tachy-**: schnell (z.B. Tachykardie)

### Suffixe
- **-itis**: Entzündung (z.B. Gastritis)
- **-ektomie**: Entfernung (z.B. Appendektomie)
- **-skopie**: Spiegelung (z.B. Gastroskopie)
- **-tomie**: Schnitt (z.B. Laparotomie)
- **-algie**: Schmerz (z.B. Neuralgie)

### Organbegriffe
- **Kardio-**: Herz
- **Gastro-**: Magen
- **Hepato-**: Leber
- **Nephro-**: Niere
- **Pneumo-**: Lunge
- **Osteo-**: Knochen

## 🎯 Wie man die Prüfung benutzt

1. **Start**: Klicke auf "Prüfung starten"
2. **Fragen beantworten**: Wähle eine Antwort aus und klicke auf "Antwort bestätigen"
3. **Feedback lesen**: Lies die Erklärung zur richtigen Antwort
4. **Weiter**: Klicke auf "Weiter" für die nächste Frage
5. **Ergebnisse**: Am Ende siehst du deine Gesamtleistung
6. **Überprüfen**: Klicke auf "Antworten überprüfen" um alle Fragen noch einmal zu sehen
7. **Wiederholen**: Klicke auf "Erneut versuchen" um die Prüfung zu wiederholen

## 🔧 Anpassung

### Eigene Fragen hinzufügen

Öffne `script.js` und füge neue Fragen zum `questionBank` Array hinzu:

```javascript
{
    type: "multiple-choice",
    question: "Deine Frage hier?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0, // Index der richtigen Antwort (0-3)
    explanation: "Erklärung zur Antwort",
    points: 1
}
```

### Farben ändern

Öffne `style.css` und ändere die CSS-Variablen in `:root`:

```css
:root {
    --primary-color: #2563eb;
    --success-color: #10b981;
    --error-color: #ef4444;
    /* ... weitere Farben */
}
```

## 📁 Projektstruktur

```
medizinische-terminologie-pruefung/
│
├── index.html          # Haupt-HTML-Datei
├── style.css           # Styling und Design
├── script.js           # JavaScript-Logik und Fragen
└── README.md           # Dokumentation (diese Datei)
```

## 🤝 Beitragen

Beiträge sind willkommen! Hier ist, wie du helfen kannst:

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/NeuesFragen`)
3. Commit deine Änderungen (`git commit -m 'Füge neue Fragen hinzu'`)
4. Push zum Branch (`git push origin feature/NeuesFragen`)
5. Öffne einen Pull Request

### Ideen für Beiträge:
- Neue medizinische Fragen hinzufügen
- Bilder für anatomische Fragen hinzufügen
- Übersetzungen in andere Sprachen
- Neue Fragetypen (True/False, Fill-in-the-blank)
- Verbesserungen am Design
- Bug-Fixes

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.

## 👨‍⚕️ Über das Projekt

Diese Anwendung wurde entwickelt, um das Lernen medizinischer Terminologie zu erleichtern. Sie ist ideal für:

- Medizinstudenten
- Pflegepersonal
- Medizinische Fachangestellte
- Rettungssanitäter
- Alle, die medizinische Begriffe lernen möchten

## 📧 Kontakt

Bei Fragen oder Anregungen erstelle bitte ein Issue im GitHub Repository.

## 🙏 Danksagungen

- Medizinische Terminologie basierend auf Standard-Lehrbüchern
- Icons und Design inspiriert von modernen Web-Praktiken
- Community-Beiträge willkommen!

## 🔄 Updates

- **Version 1.0.0** (Oktober 2025)
  - Initiale Version mit 30 Fragen
  - Multiple-Choice Format
  - Responsive Design
  - Detailliertes Feedback-System

---

**Viel Erfolg beim Lernen! 🎓**

Wenn dir dieses Projekt gefällt, gib ihm einen ⭐ auf GitHub!
# Exam
# Exam
