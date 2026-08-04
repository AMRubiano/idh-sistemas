# SECURITY.md

# Política de Seguridad y Privacidad
## IDH Sistemas de Gestión

**Versión del documento:** 2.0
**Estado:** Obligatorio
**Enfoque:** Security by Design, Privacy by Design y Secure by Default
**Última revisión:** 2026-08-04

---

# 1. Finalidad del documento

Este documento define la política de seguridad y privacidad del proyecto **IDH Sistemas de Gestión**.

Su objetivo es establecer los principios, controles y requisitos mínimos que deben aplicarse durante:

- Diseño.
- Desarrollo.
- Pruebas.
- Despliegue.
- Operación.
- Mantenimiento.
- Integración con terceros.
- Tratamiento de datos.
- Gestión de incidentes.
- Evolución futura de la plataforma.

Este documento responde a una pregunta concreta:

> ¿Qué condiciones de seguridad y privacidad debe cumplir el proyecto?

Las normas operativas para trabajar con el código se encuentran en `CODEX_RULES.md`.

La estructura técnica del sistema se documenta en `ARCHITECTURE.md`.

Las decisiones importantes se registran en `DECISIONS.md`.

---

# 2. Principio fundamental

La seguridad y la privacidad forman parte del diseño del proyecto.

No deben añadirse únicamente después de implementar una funcionalidad.

Toda característica nueva debe evaluarse antes de su desarrollo para identificar:

- Datos tratados.
- Personas afectadas.
- Amenazas posibles.
- Accesos necesarios.
- Riesgos de abuso.
- Dependencias externas.
- Medidas preventivas.
- Impacto de un fallo.
- Recuperación.
- Conservación y eliminación de datos.

Cuando exista conflicto entre comodidad, rapidez y seguridad, deberá priorizarse la solución segura y mantenible.

---

# 3. Alcance

Esta política se aplica a:

- Aplicación Laravel.
- Frontend React e Inertia.
- Base de datos.
- Almacenamiento de archivos.
- Formularios.
- Autenticación.
- Autorización.
- APIs.
- Correos.
- Integraciones externas.
- Infraestructura.
- Logs.
- Copias de seguridad.
- Repositorio Git.
- Procesos de despliegue.
- Herramientas de Inteligencia Artificial.
- Entornos local, pruebas y producción.

También se aplica a cualquier módulo futuro.

---

# 4. Principios de seguridad

## 4.1. Security by Design

La seguridad debe analizarse desde la fase de diseño.

No se aceptará una funcionalidad que dependa de añadir seguridad posteriormente.

---

## 4.2. Secure by Default

La configuración inicial debe ser restrictiva.

Una persona usuaria no debe obtener más acceso del necesario por defecto.

Los recursos privados deben permanecer privados salvo publicación explícita.

---

## 4.3. Privacy by Design

La privacidad debe integrarse en la arquitectura, los formularios, los flujos y el almacenamiento.

La plataforma debe reducir al mínimo:

- Datos recopilados.
- Datos compartidos.
- Tiempo de conservación.
- Personas con acceso.
- Exposición en frontend.
- Dependencia de terceros.

---

## 4.4. Mínimo privilegio

Cada usuario, servicio, proceso e integración debe disponer únicamente de los permisos imprescindibles.

No deben utilizarse permisos administrativos para operaciones ordinarias.

---

## 4.5. Defensa en profundidad

La seguridad no debe depender de una única medida.

Deben combinarse, según corresponda:

- Autenticación.
- Autorización.
- Validación.
- Escape de salidas.
- Rate limiting.
- CSRF.
- Protección de sesiones.
- Almacenamiento privado.
- Logs.
- Copias de seguridad.
- Monitorización.
- Revisión de dependencias.
- Configuración segura.

---

## 4.6. Zero Trust

No debe confiarse automáticamente en:

- Navegador.
- Usuario autenticado.
- Red interna.
- Parámetros ocultos.
- URLs.
- Archivos subidos.
- Cabeceras HTTP.
- Servicios externos.
- Datos previamente almacenados.

Cada petición debe validarse y autorizarse según su contexto.

---

## 4.7. Fail Secure

Cuando se produzca un error, el sistema debe mantener el estado más seguro posible.

Ante una duda de autorización, debe denegarse el acceso.

Ante un fallo en una integración, no deben exponerse datos ni omitirse controles.

---

## 4.8. Separación de responsabilidades

Las funciones críticas deben dividirse entre capas y roles cuando sea razonable.

El frontend no debe decidir permisos.

La base de datos no debe ser accesible directamente desde el navegador.

Las acciones administrativas deben diferenciarse de las acciones ordinarias.

---

## 4.9. Trazabilidad proporcional

Las acciones relevantes deben poder investigarse.

La trazabilidad no debe convertirse en recopilación excesiva de datos.

---

# 5. Clasificación de la información

