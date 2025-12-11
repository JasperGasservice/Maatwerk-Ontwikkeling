# API Documentation

## Base URL

```
http://localhost:3000
```

## Endpoints

### GET /

Root endpoint met API informatie.

**Response:**
```json
{
  "message": "Welcome to Example Project API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/health",
    "docs": "/api/docs"
  }
}
```

### GET /health

Health check endpoint voor monitoring.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-12-11T10:30:00.000Z",
  "environment": "development"
}
```

**Status Codes:**
- `200 OK` - Service is healthy

## Error Responses

Alle endpoints kunnen deze error responses teruggeven:

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Cannot GET /api/unknown"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "stack": "..." // Alleen in development
}
```

## Future Endpoints

Deze endpoints worden in toekomstige versies toegevoegd:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - List users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
