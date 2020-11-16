function Feu_orange () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Clignotant () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(750)
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
}
function Feu_vert () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Feu_rouge () {
    Eteindre_tout()
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Eteindre_tout () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
radio.setGroup(1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(0)
        basic.pause(1000)
        Feu_vert()
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # #
            # # # # .
            . # . # #
            . . . . .
            `)
        basic.pause(7000)
        Feu_orange()
        basic.pause(3000)
        basic.clearScreen()
        Feu_rouge()
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . . #
            # # # # #
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        radio.sendNumber(2)
        basic.pause(7000)
        radio.sendNumber(1)
        basic.pause(3000)
    }
    for (let index = 0; index < 20; index++) {
        Eteindre_tout()
        basic.clearScreen()
        Clignotant()
        radio.sendNumber(3)
    }
    Eteindre_tout()
    basic.pause(500)
})