Antes de almacenar o compartir información debe clasificarse.

## 5.1. Información pública

Puede publicarse sin autorización adicional cuando esté confirmada.

Ejemplos:

- Servicios aprobados.
- Datos corporativos públicos.
- Textos de la web.
- Redes sociales.
- Material promocional autorizado.

---

## 5.2. Información interna

Información destinada al funcionamiento de IDH.

Ejemplos:

- Notas internas.
- Borradores.
- Procedimientos.
- Configuración no sensible.
- Planificación.

No debe exponerse públicamente.

---

## 5.3. Información confidencial

Información cuyo acceso debe limitarse.

Ejemplos:

- Documentos de clientes.
- Propuestas.
- Contratos.
- Informes.
- Datos personales.
- Credenciales parciales.
- Información de auditorías.
- Datos comerciales.

---

## 5.4. Información crítica

Información cuya exposición o alteración puede causar un impacto grave.

Ejemplos:

- Contraseñas.
- Tokens.
- Claves privadas.
- Secretos OAuth.
- Copias de seguridad.
- Credenciales de producción.
- Datos financieros sensibles.
- Claves de cifrado.

Esta información nunca debe almacenarse en el repositorio ni enviarse al frontend.

---

# 6. Minimización de datos

Antes de incorporar un campo, documento o evento analítico debe responderse:

1. ¿Es estrictamente necesario?
2. ¿Cuál es su finalidad concreta?
3. ¿Quién necesita acceder?
4. ¿Durante cuánto tiempo?
5. ¿Puede evitarse o anonimizarse?
6. ¿Qué ocurre si se filtra?
7. ¿Cómo se elimina?
8. ¿Existe una base legítima para tratarlo?
9. ¿Debe informarse al usuario?
10. ¿Interviene un tercero?

No deben recopilarse datos “por si acaso”.

---

# 7. Secretos y credenciales

Nunca deben escribirse directamente en el código:

- Contraseñas.
- API keys.
- Tokens.
- Claves privadas.
- Credenciales SMTP.
- Secretos OAuth.
- Claves de cifrado.
- Credenciales de bases de datos.
- Secretos de webhooks.
- Credenciales de almacenamiento.
- Credenciales de monitorización.

Los secretos deben obtenerse desde:

- Variables de entorno.
- Gestores de secretos.
- Configuración segura del servidor.

Ejemplos de variables sensibles:

```text
APP_KEY
DB_PASSWORD
MAIL_PASSWORD
AWS_SECRET_ACCESS_KEY
OPENAI_API_KEY
GOOGLE_CLIENT_SECRET
SENTRY_AUTH_TOKEN
```

---

# 8. Repositorio y control de secretos

El repositorio nunca debe incluir:

- `.env`.
- Copias de `.env`.
- Claves privadas.
- Archivos de certificados privados.
- Dumps de producción.
- Copias de seguridad.
- Tokens temporales.
- Capturas con credenciales.
- Logs con secretos.

Si un secreto se incorpora accidentalmente al repositorio:

1. Debe considerarse comprometido.
2. Debe revocarse o rotarse.
3. Debe eliminarse del historial cuando corresponda.
4. Debe revisarse el acceso asociado.
5. Debe documentarse el incidente.
6. No basta con borrar el archivo del último commit.

---

# 9. Configuración de entornos

Los entornos deben permanecer separados:

- Local.
- Pruebas.
- Preproducción.
- Producción.

No deben compartirse credenciales entre entornos.

El entorno local no debe utilizar datos reales salvo necesidad excepcional, autorización y protección adecuada.

En producción debe configurarse:

```env
APP_ENV=production
APP_DEBUG=false
```

Los mensajes de error de producción no deben revelar:

- Rutas internas.
- Consultas.
- Variables.
- Clases.
- Stack traces.
- Configuración.
- Credenciales.

---

# 10. Autenticación

La autenticación debe utilizar mecanismos mantenidos por Laravel.

Se priorizará:

- Laravel Fortify.
- Funcionalidades nativas del framework.
- Passkeys cuando estén justificadas.
- Autenticación multifactor para cuentas sensibles.

No debe implementarse autenticación manual si existe una solución oficial y segura.

---

# 11. Contraseñas

Las contraseñas deben almacenarse mediante los mecanismos de hashing de Laravel.

Debe utilizarse:

```php
Hash::make($password);
```

No debe utilizarse:

```text
md5
sha1
cifrado reversible
hashes manuales inseguros
contraseñas en texto plano
```

Las contraseñas no deben:

- Enviarse por correo.
- Registrarse en logs.
- Mostrarse en interfaces administrativas.
- Exportarse.
- Recuperarse en texto original.

El sistema debe permitir restablecimiento seguro, no recuperación de la contraseña existente.

---

# 12. Requisitos de autenticación sensible

