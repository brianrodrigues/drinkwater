import {Menssage} from "./Menssage.js";

const Menu = {
    btnMenu: document.querySelector("#buttonMenu"),
    iconMenu: document.querySelector("#buttonMenu img"),
    btnBeginner: document.querySelector("#beginner"), 
    btnIntermediary: document.querySelector('#intermediary'),
    btnAdvanced: document.querySelector('#advanced'),
    btnDownload: document.querySelector("#download"),
    btnDonate:document.querySelector("#doe"),
    Modal: document.querySelector("#modalMenu"),
    btnInsta:document.querySelector("footer .btnInsta"),
    init(){     
        Menu.pressButton(); 
        
    },
    pressButton(){
        Menu.btnBeginner.addEventListener('click',()=>{
            window.localStorage.setItem('nv',"beginner")
            window.location.reload(true)
        })
        Menu.btnIntermediary.addEventListener('click',()=>{
            window.localStorage.setItem('nv',"intermediary")
            window.location.reload(true)
        })
        Menu.btnAdvanced.addEventListener('click',()=>{
            window.localStorage.setItem('nv',"advanced")
            window.location.reload(true)
        })
        Menu.btnMenu.addEventListener('click',Menu.buttonMenu)

        Menu.btnInsta.addEventListener('click',()=>{
            window.open('https://www.instagram.com/briianrodriigues/', 'target=_blank', 'frame=true,nodeIntegration=no')
        })
        Menu.btnDownload.addEventListener('click',()=>{
            window.location.replace('https://www.drinkwater.ga/download/drinkwater.zip')
        })
        Menu.btnDonate.addEventListener('click',()=>{
        
            window.open('https://www.mercadopago.com/mlb/debits/new?preapproval_plan_id=2c93808478702c4f0178a9a235443ab8','Brian Rodrigues','frame=true,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes')
        })
    },
    buttonMenu(){
        console.log("ok")
        if(Menu.Modal.classList.contains("hide")){
            Menu.iconMenu.src = "assets/close.svg"
            Menu.Modal.classList.remove("hide")
            Menssage.init("menu")
        }else{
            Menu.iconMenu.src = "assets/config.svg"
            Menu.Modal.classList.add("hide")
        }
        
    }
}
export {Menu}