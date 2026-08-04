# CODEX_RULES.md

# Normas obligatorias para desarrollo asistido por IA
## IDH Sistemas de Gestión

**Versión del documento:** 2.0
**Estado:** Obligatorio
**Ámbito:** Codex, ChatGPT y cualquier otra herramienta de Inteligencia Artificial
**Última revisión:** 2026-08-04

---

# 1. Finalidad del documento

Este archivo establece las reglas operativas obligatorias que debe seguir cualquier sistema de Inteligencia Artificial al analizar, modificar, ampliar, probar o documentar el proyecto **IDH Sistemas de Gestión**.

Estas normas también sirven como referencia para personas desarrolladoras.

Este documento responde a una única pregunta:

> ¿Cómo debe trabajar una IA dentro de este proyecto?

No debe utilizarse para almacenar:

- Visión empresarial.
- Descripción detallada de la arquitectura.
- Historial de cambios.
- Decisiones arquitectónicas extensas.
- Política completa de seguridad.
- Información empresarial acumulada.

Para esas materias deben consultarse:

- `README.md` → instalación y ejecución.
- `PROJECT_VISION.md` → propósito y dirección.
- `ARCHITECTURE.md` → estructura técnica.
- `SECURITY.md` → política y controles de seguridad.
- `AI_CONTEXT.md` → memoria operativa.
- `CHANGELOG.md` → cambios realizados.
- `DECISIONS.md` → decisiones y motivos.

---

# 2. Jerarquía de fuentes

Antes de tomar una decisión, la IA debe utilizar este orden de confianza:

1. Código actual.
2. Archivos de configuración.
3. Lock files.
4. Migraciones.
5. Tests.
6. Documentación raíz vigente.
7. Historial Git.
8. Conversaciones anteriores.
9. Conocimiento general de la IA.

La IA no debe asumir que una conversación antigua representa el estado actual del proyecto.

Cuando exista una contradicción entre documentación y código:

- Debe señalarse.
- Debe comprobarse el historial.
- No debe corregirse silenciosamente.
- Debe solicitarse confirmación si afecta a una decisión relevante.

---

# 3. Lecturas obligatorias antes de trabajar

Antes de realizar cambios relevantes, la IA debe revisar como mínimo:

1. `AI_CONTEXT.md`
2. `CODEX_RULES.md`
3. `ARCHITECTURE.md`
4. El archivo completo que se va a modificar
5. Los archivos relacionados directamente con la tarea

Además:

- Leer `SECURITY.md` si se tratan datos, formularios, usuarios, archivos, autenticación, sesiones, permisos, correo, APIs o integraciones.
- Leer `PROJECT_VISION.md` si el cambio afecta al producto, diseño, contenido, navegación o experiencia.
- Leer `CHANGELOG.md` si puede existir trabajo reciente relacionado.
- Leer `DECISIONS.md` si la tarea afecta a una decisión estructural.

No debe comenzarse a escribir código sin comprender el contexto mínimo necesario.

---

# 4. Principio general de intervención

La IA debe trabajar de forma:

- Incremental.
- Conservadora.
- Segura.
- Verificable.
- Reversible.
- Clara.
- Documentada.
- Compatible con la arquitectura existente.

Debe preferirse:

> La modificación mínima que resuelva completamente el problema.

No debe preferirse:

> Reescribir una parte amplia del proyecto únicamente porque otra solución parezca más elegante.

---

# 5. Prohibición de cambios innecesarios

La IA no debe modificar archivos no relacionados con la tarea.

No debe:

- Reformatear todo el proyecto sin necesidad.
- Renombrar múltiples archivos por preferencia personal.
- Cambiar tecnologías sin autorización.
- Reestructurar carpetas sin una necesidad confirmada.
- Sustituir componentes que ya funcionan.
- Cambiar contenidos empresariales no solicitados.
- Modificar estilos globales por un ajuste local.
- Alterar dependencias sin justificación.
- Introducir abstracciones prematuras.
- Refactorizar código estable durante una corrección urgente.

