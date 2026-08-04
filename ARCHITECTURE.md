# ARCHITECTURE.md

# Arquitectura Técnica
## IDH Sistemas de Gestión

Versión del documento: 1.0

---

# 1. Finalidad del documento

Este documento define la arquitectura técnica oficial del proyecto **IDH Sistemas de Gestión**.

Su objetivo es servir como referencia única para comprender cómo está diseñado el sistema, cómo interactúan sus distintas capas y cómo debe evolucionar a lo largo del tiempo.

No pretende explicar cada línea de código, sino establecer los principios arquitectónicos que garantizan la calidad, mantenibilidad, seguridad y escalabilidad del proyecto.

Toda persona desarrolladora, así como cualquier sistema de inteligencia artificial que participe en el desarrollo, deberá conocer este documento antes de realizar cambios estructurales.

Este documento debe consultarse conjuntamente con:

- README.md
- PROJECT_VISION.md
- CODEX_RULES.md
- SECURITY.md
- AI_CONTEXT.md
- CHANGELOG.md
- DECISIONS.md

---

# 2. Filosofía arquitectónica

La arquitectura del proyecto se basa en una serie de principios que deben mantenerse durante toda la vida del sistema.

## Simplicidad

Siempre se priorizará la solución más sencilla capaz de resolver correctamente el problema.

No se introducirán patrones de diseño, librerías o capas adicionales si no aportan un beneficio claro.

---

## Escalabilidad

Aunque actualmente el proyecto comienza como una web corporativa, toda decisión debe permitir crecer sin necesidad de reconstruir el sistema.

La arquitectura debe soportar la incorporación futura de nuevos módulos, funcionalidades privadas y procesos internos.

---

## Modularidad

Cada componente debe tener una única responsabilidad.

Los distintos módulos deben poder evolucionar de forma independiente.

El código debe organizarse en piezas pequeñas, reutilizables y fácilmente mantenibles.

---

## Bajo acoplamiento

Los distintos componentes del sistema deben depender lo mínimo posible entre sí.

Modificar una parte del proyecto nunca debería implicar cambios innecesarios en otras.

---

## Alta cohesión

Cada archivo debe contener únicamente el código relacionado con su responsabilidad.

No deben existir componentes "gigantes" que mezclen múltiples funcionalidades.

---

## Seguridad desde el diseño

La seguridad forma parte de la arquitectura.

No debe añadirse posteriormente.

Toda decisión técnica debe valorar previamente su impacto sobre la seguridad del sistema.

---

## Privacidad desde el diseño

El tratamiento de datos personales seguirá siempre el principio de minimización.

Únicamente se recogerán y procesarán los datos estrictamente necesarios para cada funcionalidad.

---

## Arquitectura preparada para Inteligencia Artificial

El proyecto está diseñado para facilitar la colaboración entre desarrolladores humanos y herramientas de Inteligencia Artificial.

La estructura del código, la documentación y la organización del proyecto deben facilitar que cualquier IA pueda comprender rápidamente el contexto y realizar modificaciones seguras.

---

# 3. Estado actual del proyecto

Actualmente el proyecto implementa principalmente una plataforma web corporativa desarrollada con Laravel e Inertia.

El objetivo inicial consiste en ofrecer una presencia web moderna, profesional y preparada para crecer.

Aunque actualmente muchas funcionalidades todavía no existen, toda la arquitectura ya se diseña pensando en su futura incorporación.

Entre ellas:

- Panel administrativo.
- Gestión documental.
- Área privada.
- Clientes.
- Certificaciones.
- Formación.
- Automatizaciones.
- APIs.
- Integraciones externas.

---

# 4. Tecnologías principales

## Backend

- PHP
- Laravel
- Inertia Laravel
- Laravel Fortify
- Laravel Passkeys
- Laravel Wayfinder
- Composer

---

## Frontend

- React
- TypeScript
- Inertia React
- Tailwind CSS
- Vite
- Lucide React

