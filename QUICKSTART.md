# 🚀 Schnellstart-Anleitung

## Lokal testen

Öffne einfach die `index.html` Datei in deinem Browser:

```bash
# Öffne die Datei
open index.html    # Mac
start index.html   # Windows
xdg-open index.html # Linux
```

Oder doppelklicke auf die `index.html` Datei.

## Auf GitHub hochladen und deployen

### Automatisch (empfohlen)

1. **Deployment-Script ausführen:**
```bash
./deploy.sh
```

2. **Folge den Anweisungen:**
   - Gib eine Commit-Nachricht ein (oder drücke Enter)
   - Gib deine GitHub Repository URL ein
   - Warte auf den Upload

3. **GitHub Pages aktivieren:**
   - Gehe zu deinem Repository auf GitHub
   - Settings → Pages
   - Source: "main" branch auswählen
   - Save klicken

### Manuell

1. **Repository auf GitHub erstellen**
   - Gehe zu github.com
   - Klicke auf "New Repository"
   - Name eingeben (z.B. "medizin-pruefung")
   - Public auswählen
   - Create klicken

2. **Code hochladen**
```bash
# Git initialisieren
git init

# Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit"

# Repository verknüpfen
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git

# Hochladen
git branch -M main
git push -u origin main
```

3. **GitHub Pages aktivieren**
   - Repository öffnen
   - Settings → Pages
   - Source: "main" → Save

4. **Fertig!**
   Deine Seite ist online unter:
   `https://DEIN-USERNAME.github.io/DEIN-REPO/`

## Fragen hinzufügen

Öffne `script.js` und füge neue Fragen hinzu:

```javascript
{
    type: "multiple-choice",
    question: "Deine Frage hier?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0, // Index der richtigen Antwort
    explanation: "Erklärung",
    points: 1,
    image: "images/bild.jpg" // Optional
}
```

## Bilder hinzufügen

1. Bild in den `images/` Ordner kopieren
2. In der Frage referenzieren:
```javascript
image: "images/mein-bild.jpg"
```

## Hilfe

Bei Problemen:
1. Überprüfe die Browser-Konsole (F12)
2. Stelle sicher, dass alle Dateien vorhanden sind
3. Öffne ein Issue auf GitHub

## Tipps

- **Teste lokal** bevor du hochlädst
- **Commit oft** mit klaren Nachrichten
- **Backup** deine Änderungen
- **Teile** die Seite mit anderen!

---

**Viel Erfolg! 🎓**