Si detecta mejoras adicionales, debe separarlas de la tarea actual.

---

# 6. Forma obligatoria de comenzar una tarea

Antes de implementar, la IA debe:

1. Confirmar el objetivo.
2. Identificar el archivo o módulo afectado.
3. Revisar el código completo relacionado.
4. Comprobar que está trabajando en el proyecto correcto.
5. Confirmar la estructura real.
6. Verificar versiones si son relevantes.
7. Buscar una solución ya existente.
8. Identificar posibles regresiones.
9. Revisar impactos de seguridad.
10. Revisar impactos de privacidad.
11. Revisar impactos responsive.
12. Revisar impactos de accesibilidad.
13. Definir el cambio mínimo.
14. Indicar cómo se validará.

Cuando se trabaja mediante terminal y existe riesgo de confusión de carpeta, debe comprobarse primero:

```bash
pwd
git status
```

---

# 7. Forma de comunicar el trabajo

Las explicaciones deben ser claras y accionables.

Cuando el responsable deba modificar archivos manualmente, la respuesta debe indicar:

- Nombre exacto del archivo.
- Ruta completa.
- Si debe reemplazar todo el contenido.
- Código completo.
- Cómo guardar.
- Qué comando ejecutar.
- Cómo comprobar el resultado.
- Qué error sería esperable si algo falla.

No deben utilizarse instrucciones ambiguas como:

- “Pon esto por ahí”.
- “Añádelo cerca del componente”.
- “Completa el resto”.
- “Adapta según sea necesario”.
- “Haz lo mismo en los otros archivos”.

---

# 8. Entrega de código para copiar y pegar

Cuando se solicite código completo, debe entregarse:

- Un archivo completo por bloque.
- Sin líneas omitidas.
- Sin pseudocódigo.
- Sin marcadores como `...`.
- Sin comentarios del tipo “resto del código”.
- Sin dependencias implícitas no explicadas.
- Con importaciones completas.
- Con exportaciones correctas.
- Con nombres de archivo exactos.

El bloque debe poder copiarse directamente.

Para tareas con varios archivos, deben entregarse uno por uno, salvo que el usuario solicite expresamente todos juntos.

---

# 9. Preferencias del responsable del proyecto

El responsable prefiere:

- Explicaciones paso a paso.
- Código completo.
- Una modificación cada vez.
- Validación visual antes de continuar.
- Saber qué archivo abrir.
- Saber qué comando ejecutar.
- Comprender el motivo de cada acción.
- Soluciones seguras.
- Documentación amplia.
- Arquitectura preparada para crecer.

La IA no debe dar por supuesto conocimiento avanzado de:

- Laravel.
- React.
- TypeScript.
- Git.
- Terminal.
- Bases de datos.
- Servidores.
- Seguridad.
- Despliegue.

---

# 10. Normas para comandos de terminal

Antes de proporcionar un comando, la IA debe evaluar:

- En qué carpeta se ejecutará.
- Qué archivos modifica.
- Si elimina datos.
- Si afecta a Git.
- Si cambia dependencias.
- Si afecta a la base de datos.
- Si sobrescribe configuraciones.
- Si requiere permisos.
- Si actúa en local o producción.
- Si puede revertirse.

Los comandos deben entregarse en el orden exacto.

Cuando sea necesario, deben separarse en pasos verificables.

---

# 11. Comandos peligrosos

Los siguientes comandos o equivalentes requieren una justificación clara y confirmación explícita:

```bash
rm -rf
git reset --hard
git clean -fd
git push --force
php artisan migrate:fresh
php artisan migrate:reset
php artisan db:wipe
php artisan storage:unlink
composer update
npm audit fix --force
```

También requieren precaución:

- Eliminación de carpetas.
- Sobrescritura de `.env`.
- Modificación masiva de nombres.
- Reemplazos globales.
- Cambios en bases de datos.
- Cambios en producción.
- Alteración de permisos.
- Eliminación de archivos públicos.

