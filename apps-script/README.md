# Backend gratuito de leads · Google Sheets (Apps Script)

Guarda los envíos del formulario del sitio en una hoja de Google, **gratis e
ilimitado**. Los datos son 100% tuyos.

## El problema que hay que resolver primero

La URL que ya tienes:

```
https://script.google.com/a/macros/xcale.lat/s/AKfycbz…/exec
```

**hoy rechaza a los visitantes anónimos.** Al abrirla sin sesión de `xcale.lat`
Google redirige a una pantalla de inicio de sesión, así que el formulario del
sitio (donde el visitante es anónimo) **no podría guardar nada**. Hay que
reconfigurar el acceso.

## Pasos

1. Abre (o crea) la Google Sheet donde quieres los leads.
2. **Extensiones ▸ Apps Script**. Pega el contenido de `Code.gs` y guarda.
3. **Implementar ▸ Gestionar implementaciones** (si ya existe) o
   **Implementar ▸ Nueva implementación ▸ Aplicación web**.
   - **Ejecutar como:** Yo (tu cuenta).
   - **Quién tiene acceso:** **Cualquier usuario** ← imprescindible.
     - Si la única opción es *"Cualquier usuario dentro de xcale.lat"*, no
       sirve. Ver "Bloqueo de Workspace" abajo.
4. Copia la URL `…/exec`.
   - Si **editaste** la implementación existente, la URL **no cambia** (la que
     ya me pasaste sigue valiendo, ahora sí pública).
   - Si creaste una **nueva**, la URL cambia → pásamela y la actualizo en el HTML.
5. Pega esa URL en `index.html`, en la constante `LEADS_ENDPOINT`
   (está marcada con el comentario `// ← PEGA AQUÍ`).

## Comprobar que quedó público

Abre la URL `…/exec` en una **ventana de incógnito** (sin sesión). Debe
responder:

```json
{"ok":true,"service":"xcale-leads"}
```

Si en su lugar ves una pantalla de **inicio de sesión de Google**, el acceso
sigue restringido → repite el paso 3.

## Bloqueo de Workspace (si "Cualquier usuario" no aparece)

Google Workspace permite al administrador prohibir publicar apps "para
cualquier usuario". Si es tu caso, tienes dos salidas:
- **Admin console** ▸ Apps ▸ Google Workspace ▸ Apps Script ▸ permitir compartir
  fuera del dominio (lo haces tú si eres admin de `xcale.lat`).
- O usar una **cuenta Gmail normal** (no `@xcale.lat`) para crear la hoja y el
  script: las cuentas personales sí permiten "Cualquier usuario" sin trabas.

## Formato de la hoja

El script crea (si no existe) una pestaña **`Leads`** con las columnas:

| Fecha | Nombre | Email | WhatsApp | Empresa | Mensaje | Origen |
|-------|--------|-------|----------|---------|---------|--------|

`Origen` guarda desde qué página se envió (útil para saber qué servicio atrae
más leads).

## Anti-spam

El formulario incluye un campo oculto `website` (honeypot). Los humanos no lo
ven; los bots suelen rellenarlo. Si llega con datos, el script lo descarta en
silencio. Suficiente para este volumen; si algún día llega spam real, se puede
añadir un captcha.
