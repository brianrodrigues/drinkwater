import Language from "./language.js";

const logo = "assets/logo.png";
const ImgPermission = "assets/permitir.gif";
const msgLogo = Language.textInit;
const msgEmoji = Language.textPermission;

const Menssage = {
  containerMenssage: document.querySelector("#menssage"),
  containerTimer: document.querySelector("#timer"),
  img: document.querySelector("#menssage img"),
  txtMain: document.querySelector("#menssage p"),
  BtnMenssage: document.querySelector("#menssage .button"),
  txtBtn: document.querySelector("#menssage .button p"),
  title: document.querySelector("header .tittle h3"),
  footer: document.querySelector("footer p"),
  btnBeginner:document.querySelector("#beginner .text h5"),
  btnIntermediary:document.querySelector("#intermediary .text h5"),
  btnAdvanced:document.querySelector("#advanced .text h5"),
  btnDownload:document.querySelector("#download p"),
  btnDoe:document.querySelector("#doe p"),
  btn:document.querySelector("#menssage .button"),
  init(e) {
    Menssage.textApp();
    if (e === "start") {
      Menssage.start();
    } else if (e === "permission") {
      Menssage.permission();
    } else if(e === "menu"){
      Menssage.textMenu();
    }else{
      return "error";
    }
  },
  start() {
    Menssage.img.src = logo;
    Menssage.txtMain.innerHTML = msgLogo; 
    Menssage.BtnMenssage.classList.remove("hide")
    Menssage.img.classList.remove("imgPermission")
    Menssage.txtBtn.innerHTML = Language.btnConfirmed; 
  },

  permission() {
    Menssage.img.src = ImgPermission;
    Menssage.txtMain.innerHTML = msgEmoji;
    Menssage.img.classList.add("imgPermission")
    Menssage.BtnMenssage.classList.add("hide")
  },
  textApp(){
    Menssage.title.innerHTML = Language.title
    Menssage.footer.innerHTML = Language.footer 
  },
  textMenu(){
    Menssage.btnBeginner.innerHTML = Language.btnBeginner
    Menssage.btnIntermediary.innerHTML = Language.btnIntermediary
    Menssage.btnAdvanced.innerHTML = Language.btnAdvanced
    Menssage.btnDownload.innerHTML = Language.btnDownload
    Menssage.btnDoe.innerHTML = Language.btnDoe
  },
};

export { Menssage };