La IA no debe sugerir un comando destructivo como primera solución.

---

# 12. Prohibición de clonado accidental

Antes de indicar:

```bash
git clone
```

la IA debe confirmar que el usuario no está ya dentro del repositorio.

Debe solicitar o comprobar:

```bash
pwd
git status
ls -la
```

Nunca debe provocar una estructura como:

```text
idh-sistemas/idh-sistemas/
```

Las instrucciones de clonación son únicamente para instalaciones nuevas.

---

# 13. Gestión de Git

Antes de preparar un commit, debe revisarse:

```bash
git status
```

Cuando sea necesario:

```bash
git diff
git diff --staged
```

La IA debe evitar recomendar directamente:

```bash
git add .
```

si no se ha comprobado qué archivos incluye.

Los commits deben:

- Tener un objetivo claro.
- No mezclar tareas sin relación.
- No incluir secretos.
- No incluir `.env`.
- No incluir archivos temporales.
- No incluir datos privados.
- No incluir copias accidentales del repositorio.

Ejemplos de mensajes adecuados:

```text
docs: actualizar arquitectura del proyecto
feat: añadir formulario de contacto
fix: corregir importación de IsoStandards
refactor: centralizar datos corporativos
security: limitar envíos del formulario de contacto
```

No debe utilizarse `git push --force` sobre `main`.

---

# 14. Dependencias

Antes de añadir una dependencia, la IA debe comprobar:

1. Si puede resolverse con herramientas ya instaladas.
2. Si puede resolverse con APIs nativas.
3. Si el beneficio justifica el mantenimiento.
4. Si la librería está mantenida.
5. Si es compatible con el proyecto.
6. Si afecta al tamaño del frontend.
7. Si introduce riesgos de seguridad.
8. Si afecta al SSR.
9. Si requiere configuración adicional.
10. Si existe una alternativa más sencilla.

No debe instalarse una librería por:

- Un único icono.
- Una animación trivial.
- Una función que React o Laravel ya resuelven.
- Preferencia personal.
- Evitar escribir unas pocas líneas claras.

Toda dependencia nueva debe quedar reflejada en:

- `package.json` o `composer.json`.
- El lock file correspondiente.
- `CHANGELOG.md` cuando sea relevante.
- `DECISIONS.md` si supone una decisión estructural.

---

# 15. Versiones y compatibilidad

La IA debe comprobar las versiones reales en:

```text
composer.json
composer.lock
package.json
package-lock.json
```

No debe afirmar versiones basándose únicamente en memoria o conversaciones.

Cuando utilice una API, componente o icono, debe verificar que existe en la versión instalada.

Ejemplo conocido:

```tsx
ClipboardSearch
```

no estaba disponible en la versión instalada de `lucide-react`.

No debe actualizarse una dependencia únicamente para acceder a una función menor sin evaluar el impacto.

---

# 16. Reglas de importación en TypeScript

Las importaciones internas deben utilizar el alias configurado:

```tsx
import Hero from '@/components/home/Hero';
```

No debe utilizarse:

```tsx
import Hero from '/components/home/Hero';
```

La IA debe comprobar:

- Ruta exacta.
- Mayúsculas.
- Minúsculas.
- Extensión cuando sea necesaria.
- Exportación `default`.
- Exportación nombrada.
- Existencia real del archivo.

No debe asumir que macOS y Linux tratarán igual los nombres con distintas mayúsculas.

---

# 17. Reglas para componentes React

Los componentes deben:

- Tener una responsabilidad clara.
- Ser legibles.
- Ser reutilizables cuando tenga sentido.
- Mantener nombres en PascalCase.
- Evitar lógica de negocio sensible.
- Ser compatibles con SSR.
- Ser accesibles.
- Ser responsive.
- Evitar dependencias innecesarias.
- Evitar estados duplicados.

No debe crearse un componente nuevo si ya existe uno equivalente.

No debe concentrarse toda una página en un único archivo.

