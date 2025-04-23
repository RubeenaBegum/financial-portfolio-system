# Financial Portfolio Management System

financial-portfolio-system/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interceptors/
│   │   │   │   └── api.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── portfolio.service.ts
│   │   │   │   └── market-data.service.ts
│   │   │   └── store/
│   │   │       ├── portfolio.actions.ts
│   │   │       ├── portfolio.effects.ts
│   │   │       ├── portfolio.reducer.ts
│   │   │       └── portfolio.selectors.ts
│   │   ├── modules/
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   │   ├── allocation-chart/
│   │   │   │   │   │   └── allocation-chart.component.ts
│   │   │   │   │   ├── performance-chart/
│   │   │   │   │   │   └── performance-chart.component.ts
│   │   │   │   │   └── summary-cards/
│   │   │   │   │       └── summary-cards.component.ts
│   │   │   │   ├── pages/
│   │   │   │   │   └── dashboard-page/
│   │   │   │   │       ├── dashboard-page.component.html
│   │   │   │   │       ├── dashboard-page.component.scss
│   │   │   │   │       └── dashboard-page.component.ts
│   │   │   │   └── dashboard-routing.module.ts
│   │   │   └── portfolio/
│   │   │       ├── components/
│   │   │       │   ├── investment-form/
│   │   │       │   │   ├── investment-form.component.html
│   │   │       │   │   ├── investment-form.component.scss
│   │   │       │   │   └── investment-form.component.ts
│   │   │       │   └── investment-list/
│   │   │       │       ├── investment-list.component.html
│   │   │       │       ├── investment-list.component.scss
│   │   │       │       └── investment-list.component.ts
│   │   │       ├── pages/
│   │   │       │   └── portfolio-page/
│   │   │       │       ├── portfolio-page.component.html
│   │   │       │       ├── portfolio-page.component.scss
│   │   │       │       └── portfolio-page.component.ts
│   │   │       └── portfolio-routing.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   └── confirmation-dialog/
│   │   │   │       ├── confirmation-dialog.component.html
│   │   │   │       ├── confirmation-dialog.component.scss
│   │   │   │       └── confirmation-dialog.component.ts
│   │   │   ├── directives/
│   │   │   │   └── currency-input.directive.ts
│   │   │   ├── pipes/
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── percentage-change.pipe.ts
│   │   │   └── validators/
│   │   │       └── future-date.validator.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── models/
│   │       ├── investment.model.ts
│   │       └── market-data.model.ts
│   ├── assets/
│   │   ├── data/
│   │   │   ├── mock-investments.json
│   │   │   └── mock-market-data.json
│   │   └── styles/
│   │       └── _variables.scss
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json


This is an Angular-based web application for managing financial portfolios.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Angular CLI (v12 or later)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
