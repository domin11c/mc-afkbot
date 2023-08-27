require('dotenv').config()

const mineflayer = require('mineflayer')
const states = [
    'left', 'right', 'forward', 'back', 'sprint', 'sneak'
]

const bot = mineflayer.createBot({
    host: process.env.mc_host,
    port: process.env.mc_port,
    username: process.env.mc_username
})

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

bot.once('spawn', () => {

    function randomPos() {
        let state = states[Math.floor(Math.random() * states.length)]

        bot.setControlState(state, true)
        setTimeout(() => bot.setControlState(state, false), 250)
    }
    
    function randomJump() {
        if (rand(0, 100) < 25) {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }
    }

    setInterval(() => {
        randomPos()
        randomJump()
    }, 5000)

})