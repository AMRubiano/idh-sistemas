# DECISIONS.md

# Registro de Decisiones
## IDH Sistemas de Gestión

**Versión del documento:** 1.0
**Formato:** Architecture Decision Records
**Estado:** Documento vivo
**Última revisión:** 2026-08-04

---

# 1. Finalidad del documento

Este archivo registra las decisiones técnicas, arquitectónicas, funcionales y de seguridad que tienen un impacto duradero sobre el proyecto **IDH Sistemas de Gestión**.

Su finalidad es conservar no solo qué se decidió, sino también:

- Qué problema existía.
- Qué contexto condicionó la decisión.
- Qué alternativas se evaluaron.
- Por qué se eligió una opción.
- Qué consecuencias genera.
- Cuándo debe revisarse.
- Qué partes del proyecto quedan afectadas.

Este documento responde a una pregunta concreta:

> ¿Por qué el proyecto está construido de esta manera?

---

# 2. Qué es un ADR

ADR significa:

```text
Architecture Decision Record
```

Un ADR es un registro breve y estructurado de una decisión importante.

Cada decisión debe conservarse aunque posteriormente sea sustituida.

No deben borrarse decisiones históricas porque ayudan a comprender la evolución del proyecto.

Cuando una decisión deje de aplicarse, su estado deberá cambiar a:

```text
Sustituida
```

y deberá indicarse qué ADR la reemplaza.

---

# 3. Qué decisiones deben registrarse

Debe crearse un ADR cuando una decisión:

- Cambia la arquitectura.
- Define una tecnología principal.
- Introduce una dependencia estructural.
- Define cómo se almacenan datos o archivos.
- Modifica autenticación o autorización.
- Define una integración externa.
- Establece un patrón de desarrollo duradero.
- Afecta significativamente a seguridad o privacidad.
- Cambia la organización de módulos.
- Define una fuente única de verdad.
- Descarta una alternativa relevante.
- Implica un coste de reversión elevado.
- Afectará a futuras funcionalidades.

---

# 4. Qué no debe registrarse como ADR

No debe crearse un ADR para:

- Correcciones ortográficas.
- Ajustes pequeños de estilos.
- Cambios menores de espaciado.
- Sustitución de un icono.
- Cambios triviales de nombres.
- Tareas pendientes.
- Errores puntuales.
- Cada commit.
- Cada actualización del changelog.
- Preferencias temporales sin impacto duradero.

Estos elementos pueden registrarse, según corresponda, en:

- `CHANGELOG.md`.
- `AI_CONTEXT.md`.
- Issues.
- Notas de trabajo.
- Historial Git.

---

# 5. Estados permitidos

Cada ADR debe utilizar uno de estos estados:

## Propuesta

La decisión está planteada, pero todavía no está aprobada.

## Aceptada

La decisión ha sido aprobada y debe aplicarse.

## En revisión

La decisión sigue vigente, pero está siendo reconsiderada.

## Sustituida

La decisión ya no se aplica y ha sido reemplazada por otro ADR.

## Rechazada

La propuesta fue evaluada y finalmente descartada.

## Obsoleta

La decisión dejó de ser relevante por la evolución del proyecto.

---

# 6. Numeración

Los ADR deben numerarse de forma correlativa:

```text
ADR-001
ADR-002
ADR-003
ADR-004
```

Los números no deben reutilizarse.

Si un ADR se elimina durante su fase de borrador, debe evitarse renumerar decisiones ya compartidas o publicadas.

---

# 7. Formato obligatorio

Cada decisión debe utilizar esta estructura:

```markdown
# ADR-XXX — Título

**Estado:** Propuesta | Aceptada | En revisión | Sustituida | Rechazada | Obsoleta
**Fecha:** AAAA-MM-DD
**Responsables:** Persona, equipo o rol
**Sustituye a:** ADR-XXX o No aplica
**Sustituida por:** ADR-XXX o No aplica

## Contexto

Situación o problema que requiere una decisión.

## Fuerzas y restricciones

Condiciones que influyen en la decisión.

## Opciones consideradas

### Opción A

Descripción.

**Ventajas:**

- Ventaja.

**Inconvenientes:**

- Inconveniente.

### Opción B

Descripción.

**Ventajas:**

- Ventaja.

**Inconvenientes:**

- Inconveniente.

## Decisión

Opción seleccionada y alcance exacto.

## Motivos

Razones principales que justifican la elección.

## Consecuencias positivas

- Beneficio.

## Consecuencias negativas y riesgos

- Coste, limitación o riesgo.

## Medidas de mitigación

- Cómo se controlarán las consecuencias negativas.

## Impacto

### Código

Archivos, capas o módulos afectados.

### Seguridad y privacidad

Impacto o ausencia de impacto.

### Operación y mantenimiento

Consecuencias para despliegue, soporte o documentación.

## Criterios de revisión

Situaciones que obligarían a revisar la decisión.

## Referencias

- Documentos.
- Pull requests.
- Commits.
- Issues.
- Fuentes relevantes.
```