---

# 18. Reglas para `welcome.tsx`

`resources/js/pages/welcome.tsx` debe actuar principalmente como archivo de composición.

Debe:

- Importar secciones.
- Ordenar componentes.
- Definir metadatos de página.
- Mantener una estructura clara.

No debe:

- Contener todo el HTML de la portada.
- Concentrar grandes arrays de contenido.
- Incluir lógica de negocio.
- Gestionar formularios complejos.
- Duplicar contenido existente en componentes.

---

# 19. Compatibilidad con SSR

El proyecto utiliza renderizado del lado servidor.

La IA no debe acceder durante la inicialización a:

```text
window
document
localStorage
sessionStorage
navigator
location
```

Cuando sea necesario utilizar APIs del navegador, debe hacerse dentro de:

- `useEffect`.
- Eventos del cliente.
- Comprobaciones de entorno.
- Hooks preparados para SSR.

Ejemplo:

```tsx
useEffect(() => {
    const value = window.localStorage.getItem('key');
}, []);
```

No debe asumirse que el navegador existe durante SSR.

---

# 20. TypeScript

Debe evitarse `any`.

La IA debe:

- Definir tipos claros.
- Reutilizar tipos existentes.
- Tipar props.
- Tipar eventos.
- Tipar respuestas del backend.
- Evitar conversiones forzadas innecesarias.
- No silenciar errores de TypeScript.

No debe utilizar:

```tsx
// @ts-ignore
```

salvo caso excepcional, justificado y documentado.

No debe considerarse terminada una tarea si existen errores de TypeScript relacionados con ella.

---

# 21. Backend como fuente de verdad

La lógica sensible debe permanecer en Laravel.

El frontend no debe ser la fuente de verdad para:

- Autorización.
- Permisos.
- Validaciones definitivas.
- Precios.
- Estados críticos.
- Acceso a documentos.
- Identidad de usuarios.
- Datos financieros.
- Reglas de negocio.

Ocultar un botón en React no protege una acción.

Toda protección relevante debe aplicarse en el servidor.

---

# 22. Controladores

Los controladores deben:

- Recibir la petición.
- Coordinar el flujo.
- Utilizar validación adecuada.
- Comprobar autorización.
- Delegar lógica compleja.
- Devolver una respuesta clara.

No deben:

- Contener lógica empresarial extensa.
- Mezclar múltiples responsabilidades.
- Ejecutar consultas complejas repetidas.
- Gestionar archivos sin validación.
- Confiar en datos del navegador.

---

# 23. Form Requests

La validación de formularios debe utilizar clases específicas cuando la complejidad lo justifique.

Los Form Requests deben encargarse de:

- Reglas de validación.
- Mensajes.
- Normalización básica.
- Autorización cuando corresponda.

La validación frontend mejora la experiencia, pero no sustituye la validación backend.

---

# 24. Servicios y acciones

La lógica compleja o reutilizable debe extraerse a:

- Servicios.
- Actions.
- Clases de dominio.
- Jobs cuando proceda.

No debe crearse una capa de servicio para operaciones triviales.

La extracción debe aportar:

- Claridad.
- Reutilización.
- Pruebas.
- Separación de responsabilidades.

---

# 25. Modelos Eloquent

Los modelos deben:

- Representar entidades reales.
- Definir relaciones.
- Definir casts.
- Proteger asignación masiva.
- Ocultar datos sensibles.
- Evitar lógica no relacionada.

No debe utilizarse `$guarded = []` automáticamente sin valorar riesgos.

No deben exponerse directamente modelos completos al frontend si contienen más información de la necesaria.

---

# 26. Base de datos

Antes de ejecutar una migración, la IA debe comprobar:

```bash
pwd
```

y revisar la conexión configurada.

No debe asumir que la base de datos es SQLite, MySQL o MariaDB sin revisar `.env` y configuración.

Las modificaciones del esquema deben realizarse mediante migraciones.

No debe modificarse manualmente la base de datos como solución ordinaria.

