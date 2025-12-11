# ADR-[nummer]: [Korte titel van de beslissing]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
<!-- Beschrijf de situatie en het probleem dat een beslissing vereist. 
     Waarom moet er een beslissing genomen worden? Wat is de context? -->

## Decision
<!-- Beschrijf de beslissing die je hebt genomen. Wees specifiek en duidelijk. -->

## Consequences
<!-- Beschrijf de gevolgen van deze beslissing, zowel positief als negatief. -->

### Positieve Gevolgen
- [Voordeel 1]
- [Voordeel 2]

### Negatieve Gevolgen / Trade-offs
- [Nadeel 1]
- [Nadeel 2]

---

## Template Details

Dit is een template voor Architecture Decision Records (ADRs). Hieronder staat meer uitleg over hoe je dit gebruikt.

## Waarom ADRs?

Architecture Decision Records helpen je om:
1. **Belangrijke beslissingen te documenteren**: Waarom hebben we voor deze oplossing gekozen?
2. **Context te bewaren**: Wat was de situatie toen we deze beslissing namen?
3. **Toekomstig onderhoud te vergemakkelijken**: Je toekomstige zelf (of anderen) begrijpen waarom iets zo is gebouwd
4. **Fouten te voorkomen**: Voorkom dat dezelfde discussies steeds terugkomen
5. **Kennisoverdracht**: Nieuwe teamleden kunnen snel begrijpen waarom dingen zo zijn

## Wanneer een ADR maken?

Maak een ADR voor beslissingen die:
- **Significant impact** hebben op de architectuur
- **Moeilijk te veranderen** zijn later
- **Controversieel** zijn of waar discussie over is
- **Alternative oplossingen** hebben die ook overwogen zijn
- **Trade-offs** hebben die belangrijk zijn om te begrijpen

### Voorbeelden van ADR-waardige beslissingen:
- Keuze van database (SQL vs NoSQL)
- Keuze van framework (React vs Vue vs Angular)
- Monolith vs microservices architectuur
- Authentication methode (JWT vs session-based)
- Deployment strategie
- API design (REST vs GraphQL)
- Programmeertaal voor het project

### Voorbeelden die GEEN ADR nodig hebben:
- Kleine implementatie details
- Standaard best practices
- Tijdelijke experimenten
- Keuzes die gemakkelijk terug te draaien zijn

## Hoe een ADR te schrijven

### 1. Nummer en Titel
- **Nummer**: Gebruik volgorde nummering (001, 002, etc.)
- **Titel**: Korte, beschrijvende titel in de tegenwoordige tijd
  - Goed: "Use PostgreSQL for primary database"
  - Slecht: "Database"

### 2. Status
Mogelijke statussen:
- **Proposed**: Beslissing is voorgesteld maar nog niet geaccepteerd
- **Accepted**: Beslissing is genomen en wordt gebruikt
- **Deprecated**: Beslissing is niet meer actueel maar wordt nog gebruikt
- **Superseded**: Vervangen door een nieuwe ADR (verwijs naar het nummer)

### 3. Context
Beschrijf:
- **Wat is het probleem?** Welke vraag moet beantwoord worden?
- **Wat zijn de constraints?** Budget, tijd, technische beperkingen, etc.
- **Wat zijn de requirements?** Functioneel en niet-functioneel
- **Wie zijn de stakeholders?** Wie wordt beïnvloed door deze beslissing?

Tips:
- Schrijf alsof je het uitlegt aan je toekomstige zelf over 2 jaar
- Vermeld cijfers en feiten waar mogelijk
- Wees objectief, niet persuasive
- Gebruik duidelijke taal

### 4. Decision
Beschrijf:
- **Wat is de beslissing?** Wees specifiek en duidelijk
- **Waarom deze optie?** Wat maakt dit de beste keuze?
- **Welke alternatieven** zijn overwogen? (optioneel maar sterk aanbevolen)
- **Hoe gaan we dit implementeren?** High-level implementatie plan

Tips:
- Gebruik actieve taal: "We will use..." niet "It might be good to..."
- Wees specifiek: Niet "We use a fast database", maar "We use PostgreSQL 14"
- Leg de redenering uit

### 5. Consequences
Beschrijf zowel positieve als negatieve gevolgen:

**Positieve gevolgen:**
- Welke problemen lost dit op?
- Welke voordelen biedt dit?
- Wat wordt beter/makkelijker?

**Negatieve gevolgen / Trade-offs:**
- Wat wordt moeilijker?
- Wat geven we op?
- Welke nieuwe problemen kunnen ontstaan?
- Wat zijn de risico's?

Tips:
- Wees eerlijk over nadelen
- Dit helpt om realistische verwachtingen te hebben
- Documenteer mitigation strategieën voor nadelen

