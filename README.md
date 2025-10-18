# Dave Charm Bulaquena - Portfolio

Professional portfolio website showcasing my work as a Full Stack Developer & Solutions Designer.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Strapi v4 Headless CMS
- **Database:** PostgreSQL
- **Deployment:** Vercel (frontend) + Railway (backend)
- **Monorepo:** pnpm workspaces

## Project Structure

```
portfolio/
├── apps/
│   ├── web/              # Frontend React application
│   └── cms/              # Strapi CMS backend
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── utils/            # Shared utilities
│   └── ui/               # shadcn/ui components
├── docs/
│   ├── architecture.md   # Architecture documentation
│   ├── prd/              # Product Requirements
│   └── brief.md          # Project brief
└── .github/workflows/    # CI/CD pipelines
```

## Getting Started

### Prerequisites

- Node.js 20+ LTS
- pnpm 9+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/davebulaquena/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Build shared packages
pnpm --filter @portfolio/types build
pnpm --filter @portfolio/utils build
pnpm --filter @portfolio/ui build

# Set up Strapi (first time only)
cd apps
npx create-strapi-app@latest cms --quickstart --typescript
# Follow prompts, then return to root

# Configure environment variables
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with your API keys

# Start development servers
pnpm dev
```

### Development

```bash
# Start both frontend and backend
pnpm dev

# Start only frontend
pnpm dev:web

# Start only backend (Strapi)
pnpm dev:cms

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## Documentation

- [Architecture Document](docs/architecture.md) - Complete technical architecture
- [PRD](docs/prd/) - Product requirements and features
- [Project Brief](docs/brief.md) - Original project brief

## Features

- ✅ Responsive portfolio showcase
- ✅ Dynamic project gallery with Strapi CMS
- ✅ Blog platform with Markdown support
- ✅ GitHub integration for live stats
- ✅ Contact form with email notifications
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ Accessibility (WCAG AA compliant)
- ✅ Analytics integration

## Deployment

### Frontend (Vercel)

```bash
# Build frontend
pnpm build:web

# Deploy to Vercel
vercel deploy
```

### Backend (Railway)

1. Connect Railway to GitHub repository
2. Set environment variables
3. Deploy automatically on git push

See [architecture.md](docs/architecture.md) Section 14 for detailed deployment instructions.

## License

© 2025 Dave Charm Bulaquena. All rights reserved.

## Contact

- Website: [davebulaquena.com](https://davebulaquena.com)
- GitHub: [@davebulaquena](https://github.com/davebulaquena)
- LinkedIn: [Dave Charm Bulaquena](https://linkedin.com/in/davebulaquena)
