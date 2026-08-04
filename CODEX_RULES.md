# CODEX_RULES.md

## 1. Finalidad del documento

Este archivo establece las reglas obligatorias que deben seguir Codex, ChatGPT y cualquier otra inteligencia artificial al trabajar en el proyecto IDH Sistemas de Gestión.

Antes de modificar el proyecto, la IA debe leer:

1. `AI_CONTEXT.md`
2. `CODEX_RULES.md`
3. `ARCHITECTURE.md`
4. `PROJECT_VISION.md`
5. `SECURITY.md`
6. `CHANGELOG.md`
7. `README.md`

Estas reglas tienen prioridad sobre soluciones genéricas, patrones habituales o preferencias predeterminadas de la herramienta.

---

## 2. Principio general de trabajo

La IA debe trabajar de forma:

- Incremental.
- Segura.
- Conservadora.
- Verificable.
- Clara.
- Documentada.
- Compatible con la arquitectura existente.

No debe reconstruir partes completas del proyecto cuando una modificación pequeña y controlada sea suficiente.

El objetivo no es únicamente que el código funcione, sino que sea:

- Seguro.
- Legible.
- Mantenible.
- Accesible.
- Responsive.
- Coherente con la identidad visual.
- Compatible con el resto del proyecto.
- Fácil de comprender por una persona con conocimientos básicos de programación.

---

## 3. Forma obligatoria de comenzar una tarea

Antes de escribir código, la IA debe:

1. Leer los documentos de contexto y reglas de la raíz.
2. Examinar el archivo que se va a modificar.
3. Revisar los componentes, rutas, modelos o controladores relacionados.
4. Confirmar la tecnología y versión instalada.
5. Identificar posibles regresiones.
6. Comprobar si ya existe una solución equivalente.
7. Evitar duplicar componentes o lógica.
8. Explicar brevemente qué archivos serán modificados.
9. Aplicar el cambio mínimo necesario.
10. Validar el resultado.

No se debe asumir la estructura del proyecto sin revisarla.

---

## 4. Forma de entregar código

Cuando el usuario necesite copiar y pegar código manualmente, la IA debe entregar:

- El nombre exacto del archivo.
- La ruta completa dentro del proyecto.
- El contenido completo del archivo.
- Un único bloque de código por archivo.
- Indicaciones claras para guardar y probar.

Debe evitar:

- Fragmentos incompletos.
- Instrucciones como “añade esto en algún lugar”.
- Código con partes omitidas.
- Bloques que dependan de líneas no mostradas.
- Pseudocódigo cuando se solicita una implementación funcional.

Cuando se modifique un archivo existente, debe proporcionarse normalmente el archivo completo de sustitución.

---

## 5. Explicaciones para el responsable del proyecto

El responsable del proyecto tiene conocimientos básicos de programación.

Las explicaciones deben indicar:

- Qué archivo abrir.
- Dónde se encuentra.
- Qué contenido reemplazar.
- Qué comando ejecutar.
- Qué resultado debería aparecer.
- Cómo detectar si algo ha fallado.
- Qué no debe tocar.

No se deben dar por supuestos conocimientos avanzados de:

- Git.
- Laravel.
- React.
- TypeScript.
- Terminal.
- Bases de datos.
- Despliegue.
- Seguridad.
- Servidores.

---

## 6. Reglas sobre comandos de terminal

Antes de proporcionar un comando, la IA debe comprobar:

- En qué carpeta debe ejecutarse.
- Si puede modificar o eliminar datos.
- Si afecta al entorno local o al servidor.
- Si requiere confirmación.
- Si puede sobrescribir archivos.
- Si puede cambiar dependencias.
- Si puede alterar la base de datos.

Los comandos deben entregarse en el orden exacto de ejecución.

Cuando sea importante, debe pedirse primero:

```bash
pwd
git status