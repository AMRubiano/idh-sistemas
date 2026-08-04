# CHANGELOG.md

# Historial de cambios
## IDH Sistemas de Gestión

En este documento se registran los cambios relevantes realizados en el proyecto.

El historial debe permitir que cualquier persona desarrolladora o herramienta de Inteligencia Artificial pueda comprender:

- Qué se añadió.
- Qué se modificó.
- Qué se corrigió.
- Qué se eliminó.
- Qué cambios afectan a seguridad.
- Qué cambios pueden requerir acciones adicionales.
- En qué versión se introdujo cada cambio.

---

## Criterios de mantenimiento

El `CHANGELOG.md` debe actualizarse cuando se complete un cambio relevante para usuarios, desarrollo, arquitectura, seguridad, despliegue o mantenimiento.

No deben registrarse aquí:

- Conversaciones.
- Ideas sin aprobar.
- Tareas pendientes.
- Cambios puramente experimentales no conservados.
- Cada corrección ortográfica menor.
- Reformateos que no alteren comportamiento.
- Decisiones extensas y sus justificaciones.
- Información sensible.
- Secretos.
- Datos personales.

Las decisiones duraderas y sus motivos deben registrarse en `DECISIONS.md`.

Las lecciones aprendidas y problemas históricos reutilizables deben registrarse en `AI_CONTEXT.md`.

---

## Convención de versiones

Las versiones se expresarán con el formato:

```text
MAJOR.MINOR.PATCH
```

Ejemplo:

```text
1.4.2
```

Interpretación utilizada por el proyecto:

- `MAJOR`: cambio importante o incompatible.
- `MINOR`: nueva funcionalidad compatible.
- `PATCH`: corrección compatible o mejora menor.

Mientras el proyecto permanezca en desarrollo inicial, las versiones podrán comenzar por `0`.

Ejemplos:

```text
0.1.0
0.2.0
0.2.1
```

---

## Categorías de cambios

Cada versión utilizará únicamente las categorías necesarias.

### Añadido

Para funcionalidades, componentes, documentos o capacidades nuevas.

### Modificado

Para cambios en comportamiento, diseño, arquitectura o funcionamiento existente.

### Corregido

Para errores solucionados.

### Seguridad

Para medidas que mejoran o corrigen la seguridad y privacidad.

### Rendimiento

Para optimizaciones medibles o relevantes.

### Accesibilidad

Para mejoras relacionadas con navegación, semántica, contraste o tecnologías de asistencia.

### Eliminado

Para funcionalidades, archivos, dependencias o comportamientos retirados.

### Obsoleto

Para funcionalidades que continúan disponibles temporalmente, pero se eliminarán en el futuro.

### Migración

Para cambios que requieren una acción manual al actualizar.

---

## Cambios no publicados

Los cambios completados desde la última versión deben registrarse primero en esta sección.

Cuando se prepare una nueva versión:

1. Revisar las entradas.
2. Eliminar duplicidades.
3. Confirmar que los cambios están realmente implementados.
4. Crear una nueva sección con número de versión y fecha.
5. Dejar nuevamente vacía la sección `Cambios no publicados`.

---

# [Cambios no publicados]

## Añadido

- Creación inicial de `DECISIONS.md`, pendiente de completar con los primeros registros de decisiones arquitectónicas.

## Modificado

- Revisión integral en curso de la documentación raíz para asignar una responsabilidad única a cada documento.
- Mejora progresiva de la documentación orientada tanto a personas desarrolladoras como a herramientas de Inteligencia Artificial.

---

# [0.2.0] - 2026-08-04

## Añadido

- Nueva versión profesional de `ARCHITECTURE.md`.
- Nueva versión estratégica de `PROJECT_VISION.md`.
- Nueva estructura de `AI_CONTEXT.md` como memoria operativa viva para Inteligencia Artificial.
- Nueva versión de `CODEX_RULES.md` centrada exclusivamente en normas obligatorias de desarrollo.
- Nueva política integral de seguridad y privacidad en `SECURITY.md`.
- Nueva versión de `README.md` orientada a una instalación y puesta en marcha sin ambigüedades.
- Definición de responsabilidades separadas para:
  - `README.md`.
  - `PROJECT_VISION.md`.
  - `ARCHITECTURE.md`.
  - `SECURITY.md`.
  - `CODEX_RULES.md`.
  - `AI_CONTEXT.md`.
  - `CHANGELOG.md`.
  - `DECISIONS.md`.
- Incorporación de una metodología documental preparada para colaboración entre personas e Inteligencia Artificial.
- Inclusión de reglas sobre:
  - Security by Design.
  - Privacy by Design.
  - Secure by Default.
  - Minimización de datos.
  - Mínimo privilegio.
  - Defensa en profundidad.
  - Verificación antes de afirmar.
  - Prohibición de inventar información empresarial.
