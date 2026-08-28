# Style and Conventions

## Code Style

### TypeScript/JavaScript
- TypeScript for React components (`.tsx`)
- JSDoc type annotations in `.js` config files (e.g., `@ts-check`)
- Functional React components (no class components)
- Named exports preferred
- Index files (`index.ts`) for clean exports from component directories

### Component Structure
```
ComponentName/
├── ComponentName.tsx     # Main component
├── styles.module.css     # CSS Module styles
└── index.ts              # Export barrel file
```

### CSS
- CSS Modules for component styles (`.module.css`)
- Global custom CSS in `src/css/custom.css`
- `clsx` for conditional class names

### Naming Conventions
- **Components**: PascalCase (e.g., `HomepageHeader`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Modules**: camelCase for class names
- **Markdown files**: kebab-case (e.g., `equipment-requests.md`)

## Code Comments
**No prose in comments.** Terse one-line fragments or nothing. No paragraphs,
no justifying choices, no explaining what was done. Rationale belongs in the
commit message, not the source.

```
GOOD:  # minutes; 7d cooldown on newly published versions
BAD:   # Supply-chain: refuse to resolve any version published less than 7
       # days ago, giving the community time to catch compromised releases.
```

## Documentation Style

### Markdown Files
- Documentation in `moduops/docs/`
- Blog posts in `moduops/blog/` as `YYYY-MM-DD-name.md`
- Frontmatter for metadata

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
- Branch prefixes: `fix/`, `refactor/`, `feat/`, `chore/`
- Concise commit messages; sacrifice grammar for concision
- GitHub CLI (`gh`) is the primary way to interact with GitHub
