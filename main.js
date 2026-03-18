const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 700,

    alwaysOnTop: true,
    frame: false,
    transparent: false,
    resizable: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

/* ✅ NEW CONTROLS */
ipcMain.on("minimize-window", () => {
  if (win) win.minimize();
});

ipcMain.on("close-window", () => {
  if (win) win.close();
});