## Voorbeeld ADR

Hier is een compleet voorbeeld:

---

# ADR-001: Use PostgreSQL for Customer Database

## Status
Accepted

## Context
We need to store customer data for our e-commerce platform. The data includes:
- Customer profiles (name, email, address)
- Order history
- Payment information
- Product reviews

Requirements:
- Support for 100,000+ customers
- ACID compliance for financial transactions
- Complex queries for analytics
- Strong data consistency
- Budget: Max €100/month for database hosting

Constraints:
- Solo developer - need something maintainable
- Must integrate with Node.js backend
- Need good documentation and community support

## Decision
We will use PostgreSQL 14 as the primary database for customer data.

**Why PostgreSQL:**
1. Strong ACID compliance ensures data consistency for financial transactions
2. Excellent support for complex queries and analytics
3. Mature, well-documented, with large community
4. Good ORM support (Prisma, TypeORM)
5. Free and open source
6. Handles our scale (100k customers easily)

**Alternatives considered:**
1. **MySQL**: Similar capabilities but weaker JSON support which we need for flexible product attributes
2. **MongoDB**: Better for unstructured data but lacks ACID guarantees needed for financial transactions
3. **SQLite**: Too limited for production use with multiple concurrent users

**Implementation:**
- Host on managed service (e.g., Railway, Supabase) for automatic backups
- Use Prisma ORM for type-safe database access
- Implement connection pooling for performance

## Consequences

### Positive Consequences
- Strong data consistency and reliability for financial data
- Powerful query capabilities for analytics and reporting
- Excellent JSON support for flexible product attributes
- Large ecosystem of tools and extensions
- Good performance for our scale
- Type-safe queries with Prisma

### Negative Consequences / Trade-offs
- More complex setup than NoSQL databases
- Requires understanding of relational database design
- Schema migrations need to be managed carefully
- Slightly slower than NoSQL for simple document retrieval
- Managed hosting costs (~€25-50/month for our scale)

**Mitigation:**
- Use Prisma Migrate for schema management
- Document database schema in ADR
- Keep schema simple initially, add complexity as needed
- Budget includes managed hosting cost

---

## ADR Bestandsnamen

Gebruik consistent deze naming convention:
```
adr-001-use-postgresql-for-database.md
adr-002-implement-jwt-authentication.md
adr-003-choose-react-for-frontend.md
```

Format: `adr-[nummer]-[korte-beschrijving].md`

## ADR Locatie

Bewaar ADRs in:
```
docs/adr/
├── adr-001-use-postgresql-for-database.md
├── adr-002-implement-jwt-authentication.md
└── README.md (index van alle ADRs)
```

## ADR Index

Maak een README.md in de adr directory met een overzicht:

```markdown
# Architecture Decision Records

Dit is een overzicht van alle architectuur beslissingen voor dit project.

## Index

| ADR | Titel | Status | Datum |
|-----|-------|--------|-------|
| [001](adr-001-use-postgresql-for-database.md) | Use PostgreSQL for Database | Accepted | 2024-01-15 |
| [002](adr-002-implement-jwt-authentication.md) | Implement JWT Authentication | Accepted | 2024-01-20 |
| [003](adr-003-choose-react-for-frontend.md) | Choose React for Frontend | Proposed | 2024-01-25 |

## Statistieken
- Total ADRs: 3
- Accepted: 2
- Proposed: 1
- Deprecated: 0
- Superseded: 0
```

## Tips voor Solo Development

Als solo developer:
1. **Neem de tijd**: Het schrijven van een ADR helpt je om goed na te denken
2. **Wees eerlijk**: Ook over trade-offs, dit helpt je later
3. **Houd het simpel**: Een korte ADR is beter dan geen ADR
4. **Update wanneer nodig**: Als een beslissing niet werkt, update de status
5. **Review periodiek**: Kijk of oude beslissingen nog steeds juist zijn

## Tools

Er zijn tools die kunnen helpen:
- [adr-tools](https://github.com/npryce/adr-tools): CLI voor het maken van ADRs
- [log4brains](https://github.com/thomvaill/log4brains): Web UI voor ADRs
- Of gewoon markdown files in je repository (simpelste optie)

## Meer Lezen

- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) - Michael Nygard (originele ADR blog post)
- [ADR GitHub Organization](https://adr.github.io/) - Templates en voorbeelden
- [When to Write an ADR](https://engineering.atspotify.com/2020/04/when-should-i-write-an-architecture-decision-record/) - Spotify Engineering

## Conclusie

ADRs zijn een krachtig hulpmiddel voor documentatie, vooral als solo developer. Ze helpen je om goede beslissingen te nemen en deze later te begrijpen. Begin klein - je hoeft niet alles te documenteren, alleen de belangrijke beslissingen.
