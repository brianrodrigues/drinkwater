const { BrowserWindow, Menu } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 335,
    height: 400,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  });

  win.loadFile("index.html");

  win.on("blur", () => win.hide());

  const template = [];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  return win;
}

module.exports = createWindow();
