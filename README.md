# Daily Shopping
A shopping cart app built with Vue 3 and TypeScript — created to practice Pinia state management and Vue Router by building something real.

---

## About
Daily Shopping lets you browse products, manage a cart, and complete a checkout flow across multiple pages.

**Why I built this:** Part of a self-directed Vue learning roadmap. This project covers multi-store Pinia architecture, cross-store communication, computed getters, programmatic navigation with `useRouter()`, and quantity management in a practical context.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Vue | 3 |
| TypeScript | 5 |
| Vite | 6 |
| Pinia | 2 |
| Vue Router | 4 |

---

## Setup

**Requirements:**
- Node.js 18+
- VS Code with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension

**Install and run:**
```bash
npm install
npm run dev
```

---

## Features
- Browse a product catalog
- Add products to cart
- Increase or decrease item quantity
- Remove individual items from cart
- View cart total price (computed, cached)
- Proceed to checkout with full order summary
- Confirm order — clears cart and redirects to success page
- Continue shopping from success page
