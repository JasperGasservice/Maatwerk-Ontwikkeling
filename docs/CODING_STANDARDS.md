# Coding Standards

## Algemene Principes

### Clean Code
- **Leesbaarheid**: Code wordt meer gelezen dan geschreven
- **Eenvoud**: Keep it simple (KISS principle)
- **DRY**: Don't Repeat Yourself
- **YAGNI**: You Ain't Gonna Need It

### Naamgeving Conventies

#### Variabelen en Functies
- Gebruik beschrijvende namen
- camelCase voor variabelen en functies
- Vermijd afkortingen (tenzij algemeen bekend)

```javascript
// Goed
const userName = 'John';
function calculateTotalPrice() {}

// Slecht
const un = 'John';
function calc() {}
```

#### Classes en Types
- PascalCase voor classes en types
- Noun-based namen voor classes
- Beschrijvende namen die de verantwoordelijkheid weerspiegelen

```javascript
// Goed
class UserAccount {}
class OrderProcessor {}

// Slecht
class user {}
class Process {}
```

#### Constants
- UPPER_SNAKE_CASE voor constanten
- Groepeer gerelateerde constanten

```javascript
// Goed
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';

// Slecht
const maxRetry = 3;
const apiUrl = 'https://api.example.com';
```

### Code Organisatie

#### Bestand Structuur
- Één class/component per bestand
- Bestandsnaam moet overeenkomen met de class/component naam
- Groepeer gerelateerde bestanden in directories

```
src/
├── models/
│   ├── User.js
│   └── Order.js
├── services/
│   ├── UserService.js
│   └── OrderService.js
└── utils/
    ├── validation.js
    └── formatting.js
```

#### Functie Lengte
- Houd functies kort (<50 regels)
- Een functie moet één ding doen
- Als een functie te lang wordt, splits deze op

#### Commentaar
- Schrijf zelf-documenterende code
- Gebruik comments om het "waarom" uit te leggen, niet het "wat"
- Update comments bij code wijzigingen
- Vermijd TODO comments in productie code

```javascript
// Goed
// Calculate discount based on customer loyalty tier
// Bronze: 5%, Silver: 10%, Gold: 15%
function calculateDiscount(customerTier) {}

// Slecht
// This function calculates discount
function calculateDiscount(customerTier) {}
```

## Taal-Specifieke Standards

### JavaScript/TypeScript

#### Gebruik Modern Syntax
```javascript
// Goed
const items = [...oldItems, newItem];
const { name, email } = user;
const result = await fetchData();

// Slecht
var items = oldItems.concat([newItem]);
var name = user.name;
var email = user.email;
fetchData().then(result => {});
```

#### Error Handling
```javascript
// Goed
try {
  const data = await fetchData();
  return processData(data);
} catch (error) {
  console.error('Failed to fetch data:', error);
  throw new CustomError('Data fetch failed', error);
}

// Slecht
try {
  const data = await fetchData();
  return processData(data);
} catch (error) {
  console.log(error);
}
```

#### Gebruik TypeScript Types
```typescript
// Goed
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): Promise<User> {
  // ...
}

// Slecht
function getUser(id) {
  // ...
}
```

### Python

#### PEP 8 Compliance
- 4 spaties voor indentatie
- snake_case voor functies en variabelen
- PascalCase voor classes

```python
# Goed
def calculate_total_price(items: list) -> float:
    """Calculate the total price of items."""
    return sum(item.price for item in items)

# Slecht
def calculateTotalPrice(items):
    return sum([item.price for item in items])
```

#### Type Hints
```python
# Goed
from typing import List, Optional

def find_user(user_id: int) -> Optional[User]:
    """Find a user by ID."""
    pass

# Slecht
def find_user(user_id):
    pass
```

### C# / .NET

#### Naming Conventions
- PascalCase voor methods, properties, classes
- camelCase voor parameters en local variables
- _camelCase voor private fields

```csharp
// Goed
public class OrderService
{
    private readonly IRepository _repository;
    
    public decimal CalculateTotalPrice(List<Item> items)
    {
        // ...
    }
}

// Slecht
public class orderService
{
    public decimal calculate_total_price(List<Item> Items)
    {
        // ...
    }
}
```

## Testing Standards

### Test Naamgeving
- Beschrijvende test namen
- Pattern: `MethodName_Scenario_ExpectedResult`

```javascript
// Goed
test('calculateDiscount_WithGoldTier_Returns15PercentDiscount', () => {});
test('validateEmail_WithInvalidFormat_ReturnsFalse', () => {});

// Slecht
test('test1', () => {});
test('discount', () => {});
```

### Test Structuur (AAA Pattern)
- **Arrange**: Setup test data
- **Act**: Execute the function
- **Assert**: Verify the result

```javascript
test('calculateTotal_WithMultipleItems_ReturnsCorrectSum', () => {
  // Arrange
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ];
  
  // Act
  const total = calculateTotal(items);
  
  // Assert
  expect(total).toBe(35);
});
```

## Git Standards

### Branch Naming
```
feature/add-user-authentication
bugfix/fix-login-error
hotfix/critical-security-patch
docs/update-readme
```

### Commit Messages
```
feat: add user authentication
fix: resolve login error on mobile
docs: update API documentation
refactor: simplify user service
test: add unit tests for order processing
chore: update dependencies
```

## Code Review Checklist

Als je je eigen code reviewt, check:

- [ ] Code volgt de naming conventions
- [ ] Functies zijn kort en doen één ding
- [ ] Error handling is aanwezig
- [ ] Comments zijn up-to-date en nuttig
- [ ] Tests zijn toegevoegd/bijgewerkt
- [ ] Geen commented-out code
- [ ] Geen console.logs of debug code
- [ ] Security best practices gevolgd
- [ ] Performance overwegingen gemaakt
- [ ] Code is DRY (no duplication)

## Security Best Practices

### Gevoelige Data
- Nooit hardcoded credentials
- Gebruik environment variabelen
- Git ignore voor secrets

```javascript
// Goed
const apiKey = process.env.API_KEY;

// Slecht
const apiKey = 'sk_live_123456789';
```

### Input Validatie
- Valideer alle user input
- Sanitize data voor database queries
- Use prepared statements

### Dependencies
- Houd dependencies up-to-date
- Check voor security vulnerabilities
- Gebruik `npm audit` of `pip check`

## Performance Best Practices

### Database Queries
- Gebruik indexen
- Vermijd N+1 queries
- Gebruik pagination voor grote datasets

### Caching
- Cache frequent accessed data
- Invalidate cache appropriately
- Consider cache strategy (LRU, TTL)

### Frontend Performance
- Lazy load components
- Optimize images
- Minimize bundle size
- Use CDN voor static assets

## Conclusie

Deze coding standards helpen je om consistente, onderhoudbare en hoogwaardige code te schrijven. Pas ze aan waar nodig voor jouw specifieke project, maar blijf consistent binnen je codebase.
