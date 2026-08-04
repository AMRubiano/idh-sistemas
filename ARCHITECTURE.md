# ARCHITECTURE.md

## 1. Finalidad del documento

Este documento describe la arquitectura técnica del proyecto web de IDH Sistemas de Gestión.

Debe servir como referencia para:

- Personas desarrolladoras.
- Codex.
- ChatGPT.
- Otras herramientas de inteligencia artificial.
- Futuras incorporaciones al proyecto.
- Procesos de mantenimiento y despliegue.

Antes de modificar la estructura del proyecto, se debe revisar este archivo junto con:

1. `AI_CONTEXT.md`
2. `CODEX_RULES.md`
3. `PROJECT_VISION.md`
4. `SECURITY.md`
5. `CHANGELOG.md`
6. `README.md`

La arquitectura debe evolucionar de forma incremental, manteniendo la seguridad, la claridad y la compatibilidad con lo ya construido.

---

## 2. Descripción general

IDH Sistemas de Gestión es una aplicación web corporativa desarrollada con Laravel, Inertia, React y TypeScript.

El proyecto tiene actualmente dos objetivos principales:

1. Disponer de una web pública corporativa moderna y profesional.
2. Preparar una base técnica segura para incorporar en el futuro funcionalidades privadas, administrativas y de gestión.

La aplicación no debe considerarse únicamente una página estática.

Su arquitectura debe permitir crecer progresivamente hacia una plataforma más completa sin tener que reconstruir el proyecto desde cero.

---

## 3. Tecnologías principales

### Backend

- PHP.
- Laravel.
- Inertia Laravel.
- Laravel Fortify.
- Laravel Passkeys.
- Laravel Wayfinder.
- Composer.

### Frontend

- React.
- TypeScript.
- Inertia React.
- Tailwind CSS.
- Vite.
- Lucide React.

### Herramientas de desarrollo

- Visual Studio Code.
- Git.
- GitHub.
- Composer.
- npm.
- Laravel Artisan.
- Pest o PHPUnit para pruebas.
- Laravel Pint para formato PHP.
- ESLint y Prettier para frontend.

### Base de datos

El entorno local puede utilizar SQLite durante el desarrollo inicial.

El entorno de producción podrá utilizar una base de datos compatible con Laravel, previsiblemente:

- MySQL.
- MariaDB.

La conexión de producción deberá definirse únicamente mediante variables de entorno.

---

## 4. Arquitectura general de la aplicación

La aplicación sigue una arquitectura dividida en varias capas:

```text
Navegador
    ↓
React + TypeScript
    ↓
Inertia
    ↓
Rutas Laravel
    ↓
Controladores
    ↓
Servicios y lógica de aplicación
    ↓
Modelos Eloquent
    ↓
Base de datoss