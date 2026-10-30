// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: magic;
// ============ SCRIPTABLE — HTML PLAYER ============
// Вставь весь свой HTML-код игры между обратными кавычками

const htmlCode = `
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Football Manager</title>
<style>
  body { margin: 0; font-family: -apple-system, sans-serif; background: #0a0e14; color: #e6edf3; padding: 20px; text-align: center; }
  h1 { color: #2eff9e; }
</style>
</head>
<body>
  <h1>✅ Игра загружена!</h1>
  <p>Вставь сюда весь свой HTML-код игры.</p>
  <button onclick="alert('Работает!')" style="padding:14px 28px; background:#238636; color:white; border:none; border-radius:8px; font-size:16px;">Проверка</button>
</body>
</html>
`;

// Создаём WebView и загружаем код
const webView = new WebView();
await webView.loadHTML(htmlCode, null, true); // true = fullscreen
await webView.present();