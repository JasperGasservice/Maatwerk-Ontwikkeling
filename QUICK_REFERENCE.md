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
## 🚀 Getting Started

```bash
# 1. Lees de getting started guide
cat docs/GETTING_STARTED.md

# 2. Start een nieuw project
mkdir -p projects/mijn-project
cd projects/mijn-project

# 3. Kopieer templates
cp ../../templates/README-template.md README.md
cp ../../templates/requirements-template.md docs/requirements.md
```

## 📁 Repository Structuur

```
Maatwerk-Ontwikkeling/
├── docs/              # Documentatie
├── templates/         # Project templates
├── shared/            # Gedeelde code
└── projects/          # Jouw projecten
    └── project-naam/
```

## 📚 Documentatie Overzicht

| Document | Beschrijving | Wanneer te Gebruiken |
|----------|--------------|---------------------|
| [GETTING_STARTED.md](docs/GETTING_STARTED.md) | Start hier! | Bij het beginnen van een nieuw project |
| [PROJECT_SETUP_GUIDE.md](docs/PROJECT_SETUP_GUIDE.md) | Complete setup gids | Voor gedetailleerde setup instructies |
| [WORKFLOW.md](docs/WORKFLOW.md) | Dagelijkse routines | Tijdens development |
| [CODING_STANDARDS.md](docs/CODING_STANDARDS.md) | Code conventies | Bij het schrijven van code |
| [MONOREPO_GUIDE.md](docs/MONOREPO_GUIDE.md) | Monorepo management | Voor monorepo specifieke vragen |

## 🎯 Common Tasks

### Nieuw Project Starten
```bash
# 1. Maak directory
mkdir -p projects/nieuwe-project
cd projects/nieuwe-project

# 2. Setup
npm init -y  # of: python -m venv venv
cp ../../templates/README-template.md README.md
mkdir -p src tests docs

# 3. First commit
git add .
git commit -m "feat(nieuwe-project): initial setup"
```

### Feature Toevoegen
```bash
# 1. Create feature branch
git checkout -b feature/project-naam-feature

# 2. Werk aan feature
# ... code changes ...

# 3. Test en commit
npm test
git add .
git commit -m "feat(project-naam): add feature"
git push origin feature/project-naam-feature
```

### Bug Fixen
```bash
# 1. Create hotfix branch
git checkout -b hotfix/project-naam-bug

# 2. Fix bug
# ... fix code ...

# 3. Test en commit
npm test
git add .
git commit -m "fix(project-naam): resolve bug"
git push origin hotfix/project-naam-bug
```

## 💡 Git Commit Convention

Format: `type(scope): beschrijving`

**Types:**
- `feat:` - Nieuwe feature
- `fix:` - Bug fix
- `docs:` - Documentatie
- `style:` - Formatting
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Overige wijzigingen

**Voorbeelden:**
```bash
git commit -m "feat(user-api): add authentication endpoint"
git commit -m "fix(payment): resolve checkout calculation"
git commit -m "docs(readme): update installation instructions"
```

## 🔧 Development Commands

### Node.js Project
```bash
npm run dev         # Start development server
npm test           # Run tests
npm run lint       # Run linter
npm run build      # Build voor productie
```

### Python Project
```bash
python -m venv venv           # Maak virtual env
source venv/bin/activate      # Activeer (Linux/Mac)
pip install -r requirements.txt
python -m pytest              # Run tests
```

### .NET Project
```bash
dotnet run                    # Run app
dotnet test                   # Run tests
dotnet build                  # Build
dotnet publish               # Publish
```

## 📋 Project Checklist

### Setup Fase
- [ ] Project directory gemaakt
- [ ] README.md ingevuld
- [ ] Requirements gedocumenteerd
- [ ] Technology stack gekozen
- [ ] Development environment setup
- [ ] Git initialized en first commit

### Development Fase
- [ ] Feature branches gebruiken
- [ ] Tests schrijven
- [ ] Code review (zelf)
- [ ] Regelmatig committen
- [ ] Documentatie bijwerken

### Deployment Fase
- [ ] Alle tests slagen
- [ ] No console.logs/debug code
- [ ] Environment variabelen geconfigureerd
- [ ] CI/CD setup
- [ ] Monitoring setup
- [ ] Backup plan

## 🛠️ Tools Setup

### VS Code Extensions (Aanbevolen)
- ESLint
- Prettier
- GitLens
- Thunder Client (API testing)
- Docker
- GitHub Copilot

### CLI Tools
```bash
# Install globally useful tools
npm install -g nodemon
npm install -g prettier
npm install -g eslint
```

## 📊 Project Templates

| Template | Gebruik Voor |
|----------|-------------|
| [requirements-template.md](templates/requirements-template.md) | Project requirements |
| [README-template.md](templates/README-template.md) | Project README |
| [CHANGELOG-template.md](templates/CHANGELOG-template.md) | Version history |
| [gitignore-template](templates/gitignore-template) | Git ignore rules |

## 🎓 Learning Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org)
- [Node.js Docs](https://nodejs.org/docs)
- [React Docs](https://react.dev)
- [Python Docs](https://docs.python.org)

### Communities
- [Stack Overflow](https://stackoverflow.com)
- [Dev.to](https://dev.to)
- [Reddit - r/webdev](https://reddit.com/r/webdev)
- [Reddit - r/learnprogramming](https://reddit.com/r/learnprogramming)

### Courses
- [freeCodeCamp](https://freecodecamp.org)
- [MDN Learn](https://developer.mozilla.org/learn)
- [Udemy](https://udemy.com)
- [Coursera](https://coursera.org)

## 🆘 Troubleshooting

### Problem: Git merge conflicts
```bash
# Check status
git status

# Resolve manually in files, then:
git add .
git commit -m "merge: resolve conflicts"
```

### Problem: Tests failing
```bash
# Run specific test
npm test -- path/to/test.js

# Check test output carefully
# Fix the code
# Re-run tests
```

### Problem: Dependency errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Getting Help

1. **Check de docs** - Meeste vragen zijn beantwoord in de docs
2. **Google de error** - Iemand heeft het waarschijnlijk al opgelost
3. **Stack Overflow** - Zoek of stel een vraag
4. **AI Tools** - ChatGPT, GitHub Copilot kunnen helpen
5. **Communities** - Vraag in developer communities

## 🎯 Success Metrics

### Daily
- [ ] Productive code time: 4-6 uur
- [ ] Commits: 3-5 per dag
- [ ] Tests: All passing
- [ ] Documentation: Up to date

### Weekly
- [ ] Features completed: 2-3
- [ ] Bugs fixed: 5-10
- [ ] Code review: Self-reviewed
- [ ] Progress update: Sent to stakeholders

### Monthly
- [ ] Major features: 1-2
- [ ] Refactoring: Done
- [ ] Dependencies: Updated
- [ ] Retrospective: Completed

## 🚀 Next Steps

1. **Start met GETTING_STARTED.md**
2. **Maak je eerste project**
3. **Volg de WORKFLOW.md**
4. **Blijf consistent**
5. **Iterate en verbeter**

---

**Remember**: Start klein, test vaak, document alles! 🎉
