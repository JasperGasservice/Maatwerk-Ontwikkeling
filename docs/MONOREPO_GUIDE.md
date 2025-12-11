# Monorepo Management Guide

## Wat is een Monorepo?

Een monorepo (monolithic repository) is een enkele Git repository die meerdere projecten bevat. In plaats van elk project in zijn eigen repository te hebben, worden alle projecten in één repository beheerd.

## Voordelen van een Monorepo

### Voor Solo Developers
1. **Eenvoudig beheer**: Alle code op één plek
2. **Gedeelde code**: Gebruik utilities en libraries over projecten heen
3. **Consistentie**: Eén set van tools, conventions en workflows
4. **Atomic commits**: Wijzigingen over projecten heen in één commit
5. **Eenvoudige refactoring**: Cross-project wijzigingen zijn makkelijker

## Monorepo Structuur

```
Maatwerk-Ontwikkeling/
├── docs/                          # Algemene documentatie
│   ├── PROJECT_SETUP_GUIDE.md
│   ├── CODING_STANDARDS.md
│   └── WORKFLOW.md
├── templates/                     # Templates voor nieuwe projecten
│   ├── requirements-template.md
│   ├── README-template.md
│   └── gitignore-template
├── shared/                        # Gedeelde code en utilities
│   ├── utils/
│   ├── components/
│   └── configs/
└── projects/                      # Individuele projecten
    ├── project-a/
    │   ├── README.md
    │   ├── src/
    │   ├── tests/
    │   └── package.json
    ├── project-b/
    │   ├── README.md
    │   ├── src/
    │   ├── tests/
    │   └── package.json
    └── project-c/
        ├── README.md
        ├── src/
        ├── tests/
        └── requirements.txt
```

## Een Nieuw Project Starten

### Stap 1: Maak Project Directory
```bash
mkdir -p projects/nieuwe-project
cd projects/nieuwe-project
```

### Stap 2: Kopieer Templates
```bash
# Kopieer README template
cp ../../templates/README-template.md README.md

# Kopieer requirements template
cp ../../templates/requirements-template.md docs/requirements.md

# Kopieer gitignore
cp ../../templates/gitignore-template .gitignore
```

### Stap 3: Initialiseer Project
```bash
# Voor Node.js project
npm init -y

# Voor Python project
python -m venv venv
source venv/bin/activate  # of: venv\Scripts\activate op Windows
pip install -r requirements.txt

# Voor .NET project
dotnet new webapi -n ProjectName
```

### Stap 4: Setup Project Structuur
```bash
mkdir -p src tests docs config
```

### Stap 5: Update Documentation
- Vul README.md in met project specifieke informatie
- Vul requirements.md in met project eisen
- Maak een project plan in docs/

## Gedeelde Code Beheren

### Shared Utilities Maken

```
shared/
├── utils/
│   ├── validation.js       # Validatie functies
│   ├── formatting.js       # Format functies
│   └── api-client.js       # API client wrapper
├── components/
│   ├── Button.jsx          # Herbruikbare UI componenten
│   └── Form.jsx
└── configs/
    ├── eslint.config.js    # Gedeelde ESLint config
    └── jest.config.js      # Gedeelde Jest config
```

### Shared Code Gebruiken

#### In Node.js Projecten
```javascript
// Gebruik relative imports
const { validate } = require('../../shared/utils/validation');

// Of gebruik workspaces (zie hieronder)
const { validate } = require('@shared/utils/validation');
```

#### In Python Projecten
```python
# Voeg shared directory toe aan Python path
import sys
sys.path.append('../../shared')

from utils.validation import validate
```

## Workspace Management

### NPM Workspaces

Voor Node.js projecten, gebruik NPM workspaces:

#### Root package.json
```json
{
  "name": "maatwerk-ontwikkeling",
  "private": true,
  "workspaces": [
    "projects/*",
    "shared/*"
  ],
  "scripts": {
    "test": "npm run test --workspaces",
    "build": "npm run build --workspaces",
    "lint": "npm run lint --workspaces"
  }
}
```

#### Installeer Dependencies
```bash
# Installeer voor alle workspaces
npm install

# Installeer voor specifiek project
npm install lodash -w projects/project-a

# Run script in specifiek project
npm run test -w projects/project-a

# Run script in alle workspaces
npm run test --workspaces
```

### Yarn Workspaces

Als je Yarn gebruikt:

#### Root package.json
```json
{
  "private": true,
  "workspaces": [
    "projects/*",
    "shared/*"
  ]
}
```

#### Commands
```bash
# Installeer dependencies
yarn install

# Add dependency to specific workspace
yarn workspace project-a add lodash

# Run script
yarn workspace project-a test
```

## Git Workflow voor Monorepo

