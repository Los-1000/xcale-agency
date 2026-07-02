/**
 * XCALE · Recepción de leads del formulario del sitio → Google Sheets
 * ------------------------------------------------------------------
 * Cómo desplegar (una sola vez):
 *   1. Abre tu Google Sheet donde quieres los leads.
 *   2. Menú  Extensiones ▸ Apps Script  (así el script queda "enlazado" a esa hoja).
 *   3. Pega TODO este archivo, reemplazando el contenido por defecto. Guarda.
 *   4. Implementar ▸ Nueva implementación ▸ tipo "Aplicación web".
 *        - Descripción:  xcale-leads
 *        - Ejecutar como:  Yo (tu cuenta)
 *        - Quién tiene acceso:  CUALQUIER USUARIO   ← IMPRESCINDIBLE
 *          (si sale "Cualquier usuario dentro de xcale.lat", NO sirve:
 *           un visitante del sitio es anónimo. Debe ser "Cualquier usuario".
 *           Si esa opción no aparece, tu admin de Workspace la tiene
 *           bloqueada — ver README.md, punto "Bloqueo de Workspace".)
 *   5. Copia la URL que termina en /exec y pégala en index.html
 *      (constante LEADS_ENDPOINT, marcada con un comentario).
 *
 * Para cambiar el acceso SIN cambiar la URL:
 *   Implementar ▸ Gestionar implementaciones ▸ (lápiz para editar) ▸
 *   cambia "Quién tiene acceso" ▸ Implementar. La URL /exec se conserva.
 */

// Opcional: si el script NO está enlazado a la hoja, pon aquí el ID de la
// hoja (lo que va entre /d/ y /edit en su URL). Si lo dejas vacío usa la
// hoja activa (recomendado cuando lo abres desde Extensiones ▸ Apps Script).
var SPREADSHEET_ID = '';
var SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);

    var params = (e && e.parameter) ? e.parameter : {};

    // Honeypot anti-spam: el campo "website" está oculto en el formulario.
    // Un humano nunca lo rellena; un bot sí. Si viene con datos, lo ignoramos.
    if (params.website) {
      lock.releaseLock();
      return json({ ok: true, spam: true });
    }

    var sheet = getSheet();
    sheet.appendRow([
      new Date(),
      params.nombre || '',
      params.email || '',
      params.whatsapp || '',
      params.empresa || '',
      params.mensaje || '',
      params.origen || ''
    ]);

    lock.releaseLock();
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Permite comprobar en el navegador que la app está viva.
function doGet() {
  return json({ ok: true, service: 'xcale-leads' });
}

function getSheet() {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Empresa', 'Mensaje', 'Origen']);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
