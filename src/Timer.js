import {Level} from "./Level.js"
import {View} from "./View.js"
import {Emitter} from "./Emitter.js"



const Timer = {
    currentTime: 0,
    interval: null,
    timeToHours: time => Math.floor(time / 3600),
    timeToMinutes: time => Math.floor((time % 3600 ) / 60),
    timeToSeconds: time => time % 60,

    formatTime: time => String(time).padStart(2,'0'),

    async init(){
        Emitter.emit('countdown-start')
       const lvl = await Level.init();
       Timer.currentTime = lvl;
       Timer.interval = setInterval(Timer.countdown,1000)

      
    },
    countdown(){
        Timer.currentTime -= 1
        const hours = Timer.formatTime(Timer.timeToHours(Timer.currentTime))
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))
        View.render({
            hours,
            minutes,
            seconds
        });


        if(Timer.currentTime === 0) {
            clearInterval(Timer.interval)
            Emitter.emit('countdown-end')
            return;
        }
    }
}

export { Timer}