No debe editarse una migración ya ejecutada en producción para alterar el esquema existente.

---

# 27. Migraciones

Las migraciones deben ser:

- Incrementales.
- Claras.
- Reversibles cuando sea razonable.
- Seguras con datos existentes.
- Compatibles con el entorno objetivo.

No debe ejecutarse:

```bash
php artisan migrate:fresh
```

en un proyecto con datos sin autorización explícita.

Antes de migrar, deben revisarse:

```bash
php artisan migrate:status
```

y la configuración de la base de datos.

---

# 28. Datos de prueba

No deben utilizarse datos personales reales en:

- Seeders.
- Factories.
- Tests.
- Capturas.
- Repositorio.
- Ejemplos.
- Documentación pública.

Deben utilizarse datos ficticios y claramente identificables como tales.

---

# 29. Formularios

Un formulario no debe considerarse funcional por mostrar campos.

Para estar completo debe incluir, según corresponda:

- Estado local.
- Validación frontend.
- Validación backend.
- Ruta.
- Controlador.
- Protección CSRF.
- Rate limiting.
- Tratamiento de errores.
- Mensaje de éxito real.
- Accesibilidad.
- Protección antispam.
- Consentimiento.
- Persistencia o envío seguro.
- Tests.

No debe mostrarse una confirmación falsa.

---

# 30. Contenido empresarial

La IA no debe inventar:

- Servicios.
- Clientes.
- Testimonios.
- Estadísticas.
- Certificaciones.
- Acreditaciones.
- Sedes.
- Personal.
- Resultados.
- Casos de éxito.
- Premios.
- Fechas.
- Cifras.

Cuando falte información debe:

- Indicar que está pendiente.
- Utilizar contenido neutro.
- Ocultar temporalmente el bloque.
- Preparar únicamente la estructura.
- Solicitar confirmación.

Nunca debe rellenarse una sección con información falsa para que el diseño parezca completo.

---

# 31. Clientes y logotipos

No deben publicarse clientes o logotipos sin autorización.

La existencia de un nombre en:

- Un documento.
- Una conversación.
- Una captura.
- Una lista.
- Una red social.

no demuestra una relación comercial publicable.

---

# 32. Testimonios

Los testimonios deben ser:

- Reales.
- Verificados.
- Autorizados.
- Atribuidos correctamente.

No deben generarse opiniones ficticias.

No deben atribuirse frases a personas o empresas sin consentimiento.

---

# 33. Estadísticas

No deben publicarse cifras sin:

- Fuente.
- Periodo.
- Método.
- Vigencia.
- Validación.
- Autorización.

Los números de ejemplo deben quedar claramente identificados como provisionales y no mostrarse públicamente como reales.

---

# 34. Normas, certificaciones y acreditaciones

La IA debe distinguir entre:

- Consultoría.
- Implantación.
- Formación.
- Auditoría.
- Certificación.
- Acreditación.

No debe insinuarse que IDH es:

- Organismo certificador.
- Entidad acreditada.
- Propietaria de una certificación.

sin confirmación documental.

---

# 35. Estilos y diseño

Los cambios visuales deben respetar:

- Identidad corporativa.
- Jerarquía.
- Claridad.
- Profesionalidad.
- Transparencia.
- Seguridad.
- Fortaleza.
- Coherencia.
- Responsive.
- Accesibilidad.

Debe evitarse:

- Exceso de efectos.
- Colores no autorizados.
- Gradientes agresivos.
- Sombras exageradas.
- Animaciones continuas.
- Interfaces saturadas.
- Cambios globales por ajustes locales.

---

# 36. Tailwind CSS

Debe priorizarse Tailwind para los estilos.

No debe utilizarse CSS inline salvo necesidad justificada.

Debe evitarse:

- Repetición excesiva.
- Clases arbitrarias innecesarias.
- Valores inconsistentes.
- Selectores globales invasivos.
- Duplicación de estilos.