Las secciones que realmente no apliquen pueden indicarse como:

```text
No aplica.
```

No deben eliminarse sin motivo, porque la estructura ayuda a revisar la decisión completa.

---

# 8. Índice de decisiones

| ADR | Decisión | Estado | Fecha |
|---|---|---:|---:|
| ADR-001 | Utilizar Laravel como núcleo del backend | Aceptada | 2026-07-30 |
| ADR-002 | Utilizar React e Inertia para la interfaz | Aceptada | 2026-07-30 |
| ADR-003 | Construir la portada mediante componentes independientes | Aceptada | 2026-08-03 |
| ADR-004 | No publicar información empresarial no verificada | Aceptada | 2026-08-03 |
| ADR-005 | Adoptar documentación raíz con responsabilidades separadas | Aceptada | 2026-08-04 |
| ADR-006 | Aplicar Security by Design y Privacy by Design | Aceptada | 2026-08-04 |
| ADR-007 | Mantener el backend como fuente de verdad | Aceptada | 2026-08-04 |
| ADR-008 | Centralizar los datos corporativos | Propuesta | 2026-08-04 |

---

# ADR-001 — Utilizar Laravel como núcleo del backend

**Estado:** Aceptada
**Fecha:** 2026-07-30
**Responsables:** Responsable del proyecto
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

IDH Sistemas de Gestión necesita inicialmente una web corporativa, pero la evolución prevista contempla formularios, administración, autenticación, gestión documental, clientes, formación, auditorías e integraciones.

Una solución exclusivamente estática podría cubrir la primera portada, pero obligaría a introducir posteriormente una segunda plataforma o reconstruir el proyecto cuando aparecieran necesidades privadas y administrativas.

## Fuerzas y restricciones

- El proyecto debe crecer por fases.
- Debe existir una base segura para funcionalidades privadas.
- Se requiere un ecosistema mantenido.
- El backend debe permitir validación, autorización, colas, correo, almacenamiento y base de datos.
- El proyecto debe resultar comprensible y mantenible.
- Debe facilitar el trabajo asistido por IA.

## Opciones consideradas

### Opción A — Sitio estático

**Ventajas:**

- Menor complejidad inicial.
- Despliegue sencillo.
- Buen rendimiento para contenido fijo.

**Inconvenientes:**

- Limitaciones para administración y lógica de negocio.
- Posible reconstrucción futura.
- Gestión adicional para formularios e información privada.

### Opción B — WordPress

**Ventajas:**

- Gestión de contenidos disponible desde el inicio.
- Ecosistema amplio.
- Puesta en marcha rápida.

**Inconvenientes:**

- Mayor dependencia de plugins.
- Menor control sobre una futura plataforma a medida.
- Riesgo de acoplar el crecimiento a estructuras no diseñadas para los módulos previstos.

### Opción C — Laravel

**Ventajas:**

- Base sólida para aplicación web completa.
- Autenticación, validación, autorización y almacenamiento integrables.
- Arquitectura preparada para crecer.
- Ecosistema maduro.
- Buena capacidad de pruebas.

**Inconvenientes:**

- Mayor complejidad inicial que un sitio estático.
- Requiere despliegue y mantenimiento de backend.
- Exige disciplina arquitectónica.

## Decisión

Utilizar Laravel como núcleo del backend y base de evolución de la plataforma.

La web pública y los módulos futuros deben desarrollarse dentro del mismo proyecto mientras esta solución siga siendo adecuada.

## Motivos

Laravel permite comenzar con una web corporativa y evolucionar progresivamente sin reconstruir el sistema desde cero.

También proporciona mecanismos oficiales para:

- Validación.
- Autorización.
- Seguridad.
- Bases de datos.
- Archivos.
- Colas.
- Correo.
- Pruebas.
- Mantenimiento.

## Consecuencias positivas

- Base preparada para funcionalidades futuras.
- Unificación del proyecto público y privado.
- Uso de convenciones ampliamente conocidas.
- Mayor capacidad de automatización y pruebas.
- Integración natural con Inertia.

