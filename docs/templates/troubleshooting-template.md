# Troubleshooting Guide: [Project Naam]

## Inleiding
Deze guide helpt bij het oplossen van veelvoorkomende problemen met [Project Naam].

**Laatste Update**: [Datum]  
**Versie**: [Project versie]

## Quick Fixes

Probeer deze eerst:
1. [ ] Herstart de applicatie
2. [ ] Check of alle services draaien
3. [ ] Controleer de logs voor recente errors
4. [ ] Verify configuratie is correct
5. [ ] Check database connectie

---

## Veelvoorkomende Problemen

### Probleem: [Beschrijving van het probleem]

**Symptomen:**
- [Symptoom 1]
- [Symptoom 2]

**Mogelijke Oorzaken:**
1. [Oorzaak 1]
2. [Oorzaak 2]

**Oplossing:**

**Stap 1**: [Eerste stap]
```bash
# Commando's indien van toepassing
```

**Stap 2**: [Tweede stap]
```bash
# Commando's indien van toepassing
```

**Verificatie:**
- [ ] [Hoe te verifiëren dat het werkt]

**Preventie:**
- [Hoe dit probleem te voorkomen in de toekomst]

---

## Problemen per Categorie

### Startup Problemen

#### Applicatie start niet op

**Symptomen:**
- Error bij opstarten
- Process crasht direct
- Geen output in console

**Diagnose:**
```bash
# Check process status
ps aux | grep [process-name]

# Check logs
tail -f /path/to/logfile

# Check port availability
lsof -i :[port-number]
```

**Mogelijke Oplossingen:**

1. **Port al in gebruik**
   ```bash
   # Find process using the port
   lsof -i :3000
   
   # Kill the process
   kill -9 [PID]
   ```

2. **Missing environment variables**
   ```bash
   # Check if .env file exists
   ls -la .env
   
   # Verify environment variables
   echo $DATABASE_URL
   ```

3. **Dependencies niet geïnstalleerd**
   ```bash
   # Reinstall dependencies
   npm install
   # or
   pip install -r requirements.txt
   ```

---

### Database Problemen

#### Kan geen verbinding maken met database

**Symptomen:**
- "Connection refused" errors
- Timeout bij database queries
- "Authentication failed" errors

**Diagnose:**
```bash
# Check if database is running
systemctl status postgresql
# or
docker ps | grep postgres

# Test connection manually
psql -h localhost -U username -d database_name
# or
mysql -h localhost -u username -p
```

**Mogelijke Oplossingen:**

1. **Database service niet gestart**
   ```bash
   # Start database
   systemctl start postgresql
   # or
   docker-compose up -d database
   ```

2. **Verkeerde credentials**
   - Check DATABASE_URL in .env file
   - Verify username and password
   - Check database name is correct

3. **Firewall blokkeert connectie**
   ```bash
   # Check firewall rules
   sudo ufw status
   
   # Allow database port
   sudo ufw allow 5432/tcp
   ```

#### Database schema out of sync

**Symptomen:**
- "Table doesn't exist" errors
- "Column not found" errors
- Migration errors

**Oplossing:**
```bash
# Run pending migrations
npm run migrate
# or
python manage.py migrate

# If migrations fail, check migration status
npm run migrate:status

# Reset database (DEVELOPMENT ONLY!)
npm run db:reset
```

---

### API / Network Problemen

#### API returns 500 errors

**Symptomen:**
- Internal server error responses
- Geen specifieke error message
- Random failures

**Diagnose:**
```bash
# Check server logs
tail -f logs/error.log

# Check for stack traces
grep -A 20 "Error" logs/error.log

# Test API endpoint
curl -v http://localhost:3000/api/endpoint
```

**Mogelijke Oorzaken:**
1. Unhandled exception in code
2. Database query failing
3. External service down
4. Memory/resource limits

**Oplossing:**
1. Check error logs for stack trace
2. Add try-catch around failing code
3. Add logging to identify issue
4. Check resource usage (memory, CPU)

#### API returns 401/403 errors

**Symptomen:**
- Unauthorized or Forbidden errors
- Auth was working before
- Some endpoints work, others don't

**Oplossing:**

1. **Token expired**
   - Generate new token
   - Check token expiration settings

2. **Missing permissions**
   - Verify user roles
   - Check permission configuration

3. **CORS issues** (in browser)
   ```javascript
   // Check CORS configuration
   // Ensure origin is allowed
   ```

---

### Performance Problemen

#### Applicatie is traag

**Symptomen:**
- Lange response times
- Timeouts
- High CPU/memory usage

**Diagnose:**
```bash
# Check resource usage
top
# or
htop

# Check memory usage
free -h

# Check disk usage
df -h

# Profile application (example)
node --prof app.js
```

**Mogelijke Oplossingen:**

1. **Database queries zijn traag**
   - Check slow query log
   - Add database indexes
   - Optimize N+1 queries

2. **Memory leak**
   - Profile memory usage
   - Check for unclosed connections
   - Review event listeners

3. **Too many concurrent requests**
   - Implement rate limiting
   - Add caching
   - Scale horizontally

---

### Data Problemen

#### Data is incorrect of inconsistent

**Symptomen:**
- Verkeerde waarden in database
- Missing data
- Duplicated data

**Diagnose:**
```sql
-- Check for duplicates
SELECT column, COUNT(*) 
FROM table 
GROUP BY column 
HAVING COUNT(*) > 1;

-- Check for null values
SELECT * FROM table WHERE important_column IS NULL;

-- Check data constraints
SELECT * FROM table WHERE value < 0; -- for example
```

