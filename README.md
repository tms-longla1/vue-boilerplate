# Vue 3 + TypeScript Project

## 📝 Description

Project built with Vue 3 and TypeScript, using Vite as the build tool. This project includes authentication and routing features.

## 🚀 Technologies Used

- Vue 3
- TypeScript
- Vite
- ESLint
- Prettier
- Husky (Git hooks)
- Commitlint

## 📁 Directory Structure

```
.
├── .husky/                 # Git hooks configuration
├── public/                 # Public static assets
├── src/
│   ├── apis/              # API integration services
│   ├── assets/            # Project assets (images, styles, etc.)
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── routers/           # Vue router configuration
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── App.vue            # Root component
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commitlint configuration
├── index.html             # Entry HTML file
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 📜 Scripts

1. Install dependencies:

```bash
npm install
```

2. Run the project:

```bash
npm run dev
```

3. Build the project:

```bash
npm run build
```

4. Lint and format code:

```bash
npm run lint
```

## 🔧 Git Hooks

The project uses Husky to manage Git hooks:

- `pre-commit`: Check linting and formatting before commit
- `commit-msg`: Check commit message format
- `pre-push`: Run checks before pushing code

## 📝 Commit Rules

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message must be structured as follows:

```
<type>(<scope>): <description>

[optional body]
[optional footer(s)]
```

Examples:

```
feat(auth): implement login functionality
fix(router): resolve navigation guard issue
chore(deps): update dependencies to latest version
docs(readme): update installation guide
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `docs`: Documentation only changes
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `chore`: Other changes that don't modify src or test files

### Rules

- Type and scope should be lowercase
- Scope is optional and must be in parentheses
- Description must start with lowercase letter
- Description should be in imperative mood: "change" not "changed" or "changes"
- Description should not end with a period
- Total length of description cannot exceed 100 characters
- A blank line is required between title and body
- Breaking changes must be indicated by "!" before the ":"