## Consecuencias negativas y riesgos

- Mayor complejidad operativa.
- Necesidad de mantener PHP, Composer y servidor.
- Posibilidad de introducir capas innecesarias.

## Medidas de mitigación

- Desarrollo incremental.
- Evitar abstracciones prematuras.
- Mantener la documentación actualizada.
- Utilizar funcionalidades oficiales antes de crear soluciones propias.

## Impacto

### Código

Afecta a toda la estructura backend, rutas, configuración y despliegue.

### Seguridad y privacidad

Permite centralizar validación, autorización y tratamiento seguro de datos en el servidor.

### Operación y mantenimiento

Requiere entornos compatibles con PHP y Laravel, gestión de dependencias y procesos de despliegue controlados.

## Criterios de revisión

Revisar si:

- Laravel deja de cubrir necesidades fundamentales.
- Aparecen limitaciones de escala demostradas.
- La arquitectura evoluciona hacia servicios independientes justificados.
- El coste de mantenimiento supera de forma clara sus beneficios.

## Referencias

- `ARCHITECTURE.md`
- `PROJECT_VISION.md`
- `README.md`

---

# ADR-002 — Utilizar React e Inertia para la interfaz

**Estado:** Aceptada
**Fecha:** 2026-07-30
**Responsables:** Responsable del proyecto
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

La plataforma necesita una interfaz moderna, reutilizable y preparada para incorporar interactividad sin separar inicialmente el frontend y el backend en dos aplicaciones independientes.

## Fuerzas y restricciones

- Mantener Laravel como núcleo.
- Crear componentes reutilizables.
- Evitar una API completa cuando no sea necesaria.
- Permitir navegación y formularios dinámicos.
- Utilizar TypeScript.
- Mantener compatibilidad con SSR.

## Opciones consideradas

### Opción A — Blade

**Ventajas:**

- Integración directa con Laravel.
- Menor complejidad.
- Buen rendimiento para páginas simples.

**Inconvenientes:**

- Menor comodidad para interfaces altamente interactivas.
- Reutilización y estado frontend menos estructurados para la evolución prevista.

### Opción B — React separado mediante API

**Ventajas:**

- Separación completa.
- Frontend desplegable de forma independiente.
- Reutilización potencial de API.

**Inconvenientes:**

- Mayor complejidad.
- Autenticación y despliegue duplicados.
- API completa antes de que exista una necesidad real.

### Opción C — React con Inertia

**Ventajas:**

- Componentes React.
- Tipado con TypeScript.
- Integración directa con Laravel.
- Menor necesidad de API interna.
- Navegación tipo SPA.
- Posibilidad de SSR.

**Inconvenientes:**

- Acoplamiento deliberado con Laravel e Inertia.
- Necesidad de mantener compatibilidad SSR.
- Curva de aprendizaje adicional.

## Decisión

Utilizar React y TypeScript mediante Inertia como arquitectura frontend principal.

## Motivos

La combinación ofrece la interactividad y modularidad de React sin obligar a construir una arquitectura API independiente antes de necesitarla.

## Consecuencias positivas

- Componentes reutilizables.
- Tipado estático.
- Integración fluida con Laravel.
- Navegación dinámica.
- Base adecuada para futuras áreas privadas.

## Consecuencias negativas y riesgos

- Dependencia de Inertia.
- Necesidad de evitar APIs del navegador durante SSR.
- Complejidad superior a una solución Blade sencilla.

## Medidas de mitigación

- Mantener componentes pequeños.
- Documentar convenciones SSR.
- Evitar lógica de negocio en React.
- Mantener Laravel como fuente de verdad.

## Impacto

### Código

Afecta principalmente a `resources/js/`, páginas Inertia y controladores que entregan props.

### Seguridad y privacidad

El frontend solo debe recibir los datos mínimos necesarios. La autorización permanece en Laravel.

### Operación y mantenimiento

Requiere Node.js, npm, Vite y proceso de build.

## Criterios de revisión

Revisar si:

- Una parte del sistema necesita una API pública independiente.
- Aparecen clientes móviles con requisitos propios.
- Inertia limita una necesidad confirmada.
- El coste de SSR deja de estar justificado.

## Referencias

- `ARCHITECTURE.md`
- `CODEX_RULES.md`

---

# ADR-003 — Construir la portada mediante componentes independientes

**Estado:** Aceptada
**Fecha:** 2026-08-03
**Responsables:** Responsable del proyecto
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

