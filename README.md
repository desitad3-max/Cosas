# Comida de Navidad quickgold

Formulario web independiente (no depende de Claude ni de ninguna cuenta): cualquiera con el enlace puede rellenarlo desde el móvil o el ordenador, sin iniciar sesión en nada. Las respuestas se guardan en una hoja de Google Sheets, igual que hacía el Google Form original.

## Qué hay en este repositorio

- `index.html` → el formulario (ya tiene el logo y los colores de quickgold incrustados). Se publica automáticamente en GitHub Pages en cada push a `main`.
- `backend/Code.gs` → el script que recibe las respuestas y las escribe en una hoja de cálculo de Google.
- `.github/workflows/pages.yml` → el workflow que publica `index.html` en GitHub Pages automáticamente.

## Paso 1 — Activar GitHub Pages (una sola vez, un clic)

1. Entra en este repositorio en GitHub → **Settings → Pages**.
2. En "Build and deployment", en **Source**, elige **GitHub Actions** (si no está ya elegido).
3. Guarda. El workflow ya incluido se encarga del resto: en 1–2 minutos tendrás una URL del tipo `https://desitad3-max.github.io/Cosas/`.

Esa URL es la que compartiréis con el equipo.

## Paso 2 — Crear la hoja de respuestas en Google

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja de cálculo nueva, por ejemplo **"Comida de Navidad 2026 — Respuestas"**.
2. En esa hoja, ve a **Extensiones → Apps Script**.
3. Borra el contenido por defecto de `Código.gs` y pega ahí todo el contenido de `backend/Code.gs` de este repositorio.
4. Guarda el proyecto (`Ctrl/Cmd + S`).

## Paso 3 — Publicar el script como aplicación web

1. Arriba a la derecha, **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. **Ejecutar como**: tu cuenta. **Quién tiene acceso**: **Cualquier usuario** (imprescindible para que nadie necesite iniciar sesión).
4. Implementa y autoriza los permisos (es tu propio script).
5. Copia la URL que termina en `/exec`.

Puedes comprobar que funciona pegando esa URL en el navegador: debe mostrar "Endpoint del formulario de Comida de Navidad activo."

## Paso 4 — Conectar el formulario con el script

1. Edita `index.html` en este repositorio (botón del lápiz en GitHub, o clonando el repo).
2. Busca la línea:
   ```js
   var FORM_ENDPOINT = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";
   ```
3. Sustituye el texto entre comillas por la URL del Paso 3.
4. Haz commit del cambio en `main`. El workflow volverá a publicar la web automáticamente con el endpoint ya conectado.

## Cómo consultar las respuestas

Abre la hoja de Google Sheets del Paso 2 — cada respuesta aparece como una fila nueva, con fecha, nombre, correo, plato, intolerancia y observaciones.

## Notas

- El logo va incrustado en el propio `index.html`; no hace falta subir ninguna imagen aparte.
- Si alguien envía el formulario dos veces, se guardan dos filas (no hay detección de duplicados).
