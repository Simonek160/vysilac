input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.South)
})
radio.setGroup(1)
basic.forever(function () {
	
})