La portada contiene numerosas secciones corporativas. Concentrarlas en `welcome.tsx` produciría un archivo grande, difícil de revisar, mantener y ampliar.

## Fuerzas y restricciones

- La portada debe crecer progresivamente.
- El responsable prefiere trabajar un archivo cada vez.
- Las secciones necesitan revisión visual independiente.
- Debe evitarse duplicar estilos y lógica.
- `welcome.tsx` debe resultar fácil de comprender.

## Opciones consideradas

### Opción A — Toda la portada en `welcome.tsx`

**Ventajas:**

- Menos archivos.
- Acceso inmediato a todo el contenido.

**Inconvenientes:**

- Archivo excesivamente grande.
- Mayor riesgo de errores.
- Difícil mantenimiento.
- Peor reutilización.

### Opción B — Componentes independientes

**Ventajas:**

- Responsabilidades claras.
- Mejor legibilidad.
- Revisión por secciones.
- Reutilización futura.
- Cambios más controlados.

**Inconvenientes:**

- Mayor número de archivos.
- Requiere mantener importaciones y exportaciones correctas.

## Decisión

Cada sección principal de la portada debe mantenerse como componente independiente dentro de:

```text
resources/js/components/home/
```

`welcome.tsx` debe actuar principalmente como compositor y definir el orden de las secciones.

## Motivos

Esta estructura facilita el desarrollo incremental, la revisión visual y la colaboración con herramientas de IA.

## Consecuencias positivas

- Archivos más pequeños.
- Cambios localizados.
- Menor riesgo de regresión.
- Mejor organización.
- Posibilidad de reutilización.

## Consecuencias negativas y riesgos

- Errores de importación.
- Inconsistencias si se crean demasiados componentes triviales.
- Mayor necesidad de convenciones de nombres.

## Medidas de mitigación

- Utilizar PascalCase.
- Utilizar el alias `@/`.
- Verificar exportaciones.
- No crear componentes sin responsabilidad real.
- Mantener documentado el orden de la portada.

## Impacto

### Código

Afecta a `resources/js/pages/welcome.tsx` y `resources/js/components/home/`.

### Seguridad y privacidad

No genera impacto directo.

### Operación y mantenimiento

Mejora el mantenimiento y la localización de cambios.

## Criterios de revisión

Revisar si la portada evoluciona a una composición gestionada dinámicamente mediante CMS.

## Referencias

- `ARCHITECTURE.md`
- `AI_CONTEXT.md`

---

# ADR-004 — No publicar información empresarial no verificada

**Estado:** Aceptada
**Fecha:** 2026-08-03
**Responsables:** Responsable del proyecto
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

Varias secciones de la portada necesitan clientes, testimonios, estadísticas, certificaciones, ubicaciones y resultados. Parte de esta información todavía no está confirmada o autorizada.

Completar visualmente estas secciones con datos ficticios podría transmitir una imagen más completa, pero introduciría información falsa.

## Fuerzas y restricciones

- La plataforma debe transmitir transparencia.
- No deben realizarse afirmaciones comerciales engañosas.
- Los testimonios requieren veracidad y autorización.
- Los logotipos de clientes pueden estar protegidos.
- Las cifras deben disponer de fuente.
- Debe distinguirse consultoría de certificación o acreditación.

## Opciones consideradas

### Opción A — Utilizar contenido ficticio temporal

**Ventajas:**

- Diseño visual completo.
- Facilita la presentación inicial.

**Inconvenientes:**

- Riesgo de publicarlo por error.
- Daño reputacional.
- Falta de transparencia.
- Posibles conflictos legales o comerciales.

### Opción B — Ocultar todas las secciones pendientes

**Ventajas:**

- Evita publicar información incorrecta.

**Inconvenientes:**

- Dificulta preparar y revisar la estructura visual.

### Opción C — Preparar la estructura sin presentar datos ficticios como reales

**Ventajas:**

- Permite desarrollar el diseño.
- Mantiene transparencia.
- Facilita completar contenido posteriormente.

**Inconvenientes:**

- Algunas secciones pueden permanecer incompletas temporalmente.
- Requiere controlar bien el contenido provisional.

## Decisión

No publicar datos empresariales no confirmados.

Las secciones pueden prepararse visualmente, permanecer ocultas o utilizar mensajes neutros, pero nunca deben presentar como reales:

- Clientes.
- Testimonios.
- Estadísticas.
- Certificaciones.
- Acreditaciones.
- Sedes.
- Personal.
- Casos de éxito.
- Resultados.

## Motivos

