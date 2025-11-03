# Contributing to Social Media CMS

Thank you for your interest in contributing to Social Media CMS! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming environment for all contributors.

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 1.22+
- PostgreSQL 14+
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/social-media-cms.git
   cd social-media-cms
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Make Your Changes

- Write clear, readable code
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation as needed

### 2. Testing

```bash
# Run all tests
yarn test

# Run tests for specific package
yarn test --filter=@social-cms/utils

# Run tests in watch mode
yarn test --watch
```

### 3. Linting and Type Checking

```bash
# Run linter
yarn lint

# Fix linting issues
yarn lint --fix

# Run type checking
yarn type-check
```

### 4. Commit Your Changes

We use conventional commits. Format your commit messages as:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```bash
git commit -m "feat(web): add post scheduling interface"
```

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Pull Request Guidelines

### PR Title

Use conventional commit format:
```
feat(scope): add new feature
fix(scope): resolve bug
docs: update README
```

### PR Description

Include:
1. **What**: Brief description of changes
2. **Why**: Motivation and context
3. **How**: Implementation approach
4. **Testing**: How you tested the changes
5. **Screenshots**: For UI changes

Template:
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types/interfaces
- Avoid `any` type
- Use meaningful variable names

### React/Next.js

- Use functional components with hooks
- Follow React best practices
- Use TypeScript for props
- Keep components small and focused

### File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Constants: `UPPER_SNAKE_CASE.ts`
- Tests: `*.test.ts` or `*.spec.ts`

### Code Organization

```typescript
// 1. Imports
import React from 'react';
import { SomeType } from '@social-cms/types';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component/Function
export function MyComponent({ title }: Props) {
  // Component logic
}

// 4. Styles (if any)
```

## Documentation

- Update README files when adding features
- Add JSDoc comments for functions
- Update API documentation
- Include examples for complex features

## Testing

### Unit Tests

- Test individual functions/components
- Mock external dependencies
- Aim for 80%+ coverage

### Integration Tests

- Test API endpoints
- Test component interactions
- Test data flow

### E2E Tests

- Test critical user workflows
- Test cross-application features

## Releasing

Releases are managed by maintainers. The process:

1. Update version numbers
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions
- Join our community chat (if available)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).
