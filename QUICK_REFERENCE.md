# Quick Reference Guide

Een snelle referentie voor de meest voorkomende taken in maatwerk ontwikkeling.

## 🚀 Start Nieuw Project

```bash
# 1. Maak project directory
mkdir docs/projecten/mijn-project

# 2. Kopieer documentatie templates
cp docs/templates/project-template.md docs/projecten/mijn-project/README.md
cp docs/templates/troubleshooting-template.md docs/projecten/mijn-project/troubleshooting.md
cp docs/templates/knowledge-transfer-template.md docs/projecten/mijn-project/knowledge-transfer.md

# 3. Begin met invullen
# Edit docs/projecten/mijn-project/README.md
```

**Next Steps:**
- [ ] Lees [Development Guidelines](docs/best-practices/development-guidelines.md)
- [ ] Print [Quality Checklist](docs/best-practices/quality-checklist.md)
- [ ] Setup linter & formatter
- [ ] Begin met development

## 📝 Documenteer Beslissing (ADR)

```bash
# 1. Bepaal volgend nummer (kijk in docs/adr/)
# Als geen ADRs bestaan, begin bij 001

# 2. Kopieer template
cp docs/templates/adr-template.md docs/adr/adr-001-mijn-beslissing.md

# 3. Vul template in
# - Status: Proposed/Accepted
# - Context: Waarom deze beslissing?
# - Decision: Wat wordt besloten?
# - Consequences: Voor- en nadelen

# 4. Update index
# Edit docs/adr/README.md en voeg ADR toe aan tabel
```

## ✅ Pre-Commit Checklist

Voordat je commit:

```bash
# 1. Run linter
npm run lint  # of equivalent voor je project

# 2. Run tests
npm test

# 3. Check for secrets
git diff | grep -iE "(password|secret|key|token|api[_-]?key)"

# 4. Review changes
git diff

# 5. Commit met duidelijke message
git add .
git commit -m "feat: Add customer search functionality"
```

## 🔍 Code Review (voor jezelf)

**Vraag jezelf af:**
- [ ] Is deze code begrijpelijk voor anderen?
- [ ] Zijn edge cases afgehandeld?
- [ ] Is error handling aanwezig?
- [ ] Zijn tests geschreven?
- [ ] Is documentatie bijgewerkt?
- [ ] Zijn security overwegingen meegenomen?
- [ ] Is performance acceptabel?

**Tip:** Laat code een dag liggen en review met frisse blik!

## 🐛 Probleem Oplossen

```bash
# 1. Reproduceer het probleem
# - Wat zijn de exacte stappen?
# - Wat is de foutmelding?
# - Wanneer gebeurt het?

# 2. Check logs
tail -f logs/error.log

# 3. Debug systematisch
# - Voeg logging toe
# - Test hypotheses
# - Isoleer het probleem

# 4. Fix en test
# - Implementeer oplossing
# - Test grondig
# - Voeg test toe om recurrence te voorkomen

# 5. Documenteer
# - Voeg toe aan troubleshooting guide
# - Update known issues
```

**Template voor troubleshooting entry:**
```markdown
### Problem: [Beschrijving]
**Symptomen:** [Wat zie je]
**Oorzaak:** [Wat is het probleem]
**Oplossing:** [Stappen + commando's]
**Preventie:** [Hoe te voorkomen]
```

## 🚀 Deployment Checklist

Minimale checklist voor deployment:

```bash
# 1. Pre-deployment
- [ ] Tests slagen allemaal
- [ ] Code review gedaan
- [ ] Backup gemaakt
- [ ] Deployment plan klaar

# 2. Deploy
# [Voer deployment commando's uit]

# 3. Post-deployment
- [ ] Smoke tests uitgevoerd
- [ ] Health checks groen
- [ ] Logs controleren
- [ ] Monitor performance
- [ ] Stakeholders informeren
```

## 📚 Documentatie Updaten

**Wanneer updaten:**
- ✅ Nieuwe feature toegevoegd
- ✅ Breaking change
- ✅ Bug fix (interessant)
- ✅ Configuratie wijziging
- ✅ Belangrijke beslissing

**Wat updaten:**
```bash
# Project README
docs/projecten/[project]/README.md
# - Add to features list
# - Update changelog
# - Update version

# Troubleshooting
docs/projecten/[project]/troubleshooting.md
# - Add new issues & solutions

# Knowledge Transfer
docs/projecten/[project]/knowledge-transfer.md
# - Update if architecture changed
# - Add new important concepts

# ADR
# - Make new ADR for important decisions
```

## 🧪 Testing Commando's