### Feature Development
```bash
# Maak feature branch
git checkout -b feature/project-a-new-feature

# Werk aan je feature in projects/project-a
cd projects/project-a
# ... maak changes ...

# Commit met duidelijke scope
git add .
git commit -m "feat(project-a): add new authentication feature"

# Push en merge
git push origin feature/project-a-new-feature
```

### Commit Message Convention
Gebruik scope om aan te geven welk project:
```
feat(project-a): add user authentication
fix(project-b): resolve payment bug
docs(shared): update utility documentation
refactor(project-c): improve database queries
```

### Branch Strategie

#### Option 1: Shared Branches (Aanbevolen voor solo)
- Alle projecten gebruiken dezelfde branches (main, develop)
- Simpeler voor solo developer
- Makkelijker cross-project changes

```bash
main                    # Production ready code
└── develop            # Development branch
    ├── feature/...    # Feature branches
    └── hotfix/...     # Hotfix branches
```

#### Option 2: Project-Specific Branches
- Separate branches per project
- Meer overhead, maar betere isolatie

```bash
main
├── project-a/develop
│   └── project-a/feature/...
└── project-b/develop
    └── project-b/feature/...
```

## Dependencies Beheren

### Shared Dependencies
Installeer vaak gebruikte dependencies in root:
```bash
npm install -D eslint prettier jest
```

### Project-Specific Dependencies
Installeer alleen wat het project nodig heeft:
```bash
cd projects/project-a
npm install express
```

### Dependency Updates
```bash
# Update alle dependencies
npm update --workspaces

# Check voor outdated packages
npm outdated --workspaces

# Security audit
npm audit --workspaces
```

## Testing in Monorepo

### Run Alle Tests
```bash
# Vanaf root
npm run test --workspaces

# Of met yarn
yarn workspaces run test
```

### Run Tests voor Specifiek Project
```bash
npm run test -w projects/project-a
```

### Test Configuration
Gebruik shared test config waar mogelijk:
```javascript
// shared/configs/jest.config.js
module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70
    }
  }
};

// projects/project-a/jest.config.js
const baseConfig = require('../../shared/configs/jest.config');

module.exports = {
  ...baseConfig,
  // Project-specific overrides
  testMatch: ['**/__tests__/**/*.test.js']
};
```

## CI/CD voor Monorepo

### GitHub Actions Voorbeeld

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        project: [project-a, project-b, project-c]
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Test ${{ matrix.project }}
        run: npm run test -w projects/${{ matrix.project }}
      
      - name: Build ${{ matrix.project }}
        run: npm run build -w projects/${{ matrix.project }}
```

### Optimalisatie: Alleen Gewijzigde Projecten Testen

```yaml
- name: Get changed files
  id: changed-files
  uses: tj-actions/changed-files@v35
  with:
    files: projects/**

- name: Test changed projects
  if: steps.changed-files.outputs.any_changed == 'true'
  run: |
    for file in ${{ steps.changed-files.outputs.all_changed_files }}; do
      project=$(echo $file | cut -d/ -f2)
      npm run test -w projects/$project
    done
```

## Best Practices

### 1. Gebruik Duidelijke Naming
- Projecten: descriptieve namen (bijv. `customer-portal`, `admin-dashboard`)
- Shared code: duidelijke categorieën (bijv. `shared/utils`, `shared/components`)

### 2. Documenteer Cross-Project Dependencies
Als project A afhankelijk is van project B, documenteer dit in beide READMEs.

### 3. Houd Shared Code Generiek
Shared code moet herbruikbaar zijn. Vermijd project-specifieke logic in shared/.

### 4. Reguliere Cleanup
- Remove unused dependencies
- Archive oude projecten
- Update documentatie

### 5. Consistent Versioning
Gebruik semantic versioning voor alle projecten:
```
1.0.0 - Major.Minor.Patch
```

## Monorepo Tools

### Lerna
Voor complexere monorepos:
```bash
npm install -g lerna
lerna init
lerna bootstrap  # Install dependencies
lerna run test   # Run tests in all packages
```

### Nx
Voor enterprise-grade monorepos:
```bash
npx create-nx-workspace@latest
```

### Turborepo
Voor high-performance builds:
```bash
npx create-turbo@latest
```

## Troubleshooting

### Probleem: Node_modules te groot
**Oplossing**: Gebruik workspaces om dependencies te delen

### Probleem: Slow CI/CD
**Oplossing**: Test alleen gewijzigde projecten met change detection

### Probleem: Merge conflicts
**Oplossing**: Houd projecten zo onafhankelijk mogelijk, gebruik feature branches

## Conclusie

Een goed georganiseerde monorepo maakt het makkelijker om meerdere projecten te beheren als solo developer. De sleutel is consistentie, goede structuur en automatisering waar mogelijk.
