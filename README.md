# TODOS (FOR TEACHER ONLY)

- add dotenv
- add zod and remove dto-checker
- add eslint
- prettier

# File system structure

## /

### directories

- .vscode - vs code workspace configs
- build - built project (plain js)
- node_modules - installed npm packages
- src - source files of our application

### files

- .env - environment variable values
- .eslintrc.json - eslint configs
- .gitignore - list of ignored directories for git
- .prettierrc.json - prettier configs
- ormconfig.json - type orm configs
- package-lock.json - list of all packages of this project with locked versions
- package.json - list of direct packages of this project, scripts, and other meta info
- README.md - this file
- tsconfig.json - typescript configs

## /src

### directories

- domain - business logic bundled in separated folders by domain
- middleware - express middleware functions for application routes
- shared - util functions, classes, etc.

### files

- app.ts - main server application setup
- common.router.ts - abstract description of all routers
- config.ts - parsed environment variables that config this app
- routers.ts - sets app all routers of the application

## src/domain/\*\*

- \*.controller.ts - handles request and response, and links route with service method
- \*.entity.ts - database model describer
- \*.routers.ts - linker between endpoint, middleware and controller method
- \*.types.d.ts - type definitions
- \*.service.ts - business logic
