/**
 * Backend del formulario "Comida de Navidad quickgold".
 * Recibe las respuestas del formulario HTML y las guarda como filas
 * en la hoja de cálculo donde está instalado este script, igual que
 * la pestaña de respuestas de un Google Form.
 *
 * Instalación: ver README.md en la raíz del repositorio.
 */

var SHEET_NAME = 'Respuestas';
var HEADERS = ['Fecha', 'Nombre y apellidos', 'Correo electrónico', 'Plato elegido', 'Intolerancia/alergia', 'Observaciones'];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  var sheet = getSheet_();
  var p = (e && e.parameter) || {};

  sheet.appendRow([
    new Date(),
    p.name || '',
    p.email || '',
    p.plato || '',
    p.intolerancia || '',
    p.observaciones || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Solo para comprobar que la implementación está activa al visitar la URL en el navegador.
function doGet(e) {
  return ContentService.createTextOutput('Endpoint del formulario de Comida de Navidad activo.');
}
