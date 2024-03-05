const { app, BrowserWindow } = require('electron')

// Constante d'initialisation de la première page
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

// Lancement de la première page
app.whenReady().then(() => {
    createWindow()
})

// Fermeture de l'app si toutes les fenêtres sont fermées
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})