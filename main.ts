input.onButtonPressed(Button.A, function () {
    Screenshot.Invert()
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
Screenshot.Save()
Screenshot.SetUOEC(true)
loops.everyInterval(500, function () {
    Screenshot.Rotate(false)
})
