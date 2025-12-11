# Getting Started Guide

Welkom! Deze gids helpt je om je eerste maatwerk project op te zetten in deze monorepo.

## Stap 1: Verken de Documentatie (15 minuten)

Lees eerst deze documenten om bekend te raken met de aanpak:

1. **[PROJECT_SETUP_GUIDE.md](PROJECT_SETUP_GUIDE.md)** - Algemene setup instructies
2. **[WORKFLOW.md](WORKFLOW.md)** - Dagelijkse werkroutines
3. **[CODING_STANDARDS.md](CODING_STANDARDS.md)** - Code conventies

## Stap 2: Begrijp je Project (30 minuten)

Voordat je begint met bouwen, beantwoord deze vragen:

### Business Vragen
- Wat is het probleem dat je oplost?
- Wie zijn de eindgebruikers?
- Wat is de core value proposition?
- Wat is de deadline?

### Technische Vragen
- Welke technologie stack ga je gebruiken?
- Zijn er externe integraties nodig?
- Wat zijn de performance requirements?
- Wat zijn de security requirements?

**Tip**: Gebruik het [requirements template](../templates/requirements-template.md) om dit te documenteren.

## Stap 3: Maak Project Structuur (10 minuten)

### 3.1 Maak Project Directory

```bash
# Navigeer naar de monorepo root
cd /path/to/Maatwerk-Ontwikkeling

# Maak een nieuw project
PROJECT_NAME="mijn-project"
mkdir -p "projects/$PROJECT_NAME/docs"
cd "projects/$PROJECT_NAME"
```

### 3.2 Kopieer Templates

```bash
# Kopieer README template
cp ../../templates/README-template.md README.md

# Kopieer requirements template
cp ../../templates/requirements-template.md docs/requirements.md

# Kopieer changelog template
cp ../../templates/CHANGELOG-template.md CHANGELOG.md

# Kopieer gitignore
cp ../../templates/gitignore-template .gitignore
```

### 3.3 Maak Basis Directories

```bash
mkdir -p src tests config
```

## Stap 4: Initialiseer Project (10 minuten)

Kies je technologie stack en initialiseer:

### Voor Node.js Project

```bash
# Initialiseer npm project
npm init -y

# Installeer basis dependencies
npm install express dotenv

# Installeer dev dependencies
npm install -D nodemon jest eslint prettier

# Update package.json scripts
```

**package.json voorbeeld**:
```json
{
  "name": "mijn-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  }
}
```

### Voor Python Project

```bash
# Maak virtual environment
python -m venv venv

# Activeer virtual environment
source venv/bin/activate  # Linux/Mac
# of: venv\Scripts\activate  # Windows

# Maak requirements.txt
cat > requirements.txt << EOF
flask==3.0.0
python-dotenv==1.0.0
pytest==7.4.3
black==23.12.1
pylint==3.0.3
EOF

# Installeer dependencies
pip install -r requirements.txt
```

### Voor .NET Project

```bash
# Initialiseer .NET project
dotnet new webapi -n MijnProject

# Add packages
dotnet add package Serilog
dotnet add package AutoMapper
```

## Stap 5: Vul Templates In (20 minuten)

### 5.1 Update README.md

Open `README.md` en vervang placeholders:
- Project naam
- Beschrijving
- Technology stack
- Installation instructies
- Usage voorbeelden

### 5.2 Vul Requirements Document

Open `docs/requirements.md` en documenteer:
- Functionele requirements
- Technische requirements
- User stories
- Acceptance criteria

### 5.3 Plan je Fases

In `docs/requirements.md`, definieer development fases:

```markdown
## Development Fases

### Fase 1: Setup & Basic Infrastructure (Week 1)
- [ ] Project setup
- [ ] Database schema
- [ ] Basic API endpoints
- [ ] Authentication

### Fase 2: Core Features (Week 2-3)
- [ ] Feature A
- [ ] Feature B
- [ ] Feature C

### Fase 3: Advanced Features (Week 4)
- [ ] Feature D
- [ ] Feature E

### Fase 4: Testing & Polish (Week 5)
- [ ] Unit tests
- [ ] Integration tests
- [ ] Bug fixes
- [ ] Performance optimization

### Fase 5: Deployment (Week 6)
- [ ] Production setup
- [ ] Deployment
- [ ] Monitoring
- [ ] Documentation
```

## Stap 6: Setup Development Environment (15 minuten)

### 6.1 Maak .env Bestand