```bash
# Run all tests
npm test
# or
pytest
# or
go test ./...

# Run specific test
npm test -- user.test.js
pytest tests/test_user.py
go test -run TestUser

# Run with coverage
npm test -- --coverage
pytest --cov
go test -cover ./...

# Watch mode (development)
npm test -- --watch
pytest-watch
```

## 🔒 Security Check

```bash
# Check for secrets in code
git diff | grep -iE "(password|secret|key|token|api[_-]?key)"

# Check for security vulnerabilities in dependencies
npm audit
# or
pip-audit
# or
go list -json -m all | nancy sleuth

# Update dependencies
npm update
pip install --upgrade -r requirements.txt
go get -u ./...
```

## 🎯 Feature Development Workflow

```bash
# 1. Plan
- [ ] Definieer requirements
- [ ] Check quality checklist (pre-development)
- [ ] Schets oplossing

# 2. Develop
git checkout -b feature/mijn-feature
# - Schrijf code
# - Schrijf tests
# - Run tests regelmatig

# 3. Review (zelf)
- [ ] Code review checklist
- [ ] Run linter
- [ ] Run all tests
- [ ] Check coverage

# 4. Document
- [ ] Update project docs
- [ ] Add to changelog
- [ ] Make ADR (if needed)
- [ ] Update troubleshooting guide

# 5. Commit & Merge
git add .
git commit -m "feat: [description]"
git checkout main
git merge feature/mijn-feature

# 6. Deploy & Monitor
# [Follow deployment checklist]
```

## 📊 Project Status Check

**Weekly:**
```bash
# 1. Check logs voor errors
tail -n 100 logs/error.log

# 2. Review open issues/TODOs
grep -r "TODO" src/

# 3. Check resource usage
df -h  # disk space
free -h  # memory

# 4. Test backups
# [Test restore procedure]
```

**Monthly:**
```bash
# 1. Review documentation
# - Is README actueel?
# - Zijn setup instructies correct?
# - Is troubleshooting guide up-to-date?

# 2. Update dependencies
npm update
npm audit fix

# 3. Review ADRs
# - Zijn beslissingen nog steeds juist?
# - Moeten statussen geupdate worden?

# 4. Technical debt check
# - Wat kan gerefactored worden?
# - Welke TODOs zijn prioriteit?
```

## 🆘 Emergency Procedures

### Applicatie Crasht
```bash
# 1. Stop gracefully (if possible)
systemctl stop [service]

# 2. Check logs
tail -n 200 logs/error.log

# 3. Identify issue
# [Based on logs]

# 4. Quick fix or rollback
git checkout [previous-stable-tag]
npm install
npm start

# 5. Document incident
# Add to troubleshooting guide
```

### Data Probleem
```bash
# 1. STOP ALL WRITES
# [Set app to read-only or stop]

# 2. Assess damage
# [Check what data is affected]

# 3. Restore from backup
# [Follow restore procedure]

# 4. Verify integrity
# [Test critical functionality]

# 5. Document & prevent
# [Update docs, add validation]
```

## 📖 Important Documents

**Start Here:**
- [Main README](README.md) - Project overzicht
- [Docs Overview](docs/README.md) - Complete documentatie overzicht

**For Development:**
- [Development Guidelines](docs/best-practices/development-guidelines.md)
- [Quality Checklist](docs/best-practices/quality-checklist.md)

**For Documentation:**
- [Project Template](docs/templates/project-template.md)
- [ADR Template](docs/templates/adr-template.md)
- [Troubleshooting Template](docs/templates/troubleshooting-template.md)
- [Knowledge Transfer Template](docs/templates/knowledge-transfer-template.md)

## 💡 Pro Tips

1. **Commit vaak**: Kleine commits zijn beter dan grote
2. **Test eerst**: Schrijf test voordat je debug
3. **Documenteer direct**: Niet uitstellen tot later
4. **Neem pauzes**: Frisse blik ziet meer
5. **Vraag hulp**: AI, communities, documentation
6. **Review je werk**: Alsof je het niet schreef
7. **Automatiseer**: Pre-commit hooks, CI/CD
8. **Backup altijd**: Code, database, configuratie

## 🔗 Quick Links

```bash
# View structure
tree -L 2

# Find files
find . -name "*.md" -type f

# Search in files
grep -r "searchterm" docs/

# Word count
wc -l docs/**/*.md
```

---

**Remember:** Deze guide is je vriend. Bookmark deze pagina en raadpleeg regelmatig!

**Niet zeker wat te doen?** Check de [Main README](README.md) of [Docs Overview](docs/README.md).
