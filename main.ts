input.onButtonPressed(Button.A, function () {
    basic.showNumber(seconds)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "team1") {
        startTimer = input.runningTime()
        basic.showIcon(IconNames.Heart)
    }
})
let elapsedTime = 0
let finishTime = 0
let startTimer = 0
let seconds = 0
radio.setGroup(7)
basic.showString("F")
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength)) >= 800) {
        finishTime = input.runningTime()
        elapsedTime = finishTime - startTimer
        seconds = elapsedTime / 1000
        basic.showIcon(IconNames.Yes)
    }
})