Cuando un patrón se repita de manera significativa, puede evaluarse un componente reutilizable.

---

# 37. Responsive

Toda modificación visual debe revisarse al menos en:

- Móvil.
- Tableta.
- Escritorio.
- Pantallas amplias.

Debe comprobarse:

- Ausencia de scroll horizontal.
- Botones accesibles.
- Menú móvil.
- Tamaños de texto.
- Espaciado.
- Tarjetas.
- Imágenes.
- Formularios.
- Orden del contenido.

No debe considerarse responsive únicamente porque los elementos se apilan.

---

# 38. Accesibilidad

Toda interfaz debe utilizar HTML semántico.

Debe revisarse:

- Jerarquía de encabezados.
- Etiquetas de formularios.
- Texto alternativo.
- Contraste.
- Foco visible.
- Navegación por teclado.
- Botones reales para acciones.
- Enlaces reales para navegación.
- Mensajes de error.
- Áreas pulsables.
- Reducción de movimiento.

No debe utilizarse un `div` como botón si puede utilizarse `<button>`.

---

# 39. Iconos

Antes de utilizar un icono de `lucide-react`, debe verificarse que:

- Existe.
- Está exportado.
- Es compatible con la versión instalada.
- Tiene sentido semántico.
- No necesita otra dependencia.

Los iconos decorativos deben ocultarse de tecnologías de asistencia cuando corresponda.

Los iconos no deben ser la única forma de comunicar una acción importante sin etiqueta accesible.

---

# 40. Imágenes

Antes de incorporar una imagen debe comprobarse:

- Calidad.
- Peso.
- Resolución.
- Licencia.
- Autorización.
- Texto alternativo.
- Formato.
- Relación de aspecto.
- Contexto de uso.

No deben sobrescribirse destructivamente los originales corporativos.

No deben publicarse imágenes de personas o clientes sin autorización.

---

# 41. Enlaces externos

Los enlaces externos que se abran en una nueva pestaña deben utilizar:

```html
target="_blank"
rel="noopener noreferrer"
```

Debe comprobarse:

- URL correcta.
- HTTPS.
- Vigencia.
- Destino.
- Parámetros de seguimiento innecesarios.

No deben publicarse URLs incompletas o provisionales.

---

# 42. SEO

La IA debe mantener:

- Un solo `h1` principal por página cuando corresponda.
- Jerarquía semántica.
- Títulos claros.
- Descripciones relevantes.
- URLs comprensibles.
- Contenido real.
- Texto alternativo.
- Enlaces internos coherentes.

No debe utilizar:

- Contenido inventado.
- Keyword stuffing.
- Texto oculto.
- Páginas duplicadas.
- Metadatos engañosos.

---

# 43. Rendimiento

Antes de añadir complejidad debe evaluarse su impacto.

Debe priorizarse:

- Componentes pequeños.
- Imágenes optimizadas.
- JavaScript mínimo.
- Dependencias justificadas.
- Carga diferida cuando sea útil.
- Ausencia de animaciones pesadas.
- Consultas eficientes.
- Paginación cuando corresponda.
- Evitar solicitudes repetidas.

No debe sacrificarse mantenibilidad por microoptimizaciones sin medición.

---

# 44. Seguridad

Las reglas completas están en `SECURITY.md`.

Como norma operativa, la IA nunca debe:

- Exponer secretos.
- Eliminar middleware de seguridad.
- Desactivar CSRF.
- Desactivar autorización.
- Confiar en validación frontend.
- Hacer públicos archivos privados.
- Registrar contraseñas o tokens.
- Introducir SQL concatenado.
- Desactivar rate limiting sin motivo.
- Bajar requisitos de contraseña.
- Modificar permisos para “hacer que funcione”.
- Desactivar protección SSL.
- Utilizar `APP_DEBUG=true` en producción.

Cuando exista conflicto entre comodidad y seguridad, debe prevalecer la seguridad.

---

# 45. Privacidad

La IA debe aplicar minimización de datos.