- Documentación de los errores históricos detectados durante el desarrollo.
- Documentación de precauciones para evitar clonar el repositorio dentro de sí mismo.
- Documentación de comprobaciones obligatorias antes de ejecutar migraciones.
- Documentación de convenciones para importaciones, SSR, React y TypeScript.
- Documentación del flujo recomendado de trabajo, validación, Git, commit y push.

## Modificado

- Reorganización completa de la documentación para evitar duplicidades entre archivos.
- Separación de la visión estratégica y la arquitectura técnica.
- Separación de las políticas de seguridad y las reglas operativas para IA.
- Conversión de `AI_CONTEXT.md` en una fuente de contexto, lecciones, estado actual y conocimiento operativo.
- Ampliación de `SECURITY.md` para cubrir:
  - Autenticación.
  - Autorización.
  - Gestión de secretos.
  - Sesiones.
  - Cookies.
  - Archivos privados.
  - Integraciones.
  - Logs.
  - Auditoría.
  - Copias de seguridad.
  - Respuesta ante incidentes.
  - Retención y eliminación de datos.
  - Uso seguro de herramientas de Inteligencia Artificial.
- Actualización del `README.md` para diferenciar claramente:
  - Instalación nueva.
  - Proyecto local ya configurado.
  - SQLite.
  - MySQL o MariaDB.
  - Ejecución conjunta.
  - Ejecución manual.
  - Comprobaciones de desarrollo.
  - Preparación para producción.
- Sustitución de afirmaciones rígidas sobre versiones por la obligación de comprobar:
  - `composer.json`.
  - `composer.lock`.
  - `package.json`.
  - `package-lock.json`.
- Mejora del enfoque documental para que el código actual permanezca como fuente técnica principal de verdad.
- Incorporación de instrucciones más claras para una persona con conocimientos básicos de programación.

## Corregido

- Corrección de instrucciones que podían provocar un clonado accidental dentro del repositorio existente.
- Corrección de instrucciones de base de datos que podían inducir a crear SQLite sin revisar primero el entorno.
- Eliminación de afirmaciones no verificadas sobre versiones exactas del framework.
- Corrección de responsabilidades solapadas entre los documentos raíz.
- Mejora de las advertencias sobre comandos destructivos.
- Mejora de las reglas para evitar sobrescribir `.env`.
- Corrección de referencias que podían presentar funcionalidades futuras como ya implementadas.

## Seguridad

- Adopción explícita de Security by Design, Privacy by Design y Secure by Default.
- Prohibición de almacenar secretos, credenciales o datos privados en el repositorio.
- Definición de reglas para la rotación de secretos comprometidos.
- Definición de requisitos para autenticación y autorización del lado servidor.
- Definición de controles para prevenir:
  - CSRF.
  - XSS.
  - SQL Injection.
  - Mass Assignment.
  - Acceso horizontal.
  - Escalado vertical de privilegios.
  - Abuso automatizado.
  - Exposición de archivos privados.
- Definición de requisitos para:
  - Rate limiting.
  - Protección antispam.
  - Cookies seguras.
  - Sesiones.
  - HTTPS.
  - Cabeceras de seguridad.
  - Logs seguros.
  - Auditoría.
  - Monitorización.
  - Copias de seguridad.
  - Restauración.
  - Respuesta ante incidentes.
- Prohibición de enviar información confidencial a herramientas externas de Inteligencia Artificial sin una evaluación previa.
- Prohibición de guardar documentos privados dentro de `public/`.
- Definición de criterios de minimización, conservación y eliminación de datos.

---

# [0.1.0] - 2026-08-03

## Añadido

- Primera versión funcional de la portada corporativa de IDH Sistemas de Gestión.
- Estructura modular de la página principal mediante React y TypeScript.
- Componente de cabecera corporativa.
- Componente Hero principal.
- Sección de indicadores y datos destacados.
- Sección de servicios.
- Sección de sectores.
- Sección de normas y sistemas de gestión.
- Sección de metodología.
- Sección preparada para clientes.
- Sección preparada para testimonios.
- Sección de presentación de IDH.
- Sección de motivos para elegir IDH.
- Sección de contacto.
- Footer corporativo.
- Enlaces a redes sociales.
- Variantes del logotipo corporativo dentro de `public/images/`.
- Uso de iconos mediante `lucide-react`.
- Primera estructura documental del repositorio.
- Creación inicial de:
  - `README.md`.
  - `AI_CONTEXT.md`.
  - `CODEX_RULES.md`.
  - `ARCHITECTURE.md`.
  - `PROJECT_VISION.md`.
  - `SECURITY.md`.
  - `CHANGELOG.md`.

## Modificado

- Sustitución progresiva de la portada inicial de Laravel por una portada corporativa personalizada.
- División de la portada en componentes independientes.
- Mejora de la jerarquía visual.
- Aplicación de la identidad visual basada en:
  - Rojo corporativo.
  - Blanco.
  - Azul oscuro.
  - Tonos slate.
  - Fondos claros.