```bash
# Kopieer example naar actual
cp .env.example .env
```

**.env.example**:
```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# API Keys
API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here

# Application
NODE_ENV=development
PORT=3000
```

### 6.2 Setup Database (indien nodig)

```bash
# Voor PostgreSQL
createdb mijn-project-db

# Of gebruik Docker
docker run -d \
  --name mijn-project-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=mijn-project \
  -p 5432:5432 \
  postgres:15
```

### 6.3 Maak Eerste Source File

**src/index.js** (Node.js voorbeeld):
```javascript
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Stap 7: Eerste Commit (5 minuten)

```bash
# Terug naar monorepo root
cd /path/to/Maatwerk-Ontwikkeling

# Add alle files
git add .

# Commit
git commit -m "feat(mijn-project): initial project setup"

# Push
git push origin main
```

## Stap 8: Start Development (∞)

### 8.1 Volg de Workflow

Gebruik de workflow guide voor dagelijkse routines:
- Ochtend planning
- Feature development
- Testing
- Commits
- Einde van de dag review

### 8.2 Gebruik Git Branches

```bash
# Maak feature branch
git checkout -b feature/mijn-project-user-auth

# Werk aan feature
# ... code changes ...

# Commit regelmatig
git add .
git commit -m "feat(mijn-project): add user authentication"

# Push
git push origin feature/mijn-project-user-auth

# Merge na voltooiing
git checkout main
git merge feature/mijn-project-user-auth
git push origin main
```

### 8.3 Test Regelmatig

```bash
# Run tests
npm test  # of: pytest, dotnet test

# Run linter
npm run lint  # of: black ., dotnet format
```

## Stap 9: Itereer en Verbeter

### Dagelijks
- [ ] Plan je taken
- [ ] Werk in gefocuste blokken
- [ ] Test je code
- [ ] Commit regelmatig
- [ ] Review je werk

### Wekelijks
- [ ] Review progress
- [ ] Update documentation
- [ ] Refactor waar nodig
- [ ] Update stakeholders
- [ ] Plan volgende week

### Per Milestone
- [ ] Complete feature testing
- [ ] Update changelog
- [ ] Tag release
- [ ] Deploy
- [ ] Retrospective

## Veelvoorkomende Patronen

### Pattern 1: API Endpoint Toevoegen

1. Definieer route in `src/routes/`
2. Implementeer controller logic in `src/controllers/`
3. Schrijf test in `tests/`
4. Test manually met Postman
5. Commit

### Pattern 2: Database Model Toevoegen

1. Definieer model in `src/models/`
2. Maak migration/schema update
3. Update seed data indien nodig
4. Schrijf tests
5. Commit

### Pattern 3: Bug Fixen

1. Reproduce het probleem
2. Schrijf failing test
3. Fix de bug
4. Verify test passes
5. Commit met "fix:" prefix

## Tips voor Succes

### Do's ✅
- Documenteer terwijl je codeert
- Commit vaak met duidelijke messages
- Test voordat je pushed
- Vraag feedback vroeg
- Neem regelmatig pauzes

### Don'ts ❌
- Geen giant commits
- Geen hardcoded secrets
- Geen commented-out code in production
- Geen features zonder tests
- Geen deployment zonder backup plan

## Hulp Bronnen

### In Deze Repo
- [Project Setup Guide](PROJECT_SETUP_GUIDE.md)
- [Workflow Guide](WORKFLOW.md)
- [Coding Standards](CODING_STANDARDS.md)
- [Monorepo Guide](MONOREPO_GUIDE.md)

### Externe Resources
- [GitHub Docs](https://docs.github.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Stack Overflow](https://stackoverflow.com)
- Framework-specifieke documentatie

## Volgende Stappen

Nu je project is opgezet:

1. **Bouw de eerste feature** - Start klein, itereer snel
2. **Setup CI/CD** - Automatiseer testing en deployment
3. **Monitor** - Setup logging en error tracking
4. **Iterate** - Continuous improvement

## Checklist

Voordat je begint met coderen, zorg dat je:

- [ ] Requirements hebt gedocumenteerd
- [ ] Technology stack hebt gekozen
- [ ] Project structuur hebt opgezet
- [ ] Development environment werkt
- [ ] First commit hebt gedaan
- [ ] Development workflow begrijpt
- [ ] Testing strategie hebt
- [ ] Deployment plan hebt

**Je bent nu klaar om te starten! 🚀**

Veel succes met je project. Remember: start klein, test vaak, en documenteer alles.
