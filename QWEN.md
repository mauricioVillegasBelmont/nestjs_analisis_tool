# QWEN.md - IA NestJS Panel

## backups
Skip all folders and their files or files marked as \*.back and \*.back.\*. These are files used by the developer as a backup to manually restore any changes.

## Project Overview

This is a NestJS-based document analysis and management tool called "Herramienta de analisis de documentos tipo 'Poket'". The application is designed to handle document analysis with integration to AI services, Google Sheets, and a comprehensive database system for managing document-related data.

The project uses:
- **Framework**: NestJS v11.x with TypeScript
- **Database**: MySQL with TypeORM
- **Frontend**: Express with Handlebars templating
- **AI Integration**: DeepSeek AI provider (configurable)
- **API Documentation**: Swagger
- **Google Services**: Google Sheets API integration
- **Python Integration**: Python shell execution for additional processing

## Project Architecture

The application follows a modular structure with the following main components:

### Core Modules
- `app.module.ts` - Main application module that imports all feature modules
- `documents_environment` - Comprehensive document management system with entities for:
  - Documents
  - Authors
  - Labels
  - Quotes
  - Markups
  - External Assets
  - APA References
- `ia_service` - AI service integration module with factory pattern support
- `py_services` - Python script execution service
- `g_services` - Google services integration (currently Google Sheets)
- `dbpedia` - DBpedia integration module
- `site_data` - Site data management

### Key Technologies & Libraries
- **NestJS** - Framework for building the application
- **TypeORM** - ORM for database operations
- **Swagger** - API documentation
- **Google APIs** - Google Sheets integration
- **Python Shell** - Python script execution
- **DeepSeek API** - AI service integration

## Environment Configuration

The application requires a `.env` file with the following variables:

### General Settings
- `NODE_ENV` - Environment (development/production)
- `PORT` - Application port (default: 3000)

### Database Settings
- `DATABASE_DIALECT` - Database dialect (mysql)
- `DATABASE_URL` - Database connection URL
- `DATABASE_HOST` - Database host
- `DATABASE_NAME` - Database name
- `DATABASE_USER` - Database username
- `DATABASE_PASSWORD` - Database password

### AI Provider Settings
- `IA_PROVIDER` - AI provider service (default: 'deepseek')
- `DEEPSEEK_APIKEY` - DeepSeek API key

### Python Settings
- `PYTHON_PATH` - Path to Python executable (default: 'python3')

### Google Services Settings
- `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS` - Path to Google service account credentials file
- `GOOGLE_SERVICE_AUTH_SCOPES` - Comma-separated list of Google API scopes

## Building and Running

### Prerequisites
- Node.js (v18+ recommended)
- Yarn package manager
- MySQL database
- Python 3 (if using Python features)

### Setup Commands
```bash
# Install dependencies
$ pnpm install

# Build the application
$ pnpm run build

# Development mode
$ pnpm run start:dev

# Production mode
$ pnpm run start:prod

# Watch mode
$ pnpm run start:watch
```

### Testing
```bash
# Unit tests
$ pnpm run test

# End-to-end tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

### Linting and Formatting
```bash
# Lint code
$ pnpm run lint

# Format code
$ pnpm run format
```

## Key Features

1. **Document Analysis**: Analyze and process various document types
2. **AI Integration**: Integration with DeepSeek AI for document processing
3. **Google Sheets Integration**: Sync data with Google Sheets
4. **Database Management**: Comprehensive entity management for documents, authors, quotes, etc.
5. **REST API**: Well-documented API with Swagger
6. **Python Integration**: Execute Python scripts for additional processing
7. **DBpedia Integration**: Connect with DBpedia for knowledge extraction

## Development Conventions

- **Code Style**: Following NestJS and TypeScript best practices
- **Testing**: Jest for unit and e2e testing
- **Documentation**: Swagger API documentation
- **Database**: TypeORM with entity relationships
- **Configuration**: NestJS Config module with .env file support

## File Structure

```
src/
├── common/              # Common utilities and decorators
├── database/            # Database configuration and providers
├── dbpedia/             # DBpedia service integration
├── documents_environment/ # Document management modules
│   ├── apa_ref/         # APA reference management
│   ├── authors/         # Author management
│   ├── documents/       # Document management
│   ├── external_assets/ # External asset management
│   ├── labels/          # Label management
│   ├── markups/         # Markup management
│   └── quotes/          # Quote management
├── g_services/          # Google services integration
├── ia_service/          # AI service integration
├── py_services/         # Python services
├── site_data/           # Site data management
├── main.ts              # Application entry point
├── app.module.ts        # Main application module
├── app.controller.ts    # Root application controller
├── app.service.ts       # Root application service
└── all-exceptions.filter.ts # Global exception handling
```

## API Documentation

Swagger API documentation is available at `/api` endpoint when the application is running.

## Deployment

- Build the application: `pnpm run build`
- Run in production: `pnpm run start:prod`
- The application will look for environment variables in the `.env` file
- Ensure the database is accessible and properly configured
- For production, disable TypeORM synchronization in database configuration


# imports
Use path aliases '<modulePath>/module.component' for paths that require relative path './module.component' in all cases where they occur