- Mejora del diseño responsive.
- Mejora del contenido de contacto.
- Incorporación de los datos corporativos y redes sociales conocidos.
- Preparación visual de secciones pendientes de contenido empresarial confirmado.
- Actualización de `package.json` y `package-lock.json` para reflejar las dependencias frontend utilizadas.

## Corregido

- Corrección de la importación de `IsoStandards.tsx`.

Importación incorrecta:

```tsx
import IsoStandards from '/components/home/IsoStandards';
```

Importación correcta:

```tsx
import IsoStandards from '@/components/home/IsoStandards';
```

- Corrección de errores relacionados con exportaciones predeterminadas de componentes React.
- Sustitución del icono inexistente `ClipboardSearch` por una alternativa disponible en la versión instalada de `lucide-react`.
- Corrección de problemas de composición y orden de importaciones en `welcome.tsx`.
- Eliminación de elementos visuales aislados que aparecían fuera de la composición prevista.
- Corrección del clonado accidental del repositorio dentro de su propia carpeta.
- Eliminación de la copia duplicada creada accidentalmente.
- Recuperación de la raíz correcta del proyecto antes de continuar el desarrollo.

## Seguridad

- Decisión de no inventar ni publicar:
  - Clientes.
  - Testimonios.
  - Estadísticas.
  - Certificaciones.
  - Acreditaciones.
  - Sedes.
  - Resultados.
- Decisión de mantener las secciones preparadas hasta disponer de contenido real, verificado y autorizado.
- Incorporación inicial de reglas para mantener secretos fuera del repositorio.
- Incorporación inicial de criterios de validación, autorización y almacenamiento privado para futuras funcionalidades.

---

# Plantilla para una nueva versión

Al preparar una versión futura, copiar y completar esta estructura:

```markdown
# [X.Y.Z] - AAAA-MM-DD

## Añadido

- Nueva funcionalidad o capacidad.

## Modificado

- Cambio relevante sobre una funcionalidad existente.

## Corregido

- Error solucionado.

## Seguridad

- Mejora o corrección de seguridad.

## Rendimiento

- Optimización relevante.

## Accesibilidad

- Mejora de accesibilidad.

## Eliminado

- Funcionalidad o archivo retirado.

## Obsoleto

- Funcionalidad que se eliminará próximamente.

## Migración

- Acción manual necesaria para actualizar.
```

Deben eliminarse las categorías que no tengan contenido.

---

# Ejemplos de entradas correctas

```text
- Añadido formulario de contacto con validación de servidor y limitación de envíos.
- Corregido el menú móvil para evitar desplazamiento horizontal.
- Centralizados los datos corporativos en una única configuración.
- Protegidas las descargas de documentos mediante autorización de servidor.
- Actualizado React a una nueva versión compatible.
```

---

# Ejemplos de entradas incorrectas

No utilizar entradas ambiguas como:

```text
- Cosas nuevas.
- Varios cambios.
- Arreglos.
- Mejoras generales.
- Todo funcionando.
- Diseño terminado.
```

Tampoco debe afirmarse:

```text
- Seguridad completa.
- Cumplimiento legal garantizado.
- Proyecto listo para producción.
```

sin disponer de verificaciones suficientes.

---

# Flujo para publicar una versión

Antes de convertir los cambios no publicados en una versión:

```text
[ ] El código correspondiente existe.
[ ] Los cambios están guardados.
[ ] El build se ha ejecutado.
[ ] Las pruebas aplicables se han ejecutado.
[ ] No se han incluido datos inventados.
[ ] No se han incluido secretos.
[ ] La documentación está actualizada.
[ ] Se ha revisado Git.
[ ] La versión y la fecha son correctas.
[ ] Las entradas están agrupadas y no duplicadas.
```

Comprobaciones recomendadas:

```bash
git status
git diff
npm run build
php artisan test
```

Después puede prepararse un commit específico:

```bash
git add CHANGELOG.md
git commit -m "docs: actualizar historial de cambios"
git push
```

---

# Relación con el resto de documentos

| Documento | Pregunta que responde |
|---|---|
| `README.md` | ¿Cómo se instala y ejecuta? |
| `PROJECT_VISION.md` | ¿Por qué existe y hacia dónde va? |
| `ARCHITECTURE.md` | ¿Cómo está construido? |
| `SECURITY.md` | ¿Cómo debe protegerse? |
| `CODEX_RULES.md` | ¿Cómo debe trabajarse en él? |
| `AI_CONTEXT.md` | ¿Qué contexto operativo debe recordarse? |
| `CHANGELOG.md` | ¿Qué ha cambiado? |
| `DECISIONS.md` | ¿Por qué se tomó una decisión importante? |

---

# Principio final

El `CHANGELOG.md` debe ser preciso, verificable y útil.

Cada entrada debe describir un cambio real y suficientemente relevante.

No debe exagerar el estado del proyecto ni presentar como terminado aquello que todavía no se ha comprobado.