La confianza y transparencia tienen prioridad sobre la apariencia de completitud.

## Consecuencias positivas

- Mayor credibilidad.
- Menor riesgo reputacional.
- Menor riesgo legal.
- Contenido más fiable.
- Coherencia con la visión del proyecto.

## Consecuencias negativas y riesgos

- Secciones temporalmente incompletas.
- Necesidad de validación empresarial antes de publicar.
- Mayor duración del proceso de contenidos.

## Medidas de mitigación

- Mantener listas de información pendiente.
- Preparar componentes sin afirmaciones falsas.
- Solicitar autorización.
- Registrar fuente y vigencia de datos.

## Impacto

### Código

Afecta al contenido de `Clients.tsx`, `Testimonials.tsx`, `Stats.tsx`, `IsoStandards.tsx` y futuras páginas corporativas.

### Seguridad y privacidad

Reduce el riesgo de publicar datos o relaciones no autorizadas.

### Operación y mantenimiento

Obliga a incorporar un proceso de revisión de contenidos.

## Criterios de revisión

No se prevé revertir esta decisión. Solo deben definirse procedimientos más concretos de aprobación.

## Referencias

- `PROJECT_VISION.md`
- `AI_CONTEXT.md`
- `CODEX_RULES.md`

---

# ADR-005 — Adoptar documentación raíz con responsabilidades separadas

**Estado:** Aceptada
**Fecha:** 2026-08-04
**Responsables:** Responsable del proyecto
**Sustituye a:** Documentación inicial sin separación estricta
**Sustituida por:** No aplica

## Contexto

La primera documentación del proyecto mezclaba visión, reglas, arquitectura, seguridad, historial y contexto operativo.

La duplicación dificultaba saber qué archivo debía actualizarse y podía generar contradicciones.

## Fuerzas y restricciones

- El proyecto debe ser comprensible por personas e IA.
- La documentación debe mantenerse durante años.
- El contexto no debe depender de conversaciones.
- Deben reducirse duplicidades.
- Cada cambio debe tener un lugar claro donde documentarse.

## Opciones consideradas

### Opción A — Un único documento extenso

**Ventajas:**

- Toda la información en un solo lugar.

**Inconvenientes:**

- Difícil mantenimiento.
- Mezcla de responsabilidades.
- Mayor riesgo de contradicción.
- Lectura lenta.

### Opción B — Muchos documentos sin responsabilidad definida

**Ventajas:**

- Separación aparente.

**Inconvenientes:**

- Información duplicada.
- Dificultad para decidir qué actualizar.
- Inconsistencias.

### Opción C — Documentos con una responsabilidad única

**Ventajas:**

- Mayor claridad.
- Mejor mantenimiento.
- Lectura selectiva.
- Mejor uso por herramientas de IA.
- Menor duplicidad.

**Inconvenientes:**

- Requiere disciplina.
- Algunos cambios afectan a varios documentos.

## Decisión

Mantener la siguiente estructura:

| Documento | Responsabilidad |
|---|---|
| `README.md` | Instalación y puesta en marcha |
| `PROJECT_VISION.md` | Propósito y dirección |
| `ARCHITECTURE.md` | Estructura técnica |
| `SECURITY.md` | Seguridad y privacidad |
| `CODEX_RULES.md` | Normas de trabajo |
| `AI_CONTEXT.md` | Memoria operativa |
| `CHANGELOG.md` | Historial de cambios |
| `DECISIONS.md` | Decisiones y motivos |

## Motivos

La separación mejora la comprensión, reduce contradicciones y permite que personas e IA consulten solo la información necesaria.

## Consecuencias positivas

- Documentación más clara.
- Menor duplicación.
- Mejor incorporación de nuevos colaboradores.
- Contexto persistente para IA.
- Actualizaciones más controladas.

## Consecuencias negativas y riesgos

- Requiere mantener varios archivos.
- Puede aparecer duplicidad si no se respetan los límites.
- Aumenta el trabajo documental inicial.

## Medidas de mitigación

- Incluir referencias cruzadas.
- Definir la responsabilidad al inicio de cada documento.
- Revisar documentación en cambios importantes.
- Evitar copiar secciones completas entre archivos.

## Impacto

### Código

No genera impacto directo sobre ejecución.

### Seguridad y privacidad

Mejora la conservación de normas y decisiones de seguridad.

### Operación y mantenimiento

Establece un flujo documental obligatorio.

## Criterios de revisión

Revisar si el proyecto crece lo suficiente para trasladar ADR y documentación especializada a una carpeta `docs/`.

