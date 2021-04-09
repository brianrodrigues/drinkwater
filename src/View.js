const View = {
    render({hours,minutes,seconds}){
        
        var timer = document.querySelectorAll('#timer span')
        if(!timer){
            return;
        }
        const stringTime = `${hours}:${minutes}:${seconds}`
        timer[0].innerText = stringTime;
        timer[1].innerText = stringTime;

    }

}

export {View}