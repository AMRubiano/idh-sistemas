# IDH Sistemas de Gestión

Plataforma web corporativa de **IDH Sistemas de Gestión**, desarrollada con Laravel, Inertia, React y TypeScript.

El proyecto sustituye progresivamente la presencia web anterior por una solución moderna, profesional, segura, accesible y preparada para incorporar en el futuro servicios digitales, gestión documental, administración de contenidos y áreas privadas.

> **Soluciones · Innovación · Gestión del Riesgo**

---

## Estado del proyecto

El proyecto se encuentra en desarrollo activo.

Actualmente está implementada la estructura principal de la portada corporativa mediante componentes independientes y reutilizables.

Entre los bloques existentes se encuentran:

- Cabecera corporativa.
- Hero principal.
- Indicadores.
- Servicios.
- Sectores.
- Normas y sistemas de gestión.
- Metodología.
- Clientes.
- Testimonios.
- Presentación de IDH.
- Motivos para elegir IDH.
- Contacto.
- Footer.
- Redes sociales.
- Diseño responsive.

Algunos bloques están preparados visualmente, pero no deben publicarse con información inventada.

Los clientes, testimonios, estadísticas, certificaciones, acreditaciones y resultados deben estar confirmados antes de mostrarse como información real.

---

## Tecnologías

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

### Calidad y desarrollo

- Git.
- GitHub.
- Laravel Pint.
- Pest o PHPUnit.
- ESLint.
- Prettier.
- npm.

Las versiones exactas instaladas deben comprobarse en:

```text
composer.json
composer.lock
package.json
package-lock.json
```

No debe asumirse una versión concreta únicamente a partir de documentación antigua.

---

## Requisitos previos

Antes de instalar el proyecto deben estar disponibles:

- PHP compatible con la versión de Laravel instalada.
- Composer.
- Node.js.
- npm.
- Git.
- Una base de datos compatible con Laravel.

Durante el desarrollo local puede utilizarse:

- SQLite.
- MySQL.
- MariaDB.

La base de datos real depende de la configuración de cada entorno.

---

## Documentación del proyecto

Antes de realizar cambios importantes deben revisarse los documentos situados en la raíz:

| Documento | Responsabilidad |
|---|---|
| `README.md` | Instalación y puesta en marcha |
| `PROJECT_VISION.md` | Propósito y evolución estratégica |
| `ARCHITECTURE.md` | Arquitectura técnica |
| `SECURITY.md` | Seguridad y privacidad |
| `CODEX_RULES.md` | Normas de desarrollo para personas e IA |
| `AI_CONTEXT.md` | Memoria operativa del proyecto |
| `CHANGELOG.md` | Historial de cambios |
| `DECISIONS.md` | Decisiones y justificaciones |

La documentación debe mantenerse sincronizada con el código.

---

# Instalación nueva

Estas instrucciones están destinadas únicamente a una instalación nueva.

No ejecutes `git clone` si ya estás dentro de una copia existente del proyecto.

## 1. Comprobar la carpeta actual

Antes de clonar, ejecuta:

```bash
pwd
ls -la
```

Comprueba que no estás dentro de otra carpeta `idh-sistemas`.

Esto evita crear accidentalmente:

```text
idh-sistemas/idh-sistemas/
```

---

## 2. Clonar el repositorio

```bash
git clone https://github.com/ArrowZealousAMR/idh-sistemas.git
cd idh-sistemas
```

Comprueba que estás en la raíz correcta:

```bash
pwd
git status
```

La raíz debe contener, entre otros:

```text
app/
artisan
composer.json
package.json
resources/
routes/
```

---

## 3. Instalar dependencias de PHP

```bash
composer install
```

Este comando instala las versiones registradas en `composer.lock`.

No debe sustituirse automáticamente por:

```bash
composer update
```

`composer update` puede modificar versiones y generar incompatibilidades.

---

## 4. Instalar dependencias de JavaScript

```bash
npm install
```

Este comando utiliza las versiones definidas en `package-lock.json`.

---

## 5. Crear el archivo de entorno

Solo en una instalación nueva:

```bash
cp .env.example .env
```

No ejecutes este comando sobre un proyecto ya configurado, porque podría sobrescribir o reemplazar la configuración local.

El archivo `.env`:

- No debe subirse a Git.
- No debe compartirse públicamente.
- No debe contenerse en capturas.
- No debe copiarse a documentación.