Para cuentas administrativas o de alto privilegio deben evaluarse:

- MFA.
- Passkeys.
- Avisos de inicio de sesión.
- Limitación de intentos.
- Reautenticación para acciones críticas.
- Revocación de sesiones.
- Registro de accesos.
- Recuperación segura.

No debe dependerse únicamente de una contraseña débil.

---

# 13. Autorización

Toda acción protegida debe autorizarse en el servidor.

Deben utilizarse según corresponda:

- Policies.
- Gates.
- Middleware.
- Comprobaciones de permisos.
- Roles.
- Scopes.
- Reglas de propiedad del recurso.

No debe confiarse en:

- Botones ocultos.
- JavaScript.
- Rutas no enlazadas.
- Inputs `hidden`.
- Parámetros enviados por el navegador.
- Identificadores difíciles de adivinar.

Ocultar una opción en React no constituye una medida de seguridad.

---

# 14. Prevención de acceso horizontal y vertical

El sistema debe impedir:

- Acceder a recursos de otro usuario.
- Cambiar identificadores en la URL para obtener datos ajenos.
- Ejecutar acciones administrativas con un rol inferior.
- Asignarse roles.
- Modificar la propiedad de un recurso sin autorización.
- Descargar documentos de otros clientes.

Cada consulta de datos privados debe limitarse al ámbito autorizado.

---

# 15. Gestión de roles y permisos

Los roles deben tener una finalidad clara.

No deben crearse roles genéricos con permisos excesivos.

Los cambios de permisos deben:

- Autorizarse.
- Registrarse.
- Revisarse.
- Aplicarse de forma explícita.
- Evitar escalado de privilegios.

La eliminación de un rol no debe dejar recursos sin control de acceso.

---

# 16. Validación de entradas

Toda entrada debe validarse en el servidor.

Deben validarse:

- Tipo.
- Formato.
- Longitud.
- Rango.
- Presencia.
- Relación con otros campos.
- Valores permitidos.
- Identificadores.
- Archivos.
- Fechas.
- URLs.
- Correos.
- Teléfonos.

La validación frontend mejora la experiencia, pero no protege el servidor.

Se priorizarán:

- Form Requests.
- Reglas de Laravel.
- Objetos de valor cuando corresponda.
- Normalización controlada.

---

# 17. Normalización y saneamiento

Los datos deben normalizarse cuando sea necesario.

Ejemplos:

- Eliminar espacios accidentales.
- Normalizar correos.
- Limitar formatos.
- Rechazar caracteres no permitidos cuando exista una razón.
- Convertir tipos de forma explícita.

No debe aplicarse saneamiento destructivo sin comprender el significado del dato.

---

# 18. Protección CSRF

Los formularios y peticiones mutables deben mantener la protección CSRF.

No debe desactivarse CSRF para resolver problemas de integración sin analizar la causa.

Las excepciones deben:

- Ser mínimas.
- Estar justificadas.
- Estar documentadas.
- Disponer de otra forma de autenticidad, como firmas verificadas.

---

# 19. Prevención de XSS

Todo contenido controlado por usuarios debe escaparse antes de mostrarse.

En Blade debe evitarse:

```php
{!! $content !!}
```

salvo que:

- Exista una necesidad real.
- El contenido haya sido sanitizado.
- La fuente sea confiable.
- Se haya revisado el riesgo.

En React no debe utilizarse:

```tsx
dangerouslySetInnerHTML
```

sin sanitización y justificación.

---

# 20. SQL Injection

Debe utilizarse:

- Eloquent.
- Query Builder.
- Bindings.
- Consultas parametrizadas.

No debe concatenarse entrada de usuario en SQL.

Ejemplo inseguro:

```php
DB::select("SELECT * FROM users WHERE email = '$email'");
```

La utilización de SQL manual debe ser excepcional, parametrizada, probada y documentada.

---

# 21. Asignación masiva

Los modelos deben protegerse frente a asignación masiva.

Debe revisarse:

- `$fillable`.
- `$guarded`.
- Campos sensibles.
- Roles.
- Estados.
- Propietarios.
- Flags administrativos.

No debe utilizarse automáticamente:

```php
protected $guarded = [];
```

sin evaluar el riesgo.

---

# 22. APIs

Toda API debe definir:

- Autenticación.
- Autorización.
- Rate limiting.
- Validación.
- Versionado cuando sea necesario.
- Respuestas mínimas.
- Gestión de errores.
- Registro de abuso.
- Política de CORS.
- Revocación de credenciales.

No deben devolverse modelos completos si contienen más información de la necesaria.

---

# 23. Exposición mínima de datos

Las respuestas al frontend deben contener únicamente los datos necesarios.

No deben enviarse por Inertia o API:

- Hashes.
- Tokens.
- Campos internos.
- Notas privadas.
- Datos de otros usuarios.
- Identificadores sensibles innecesarios.
- Configuración del servidor.
- Permisos no relevantes.
- Metadatos privados.

