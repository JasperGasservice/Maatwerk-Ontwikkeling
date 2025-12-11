# Example Project

Dit is een voorbeeld project om de structuur en best practices te demonstreren.

## Overzicht

Een eenvoudig REST API voorbeeld project dat laat zien hoe je een project opzet binnen de Maatwerk-Ontwikkeling monorepo.

## Features

- ✅ Basic REST API met Express
- ✅ Health check endpoint
- ✅ Environment configuratie
- ✅ Error handling
- ✅ Logging
- 📋 Database integratie (geplanned)
- 📋 Authentication (geplanned)

## Technologie Stack

- **Backend**: Node.js v18+, Express v4.18
- **Database**: PostgreSQL (geplanned)
- **Testing**: Jest
- **Linting**: ESLint
- **Formatting**: Prettier

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

```bash
# Navigeer naar project directory
cd projects/example-project

# Installeer dependencies
npm install

# Setup environment variabelen
cp .env.example .env
# Edit .env en vul de juiste waarden in

# Start development server
npm run dev
```

## Usage

### Development

```bash
# Start development server met hot reload
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Testing API

```bash
# Health check
curl http://localhost:3000/health

# Response:
# {
#   "status": "ok",
#   "timestamp": "2025-12-11T10:30:00.000Z"
# }
```

## Environment Variables

Maak een `.env` bestand:

```
# Application
NODE_ENV=development
PORT=3000

# Database (future)
DATABASE_URL=postgresql://user:password@localhost:5432/example

# API Keys (future)
API_KEY=your_api_key_here
```

## Project Structure

```
example-project/
├── src/
│   ├── index.js           # Application entry point
│   ├── config/            # Configuration files
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── services/          # Business logic
│   ├── models/            # Data models
│   ├── middleware/        # Express middleware
│   └── utils/             # Utility functions
├── tests/
│   ├── unit/              # Unit tests
│   └── integration/       # Integration tests
├── docs/
│   └── api.md             # API documentation
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## API Documentation

Zie [docs/api.md](docs/api.md) voor gedetailleerde API documentatie.

## Development Workflow

1. Maak een feature branch
   ```bash
   git checkout -b feature/example-project-new-feature
   ```

2. Werk aan je feature
   - Schrijf tests eerst (TDD)
   - Implementeer feature
   - Run tests en linter

3. Commit je changes
   ```bash
   git add .
   git commit -m "feat(example-project): add new feature"
   ```

4. Push en merge
   ```bash
   git push origin feature/example-project-new-feature
   # Merge na review
   ```

## Testing

```bash
# Run alle tests
npm test

# Run tests met coverage
npm run test:coverage

# Run specific test file
npm test -- src/routes/health.test.js
```

## Deployment

(Nog te implementeren)

## Contributing

Zie [../../docs/WORKFLOW.md](../../docs/WORKFLOW.md) voor development workflow.
Zie [../../docs/CODING_STANDARDS.md](../../docs/CODING_STANDARDS.md) voor coding standards.

## License

MIT

## Contact

Voor vragen over dit example project, open een issue in de monorepo.
