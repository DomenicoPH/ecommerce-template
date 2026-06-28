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