Deben utilizarse DTOs, Resources o props explícitas cuando la complejidad lo justifique.

---

# 24. CORS

La configuración CORS debe ser restrictiva.

No debe utilizarse:

```text
Access-Control-Allow-Origin: *
```

para endpoints autenticados o sensibles.

Los orígenes permitidos deben definirse expresamente.

---

# 25. Rate limiting

Debe aplicarse rate limiting en:

- Inicio de sesión.
- Recuperación de contraseña.
- Registro.
- Formularios de contacto.
- APIs.
- Envío de correos.
- Descargas sensibles.
- Búsquedas costosas.
- Verificación de códigos.
- Acciones administrativas críticas.

Los límites deben equilibrar:

- Seguridad.
- Experiencia.
- Naturaleza de la acción.
- Riesgo de automatización.

---

# 26. Protección frente a automatización y spam

Los formularios públicos deben considerar:

- Honeypot.
- Rate limiting.
- Tiempo mínimo de envío.
- Detección de repetición.
- CAPTCHA respetuoso con la privacidad cuando sea imprescindible.
- Bloqueo temporal.
- Monitorización de abuso.

No debe añadirse una herramienta de seguimiento invasiva si existe una opción menos intrusiva.

---

# 27. Sesiones

Las sesiones deben configurarse de forma segura.

Debe considerarse:

- Regeneración tras login.
- Invalidación tras logout.
- Regeneración tras cambios sensibles.
- Tiempo de expiración razonable.
- Revocación de otras sesiones.
- Protección frente a fijación de sesión.
- Almacenamiento adecuado.
- Cookies seguras.

Tras un cambio de contraseña debe evaluarse el cierre de sesiones existentes.

---

# 28. Cookies

Las cookies sensibles deben utilizar:

- `HttpOnly`.
- `Secure` en producción.
- `SameSite=Lax` o `SameSite=Strict` según el flujo.
- Dominio y ruta mínimos.
- Duración limitada.

No deben almacenarse en cookies:

- Contraseñas.
- Tokens expuestos a JavaScript sin necesidad.
- Información personal innecesaria.
- Datos confidenciales sin protección.

---

# 29. HTTPS

La producción debe funcionar únicamente mediante HTTPS.

Debe evitarse:

- Contenido mixto.
- Formularios HTTP.
- Recursos inseguros.
- Redirecciones que degraden a HTTP.
- Cookies sensibles sin `Secure`.

Debe configurarse redirección de HTTP a HTTPS en la infraestructura.

Cuando corresponda, debe evaluarse HSTS.

---

# 30. Cabeceras de seguridad

La infraestructura debe incorporar progresivamente cabeceras como:

- `Content-Security-Policy`.
- `X-Content-Type-Options`.
- `Referrer-Policy`.
- `Permissions-Policy`.
- `Strict-Transport-Security`.
- Protección frente a framing mediante CSP o cabecera equivalente.

La política CSP debe diseñarse de forma compatible con la aplicación.

No debe utilizarse una política tan permisiva que deje de aportar protección.

---

# 31. Archivos subidos

Toda subida debe validar:

- Tamaño.
- MIME real.
- Extensión.
- Tipo esperado.
- Número de archivos.
- Nombre.
- Contenido cuando proceda.
- Dimensiones de imagen.
- Riesgo de archivo ejecutable.
- Autorización del usuario.

No debe confiarse únicamente en:

- Extensión.
- Nombre proporcionado.
- Cabecera enviada por el navegador.

---

# 32. Nombres de archivos

Los archivos subidos deben almacenarse con nombres generados por el sistema.

No debe utilizarse el nombre original como nombre físico definitivo.

El nombre original puede conservarse como metadato cuando sea necesario y seguro.

Debe evitarse:

- Path traversal.
- Colisiones.
- Nombres ejecutables.
- Caracteres problemáticos.
- Información personal en el nombre físico.

---

# 33. Almacenamiento público y privado

Los archivos públicos pueden almacenarse en ubicaciones públicamente accesibles únicamente cuando su publicación sea intencionada.

Los archivos privados nunca deben almacenarse directamente en:

```text
public/
```

Los documentos privados deben almacenarse mediante un disco privado de Laravel.

---

# 34. Descarga de archivos privados

Las descargas privadas deben pasar por:

1. Ruta protegida.
2. Autenticación.
3. Autorización.
4. Localización segura.
5. Respuesta controlada.

Conocer la URL no debe permitir descargar un archivo.

No debe confiarse en URLs difíciles de adivinar como mecanismo de seguridad.

---

# 35. Eliminación de archivos

La eliminación debe considerar:

- Autorización.
- Referencias en base de datos.
- Versiones.
- Papelera o recuperación.
- Retención legal.
- Logs mínimos.
- Copias de seguridad.
- Eliminación física diferida cuando corresponda.

