# 🧱 Ecommerce Template IA

Template modular de e-commerce construido con arquitectura monorepo y diseñado para ser reutilizable, escalable y adaptable a múltiples modelos de negocio.

Este proyecto combina una base sólida de e-commerce con un enfoque experimental de agentes de IA aplicados al desarrollo de software, documentación y arquitectura.

---

## 🎯 Objetivo

Construir un sistema base de e-commerce que permita:

- Crear tiendas online rápidamente
- Reutilizar arquitectura entre proyectos
- Separar lógica de negocio, UI y configuración
- Personalizar tiendas sin modificar el core del sistema
- Integrar agentes de IA en el flujo de desarrollo

---

## 🧩 Alcance del MVP

### Catálogo
- Listado de productos
- Detalle de producto
- Filtrado por categorías
- Búsqueda por nombre

### Carrito
- Agregar productos
- Modificar cantidades
- Eliminar productos
- Cálculo de subtotal

### Checkout (simulado)
- Resumen del pedido
- Datos del cliente
- Confirmación de compra

### Usuarios
- Registro
- Login / Logout
- Perfil básico

### Admin
- CRUD de productos
- CRUD de categorías
- Visualización de pedidos

### Backend
- API REST
- Autenticación
- Gestión de usuarios, productos y pedidos

---

## 🚫 Fuera del MVP

- Pagos reales (Stripe, PayPal)
- Cupones, wishlist, reviews
- Multi-idioma / multi-moneda
- SEO avanzado / analytics
- Multi-vendedor
- Inventario avanzado

---

## 🏗️ Arquitectura

apps/
  web
  admin
  api

packages/
  db
  ui
  auth
  ecommerce-core
  config
  utils

themes/
  default
  modern
  minimal

agents/
  architect
  frontend
  backend
  qa
  designer
  devops
  documentation

---

## 🔄 Flujo

admin → api → web → usuario → api → admin

---

## 🎨 Temas

Sistema de temas configurable sin tocar lógica de negocio:

- colores
- tipografía
- branding

---

## 🧩 Design System / Componentes UI

Componentes reutilizables en `packages/ui`, organizados por nivel de abstracción.

### Nivel 1 — Primitivos (base)

Componentes sin lógica de negocio, base de toda la interfaz.

| Componente | Estado | Descripción |
|-----------|--------|-------------|
| `Button` | ✅ Implementado | Variantes primary/secondary/danger, tamaños sm/md/lg, disabled |
| `Input` | ✅ Implementado | Campo de texto con label, validación visual |
| `Label` | ✅ Implementado | Etiqueta accesible para formularios |
| `Card` | ✅ Implementado | Contenedor genérico con header/body/footer |
| `Badge` | ✅ Implementado | Indicador visual de estado |

### Nivel 2 — Layout

Estructura y composición de páginas.

| Componente | Estado | Descripción |
|-----------|--------|-------------|
| `Container` | ✅ Implementado | Centrado y ancho máximo |
| `Section` | ✅ Implementado | Bloque semántico con spacing |
| `Stack` | ✅ Implementado | Spacing vertical/horizontal |
| `Grid` | ✅ Implementado | Grid responsive |

### Nivel 3 — Ecommerce

Componentes específicos del dominio.

| Componente | Estado | Descripción |
|-----------|--------|-------------|
| `ProductCard` | ✅ Implementado | Tarjeta de producto con imagen, título y precio |
| `ProductGrid` | ✅ Implementado | Grid de productos responsive |
| `Price` | ✅ Implementado | Formateo de precio con moneda |
| `AddToCartButton` | ⏳ Pendiente | Botón con lógica de carrito |
| `QuantitySelector` | ⏳ Pendiente | Selector de cantidad |

### Nivel 4 — Navegación

Componentes de navegación compartidos.

| Componente | Estado | Descripción |
|-----------|--------|-------------|
| `Navbar` | ⏳ Pendiente | Barra de navegación |
| `Footer` | ⏳ Pendiente | Pie de página |
| `Breadcrumbs` | ⏳ Pendiente | Migas de pan |
| `Sidebar` | ⏳ Pendiente | Barra lateral (admin) |

---

## 🧠 Agentes IA

- Arquitectura
- Frontend
- Backend
- QA
- Diseño
- DevOps
- Documentación

---

## 📦 Stack

- Astro + React
- Tailwind CSS
- Node.js
- Drizzle ORM
- PostgreSQL / SQLite

---

## 🚀 Roadmap

1. Arquitectura base
2. UI system
3. Backend API
4. MVP
5. Testing
6. Themes
7. IA agents
8. Clientes

---

## Comandos Dev Monorepo

    pnpm --filter web dev

Ejecuta el servidor de desarrollo del frontend (workspace web) en un monorepo.