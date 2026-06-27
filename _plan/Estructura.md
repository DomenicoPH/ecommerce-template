# Estructura del Proyecto

    ecommerce-template/
    │
    ├── apps/
    │   ├── web/                # Astro + React (frontend principal)
    │   ├── admin/              # Panel admin (opcional pero recomendado)
    │   └── api/                # Backend (Node + Drizzle + auth + lógica negocio)
    │
    ├── packages/
    │   ├── ui/                 # Design system (React components)
    │   ├── config/             # Config global + tipos + themes
    │   ├── db/                 # Drizzle schema + migrations
    │   ├── auth/               # lógica auth reutilizable
    │   ├── ecommerce-core/    # lógica de negocio (cart, orders, products)
    │   ├── utils/              # helpers genéricos
    │   └── ai-agents/          # prompts + agentes IA
    │
    ├── templates/
    │   ├── default/
    │   ├── modern/
    │   ├── luxury/
    │   └── minimal/
    │
    ├── themes/
    │   ├── default.ts
    │   ├── dark.ts
    │   └── client-x.ts
    │
    ├── agents/
    │   ├── architect.md
    │   ├── frontend.md
    │   ├── backend.md
    │   ├── qa.md
    │   ├── designer.md
    │   ├── devops.md
    │   └── system.md
    │
    ├── prompts/
    │   ├── system/
    │   ├── tasks/
    │   └── workflows/
    │
    ├── docs/
    │   ├── architecture/
    │   ├── api/
    │   ├── guides/
    │   └── decisions/
    │
    ├── scripts/
    │   ├── setup.ts
    │   ├── seed.ts
    │   ├── build-template.ts
    │   └── deploy.ts
    │
    ├── .github/
    │   ├── workflows/
    │
    ├── turbo.json (opcional si usas Turborepo)
    ├── package.json
    └── README.md