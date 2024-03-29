input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("?")
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(50)
    basic.showArrow(ArrowNames.East)
    basic.pause(50)
    basic.showArrow(ArrowNames.South)
    basic.pause(50)
    basic.showArrow(ArrowNames.West)
    basic.pause(50)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("G B A G C5 B A B ", 240), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
