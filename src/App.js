import { Notifyer } from "./Notifyer.js";
import {Menssage} from "./Menssage.js";
import {Menu} from "./Menu.js";
import {Level} from "./Level.js";
import {Timer} from "./Timer.js";
import {Emitter} from "./Emitter.js"



const App = {
  async start() {
    App.btnStart()
    try {
      Menu.init()
      Level.init()
      Menssage.init("start")
      await Notifyer.init() 
    }catch(err) {
      console.log(err.message)
      Menssage.init("permission")
    }
  },
  btnStart(){
    Menssage.btn.addEventListener("click", () => {
      Menssage.containerMenssage.classList.add("hide");
      Menssage.containerTimer.classList.remove("hide");
      Emitter.on("countdown-start", Notifyer.notify(Notifyer.bodyNotify));
      Emitter.on("countdown-end", () => {
        Timer.init();
      });
      Timer.init();
    });
  }
};

export { App };
