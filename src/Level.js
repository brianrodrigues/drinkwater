const check = "assets/check.svg"

const Level = {
    async init(){
        const lvl = await window.localStorage.getItem('nv');
        if(lvl === null){
            window.localStorage.setItem('nv','beginner')
            return 5400
        }else{
            if(lvl === "beginner"){
                Level.iconBtn("beginner")
                return 5400
            }
            else if(lvl === "intermediary"){  
                Level.iconBtn("intermediary") 
                return 3600
            }
            else if(lvl === "advanced"){
                Level.iconBtn("advanced")
                return 1800

            }
        }
    },
    iconBtn(e){
        
        const btn = document.querySelector(`#${e} img`)
        btn.src = check
    }
}

export {Level}