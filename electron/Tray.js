const { app, Tray, Menu } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "logo-25px.png");

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip("Drink Water");

  ////////////////////////////
  ////////////////////////////

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Fechar",
      click: () => {
        app.quit()
      },
    },
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);

  ////////////////////////////
  ////////////////////////////

  return tray;
}

module.exports = createTray();