No deben quedar archivos huérfanos innecesariamente.

---

# 36. Procesamiento de imágenes y documentos

Las herramientas que procesen archivos deben considerarse superficies de ataque.

Debe limitarse:

- Tamaño.
- Tiempo de ejecución.
- Memoria.
- Tipos admitidos.
- Comandos del sistema.
- Rutas.
- Permisos.

No debe ejecutarse un nombre de archivo del usuario directamente en un comando de shell.

---

# 37. Correo electrónico

Los correos deben evitar incluir datos sensibles completos.

No deben enviarse por correo:

- Contraseñas.
- Tokens reutilizables.
- Documentos confidenciales sin protección.
- Datos personales innecesarios.
- Claves privadas.

Los enlaces de acción deben:

- Expirar.
- Ser de un solo uso cuando corresponda.
- Validarse.
- Revocarse tras completar la acción.

---

# 38. Integraciones externas

Antes de integrar un tercero debe evaluarse:

- Datos compartidos.
- Finalidad.
- Seguridad.
- Política de privacidad.
- Ubicación del tratamiento.
- Retención.
- Subencargados.
- Dependencia técnica.
- Revocación.
- Gestión de incidentes.
- Coste.
- Alternativas.

Solo deben enviarse los datos mínimos necesarios.

---

# 39. Webhooks

Los webhooks deben:

- Verificar firma.
- Validar origen cuando sea posible.
- Prevenir repetición.
- Registrar identificadores.
- Ser idempotentes.
- Aplicar rate limiting.
- Rechazar payloads inválidos.
- No confiar en la IP como única protección.

Los secretos de firma deben almacenarse fuera del código.

---

# 40. Logs

Los logs deben ayudar a investigar errores e incidentes sin exponer información innecesaria.

Nunca deben registrar:

- Contraseñas.
- Tokens.
- Claves API.
- Cookies completas.
- Cabeceras de autorización.
- Claves privadas.
- Datos bancarios.
- Documentos completos.
- Contenido sensible de formularios.
- Dumps completos de usuarios.

---

# 41. Redacción de datos en logs

Cuando sea necesario registrar un identificador sensible, debe evaluarse:

- Enmascarado.
- Hash.
- Identificador interno.
- Truncado.
- Sustitución por referencia.

Ejemplo:

```text
Email: a***@example.com
```

No debe registrarse más información de la necesaria para diagnóstico.

---

# 42. Auditoría

Deben registrarse, cuando proceda:

- Inicio de sesión.
- Cierre de sesión.
- Fallos repetidos de autenticación.
- Cambios de roles.
- Cambios de permisos.
- Acciones administrativas.
- Publicación de contenido.
- Eliminaciones.
- Descargas sensibles.
- Cambios de configuración.
- Exportaciones.
- Acceso a información crítica.

Los registros de auditoría deben protegerse frente a modificación no autorizada.

---

# 43. Monitorización

El proyecto debe prepararse para monitorizar:

- Errores.
- Disponibilidad.
- Rendimiento.
- Fallos de autenticación.
- Abuso de formularios.
- Errores de integraciones.
- Colas.
- Espacio de almacenamiento.
- Vencimiento de certificados.
- Copias de seguridad.
- Cambios críticos.

La monitorización no debe recopilar datos personales excesivos.

---

# 44. Gestión de errores

Los errores deben gestionarse de forma controlada.

No deben ocultarse mediante:

- `catch` vacío.
- Retornos silenciosos.
- Supresión global.
- Desactivación de validaciones.
- Mensajes falsos de éxito.

El usuario debe recibir un mensaje comprensible.

El equipo debe disponer de información técnica suficiente sin exponerla públicamente.

---

# 45. Dependencias

Las dependencias deben:

- Estar justificadas.
- Estar mantenidas.
- Ser compatibles.
- Tener una licencia adecuada.
- Revisarse periódicamente.
- Eliminarse si no se usan.

No debe actualizarse todo automáticamente sin revisar cambios.

Debe diferenciarse entre:

```bash
composer install
npm install
```

y:

```bash
composer update
```

Actualizar dependencias puede introducir cambios incompatibles.

---

# 46. Seguridad de la cadena de suministro

Debe prestarse atención a:

- Paquetes comprometidos.
- Typosquatting.
- Scripts de instalación.
- Dependencias transitivas.
- Lock files.
- Registros de paquetes.
- Acciones de GitHub.
- Imágenes de contenedores.
- Herramientas de terceros.

Los lock files deben mantenerse versionados.

No deben ignorarse cambios inesperados en ellos.

---

# 47. Revisión de vulnerabilidades

Deben ejecutarse periódicamente las herramientas aplicables, por ejemplo:

```bash
composer audit
npm audit
```

Los resultados deben revisarse de forma razonada.

