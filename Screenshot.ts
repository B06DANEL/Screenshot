//% color=159 weight=100 icon="\uf030" block="Screenshot"
namespace Screenshot {
    //Makes an screenshot of the screen, Modifies it and Loads it
    let screen = [false]
    //UOEC = Update On Every Change
    let UOECb = false
    function floor(num: number) {
        return num - (num % 1)
    }
    //% blockId=SaveScreenshot
    //% block="Save Screenshot"
    export function Save() {
        screen = []
        for (let i = 0; i <= 24; i++){
            screen.push (led.point(i % 5, floor(i / 5)))
        }
    }
    //% blockId=LoadScreenshot
    //% block="Load Screenshot"
    export function Load() {
        basic.clearScreen()
        for (let i = 0; i <= 24; i++) {
            if (screen[i] != false) {
                led.plot(i % 5, floor(i / 5))
            }
        }
    }
    //% blockId=Invert
    //% block="Invert Screenshot"
    export function Invert() {
        for (let i = 0; i <= 24; i++) {
            screen[i] = !screen[i]
        }
        if (UOECb) {
            Load()
        }
    }
    //% blockId=Rotate
    //% block="Rotate Screenshot: Counterclockwise $c"
    //% c.defl=false
    export function Rotate(c: boolean) {
        let rotindex = [5, 10, 15, 20, 25, 4, 9, 14, 19, 24, 3, 8, 13, 18, 23, 2, 7, 12, 17, 22, 1, 6, 11, 16, 21]
        let temp = screen
        let temp2 = [false]; temp2 = []
        if (c) {
            for (let i = 0; i <= 24; i++) {
                temp2.push (temp[rotindex[i]-1])
            }
            screen = temp2
            if (UOECb) {
                Load()
            }
        } else {
            Rotate (true)
            Rotate (true)
            Rotate (true)
        }
    }
    //% blockId=SetUOEC
    //% block="Update On Every Change $c"
    //% c.defl=true
    export function SetUOEC (c: boolean) {
        UOECb = c
    }
}