**Oplossing:**

1. **Data validation failing**
   - Add stricter validation
   - Add database constraints
   - Validate at multiple levels

2. **Race condition**
   - Use transactions
   - Implement locking
   - Add unique constraints

3. **Corrupt data from migration**
   - Restore from backup
   - Write data fix script
   - Test on copy first

---

## Error Messages

### Error: [Specifieke error message]

**Betekenis:** [Wat betekent deze error]

**Oplossing:**
```bash
# Stappen om op te lossen
```

**Zie ook:** [Link naar gerelateerde documentatie]

---

### Error: "ECONNREFUSED"

**Betekenis:** Kan geen verbinding maken met de service

**Mogelijke Oorzaken:**
- Service draait niet
- Verkeerd IP adres of poort
- Firewall blokkeert connectie

**Oplossing:**
1. Check of service draait
2. Verify connection string
3. Check firewall rules

---

## Logging & Monitoring

### Logs Locatie

```
logs/
├── error.log          # Error logs
├── access.log         # Access logs
├── debug.log          # Debug logs
└── application.log    # General application logs
```

### Logs Bekijken

```bash
# View real-time logs
tail -f logs/application.log

# Search for errors
grep -i "error" logs/application.log

# View last 100 lines
tail -n 100 logs/application.log

# View logs from specific time
grep "2024-01-15" logs/application.log
```

### Log Levels

- **ERROR**: Iets is fout gegaan, requires attention
- **WARN**: Mogelijk probleem, keep an eye on it
- **INFO**: Normale operatie events
- **DEBUG**: Detailed information for debugging

---

## Health Checks

### System Health Check

```bash
# Check all services
./scripts/health-check.sh

# Or manually:
# 1. Check application
curl http://localhost:3000/health

# 2. Check database
psql -h localhost -U user -d db -c "SELECT 1"

# 3. Check disk space
df -h

# 4. Check memory
free -h
```

### Expected Health Check Output

```json
{
  "status": "healthy",
  "database": "connected",
  "uptime": 3600,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## Emergency Procedures

### Complete System Failure

**Stappen:**

1. **Stop de applicatie**
   ```bash
   systemctl stop application
   # or
   docker-compose down
   ```

2. **Check logs voor oorzaak**
   ```bash
   tail -n 200 logs/error.log
   ```

3. **Maak database backup**
   ```bash
   pg_dump dbname > backup_$(date +%Y%m%d_%H%M%S).sql
   ```

4. **Probeer restart**
   ```bash
   systemctl start application
   ```

5. **Als restart faalt: rollback naar vorige versie**
   ```bash
   git checkout [previous-tag]
   npm install
   npm start
   ```

6. **Documenteer incident**
   - Wat ging er fout?
   - Wat was de oorzaak?
   - Hoe is het opgelost?
   - Hoe voorkomen we dit?

---

### Data Corruption

**Stappen:**

1. **Stop immediately alle writes**
   - Zet applicatie in read-only mode
   - Of stop de applicatie

2. **Assess de schade**
   - Welke data is corrupt?
   - Sinds wanneer?
   - Hoeveel records?

3. **Restore from backup**
   ```bash
   # Stop database
   systemctl stop postgresql
   
   # Restore backup
   psql dbname < backup_file.sql
   
   # Start database
   systemctl start postgresql
   ```

4. **Verify data integrity**
   - Run data consistency checks
   - Test critical functionality

5. **Document en prevent**
   - Write incident report
   - Add validation to prevent recurrence

---

## Getting Help

### Internal Resources
- [Architecture Documentation](../README.md)
- [API Documentation](api-docs.md)
- [Database Schema](schema.md)
- [ADRs](../adr/)

### External Resources
- [Framework Documentation](https://link-to-framework-docs)
- [Database Documentation](https://link-to-db-docs)
- Stack Overflow: [relevant tags]
- Community Forum: [link]

### Contact
- **Escalatie**: [Naam/Email voor dringende zaken]
- **Issues**: [Link naar issue tracker]
- **Documentation**: [Link naar docs]

---

## Preventie Checklist

Na het oplossen van een probleem:

- [ ] Probleem is gedocumenteerd in deze guide
- [ ] Root cause is geïdentificeerd
- [ ] Oplossing is getest
- [ ] Preventie maatregelen zijn geïmplementeerd
- [ ] Monitoring is toegevoegd (indien relevant)
- [ ] Team is geïnformeerd (indien relevant)
- [ ] Tests zijn toegevoegd om recurrence te voorkomen

---

## Appendix

### Useful Commands

```bash
# Process management
ps aux | grep [process]
kill -9 [PID]
systemctl status [service]

# Network debugging
netstat -tulpn
nmap localhost
curl -v [url]

# Disk management
du -sh *
df -h
find . -type f -size +100M

# Database
# PostgreSQL
psql -U user -d database
\dt                    # List tables
\d table_name         # Describe table

# MySQL
mysql -u user -p database
SHOW TABLES;
DESCRIBE table_name;
```

### Configuration Files

Belangrijke configuratie bestanden:
- `.env` - Environment variables
- `config/database.yml` - Database configuratie
- `config/app.config` - Applicatie configuratie

---

**Tip**: Houd deze guide up-to-date. Voeg elk nieuw probleem toe zodra je het oplost. Je toekomstige zelf zal je dankbaar zijn!
