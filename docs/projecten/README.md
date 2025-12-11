# Projecten

Deze directory bevat project-specifieke documentatie voor maatwerk ontwikkelingen.

## Structuur

Voor elk project maak je de volgende documenten:

```
projecten/
├── project-naam/
│   ├── README.md                    # Hoofd project documentatie (gebruik project template)
│   ├── troubleshooting.md           # Troubleshooting guide
│   ├── knowledge-transfer.md        # Knowledge transfer document
│   └── notes.md                     # Algemene notities en TODO's (optioneel)
```

## Nieuwe Project Toevoegen

1. **Maak project directory**
   ```bash
   mkdir docs/projecten/mijn-project
   ```

2. **Kopieer templates**
   ```bash
   # Project documentatie
   cp docs/templates/project-template.md docs/projecten/mijn-project/README.md
   
   # Troubleshooting guide
   cp docs/templates/troubleshooting-template.md docs/projecten/mijn-project/troubleshooting.md
   
   # Knowledge transfer
   cp docs/templates/knowledge-transfer-template.md docs/projecten/mijn-project/knowledge-transfer.md
   ```

3. **Vul templates in**
   - Begin met wat je weet
   - Markeer TODOs voor later
   - Update tijdens development

4. **Voeg toe aan index hieronder**

## Project Index

*Nog geen projecten gedocumenteerd. Voeg je eerste project toe!*

### Voorbeeld index format:

| Project | Status | Beschrijving | Laatste Update |
|---------|--------|--------------|----------------|
| [Project A](project-a/README.md) | 🟢 Actief | Beschrijving van project A | 2024-01-15 |
| [Project B](project-b/README.md) | 🟡 Onderhoud | Beschrijving van project B | 2024-01-10 |
| [Project C](project-c/README.md) | 🔴 Deprecated | Beschrijving van project C | 2023-12-01 |

### Status Legend:
- 🟢 **Actief**: In actieve ontwikkeling
- 🟡 **Onderhoud**: Alleen onderhoud en bugfixes
- 🔴 **Deprecated**: Niet meer in gebruik of development
- 🔵 **Planning**: Nog niet gestart

## Best Practices

1. **Start direct met documenteren**: Niet uitstellen tot later
2. **Houd documentatie bij code**: Update bij elke belangrijke wijziging
3. **Gebruik consistente structuur**: Maakt het makkelijk om projecten te vergelijken
4. **Link tussen documenten**: Cross-reference waar relevant
5. **Review periodiek**: Minimaal maandelijks updaten

## Tips

- **Incomplete documentatie is beter dan geen documentatie**
- **Gebruik screenshots** voor visuele elementen
- **Documenteer workarounds** en known issues direct
- **Voeg voorbeelden toe** van veelvoorkomende taken
- **Test je setup instructies** op een schone machine

## Gerelateerd

- [Project Template](../templates/project-template.md) - Template voor nieuwe projecten
- [Troubleshooting Template](../templates/troubleshooting-template.md) - Template voor troubleshooting
- [Knowledge Transfer Template](../templates/knowledge-transfer-template.md) - Template voor knowledge transfer
- [ADRs](../adr/) - Architecture Decision Records voor je projecten