---

## 6. Generar la clave de Laravel

```bash
php artisan key:generate
```

Comprueba que aparezca un mensaje similar a:

```text
Application key set successfully.
```

---

# Configuración de base de datos

Antes de ejecutar migraciones, confirma siempre:

```bash
pwd
```

y revisa la configuración de `.env`.

No aceptes automáticamente la creación de una base de datos sin comprobar que estás en la carpeta y entorno correctos.

---

## Opción A: SQLite

Para utilizar SQLite en local, configura en `.env`:

```env
DB_CONNECTION=sqlite
```

Crea el archivo de base de datos:

```bash
touch database/database.sqlite
```

Comprueba que existe:

```bash
ls -la database/database.sqlite
```

Después revisa el estado de las migraciones:

```bash
php artisan migrate:status
```

Finalmente:

```bash
php artisan migrate
```

---

## Opción B: MySQL o MariaDB

Configura en `.env` los valores correspondientes:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=idh_sistemas
DB_USERNAME=usuario
DB_PASSWORD=contraseña
```

Antes de migrar:

- Confirma que la base de datos existe.
- Confirma que las credenciales corresponden al entorno local.
- No utilices credenciales de producción.
- No publiques el contenido de `.env`.

Comprueba las migraciones:

```bash
php artisan migrate:status
```

Después:

```bash
php artisan migrate
```

---

# Arrancar el proyecto

## Opción recomendada

Revisa los scripts disponibles:

```bash
composer run
```

Si el proyecto mantiene el script de desarrollo habitual de Laravel, puede iniciarse con:

```bash
composer run dev
```

Este proceso puede arrancar conjuntamente:

- Servidor Laravel.
- Vite.
- Cola.
- Logs de desarrollo.

Mantén abierta esa terminal mientras trabajas.

---

## Opción manual

En una terminal:

```bash
php artisan serve
```

En otra terminal, desde la misma raíz:

```bash
npm run dev
```

Después abre en el navegador la dirección mostrada por Laravel, normalmente:

```text
http://127.0.0.1:8000
```

o:

```text
http://localhost:8000
```

---

# Estructura principal

```text
idh-sistemas/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
├── routes/
├── storage/
├── tests/
├── AI_CONTEXT.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── CODEX_RULES.md
├── DECISIONS.md
├── PROJECT_VISION.md
├── README.md
├── SECURITY.md
├── artisan
├── composer.json
├── composer.lock
├── package.json
└── package-lock.json
```

---

## Frontend

La página principal se compone desde:

```text
resources/js/pages/welcome.tsx
```

Las secciones de la portada se encuentran principalmente en:

```text
resources/js/components/home/
```

La cabecera se encuentra en:

```text
resources/js/components/layout/header.tsx
```

Estructura actual conocida:

```text
resources/js/
├── components/
│   ├── home/
│   │   ├── About.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── IsoStandards.tsx
│   │   ├── Methodology.tsx
│   │   ├── Sectors.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   └── layout/
│       └── header.tsx
└── pages/
    └── welcome.tsx
```

El archivo `welcome.tsx` debe actuar principalmente como compositor de la página.

No debe concentrar toda la implementación visual ni lógica compleja.

---

## Recursos gráficos

Las imágenes corporativas se encuentran en:

```text
public/images/
```

Variantes conocidas:

```text
logo-blanco.jpg
logo-fondo-blanco.jpg
logo-fondo-rojo.jpg
logo-rojo-texto.jpg
logo-rojo.jpg
logo4.jpg
```

No deben sobrescribirse destructivamente los originales.

Antes de utilizar una imagen deben revisarse:

- Fondo.
- Contraste.
- Resolución.
- Peso.
- Relación de aspecto.
- Legibilidad.
- Autorización de uso.

---

# Comprobaciones de desarrollo

## Compilar frontend

```bash
npm run build
```

La tarea no debe considerarse finalizada si el build falla.

---

## Revisar lint

Si el script está configurado:

```bash
npm run lint
```

---

## Ejecutar pruebas PHP

```bash
php artisan test
```

---

## Revisar formato PHP

```bash
vendor/bin/pint --test
```

Para aplicar formato automáticamente, solo después de revisar los archivos afectados:

```bash
vendor/bin/pint
```

---

## Revisar estado de migraciones

```bash
php artisan migrate:status
```

---

## Revisar rutas

```bash
php artisan route:list
```

---

## Revisar estado de Git

```bash
git status
```

Para revisar cambios no preparados:

```bash
git diff
```

Para revisar cambios preparados:

```bash
git diff --staged
```

---

# Flujo de trabajo recomendado

Para cada funcionalidad:

```text
Analizar
    ↓