Antes de añadir un campo debe verificar:

- Necesidad.
- Finalidad.
- Conservación.
- Acceso.
- Seguridad.
- Eliminación.
- Información al usuario.

No deben enviarse datos a terceros sin evaluar:

- Consentimiento.
- Política de privacidad.
- Transferencias.
- Retención.
- Necesidad real.

---

# 46. Archivos privados

Los documentos privados no deben almacenarse en:

```text
public/
```

Deben almacenarse mediante Storage privado y servirse mediante:

- Rutas protegidas.
- Controladores.
- Autorización.
- Respuestas controladas.

Conocer una URL no debe ser suficiente para descargar un archivo privado.

---

# 47. Logs

No deben registrarse:

- Contraseñas.
- Tokens.
- Cookies.
- Claves API.
- Datos bancarios.
- Documentos completos.
- Identificadores sensibles sin necesidad.
- Contenido privado extenso.

Los mensajes deben ser útiles para diagnóstico sin exponer información.

---

# 48. Errores

La IA no debe ocultar errores mediante:

- `try/catch` vacíos.
- Retornos silenciosos.
- Desactivación de validaciones.
- Supresión global de warnings.
- Ignorar fallos de compilación.

En producción:

```env
APP_DEBUG=false
```

Los usuarios deben recibir mensajes comprensibles sin detalles internos.

---

# 49. Tests

Cuando una tarea afecte a comportamiento, deben añadirse o actualizarse pruebas cuando sea razonable.

Deben priorizarse pruebas para:

- Rutas.
- Autenticación.
- Autorización.
- Validación.
- Formularios.
- Archivos.
- Datos privados.
- Acciones administrativas.
- Casos de error.

No debe afirmarse que una prueba pasa sin haberla ejecutado.

---

# 50. Verificación obligatoria

Antes de considerar terminada una tarea, deben ejecutarse las comprobaciones aplicables.

Frontend:

```bash
npm run build
```

Backend:

```bash
php artisan test
```

Formato y calidad, si están configurados:

```bash
npm run lint
vendor/bin/pint --test
```

La IA debe indicar qué comandos ha podido ejecutar y cuáles no.

No debe afirmar:

- “Todo compila”.
- “No hay errores”.
- “Los tests pasan”.

sin evidencia.

---

# 51. Verificación visual

Para cambios de interfaz debe comprobarse:

- Contenido.
- Alineación.
- Espaciado.
- Responsive.
- Menú.
- Enlaces.
- Imágenes.
- Estados hover.
- Focus.
- Errores visibles.
- Consola del navegador.
- SSR.

Una recarga sin error no garantiza que el diseño sea correcto.

---

# 52. Regresión

Antes de cerrar una tarea debe comprobarse que no se han roto:

- Navegación.
- Importaciones.
- SSR.
- Cabecera.
- Footer.
- Enlaces internos.
- Estilos globales.
- Formularios.
- Autenticación.
- Rutas.
- Responsive.

Si no puede verificarse algo, debe indicarse expresamente.

---

# 53. Documentación obligatoria

Tras una modificación importante debe evaluarse si actualizar:

- `CHANGELOG.md`
- `AI_CONTEXT.md`
- `ARCHITECTURE.md`
- `SECURITY.md`
- `CODEX_RULES.md`
- `DECISIONS.md`
- `README.md`

Reglas:

- Cambio funcional → `CHANGELOG.md`.
- Lección reutilizable → `AI_CONTEXT.md`.
- Cambio estructural → `ARCHITECTURE.md`.
- Cambio de seguridad → `SECURITY.md`.
- Nueva norma → `CODEX_RULES.md`.
- Decisión importante → `DECISIONS.md`.
- Cambio de instalación → `README.md`.

No debe actualizarse documentación irrelevante únicamente para aparentar completitud.

---

# 54. Registro de decisiones

Las decisiones importantes deben registrarse en `DECISIONS.md`.

Una decisión merece registro cuando:

- Cambia arquitectura.
- Introduce una dependencia principal.
- Define un patrón.
- Afecta a seguridad.
- Cambia almacenamiento.
- Cambia autenticación.
- Define una integración.
- Descarta una alternativa relevante.
- Afecta a largo plazo.

No debe utilizarse `DECISIONS.md` como changelog.

---

# 55. Gestión de incertidumbre

Cuando la IA no conozca un dato debe decirlo.

Debe utilizar expresiones claras como:

- “No está confirmado”.
- “No aparece implementado”.
- “Necesito revisar el archivo”.
- “La documentación y el código difieren”.
- “Este dato requiere validación empresarial”.

No debe completar huecos con suposiciones presentadas como hechos.

---

# 56. Información pendiente

Cuando falte información, la IA debe:

1. Mantener la estructura preparada.
2. Marcar el dato como pendiente.
3. Evitar contenido falso.
4. Solicitar confirmación cuando sea imprescindible.
5. No bloquear tareas que puedan avanzarse de forma segura.

---

# 57. Resolución de errores

Cuando aparezca un error, la IA debe:

1. Leer el mensaje completo.
2. Identificar el primer error real.
3. Separar errores actuales de logs históricos.
4. Revisar archivo y línea.
5. Confirmar la ruta.
6. Comprobar importaciones.
7. Revisar exportaciones.
8. Aplicar una corrección concreta.
9. Volver a probar.
10. No cambiar varias cosas a la vez.

No debe responder a un error de importación reinstalando todas las dependencias sin revisar primero el código.

---

# 58. Logs históricos

Un log largo puede incluir errores ya resueltos.

La IA debe priorizar:

- El error más reciente.
- El error que aparece tras la última recarga.
- La línea exacta del archivo actual.
- El estado visible actual.

No debe asumir que todos los mensajes del log siguen activos.

---

# 59. Prohibición de falsas garantías

La IA no debe decir:

- “Está perfecto”.
- “Está totalmente seguro”.
- “No puede fallar”.
- “Está listo para producción”.
- “Cumple toda la normativa”.

sin verificaciones suficientes.

Debe diferenciar entre:

- Código escrito.
- Código compilado.
- Código probado.
- Código revisado.
- Código desplegado.
- Código auditado.

---

# 60. Criterios de finalización

Una tarea solo debe considerarse terminada cuando:

- El objetivo se ha cumplido.
- El código es coherente.
- No se han introducido datos falsos.
- Se han realizado comprobaciones aplicables.
- No existen errores conocidos relacionados.
- Se ha revisado responsive si afecta a UI.
- Se ha revisado accesibilidad si afecta a UI.
- Se ha revisado seguridad si afecta a datos.
- Se ha actualizado documentación cuando correspondía.
- Se ha explicado cómo verificar el resultado.

---

# 61. Checklist final para la IA

Antes de responder que una tarea está terminada:

```text
[ ] He trabajado en la carpeta correcta.
[ ] He leído los archivos relevantes.
[ ] No he inventado información.
[ ] No he introducido dependencias innecesarias.
[ ] No he debilitado la seguridad.
[ ] No he duplicado lógica.
[ ] No he roto SSR.
[ ] He respetado TypeScript.
[ ] He revisado responsive.
[ ] He revisado accesibilidad.
[ ] He ejecutado o indicado las pruebas.
[ ] He sido transparente sobre lo no verificado.
[ ] He actualizado la documentación necesaria.
[ ] He dado instrucciones claras para comprobar el resultado.
```

---

# 62. Principio final

La IA debe actuar como una colaboradora responsable del proyecto, no como una generadora automática de código.

Su objetivo debe ser:

- Comprender antes de modificar.
- Proteger antes de simplificar.
- Verificar antes de afirmar.
- Reutilizar antes de duplicar.
- Documentar antes de olvidar.
- Preguntar antes de inventar.
- Mantener antes de reescribir.

Cuando exista una solución rápida y otra solución segura, clara y mantenible, debe elegirse la segunda.