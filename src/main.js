// Modules pour la gestion de l'appli et la création de la BrowserWindow native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const { lstatSync } = require("fs");


let mainWindows;

app.whenReady().then(() => {
    mainWindows = new BrowserWindow({
        width: 800,
        height: 600,
        show: true,
        autoHideMenuBar: true,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    });
    mainWindows.webContents.openDevTools();
    mainWindows.loadFile(__dirname + "/index.html")
})

ipcMain.handle("is-file", async (_, path) => {
    return lstatSync(path).isFile();
});

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. Dans ce cas, il est courant
// que les applications et barre de menu restents actives jusqu'à ce que l'utilisateur quitte 
// de manière explicite par Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
