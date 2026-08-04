# SECURITY.md

# Política de Seguridad
Proyecto: IDH Sistemas
Versión: 1.0

---

# Filosofía

La seguridad es una prioridad absoluta.

Todas las funcionalidades deberán diseñarse siguiendo el principio de "Secure by Default".

Nunca se añadirá una característica que reduzca la seguridad del sistema.

---

# Principios

- Least Privilege.
- Defense in Depth.
- Fail Secure.
- Zero Trust.
- Input Validation.
- Output Escaping.
- Auditabilidad.

---

# Secretos

Nunca escribir:

- API Keys
- Passwords
- Tokens
- Claves privadas
- Credenciales SMTP
- Secretos OAuth

Todos deberán leerse exclusivamente desde:

.env

Nunca subir secretos al repositorio.

---

# Variables sensibles

Ejemplos:

APP_KEY

DB_PASSWORD

MAIL_PASSWORD

AWS_SECRET_ACCESS_KEY

OPENAI_API_KEY

GOOGLE_CLIENT_SECRET

etc.

---

# Autenticación

Utilizar siempre:

Laravel Fortify

Nunca crear autenticación manual.

---

# Contraseñas

Siempre:

Hash::make()

Nunca:

md5

sha1

hash manual

---

# Autorización

Toda acción deberá validar permisos.

No confiar nunca en:

Botones ocultos

Inputs hidden

Javascript

La autorización siempre será del lado servidor.

---

# Validación

Toda entrada del usuario debe validarse.

Ejemplos:

Request Validation

Rules

FormRequest

Nunca confiar en datos enviados por el navegador.

---

# Protección CSRF

Todos los formularios deberán utilizar protección CSRF.

---

# XSS

Escapar siempre cualquier contenido generado por usuarios.

No utilizar:

{!! !!}

salvo necesidad justificada.

---

# SQL Injection

Siempre utilizar:

Eloquent

Query Builder

Bindings

Nunca concatenar SQL manualmente.

---

# Archivos

Validar:

tipo

peso

extensión

mime

Nunca confiar en el nombre del archivo.

Renombrar siempre el archivo.

---

# Descargas privadas

Los documentos privados nunca estarán dentro de:

public/

Utilizar Storage.

Servir mediante controlador autorizado.

---

# Logs

Nunca registrar:

contraseñas

tokens

cookies

API Keys

datos bancarios

---

# Errores

En producción:

APP_DEBUG=false

Nunca mostrar stack traces.

---

# Dependencias

Mantener Composer y NPM actualizados.

Eliminar dependencias no utilizadas.

---

# HTTPS

Todo el sistema debe funcionar mediante HTTPS.

---

# Cookies

Cookies:

HttpOnly

Secure

SameSite=Lax o Strict

---

# Sesiones

Regenerar sesión:

login

logout

cambio de contraseña

---

# Rate Limiting

Aplicar límites en:

login

formularios

APIs

recuperación de contraseña

---

# Auditoría

Registrar:

inicio de sesión

cierre de sesión

cambios importantes

eliminaciones

acciones administrativas

---

# Backups

Realizar copias de seguridad periódicas.

Comprobar periódicamente que puedan restaurarse.

---

# Desarrollo

Nunca desactivar medidas de seguridad "solo para probar".

Si es necesario crear una excepción deberá quedar documentada.

---

# IA

Codex nunca debe:

desactivar validaciones

eliminar middleware

desactivar CSRF

hacer público contenido privado

guardar secretos en código

ignorar permisos

---

# Regla principal

Si existe conflicto entre facilidad de implementación y seguridad:

Siempre gana la seguridad.