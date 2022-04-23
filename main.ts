input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        basic.showString("Temp:")
        basic.showNumber(rtemp)
        mode = 1
    } else if (mode == 1) {
        basic.showString("ll:")
        basic.showNumber(lightlevel)
        mode = 0
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "rtemp") {
        rtemp = value
    } else if (name == "rll") {
        lightlevel = value
    }
})
let lightlevel = 0
let rtemp = 0
let mode = 0
radio.setGroup(12)
mode = 0
loops.everyInterval(1000, function () {
    radio.sendValue("rtemp", input.temperature())
    radio.sendValue("rll", input.lightLevel())
})