## Referencias

- Todos los documentos raíz.
- `CHANGELOG.md`

---

# ADR-006 — Aplicar Security by Design y Privacy by Design

**Estado:** Aceptada
**Fecha:** 2026-08-04
**Responsables:** Responsable del proyecto
**Sustituye a:** Política inicial de seguridad básica
**Sustituida por:** No aplica

## Contexto

La evolución prevista incluye formularios, usuarios, documentos, administración e integraciones. Añadir seguridad después de implementar estos módulos aumentaría el riesgo y el coste de corrección.

## Fuerzas y restricciones

- La plataforma puede tratar datos personales y empresariales.
- Los documentos futuros pueden ser confidenciales.
- Existen integraciones potenciales con terceros.
- La confianza es un valor esencial de IDH.
- El proyecto debe minimizar datos y accesos.

## Opciones consideradas

### Opción A — Incorporar seguridad al finalizar cada módulo

**Ventajas:**

- Desarrollo inicial aparentemente más rápido.

**Inconvenientes:**

- Controles tardíos.
- Mayor coste.
- Riesgo de arquitectura insegura.
- Posibles datos innecesarios ya almacenados.

### Opción B — Integrar seguridad y privacidad desde el diseño

**Ventajas:**

- Menor superficie de exposición.
- Controles coherentes.
- Minimización de datos.
- Menor coste de corrección futura.

**Inconvenientes:**

- Requiere análisis previo.
- Puede aumentar el tiempo inicial de algunas tareas.

## Decisión

Toda nueva funcionalidad debe diseñarse siguiendo:

- Security by Design.
- Privacy by Design.
- Secure by Default.
- Mínimo privilegio.
- Defensa en profundidad.
- Minimización de datos.
- Fail Secure.

## Motivos

La seguridad y privacidad deben formar parte de la arquitectura y no actuar como correcciones posteriores.

## Consecuencias positivas

- Menor riesgo.
- Mejor protección de información.
- Mejor trazabilidad.
- Mayor confianza.
- Base más sólida para módulos privados.

## Consecuencias negativas y riesgos

- Mayor esfuerzo de análisis.
- Necesidad de pruebas y documentación adicionales.
- Posible ralentización de cambios rápidos.

## Medidas de mitigación

- Aplicar análisis proporcional al riesgo.
- Utilizar controles oficiales de Laravel.
- Mantener checklists claros.
- Evitar procesos pesados para cambios triviales.

## Impacto

### Código

Afecta a formularios, autenticación, autorización, archivos, APIs, sesiones e integraciones.

### Seguridad y privacidad

Constituye la decisión central de la postura de seguridad del proyecto.

### Operación y mantenimiento

Requiere revisiones, copias verificadas, monitorización y gestión de incidentes proporcional.

## Criterios de revisión

La decisión no debe rebajarse. Puede ampliarse con controles nuevos o estándares específicos.

## Referencias

- `SECURITY.md`
- `CODEX_RULES.md`
- `ARCHITECTURE.md`

---

# ADR-007 — Mantener el backend como fuente de verdad

**Estado:** Aceptada
**Fecha:** 2026-08-04
**Responsables:** Responsable del proyecto
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

React puede mostrar, ocultar y validar elementos, pero el navegador está bajo control del usuario y sus peticiones pueden modificarse.

Permitir que el frontend decida permisos, estados críticos o reglas de negocio crearía vulnerabilidades e inconsistencias.

## Fuerzas y restricciones

- El proyecto utiliza React.
- Habrá futuras acciones privadas.
- El navegador no es un entorno confiable.
- Se necesita una única interpretación de las reglas.
- Debe evitarse duplicar lógica sensible.

## Opciones consideradas

### Opción A — Reglas repartidas entre frontend y backend

**Ventajas:**

- Respuesta visual rápida.
- Parte de la lógica cerca de la interfaz.

**Inconvenientes:**

- Duplicación.
- Inconsistencias.
- Riesgo de seguridad.
- Mayor dificultad de mantenimiento.

### Opción B — Backend como fuente de verdad y frontend como ayuda de experiencia

**Ventajas:**

- Autorización real en servidor.
- Reglas consistentes.
- Mayor seguridad.
- Mejor capacidad de pruebas.

**Inconvenientes:**

- Algunas reglas deben representarse también en frontend para mejorar UX.
- Puede requerir props adicionales.

## Decisión

Laravel será la fuente de verdad para:

- Autorización.
- Validación definitiva.
- Permisos.
- Estados críticos.
- Acceso a archivos.
- Reglas de negocio.
- Datos financieros.
- Identidad y propiedad de recursos.

React puede replicar validaciones simples para mejorar la experiencia, pero nunca sustituirá la comprobación del servidor.

## Motivos

El servidor es el único entorno controlado capaz de aplicar las reglas de forma confiable.

## Consecuencias positivas

- Menor riesgo de manipulación.
- Reglas centralizadas.
- Mejor testabilidad.
- Menor duplicación de lógica sensible.

## Consecuencias negativas y riesgos

- Mayor dependencia de respuestas del servidor.
- Necesidad de diseñar correctamente las props.
- Posible repetición de algunas validaciones de UX.

## Medidas de mitigación

- Diferenciar validación de experiencia y validación definitiva.
- Utilizar Form Requests, Policies y servicios.
- Enviar al frontend solo información necesaria.

## Impacto

### Código

Afecta a controladores, Form Requests, Policies, servicios y props Inertia.

### Seguridad y privacidad

Evita confiar en controles manipulables del navegador.

### Operación y mantenimiento

Centraliza reglas y facilita auditoría.

## Criterios de revisión

No se prevé sustituir esta decisión. Puede adaptarse si aparecen APIs o servicios independientes, manteniendo siempre una fuente confiable en servidor.

## Referencias

- `SECURITY.md`
- `ARCHITECTURE.md`
- `CODEX_RULES.md`

---

# ADR-008 — Centralizar los datos corporativos

**Estado:** Propuesta
**Fecha:** 2026-08-04
**Responsables:** Responsable del proyecto
**Sustituye a:** Datos escritos directamente en distintos componentes
**Sustituida por:** No aplica

## Contexto

Los teléfonos, correo, dirección y redes sociales pueden aparecer en:

- Header.
- Contacto.
- Footer.
- Metadatos.
- Páginas futuras.

Mantenerlos manualmente en múltiples archivos genera riesgo de inconsistencias.

## Fuerzas y restricciones

- Los datos deben actualizarse con facilidad.
- La solución actual todavía es principalmente estática.
- No se debe crear un panel administrativo antes de necesitarlo.
- Debe existir una fuente única de verdad.
- Algunos datos pueden requerir traducción o vigencia temporal.

## Opciones consideradas

### Opción A — Mantener datos en cada componente

**Ventajas:**

- Solución inmediata.
- Sin configuración adicional.

**Inconvenientes:**

- Duplicación.
- Riesgo de datos distintos.
- Actualización más lenta.
- Mayor probabilidad de errores.

### Opción B — Archivo frontend compartido

Ejemplo:

```text
resources/js/data/company.ts
```

**Ventajas:**

- Fácil uso en React.
- Tipado con TypeScript.
- Implementación sencilla.

**Inconvenientes:**

- No disponible directamente para backend.
- Los datos públicos quedan incluidos en el bundle.
- Puede duplicarse si Laravel también los necesita.

### Opción C — Configuración Laravel

Ejemplo:

```text
config/idh.php
```

**Ventajas:**

- Disponible en backend.
- Puede enviarse selectivamente a Inertia.
- Permite valores por entorno cuando sea necesario.
- Fuente única de verdad.

**Inconvenientes:**

- Requiere definir cómo compartir los datos con React.
- No es adecuada como CMS completo.

### Opción D — Base de datos administrable

**Ventajas:**

- Edición desde panel.
- Gestión de vigencia.
- Posible historial.

**Inconvenientes:**

- Complejidad prematura.
- Requiere panel, permisos y migraciones.
- Mantenimiento adicional.

## Decisión propuesta

Adoptar inicialmente una configuración centralizada de Laravel, previsiblemente:

```text
config/idh.php
```

Compartir con React únicamente los datos públicos necesarios mediante props o una configuración común controlada.

No implementar todavía una base de datos administrable salvo que aparezca una necesidad empresarial real.

## Motivos

La configuración proporciona una fuente única de verdad sin introducir prematuramente un CMS.

## Consecuencias positivas

- Menor duplicación.
- Actualizaciones coherentes.
- Datos reutilizables por backend y frontend.
- Evolución sencilla hacia una fuente administrable.

## Consecuencias negativas y riesgos

- Requiere una pequeña capa de exposición hacia Inertia.
- Los cambios necesitan despliegue.
- No ofrece historial ni administración visual.

## Medidas de mitigación

- Definir tipos de TypeScript.
- Exponer solo datos públicos.
- Documentar cada campo.
- Revisar la decisión cuando exista panel administrativo.