No debe utilizarse automáticamente:

```bash
npm audit fix --force
```

sin evaluar cambios mayores o incompatibles.

---

# 48. Desarrollo local

El entorno local debe mantener estándares de seguridad razonables.

No debe:

- Desactivar controles permanentemente.
- Utilizar credenciales de producción.
- Descargar datos reales sin necesidad.
- Compartir `.env`.
- Exponer servicios locales a Internet sin protección.
- Instalar software no confiable.
- Guardar secretos en scripts.

Las excepciones temporales deben eliminarse antes del commit.

---

# 49. Datos de prueba

Los tests y seeders deben utilizar datos ficticios.

No deben contener:

- Personas reales.
- Correos reales.
- Teléfonos reales.
- Direcciones privadas.
- Documentos reales.
- Credenciales reales.
- Casos de clientes.

Los datos de producción no deben copiarse a local sin un proceso autorizado de anonimización.

---

# 50. Pruebas de seguridad

Las funcionalidades sensibles deben incluir pruebas para:

- Acceso no autorizado.
- Acceso a recursos ajenos.
- Validación.
- Rate limiting.
- Archivos.
- Descargas privadas.
- Roles.
- Acciones administrativas.
- URLs manipuladas.
- Datos no expuestos.
- Casos de error.

No debe probarse únicamente el camino correcto.

---

# 51. Copias de seguridad

Las copias de seguridad deben incluir lo necesario para restaurar el servicio.

Pueden incluir:

- Base de datos.
- Archivos privados.
- Configuración segura.
- Recursos administrables.
- Información necesaria de infraestructura.

No debe asumirse que una copia existe únicamente porque se ha configurado una tarea.

---

# 52. Protección de copias de seguridad

Las copias deben:

- Estar cifradas cuando corresponda.
- Tener acceso restringido.
- Mantenerse separadas del sistema principal.
- Disponer de retención definida.
- Evitar exposición pública.
- Monitorizar fallos.
- Eliminarse de forma segura al finalizar su conservación.

Las copias contienen información sensible y deben protegerse al mismo nivel que la fuente original.

---

# 53. Pruebas de restauración

Una copia no debe considerarse válida hasta haber comprobado que puede restaurarse.

Deben realizarse pruebas periódicas de:

- Integridad.
- Descarga.
- Descifrado.
- Restauración.
- Coherencia.
- Tiempo de recuperación.

Debe documentarse el resultado.

---

# 54. Continuidad y recuperación

El proyecto debe definir progresivamente:

- Tiempo objetivo de recuperación.
- Pérdida de datos tolerable.
- Responsables.
- Procedimiento de restauración.
- Proveedores críticos.
- Dependencias externas.
- Comunicación.
- Prioridades de recuperación.

La complejidad del plan debe ser proporcional al riesgo y al uso real de la plataforma.

---

# 55. Retención de datos

Cada categoría de datos debe tener un periodo de conservación justificado.

No deben conservarse indefinidamente:

- Solicitudes.
- Logs.
- Archivos.
- Sesiones.
- Tokens.
- Exportaciones.
- Datos analíticos.
- Copias.

Cuando finalice el periodo aplicable, los datos deben:

- Eliminarse.
- Anonimizarse.
- Bloquearse cuando exista obligación de conservación.

---

# 56. Eliminación segura

La eliminación debe contemplar:

- Base de datos.
- Archivos.
- Cachés.
- Índices.
- Copias.
- Integraciones.
- Logs cuando proceda.
- Datos derivados.

No debe afirmarse que un dato ha sido eliminado si permanece accesible en sistemas activos.

La eliminación de copias puede seguir su ciclo de retención documentado.

---

# 57. Privacidad en analítica

La analítica debe configurarse con minimización de datos.

Debe evitar:

- Identificadores personales innecesarios.
- URLs con datos.
- Contenido de formularios.
- Direcciones IP completas cuando pueda evitarse.
- Grabaciones de sesión sin evaluación.
- Seguimiento antes del consentimiento cuando no corresponda.

Antes de incorporar analítica debe revisarse:

- Política de privacidad.
- Política de cookies.
- Consentimiento.
- Retención.
- Proveedor.
- Eventos.
- Finalidad.

---

# 58. Inteligencia Artificial y datos

No deben enviarse a sistemas de IA externos:

- Datos personales reales.
- Secretos.
- Contratos.
- Documentos confidenciales.
- Información de clientes.
- Credenciales.
- Dumps.
- Código con secretos.
- Logs sensibles.

salvo que exista una evaluación, autorización y configuración adecuadas.

Los prompts deben minimizar la información compartida.

---

# 59. Uso seguro de Codex y ChatGPT

Las herramientas de IA nunca deben:

