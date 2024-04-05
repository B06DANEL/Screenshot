//% color=159 weight=100 icon="\uf030" block="Screenshot"
namespace screenshot {
    //Makes an screenshot of the screen, Modifies it and Loads it
    let screen = [false]
    //UOEC = Update On Every Change
    let UOECb = false
    function floor(num: number) {
        return num - (num % 1)
    }
    //% blockId=saveScreenshot
    //% block="save screenshot"
    export function save() {
        screen = []
        for (let i = 0; i <= 24; i++){
            screen.push (led.point(i % 5, floor(i / 5)))
        }
    }
    //% blockId=LoadScreenshot
    //% block="load screenshot"
    export function load() {
        basic.clearScreen()
        for (let i = 0; i <= 24; i++) {
            if (screen[i] != false) {
                led.plot(i % 5, floor(i / 5))
            }
        }
    }
    //% blockId=Invert
    //% block="invert screenshot"
    export function invert() {
        for (let i = 0; i <= 24; i++) {
            screen[i] = !screen[i]
        }
        if (UOECb) {
            load()
        }
    }
    //% blockId=Rotate
    //% block="rotate screenshot: counterclockwise $c"
    //% c.defl=false
    export function rotate(c: boolean) {
        let rotindex = [5, 10, 15, 20, 25, 4, 9, 14, 19, 24, 3, 8, 13, 18, 23, 2, 7, 12, 17, 22, 1, 6, 11, 16, 21]
        let temp = screen
        let temp2 = [false]; temp2 = []
        if (c) {
            for (let i = 0; i <= 24; i++) {
                temp2.push (temp[rotindex[i]-1])
            }
            screen = temp2
            if (UOECb) {
                load()
            }
        } else {
            rotate (true)
            rotate (true)
            rotate (true)
        }
    }
    //% blockId=SetUOEC
    //% block="update on every change $c"
    //% c.defl=true
    export function setUOEC (c: boolean) {
        UOECb = c
    }
}