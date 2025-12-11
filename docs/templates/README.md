# Documentation Templates

## Overzicht
Deze directory bevat herbruikbare templates voor het documenteren van maatwerk projecten.

## Beschikbare Templates

### 📄 [Project Template](project-template.md)
Complete template voor project documentatie. Gebruik dit voor elk nieuw maatwerk project.

**Sections:**
- Overzicht & Status
- Doel & Context
- Requirements (Functioneel & Niet-Functioneel)
- Architectuur
- Implementatie Details
- Setup & Installatie
- Gebruik
- Testing
- Deployment
- Onderhoud
- Known Issues
- Troubleshooting
- Roadmap & TODOs
- Change Log

**Wanneer te gebruiken:** Bij start van elk nieuw project. Vul in wat je weet en breid uit tijdens ontwikkeling.

---

### 🏗️ [ADR Template](adr-template.md)
Template voor Architecture Decision Records. Documenteer belangrijke architectuur beslissingen.

**Sections:**
- Status
- Context (waarom moet beslissing genomen worden)
- Decision (wat is besloten)
- Consequences (positief & negatief)

**Wanneer te gebruiken:** Bij elke belangrijke architectuur beslissing (database keuze, framework keuze, API design, etc.)

**Inclusief:** Uitgebreide uitleg over wat ADRs zijn, wanneer je ze maakt, en hoe je ze schrijft.

---

### 🔧 [Troubleshooting Template](troubleshooting-template.md)
Template voor troubleshooting guides. Documenteer veelvoorkomende problemen en oplossingen.

**Sections:**
- Quick Fixes
- Veelvoorkomende Problemen (per categorie)
- Error Messages & Oplossingen
- Logging & Monitoring
- Health Checks
- Emergency Procedures
- Getting Help

**Wanneer te gebruiken:** 
- Bij start van project (begin met basis structuur)
- Elk keer dat je een probleem oplost (voeg toe aan guide)
- Periodiek reviewen en uitbreiden

---

### 📚 [Knowledge Transfer Template](knowledge-transfer-template.md)
Template voor kennisoverdracht. Documenteer alles wat iemand moet weten om het project over te nemen.

**Sections:**
- Executive Summary
- Quick Start (30 min, 1 dag, 1 week)
- Project Overzicht (tech stack, architecture)
- Code Structuur
- Belangrijke Concepten
- Development Workflow
- Database
- External Dependencies
- Configuration
- Deployment
- Monitoring & Logging
- Common Tasks
- Troubleshooting
- Known Issues & Limitations
- Future Roadmap
- Resources & Documentation
- Handoff Checklist

**Wanneer te gebruiken:**
- Periodiek tijdens development (houd up-to-date)
- Voor je op vakantie gaat
- Bij overdracht aan nieuwe developer
- Als referentie voor je toekomstige zelf

---

## Hoe Templates te Gebruiken

### 1. Kopieer de Template
```bash
# Voor een nieuw project
cp docs/templates/project-template.md docs/projecten/mijn-project.md

# Voor een nieuwe ADR
cp docs/templates/adr-template.md docs/adr/adr-001-mijn-beslissing.md

# Voor troubleshooting
cp docs/templates/troubleshooting-template.md docs/projecten/mijn-project-troubleshooting.md

# Voor knowledge transfer
cp docs/templates/knowledge-transfer-template.md docs/projecten/mijn-project-knowledge-transfer.md
```

### 2. Vul de Template In
- Lees de hele template eerst door
- Vul secties in die je al weet
- Markeer secties die je later moet invullen met `[TODO]`
- Het is OK om secties te verwijderen die niet relevant zijn

### 3. Houd Up-to-date
- Update regelmatig tijdens development
- Voeg nieuwe secties toe indien nodig
- Verwijder verouderde informatie
- Review periodiek (maandelijks)

## Tips voor Effectieve Documentatie

### 1. Begin Direct
- Start met documenteren vanaf dag 1
- Het is makkelijker om tijdens development te documenteren dan achteraf
- Zelfs incomplete documentatie is beter dan geen documentatie

### 2. Wees Specifiek
- **Slecht**: "Install dependencies"
- **Goed**: "Run `npm install` to install Node.js dependencies"
- Gebruik exacte commando's, versies, en pad namen

### 3. Denk aan Je Publiek
- Schrijf voor iemand die het project niet kent
- Of voor je toekomstige zelf over 6 maanden
- Leg acronymen en jargon uit

### 4. Gebruik Voorbeelden
- Code snippets
- Commando voorbeelden
- Screenshots (voor UI)
- Diagrammen (voor architectuur)

### 5. Houd Het Actueel
- Verwijder verouderde informatie
- Update bij belangrijke wijzigingen
- Review tijdens retrospectives
- Test instructies periodiek

### 6. Maak Het Vindbaar
- Gebruik duidelijke bestandsnamen
- Link tussen gerelateerde documenten
- Maak een index/README
- Gebruik consistente structuur

## Template Aanpassing

Deze templates zijn een startpunt. Pas ze aan naar je behoeften:

**Te uitgebreid?**
- Verwijder secties die niet relevant zijn
- Maak een "lite" versie voor kleine projecten

**Te beperkt?**
- Voeg extra secties toe
- Maak project-specifieke templates
- Combineer meerdere templates

**Andere tools?**
- Pas tool-specifieke secties aan
- Voeg tool documentatie toe
- Link naar tool-specifieke guides

## Kwaliteit Checklist voor Documentatie

- [ ] Spelling en grammatica gecontroleerd
- [ ] Alle links werken
- [ ] Code voorbeelden zijn getest
- [ ] Commando's zijn correct
- [ ] Screenshots zijn actueel
- [ ] Pad namen zijn correct
- [ ] Versies zijn specifiek
- [ ] Contact info is up-to-date
- [ ] Table of contents is correct (indien aanwezig)
- [ ] Documentatie is begrijpelijk voor outsider

## Voorbeelden

In de `docs/projecten/` directory vind je (hopelijk binnenkort) voorbeelden van ingevulde templates voor echte projecten. Deze dienen als referentie voor hoe de templates gebruikt worden in de praktijk.

## Feedback

Deze templates zijn levende documenten. Verbeter ze wanneer je:
- Merkt dat een sectie ontbreekt
- Een betere manier vindt om iets uit te leggen
- Feedback krijgt van anderen
- Nieuwe best practices leert

## Gerelateerde Documenten

- [Development Guidelines](../best-practices/development-guidelines.md) - Hoe te ontwikkelen
- [Quality Checklist](../best-practices/quality-checklist.md) - Kwaliteit waarborgen
- [Best Practices README](../best-practices/README.md) - Overzicht best practices

---

**Remember**: Documentatie is een investering in de toekomst. De tijd die je nu besteedt, bespaar je dubbel en dwars later!
