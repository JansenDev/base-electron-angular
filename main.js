const { app, BrowserWindow } = require("electron");

const createWindows = () => {
  const win = new BrowserWindow({
    height: 800,
    width: 1400,
  });
  if (process.env.DEBUG) {
    win.loadURL("http://localhost:4200");
  } else {
    win.loadFile("./dist/electron-angular/index.html");
  }
  win.webContents.openDevTools();
};

app.on("activate", () => {
  if (BrowserWindow.getAllWindows.length === 0) createWindows();
});

app.on("ready", createWindows);

app.on("window-all-closed", () => {
  if (process.env.platform !== "darwin") app.quit();
});
