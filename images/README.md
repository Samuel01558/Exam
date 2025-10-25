# Images Ordner

Dieser Ordner ist für Bilder vorgesehen, die in den Prüfungsfragen verwendet werden können.

## Verwendung

Um ein Bild in einer Frage zu verwenden, füge es einfach in diesen Ordner ein und referenziere es in `script.js`:

```javascript
{
    type: "multiple-choice",
    question: "Welches Organ ist hier abgebildet?",
    image: "images/heart-anatomy.jpg", // Füge diese Zeile hinzu
    options: ["Herz", "Lunge", "Leber", "Niere"],
    correct: 0,
    explanation: "Das Bild zeigt das menschliche Herz.",
    points: 1
}
```

## Empfohlene Bildformate

- **Format**: JPG, PNG, SVG
- **Größe**: Max. 500KB pro Bild
- **Auflösung**: 800x600px oder ähnlich
- **Qualität**: Klar und gut lesbar

## Beispiel-Bilder

Sie können medizinische Diagramme und Illustrationen verwenden für:
- Anatomische Strukturen
- Organsysteme
- Medizinische Instrumente
- Krankheitsbilder (respektvoll)

**Hinweis**: Achten Sie auf Urheberrechte und verwenden Sie nur lizenzfreie oder eigene Bilder.
