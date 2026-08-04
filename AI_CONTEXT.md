# AI_CONTEXT.md

# Memoria Operativa para Inteligencia Artificial
## IDH Sistemas de Gestión

Versión del documento: 2.0
Estado: Documento vivo
Responsable de actualización: Equipo del proyecto
Última revisión: 2026-08-04

---

# 1. Finalidad del documento

Este archivo contiene el contexto operativo que necesita una herramienta de Inteligencia Artificial para trabajar en el proyecto **IDH Sistemas de Gestión** como si conociera su historia, sus decisiones, sus prioridades y su forma de trabajo.

Su función no es sustituir al resto de documentación.

Este archivo debe concentrarse en:

- Estado actual del proyecto.
- Conocimiento empresarial confirmado.
- Preferencias del responsable.
- Decisiones temporales.
- Errores ya encontrados.
- Lecciones aprendidas.
- Convenciones operativas.
- Riesgos conocidos.
- Pendientes.
- Información que todavía debe verificarse.
- Contexto acumulado durante el desarrollo.

Para otras materias deben consultarse:

- `README.md` → instalación y puesta en marcha.
- `PROJECT_VISION.md` → propósito y dirección estratégica.
- `ARCHITECTURE.md` → estructura técnica del sistema.
- `SECURITY.md` → política de seguridad.
- `CODEX_RULES.md` → normas obligatorias de trabajo.
- `CHANGELOG.md` → cambios realizados.
- `DECISIONS.md` → decisiones arquitectónicas y sus motivos.

---

# 2. Instrucciones para cualquier IA

Antes de modificar código, una IA debe:

1. Leer este archivo completo.
2. Leer `CODEX_RULES.md`.
3. Revisar `ARCHITECTURE.md`.
4. Consultar `SECURITY.md` si el cambio afecta a datos, usuarios, formularios, autenticación, archivos o integraciones.
5. Leer el archivo completo que se va a modificar.
6. Revisar componentes, rutas, modelos o controladores relacionados.
7. Comprobar el estado real del proyecto en el código.
8. No asumir que una idea futura ya está implementada.
9. No inventar datos.
10. Aplicar el cambio mínimo necesario.
11. Validar el resultado.
12. Actualizar la documentación correspondiente.

La documentación sirve como guía, pero el código actual es la fuente técnica de verdad.

Si existe una contradicción entre este archivo y el código:

- No se debe adivinar.
- Se debe indicar la discrepancia.
- Se debe revisar el historial.
- Se debe pedir confirmación cuando la diferencia afecte a decisiones importantes.

---

# 3. Identificación del proyecto

**Nombre:** IDH Sistemas de Gestión
**Tipo actual:** Aplicación web corporativa
**Evolución prevista:** Plataforma digital de servicios, gestión y acompañamiento profesional
**Organización:** IDH Sistemas de Gestión
**Ubicación principal conocida:** Bogotá D. C., Colombia
**Repositorio:** `ArrowZealousAMR/idh-sistemas`

El proyecto sustituye progresivamente la presencia web anterior construida en Wix.

La nueva plataforma debe ser:

- Moderna.
- Profesional.
- Segura.
- Transparente.
- Accesible.
- Responsive.
- Escalable.
- Fácil de mantener.
- Preparada para crecer por módulos.

---

# 4. Qué es IDH Sistemas de Gestión

IDH Sistemas de Gestión acompaña a organizaciones, empresas, instituciones y profesionales en la implementación, evaluación, mantenimiento y mejora de sistemas de gestión, procesos y estrategias.

La identidad corporativa se expresa mediante el lema:

> Soluciones · Innovación · Gestión del Riesgo

Ámbitos de trabajo conocidos:

- Sistemas de gestión.
- Gestión del riesgo.
- Consultoría.
- Formación.
- Auditoría y evaluación.
- Mejora continua.
- Calidad.
- Seguridad y salud en el trabajo.
- Gestión ambiental.
- Sostenibilidad.
- Seguridad de la información.
- Acompañamiento técnico.
- Evaluación organizacional.

Esta lista describe ámbitos mencionados durante el desarrollo.

Antes de publicar una afirmación comercial concreta debe comprobarse:

- Que el servicio está vigente.
- Que IDH lo ofrece directamente.
- Que el texto ha sido aprobado.
- Que no se confunde asesoría con certificación o acreditación.

---

# 5. Propósito actual del proyecto

La prioridad actual es consolidar una web pública que permita a cualquier visitante:

1. Comprender qué hace IDH.
2. Identificar los servicios principales.
3. Reconocer los sectores atendidos.
4. Conocer las normas y sistemas de gestión relacionados.
5. Entender la metodología de trabajo.
6. Percibir profesionalidad y confianza.
7. Localizar los datos de contacto.
8. Contactar fácilmente.

La prioridad inmediata no es construir todos los módulos futuros.

Primero debe consolidarse:

- Portada.
- Navegación.
- Contenido.
- Responsive.
- Accesibilidad.
- Rendimiento.
- SEO.
- Páginas legales.
- Formulario de contacto seguro.

---

# 6. Estado funcional actual

La portada corporativa ya dispone de una estructura por componentes.

Página principal:

`resources/js/pages/welcome.tsx`

Componentes actuales de la portada:

- `Hero.tsx`
- `Stats.tsx`
- `Services.tsx`
- `Sectors.tsx`
- `IsoStandards.tsx`
- `Methodology.tsx`
- `Clients.tsx`
- `Testimonials.tsx`
- `About.tsx`
- `WhyChooseUs.tsx`
- `Contact.tsx`
- `Footer.tsx`

Cabecera:

`resources/js/components/layout/header.tsx`

La composición prevista de la portada es:

1. Header.
2. Hero.
3. Stats.
4. Services.
5. Sectors.
6. IsoStandards.
7. Methodology.
8. Clients.
9. Testimonials.
10. About.
11. WhyChooseUs.
12. Contact.
13. Footer.

No debe modificarse este orden sin una razón clara de:

- Experiencia de usuario.
- Conversión.
- Narrativa.
- Accesibilidad.
- Rendimiento.
- Estrategia de contenidos.

---

# 7. Estado técnico conocido

Tecnologías principales:

- PHP.
- Laravel.
- Inertia Laravel.
- React.
- TypeScript.
- Inertia React.
- Tailwind CSS.
- Vite.
- Lucide React.
- Composer.
- npm.

El proyecto utiliza SSR mediante Vite e Inertia.

Las versiones exactas deben verificarse en:

- `composer.json`
- `composer.lock`
- `package.json`
- `package-lock.json`

No deben asumirse versiones basándose únicamente en mensajes anteriores.

Durante una clonación accidental se observó una instalación con Laravel 13, pero la IA debe comprobar siempre el proyecto activo antes de afirmarlo como estado definitivo.

---

# 8. Fuente técnica de verdad

El orden de confianza recomendado es:

1. Código actual.
2. Archivos de configuración.
3. Lock files.
4. Migraciones.
5. Tests.
6. Documentación actualizada.
7. Historial Git.
8. Conversaciones anteriores.

Las conversaciones no deben considerarse más fiables que el repositorio.

Antes de afirmar que existe una funcionalidad, comprobar:

- Archivo.
- Ruta.
- Componente.
- Modelo.
- Migración.
- Controlador.
- Test.
- Configuración.

---

# 9. Datos corporativos conocidos

## Correo electrónico

`idhcalidad@gmail.com`

## Teléfonos

- `+57 322 218 0755`
- `+57 320 847 0086`
- `+57 1 753 7547`

## Dirección conocida

Calle 25 No. 12-27, piso 3
Centro Internacional
Bogotá D. C.
Colombia

## Otras ubicaciones mencionadas

- Cali.
- Barranquilla.
- Medellín.
- Mosquera, Cundinamarca.

Estas ubicaciones no deben presentarse como sedes permanentes sin confirmar:

- Naturaleza de la presencia.
- Vigencia.
- Dirección.
- Capacidad de atención.
- Autorización de publicación.

Pueden representar cobertura, experiencia, atención o colaboración.

---

# 10. Redes sociales conocidas

Enlaces proporcionados durante el desarrollo:

## Facebook

`https://www.facebook.com/idhdesarrollosostenible/`

## LinkedIn

`https://www.linkedin.com/in/jorge-a-morales-r-b1a57043?originalSubdomain=co`

## Instagram

`https://www.instagram.com/idhsistemasdegestion`

## TikTok

`https://www.tiktok.com/@jorge.a346`

La URL proporcionada originalmente incluía parámetros de seguimiento. Para publicación debe preferirse la URL limpia.

## YouTube

`https://www.youtube.com/@idhsistemasdegestion1822`

Los enlaces deben comprobarse antes de desplegar.

Los enlaces externos que se abran en otra pestaña deben utilizar:

```html
target="_blank"
rel="noopener noreferrer"