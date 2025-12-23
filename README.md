## Desafio Técnico - Front-End (Plugify)

Aplicação React que exibe uma lista de produtos com busca, paginação e drawer de detalhes, usando **React Query**, **Material UI**, **React Router** e **TypeScript**, conforme especificação do desafio.

### 🔧 Requisitos

- Node.js 18+ e npm

### ▶️ Como rodar o projeto

1. Instalar dependências:

```bash
npm install
```

2. Rodar em modo desenvolvimento:

```bash
npm run dev
```

3. Acessar no navegador:

```text
http://localhost:5173
```

### 📁 Principais pastas/arquivos

- `src/types/product.ts` – Tipos `Product` e `PaginatedResponse`
- `src/mocks/products.ts` – Mock com 50 produtos e função `fetchProducts` com busca + paginação
- `src/hooks/useDebounce.ts` – Hook de debounce genérico
- `src/hooks/useProducts.ts` – Hook com React Query integrado aos query params da URL
- `src/utils/formatters.ts` – Formatação de preço (BRL) e data
- `src/components/ProductSearch` – Campo de busca integrado à URL
- `src/components/ProductTable` – Tabela de produtos com estados de loading/empty e linhas clicáveis
- `src/components/ProductPagination` – Paginação (10/20/50 itens por página) controlada via URL
- `src/components/ProductDrawer` – Drawer lateral com detalhes do produto controlado por `?productId`
- `src/pages/Products` – Página principal de produtos
- `src/main.tsx` – Configuração de roteamento, React Query e tema MUI

### 🌐 Funcionalidades

- **Tabela de produtos** com hover e linhas clicáveis apenas para status **Ativo**
- **Busca com debounce (500ms)** por nome ou categoria, persistida em `?search`
- **Paginação** com 10/20/50 itens, controlada via `?page` e `?size`
- **Drawer de detalhes** controlado por `?productId`, com fechamento via X ou clique no backdrop
- **Persistência de estado via URL** (recarregar a página mantém filtros, paginação e drawer)





