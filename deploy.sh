#!/bin/bash

# Deployment-Skript für GitHub Pages
# Dieses Skript hilft beim schnellen Deployment auf GitHub Pages

echo "🚀 Medizinische Terminologie Prüfung - Deployment Script"
echo "========================================================"
echo ""

# Überprüfe ob Git installiert ist
if ! command -v git &> /dev/null
then
    echo "❌ Git ist nicht installiert. Bitte installiere Git zuerst."
    exit 1
fi

echo "✅ Git gefunden"
echo ""

# Überprüfe ob bereits ein Git Repository existiert
if [ ! -d ".git" ]; then
    echo "📁 Initialisiere Git Repository..."
    git init
    echo "✅ Git Repository initialisiert"
else
    echo "✅ Git Repository bereits vorhanden"
fi

echo ""
echo "📝 Füge Dateien hinzu..."
git add .

echo ""
read -p "📋 Commit-Nachricht eingeben (oder Enter für Standard): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="Update: Medizinische Terminologie Prüfung"
fi

git commit -m "$commit_msg"
echo "✅ Commit erstellt"

echo ""
read -p "🔗 GitHub Repository URL (z.B. https://github.com/username/repo.git): " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Keine URL angegeben. Abbruch."
    exit 1
fi

# Überprüfe ob Remote bereits existiert
if git remote get-url origin &> /dev/null; then
    echo "🔄 Remote 'origin' bereits vorhanden, aktualisiere URL..."
    git remote set-url origin "$repo_url"
else
    echo "➕ Füge Remote 'origin' hinzu..."
    git remote add origin "$repo_url"
fi

echo ""
echo "📤 Push zu GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment abgeschlossen!"
echo ""
echo "📌 Nächste Schritte:"
echo "   1. Gehe zu deinem GitHub Repository"
echo "   2. Klicke auf 'Settings'"
echo "   3. Navigiere zu 'Pages' in der Sidebar"
echo "   4. Wähle 'main' als Source Branch"
echo "   5. Klicke auf 'Save'"
echo ""
echo "🌐 Deine Seite wird verfügbar sein unter:"
echo "   https://DEIN-USERNAME.github.io/REPOSITORY-NAME/"
echo ""
echo "🎉 Viel Erfolg!"