## Impacto

### Código

Podría afectar a:

- `config/idh.php`
- Middleware de Inertia.
- Tipos compartidos.
- Header.
- Contact.
- Footer.
- Metadatos.

### Seguridad y privacidad

Solo deben centralizarse y exponerse datos corporativos públicos. Los secretos seguirán en variables de entorno.

### Operación y mantenimiento

Simplifica actualizaciones, aunque cada cambio requiere despliegue.

## Criterios de revisión

Revisar cuando:

- Se implemente un panel administrativo.
- Los datos necesiten edición frecuente.
- Existan múltiples idiomas.
- Se requiera historial o programación de cambios.
- Aparezcan distintas sedes confirmadas.

## Referencias

- `AI_CONTEXT.md`
- `ARCHITECTURE.md`
- `PROJECT_VISION.md`

---

# 9. Plantilla para nuevas decisiones

Copia esta plantilla al final del documento:

```markdown
# ADR-XXX — Título de la decisión

**Estado:** Propuesta
**Fecha:** AAAA-MM-DD
**Responsables:**
**Sustituye a:** No aplica
**Sustituida por:** No aplica

## Contexto

¿Qué problema o necesidad requiere una decisión?

## Fuerzas y restricciones

- Condición relevante.

## Opciones consideradas

### Opción A — Nombre

Descripción.

**Ventajas:**

- Ventaja.

**Inconvenientes:**

- Inconveniente.

### Opción B — Nombre

Descripción.

**Ventajas:**

- Ventaja.

**Inconvenientes:**

- Inconveniente.

## Decisión

Opción elegida y alcance.

## Motivos

Razones de la elección.

## Consecuencias positivas

- Beneficio.

## Consecuencias negativas y riesgos

- Riesgo o coste.

## Medidas de mitigación

- Medida.

## Impacto

### Código

Descripción.

### Seguridad y privacidad

Descripción.

### Operación y mantenimiento

Descripción.

## Criterios de revisión

¿Cuándo debe reconsiderarse?

## Referencias

- `documento-o-enlace`
```

---

# 10. Procedimiento para aprobar una decisión

Para pasar un ADR de `Propuesta` a `Aceptada` debe comprobarse:

```text
[ ] El problema está claramente descrito.
[ ] Se han considerado alternativas reales.
[ ] La opción elegida está delimitada.
[ ] Se han identificado consecuencias negativas.
[ ] Se ha revisado seguridad y privacidad.
[ ] Se ha evaluado el coste de mantenimiento.
[ ] Se han definido criterios de revisión.
[ ] La decisión no contradice otra vigente.
[ ] El índice del documento está actualizado.
[ ] La documentación relacionada se actualizará.
```

---

# 11. Procedimiento para sustituir una decisión

Cuando una nueva decisión reemplace a otra:

1. Crear un nuevo ADR.
2. Indicar en el nuevo ADR qué decisión sustituye.
3. Cambiar el ADR anterior a `Sustituida`.
4. Añadir el número del nuevo ADR en `Sustituida por`.
5. Actualizar el índice.
6. No borrar el ADR anterior.
7. Actualizar arquitectura, seguridad o contexto cuando corresponda.

Ejemplo:

```text
ADR-008
Estado: Sustituida
Sustituida por: ADR-014
```

---

# 12. Relación con otros documentos

| Documento | Pregunta que responde |
|---|---|
| `README.md` | ¿Cómo se instala y ejecuta? |
| `PROJECT_VISION.md` | ¿Por qué existe y hacia dónde va? |
| `ARCHITECTURE.md` | ¿Cómo está construido? |
| `SECURITY.md` | ¿Cómo se protege? |
| `CODEX_RULES.md` | ¿Cómo debe trabajarse? |
| `AI_CONTEXT.md` | ¿Qué debe recordarse operativamente? |
| `CHANGELOG.md` | ¿Qué cambió? |
| `DECISIONS.md` | ¿Por qué se eligió una solución? |

---

# 13. Principio final

Las decisiones importantes no deben quedar únicamente en:

- Conversaciones.
- Memoria.
- Mensajes de commit.
- Comentarios de código.
- Chats con Inteligencia Artificial.

Toda decisión con impacto duradero debe quedar registrada de forma comprensible, honesta y revisable.

El objetivo no es justificar retrospectivamente cualquier elección.

El objetivo es permitir que una persona o una IA futura comprenda:

> Qué sabíamos, qué alternativas teníamos y por qué elegimos ese camino.