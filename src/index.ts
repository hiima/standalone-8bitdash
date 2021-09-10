import { BrowserWindow, app } from 'electron'

// TODO: キー入力で最大化 + フレームレス化を切り替えられるように
app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
    webPreferences: {
      nativeWindowOpen: true,
    },
  })

  mainWindow.loadURL('https://www.8bitdash.com')
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