---

## Desarrollo

- Visual Studio Code
- Git
- GitHub
- Composer
- npm
- Laravel Artisan
- Laravel Pint
- ESLint
- Prettier
- Pest / PHPUnit

---

## Base de datos

Durante el desarrollo podrá utilizarse SQLite.

Los entornos de producción utilizarán bases de datos compatibles con Laravel, preferentemente:

- MySQL
- MariaDB

Toda configuración deberá realizarse mediante variables de entorno.

Nunca se almacenarán credenciales dentro del código fuente.

---

# 5. Arquitectura general

La aplicación sigue una arquitectura organizada por capas claramente diferenciadas.

Cada capa tiene una responsabilidad concreta y nunca debe invadir responsabilidades de otras capas.

El flujo general es el siguiente:

```text
Usuario
      │
      ▼
Navegador
      │
      ▼
React + TypeScript
      │
      ▼
Inertia
      │
      ▼
Rutas Laravel
      │
      ▼
Middleware
      │
      ▼
Controladores
      │
      ▼
Servicios
      │
      ▼
Modelos Eloquent
      │
      ▼
Base de datos
```

Cada petición debe recorrer únicamente las capas necesarias.

La lógica de negocio no debe implementarse en los componentes React.

Los controladores deben permanecer ligeros.

La mayor parte de la lógica deberá residir en servicios especializados cuando el proyecto evolucione.

---

# 6. Organización del proyecto

La estructura del proyecto seguirá siempre la organización estándar de Laravel.

Cada directorio tendrá una responsabilidad claramente definida.

Ejemplo simplificado:

```text
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
```

Dentro del frontend la organización deberá mantenerse modular:

```text
resources/
    js/
        components/
        layouts/
        pages/
        hooks/
        lib/
        types/
```

Cada carpeta deberá contener únicamente archivos relacionados con su propósito.

---

# 7. Flujo de datos

La información deberá fluir siempre en una única dirección.

```text
Base de datos
      ↓
Modelos
      ↓
Servicios
      ↓
Controladores
      ↓
Inertia
      ↓
React
      ↓
Usuario
```

Nunca deberá duplicarse información innecesariamente entre capas.

---

# 8. Evolución prevista

La arquitectura está diseñada para crecer de forma progresiva.

Las siguientes fases previstas incluyen:

- Web corporativa.
- Panel de administración.
- Gestión documental.
- Gestión de clientes.
- Gestión de auditorías.
- Área privada.
- APIs.
- Automatizaciones.
- Integraciones externas.

Cada nueva funcionalidad deberá integrarse respetando esta arquitectura.

---

# 9. Principios inquebrantables

Durante toda la vida del proyecto deberán respetarse las siguientes normas:

- No duplicar lógica.
- No duplicar datos.
- Mantener responsabilidades separadas.
- Mantener componentes pequeños.
- Evitar dependencias innecesarias.
- Priorizar la legibilidad sobre la complejidad.
- Documentar cualquier cambio estructural.
- Mantener compatibilidad con el resto del sistema.
- Diseñar pensando en el largo plazo.

---

# 10. Relación con el resto de la documentación

Cada documento del proyecto cumple una función específica.

| Documento | Finalidad |
|-----------|-----------|
| README.md | Instalación y puesta en marcha del proyecto. |
| PROJECT_VISION.md | Objetivos y visión estratégica. |
| ARCHITECTURE.md | Arquitectura técnica del sistema. |
| SECURITY.md | Normas de seguridad obligatorias. |
| CODEX_RULES.md | Reglas de desarrollo para personas e IA. |
| AI_CONTEXT.md | Memoria viva del proyecto. |
| CHANGELOG.md | Historial de cambios. |
| DECISIONS.md | Registro de decisiones arquitectónicas. |

La documentación debe mantenerse sincronizada con la evolución del proyecto.

Una modificación importante del sistema deberá reflejarse tanto en el código como en la documentación correspondiente.