input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
        basic.clearScreen()
    }
})
basic.showString("Pulsar A")
