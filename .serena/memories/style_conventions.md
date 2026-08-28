# Style and Conventions

## Code Style

### TypeScript/JavaScript
- Use TypeScript for React components (`.tsx` files)
- JSDoc type annotations used in `.js` config files (e.g., `@ts-check`)
- Functional React components (no class components)
- Named exports preferred for components
- Index files (`index.ts`) for clean exports from component directories

### Component Structure
```
ComponentName/
├── ComponentName.tsx     # Main component
├── styles.module.css     # CSS Module styles
└── index.ts              # Export barrel file
```

### CSS
- CSS Modules for component-specific styles (`.module.css`)
- Global custom CSS in `src/css/custom.css`
- Use `clsx` for conditional class names

### Naming Conventions
- **Components**: PascalCase (e.g., `HomepageHeader`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Modules**: camelCase for class names
- **Markdown files**: kebab-case (e.g., `equipment-requests.md`)

## Documentation Style

### Markdown Files
- Documentation in `moduops/docs/`
- Blog posts in `moduops/blog/` with format `YYYY-MM-DD-name.md`
- Use frontmatter for metadata

### Blog Post Format
```markdown
---
title: Post Title
authors: [author]
tags: [tag1, tag2]
---

Blog content here...
```

## Git Conventions
- Main branch: `main`
- Feature branches for development
- Descriptive commit messages