Revisar documentación
    ↓
Identificar archivos
    ↓
Implementar cambio mínimo
    ↓
Guardar
    ↓
Compilar y probar
    ↓
Revisar visualmente
    ↓
Revisar seguridad
    ↓
Actualizar documentación
    ↓
Revisar Git
    ↓
Commit
    ↓
Push
```

Antes de crear un commit:

```bash
git status
git diff
```

Después, añade únicamente los archivos relacionados con la tarea.

Ejemplo:

```bash
git add README.md ARCHITECTURE.md
```

Crea un commit claro:

```bash
git commit -m "docs: actualizar documentación principal"
```

Finalmente:

```bash
git push
```

---

# Convenciones importantes

## Importaciones internas

Forma correcta:

```tsx
import Hero from '@/components/home/Hero';
```

Forma incorrecta:

```tsx
import Hero from '/components/home/Hero';
```

---

## Componentes React

Los componentes deben utilizar PascalCase:

```text
Hero.tsx
IsoStandards.tsx
WhyChooseUs.tsx
```

---

## Exportaciones

Cuando se utiliza una importación por defecto:

```tsx
import About from '@/components/home/About';
```

el archivo debe incluir una exportación compatible:

```tsx
export default function About() {
    return <section />;
}
```

---

## SSR

El proyecto utiliza renderizado del lado servidor.

No deben utilizarse directamente durante la inicialización:

```text
window
document
localStorage
sessionStorage
navigator
```

Las APIs exclusivas del navegador deben utilizarse en un contexto compatible con SSR, por ejemplo dentro de `useEffect`.

---

# Seguridad

Antes de trabajar con:

- Formularios.
- Usuarios.
- Autenticación.
- Permisos.
- Datos personales.
- Archivos.
- Correos.
- APIs.
- Integraciones.
- Área privada.

debe revisarse:

```text
SECURITY.md
```

Reglas mínimas:

- No subir `.env`.
- No incluir secretos en el código.
- No desactivar CSRF.
- No confiar únicamente en validación frontend.
- No guardar documentos privados en `public/`.
- No utilizar datos personales reales en tests.
- No ejecutar migraciones destructivas sin autorización.
- No publicar datos empresariales no confirmados.

---

# Contenido empresarial

No deben inventarse:

- Clientes.
- Testimonios.
- Estadísticas.
- Certificaciones.
- Acreditaciones.
- Sedes.
- Casos de éxito.
- Personal.
- Resultados.
- Premios.
- Fechas.
- Cifras.

Cuando falte información:

- Mantener la estructura preparada.
- Ocultar temporalmente el bloque.
- Utilizar contenido neutro.
- Marcarlo como pendiente.
- Solicitar confirmación.

---

# Solución de problemas habituales

## Error de importación de un componente

Ejemplo:

```text
Failed to resolve import "/components/home/IsoStandards"
```

Revisa que la importación utilice el alias correcto:

```tsx
import IsoStandards from '@/components/home/IsoStandards';
```

Comprueba también:

- Nombre exacto.
- Mayúsculas.
- Existencia del archivo.
- Exportación.

---

## El componente no proporciona una exportación `default`

Ejemplo:

```text
does not provide an export named 'default'
```

Comprueba que el componente incluya:

```tsx
export default function NombreDelComponente() {
    return <div />;
}
```

---

## Lucide no exporta un icono

No todos los iconos existen en todas las versiones.

Antes de utilizar uno:

- Comprueba la versión instalada.
- Comprueba que el export existe.
- Busca una alternativa disponible.
- No instales otra biblioteca por un único icono.

Error histórico conocido:

```tsx
ClipboardSearch
```

No estaba disponible en la versión instalada.

---

## Laravel solicita crear `database/database.sqlite`

Antes de aceptar:

```bash
pwd
```

Después revisa:

```bash
grep "^DB_" .env
```

Confirma:

- Que estás en el repositorio correcto.
- Que realmente deseas utilizar SQLite.
- Que no estás dentro de una copia accidental.
- Que no estás trabajando con producción.

---

## Se ha clonado el repositorio dentro del propio proyecto

Comprueba:

```bash
pwd
ls -la
```

Si aparece una segunda carpeta `idh-sistemas` dentro de la raíz, no continúes instalando ni migrando hasta verificar qué copia debe conservarse.

No elimines ninguna carpeta sin revisar previamente su contenido y el estado de Git.

---

## Vite muestra errores históricos

Los logs pueden contener errores antiguos ya resueltos.

Prioriza:

1. El error más reciente.
2. El archivo y línea actuales.
3. El mensaje que aparece después de la última recarga.
4. El estado visible del navegador.

No reinstales dependencias automáticamente ante un error de importación sin revisar primero el código.

---

# Preparación para producción

Este repositorio no debe considerarse listo para producción únicamente porque funcione en local.

Antes de desplegar deben revisarse como mínimo:

```text
[ ] APP_ENV=production
[ ] APP_DEBUG=false
[ ] HTTPS activo
[ ] Variables de producción configuradas
[ ] Credenciales fuera del repositorio
[ ] Base de datos confirmada
[ ] Migraciones revisadas
[ ] Build generado
[ ] Tests ejecutados
[ ] Dependencias auditadas
[ ] Cookies seguras
[ ] Formularios protegidos
[ ] Rate limiting
[ ] Archivos privados protegidos
[ ] Logs configurados
[ ] Copias de seguridad verificadas
[ ] Monitorización
[ ] SEO
[ ] Accesibilidad
[ ] Páginas legales
[ ] Contenido empresarial confirmado
```

La política completa se encuentra en `SECURITY.md`.

---

# Roadmap resumido

La evolución prevista se realiza por fases:

## Fase 1

- Web corporativa.
- Portada.
- Responsive.
- Accesibilidad.
- Rendimiento.
- Contenido confirmado.

## Fase 2

- Formulario de contacto funcional.
- Páginas legales.
- SEO.
- Analítica respetuosa con la privacidad.
- Centralización de datos corporativos.

## Fase 3

- Gestión de contenidos.
- Panel administrativo.
- Roles y permisos.
- Solicitudes comerciales.

## Fase 4

- Área privada.
- Clientes.
- Gestión documental.
- Proyectos.
- Formación.
- Auditorías.

## Fase 5

- Automatizaciones.
- Indicadores.
- Integraciones.
- APIs.
- Herramientas internas.

La visión completa se encuentra en `PROJECT_VISION.md`.

---

# Contribución

Antes de contribuir:

1. Lee la documentación raíz.
2. Revisa el estado real del código.
3. Trabaja en una tarea concreta.
4. Evita cambios no relacionados.
5. No inventes datos.
6. Ejecuta las comprobaciones aplicables.
7. Actualiza la documentación necesaria.
8. Revisa `git status`.
9. Utiliza un commit claro.
10. No subas secretos.

---

# Licencia y uso

La licencia definitiva del proyecto debe confirmarse antes de declarar públicamente condiciones de reutilización, distribución o modificación.

Hasta que exista una licencia expresa, no debe asumirse que el repositorio permite reutilización pública del código, la identidad visual, los textos o los recursos corporativos.

---

# Contacto corporativo conocido

## Correo

```text
idhcalidad@gmail.com
```

## Teléfonos

```text
+57 322 218 0755
+57 320 847 0086
+57 1 753 7547
```

## Dirección conocida

```text
Calle 25 No. 12-27, piso 3
Centro Internacional
Bogotá D. C.
Colombia
```

## Redes sociales

- Facebook: `https://www.facebook.com/idhdesarrollosostenible/`
- LinkedIn: `https://www.linkedin.com/in/jorge-a-morales-r-b1a57043?originalSubdomain=co`
- Instagram: `https://www.instagram.com/idhsistemasdegestion`
- TikTok: `https://www.tiktok.com/@jorge.a346`
- YouTube: `https://www.youtube.com/@idhsistemasdegestion1822`

Las URLs deben verificarse antes del despliegue.

---

# Principio final

El proyecto debe poder ser comprendido, ejecutado y mantenido sin depender exclusivamente del conocimiento de una única persona.

Una instalación correcta debe comenzar siempre por:

```bash
pwd
git status
```

y continuar respetando:

- El código actual.
- La documentación.
- La seguridad.
- La privacidad.
- La arquitectura.
- La información empresarial confirmada.