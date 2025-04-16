# Solana Web Dapp

## Work Done in `programs/anchor-lessons`

The `programs/anchor-lessons` directory contains the Solana programs written using the Anchor framework. The main program file is `src/lib.rs`, which includes the following functionalities:

1. **initialize**: Initializes a new account with a default data value.
2. **init_phi**: Initializes a new account with personal health information (PHI) such as height, weight, and age.
3. **display_phi**: Displays the personal health information stored in an account.

The program also defines the following account structures:

1. **MyData**: A simple account structure with a single `data` field.
2. **MyPHIData**: An account structure for storing personal health information with fields for height, weight, and age.

## Project Folder Structure

The project is organized as follows:

```
solana-web-dapp/
├── .gitignore
├── .prettierignore
├── .vscode/
│   └── settings.json
├── Anchor.toml
├── Cargo.lock
├── Cargo.toml
├── LICENSE
├── README.md
├── front-end/
│   ├── .env_example
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── (overview)/
│   │   │   │   ├── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── customers/
│   │   │   │   └── page.tsx
│   │   │   ├── invoices/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── edit/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── error.tsx
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── solana/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── lib/
│   │   │   ├── actions.ts
│   │   │   ├── data.ts
│   │   │   ├── definitions.ts
│   │   │   ├── placeholder-data.ts
│   │   │   ├── solana-utils.ts
│   │   │   └── utils.ts
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── query/
│   │   │   └── route.ts
│   │   ├── seed/
│   │   │   └── route.ts
│   │   ├── solanaapi/
│   │   │   ├── idl/
│   │   │   │   └── anchor_lessons.json
│   │   │   ├── phi-crud.tsx
│   │   │   └── types/
│   │   │       └── anchor_lessons.ts
│   │   ├── ui/
│   │   │   ├── acme-logo.tsx
│   │   │   ├── button.tsx
│   │   │   ├── customers/
│   │   │   │   └── table.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── cards.tsx
│   │   │   │   ├── latest-invoices.tsx
│   │   │   │   ├── nav-links.tsx
│   │   │   │   ├── revenue-chart.tsx
│   │   │   │   └── sidenav.tsx
│   │   │   ├── fonts.ts
│   │   │   ├── global.css
│   │   │   ├── invoices/
│   │   │   │   ├── breadcrumbs.tsx
│   │   │   │   ├── buttons.tsx
│   │   │   │   ├── create-form.tsx
│   │   │   │   ├── edit-form.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── status.tsx
│   │   │   │   └── table.tsx
│   │   │   ├── login-form.tsx
│   │   │   ├── search.tsx
│   │   │   ├── skeletons.tsx
│   │   │   ├── solana/
│   │   │   │   └── AppWalletProvider.tsx
│   ├── auth.config.ts
│   ├── auth.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── middleware.ts
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.ts
│   ├── tsconfig.json
├── migrations/
│   └── deploy.ts
├── package.json
├── programs/
│   └── anchor-lessons/
│       ├── Cargo.toml
│       ├── src/
│       │   └── lib.rs
│       └── Xargo.toml
├── tests/
│   └── anchor-lessons.ts
├── tsconfig.json
```
