# Quick Reference Guide

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