- Desactivar validaciones.
- Desactivar CSRF.
- Eliminar autorización.
- Hacer públicos archivos privados.
- Introducir secretos.
- Ejecutar migraciones destructivas sin autorización.
- Rebajar permisos para resolver errores.
- Ocultar errores de compilación.
- Publicar información no confirmada.
- Utilizar datos reales en pruebas.

Toda propuesta de IA debe revisarse antes de aplicarse en producción.

---

# 60. Despliegue

El despliegue debe ser reproducible y controlado.

Antes de desplegar debe verificarse:

- Rama correcta.
- Commit correcto.
- Dependencias.
- Variables.
- Migraciones.
- Build.
- Tests.
- Copias.
- Configuración.
- Permisos.
- Cachés.
- Modo debug.
- HTTPS.

No deben editarse archivos de producción manualmente como flujo ordinario.

---

# 61. Migraciones en producción

Antes de ejecutar migraciones debe revisarse:

- Impacto.
- Tiempo.
- Bloqueos.
- Datos existentes.
- Reversibilidad.
- Copia de seguridad.
- Compatibilidad.
- Orden de despliegue.

Las migraciones destructivas deben requerir:

- Plan.
- Confirmación.
- Copia verificada.
- Ventana adecuada.
- Procedimiento de recuperación.

---

# 62. Permisos del sistema

Los permisos de archivos y carpetas deben seguir el mínimo privilegio.

No debe utilizarse:

```bash
chmod -R 777
```

como solución general.

Las carpetas escribibles deben limitarse a las necesarias.

El servidor web no debe disponer de permisos de escritura sobre todo el código.

---

# 63. Infraestructura

La infraestructura debe mantenerse:

- Actualizada.
- Con servicios mínimos.
- Con puertos restringidos.
- Con acceso administrativo protegido.
- Con credenciales individuales.
- Con registros.
- Con copias.
- Con HTTPS.
- Con protección frente a intentos automatizados.

El acceso SSH no debe compartirse mediante credenciales genéricas cuando pueda evitarse.

---

# 64. Producción

En producción:

- `APP_DEBUG` debe ser `false`.
- Las credenciales deben ser exclusivas del entorno.
- HTTPS debe estar activo.
- Los errores no deben mostrar detalles internos.
- Las copias deben estar operativas.
- Las tareas programadas deben monitorizarse.
- Las colas deben gestionarse correctamente.
- Los permisos deben estar limitados.
- Los secretos no deben aparecer en procesos o logs.
- Las herramientas de desarrollo innecesarias deben evitarse.

---

# 65. Entornos abandonados

Los entornos de pruebas, staging o versiones antiguas pueden convertirse en una vía de acceso.

Deben:

- Inventariarse.
- Protegerse.
- Actualizarse.
- Limitar su acceso.
- Eliminarse cuando dejen de ser necesarios.
- No utilizar datos reales sin protección.

---

# 66. Gestión de incidentes

Un incidente puede incluir:

- Acceso no autorizado.
- Exposición de datos.
- Pérdida de información.
- Malware.
- Cuenta comprometida.
- Secreto filtrado.
- Alteración de contenido.
- Fallo de copias.
- Abuso de formularios.
- Dependencia comprometida.

---

# 67. Respuesta inicial a incidentes

Ante un incidente debe priorizarse:

1. Contener.
2. Proteger evidencias.
3. Revocar accesos.
4. Rotar secretos.
5. Determinar alcance.
6. Restaurar de forma segura.
7. Comunicar a responsables.
8. Documentar.
9. Corregir la causa.
10. Revisar medidas preventivas.

No deben eliminarse logs o evidencias precipitadamente.

---

# 68. Registro de incidentes

Todo incidente relevante debe documentar:

- Fecha.
- Detección.
- Sistemas afectados.
- Datos afectados.
- Acciones realizadas.
- Causa.
- Duración.
- Impacto.
- Recuperación.
- Mejoras.
- Notificaciones aplicables.

La información del incidente debe protegerse.

---

# 69. Divulgación responsable

Debe existir un canal para comunicar vulnerabilidades de forma responsable cuando el proyecto sea público.

No deben publicarse detalles explotables antes de corregir el problema.

Debe diferenciarse entre:

- Informe de seguridad.
- Incidencia de soporte.
- Falsa alarma.
- Abuso.

---

# 70. Evaluación de riesgos

Antes de una funcionalidad sensible debe realizarse una evaluación proporcional.

Debe considerar:

- Activos.
- Amenazas.
- Probabilidad.
- Impacto.
- Controles.
- Riesgo residual.
- Responsables.
- Revisión futura.

No es necesario utilizar un proceso pesado para cada cambio pequeño.

Sí es necesario razonar el riesgo.

---

# 71. Modelado de amenazas

Debe considerarse especialmente para:

- Autenticación.
- Área privada.
- Documentos.
- Formularios.
- APIs.
- Pagos.
- Auditorías.
- Integraciones.
- Exportaciones.
- Administración.
- Recuperación de cuentas.

