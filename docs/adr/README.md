# Architecture Decision Records

## Overzicht
Deze directory bevat Architecture Decision Records (ADRs) voor belangrijke architectuur beslissingen in onze maatwerk projecten.

## Wat zijn ADRs?
ADRs documenteren belangrijke architectuur beslissingen, inclusief de context, de beslissing zelf, en de consequenties. Dit helpt om:
- Te begrijpen waarom bepaalde keuzes gemaakt zijn
- Discussies te voorkomen over al genomen beslissingen
- Nieuwe teamleden snel up-to-speed te krijgen
- Een geschiedenis bij te houden van het project

## ADR Template
Gebruik de [ADR Template](../templates/adr-template.md) om een nieuwe ADR te maken.

## Index van ADRs

*Er zijn nog geen ADRs aangemaakt. Wanneer je je eerste ADR maakt, voeg deze hier toe.*

### Voorbeeld Index Formaat:

| # | Titel | Status | Datum |
|---|-------|--------|-------|
| [001](adr-001-example.md) | Use PostgreSQL for Database | Accepted | 2024-01-15 |
| [002](adr-002-example.md) | Implement JWT Authentication | Accepted | 2024-01-20 |
| [003](adr-003-example.md) | Choose React for Frontend | Proposed | 2024-01-25 |

## Statistieken
- **Total ADRs**: 0
- **Accepted**: 0
- **Proposed**: 0
- **Deprecated**: 0
- **Superseded**: 0

## Wanneer een ADR maken?

Maak een ADR voor beslissingen die:
- Significant impact hebben op de architectuur
- Moeilijk te veranderen zijn later
- Controversieel zijn of waar discussie over is
- Alternative oplossingen hebben die ook overwogen zijn
- Trade-offs hebben die belangrijk zijn om te begrijpen

## Hoe een ADR toe te voegen

1. Kopieer de [ADR Template](../templates/adr-template.md)
2. Hernoem naar `adr-[nummer]-[korte-beschrijving].md`
3. Vul de template in
4. Voeg toe aan de index hierboven
5. Update de statistieken

## Resources

- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) - Originele blog post door Michael Nygard
- [ADR GitHub Organization](https://adr.github.io/) - Templates en voorbeelden
- [ADR Tools](https://github.com/npryce/adr-tools) - CLI tools voor ADRs