Preguntas básicas:

1. ¿Quién podría abusar?
2. ¿Qué quiere obtener?
3. ¿Qué entrada controla?
4. ¿Qué datos se exponen?
5. ¿Qué ocurre si modifica la petición?
6. ¿Qué ocurre si repite la acción?
7. ¿Qué ocurre si conoce un identificador?
8. ¿Cómo se detecta?
9. ¿Cómo se limita?
10. ¿Cómo se recupera?

---

# 72. Excepciones de seguridad

Una excepción debe ser:

- Necesaria.
- Temporal.
- Limitada.
- Aprobada.
- Documentada.
- Revisada.
- Eliminada al finalizar.

Debe incluir:

- Motivo.
- Riesgo.
- Mitigación.
- Responsable.
- Fecha de revisión.
- Fecha de expiración.

No debe normalizarse una excepción como configuración permanente.

---

# 73. Revisiones periódicas

Deben revisarse periódicamente:

- Usuarios.
- Roles.
- Permisos.
- Dependencias.
- Secretos.
- Integraciones.
- Copias.
- Logs.
- Configuración.
- Entornos.
- Dominios.
- Certificados.
- Políticas.
- Datos conservados.

La periodicidad deberá adaptarse al riesgo y al uso.

---

# 74. Checklist de seguridad para nuevas funcionalidades

Antes de aprobar una funcionalidad:

```text
[ ] Se ha definido la finalidad.
[ ] Se han identificado los datos tratados.
[ ] Se han minimizado los datos.
[ ] Existe validación de servidor.
[ ] Existe autorización.
[ ] Se ha revisado el acceso horizontal y vertical.
[ ] Se ha evaluado el abuso automatizado.
[ ] Se ha aplicado rate limiting cuando corresponde.
[ ] Los archivos son privados si corresponde.
[ ] No se exponen secretos.
[ ] Los logs no contienen información sensible.
[ ] Se han revisado errores.
[ ] Se han añadido pruebas relevantes.
[ ] Se ha revisado la retención.
[ ] Se han evaluado terceros.
[ ] Se ha actualizado la documentación.
```

---

# 75. Checklist previo a producción

```text
[ ] APP_ENV=production.
[ ] APP_DEBUG=false.
[ ] HTTPS activo.
[ ] Cookies seguras.
[ ] Credenciales de producción separadas.
[ ] Secretos fuera del repositorio.
[ ] Migraciones revisadas.
[ ] Copia de seguridad verificada.
[ ] Build generado.
[ ] Tests ejecutados.
[ ] Dependencias auditadas.
[ ] Permisos revisados.
[ ] Formularios protegidos.
[ ] Rate limits activos.
[ ] Logs revisados.
[ ] Monitorización operativa.
[ ] Páginas legales revisadas.
[ ] Datos reales confirmados.
[ ] Archivos privados protegidos.
[ ] Plan de recuperación disponible.
```

---

# 76. Relación con la documentación

Cada documento cumple una función distinta:

| Documento | Responsabilidad |
|---|---|
| `README.md` | Instalación y puesta en marcha |
| `PROJECT_VISION.md` | Propósito y evolución |
| `ARCHITECTURE.md` | Estructura técnica |
| `SECURITY.md` | Seguridad y privacidad |
| `CODEX_RULES.md` | Forma de trabajar |
| `AI_CONTEXT.md` | Memoria operativa |
| `CHANGELOG.md` | Historial de cambios |
| `DECISIONS.md` | Decisiones y justificaciones |

Un cambio de seguridad relevante debe reflejarse también en:

- `CHANGELOG.md`.
- `AI_CONTEXT.md` si genera una lección.
- `ARCHITECTURE.md` si modifica la estructura.
- `DECISIONS.md` si implica una decisión duradera.
- `CODEX_RULES.md` si crea una nueva norma operativa.

---

# 77. Declaración de límites

Este documento establece una política interna del proyecto.

No constituye por sí solo:

- Una auditoría.
- Una certificación.
- Una garantía de invulnerabilidad.
- Una declaración de cumplimiento legal completo.
- Una sustitución del asesoramiento jurídico.
- Una prueba de que todos los controles ya están implementados.

La implementación real debe comprobarse mediante:

- Revisión de código.
- Pruebas.
- Configuración.
- Auditorías.
- Monitorización.
- Mantenimiento continuo.

---

# 78. Principio final

La seguridad no es un estado terminado.

Es un proceso continuo de:

- Diseño.
- Prevención.
- Verificación.
- Detección.
- Respuesta.
- Recuperación.
- Aprendizaje.
- Mejora.

Toda persona o sistema de Inteligencia Artificial que trabaje en este proyecto debe aplicar esta regla:

> Recopilar menos, exponer menos, confiar menos, validar siempre y conceder únicamente el acceso imprescindible.