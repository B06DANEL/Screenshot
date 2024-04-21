//% color=159 weight=100 icon="\uf030" block="Screenshot"
namespace screenshot {
    //Makes an screenshot of the screen, Modifies it and Loads it
    let screen = [false]
    let screenshots = [[false]]
    let screenshotname = ["Dummy"]
    //UOEC = Update On Every Change
    let UOECb = false
    let lastscreenshot = ""

    function floor(num: number) {
        return num - (num % 1)
    }
    //% blockId=saveScreenshot
    //% block="save screenshot named $name"
    export function save(name: string) {
        screen = []
        lastscreenshot = name
        for (let i = 0; i <= 24; i++){
            screen.push (led.point(i % 5, floor(i / 5)))
        }
        screenshots.push(screen)
        screenshotname.push(name)
    }
    //% blockId=LoadScreenshot
    //% block="load screenshot named $name"
    export function load(name: string) {
        basic.clearScreen()
        lastscreenshot = name
        screen = screenshots[screenshotname.indexOf(name)]
        for (let i = 0; i <= 24; i++) {
            if (screen[i] != false) {
                led.plot(i % 5, floor(i / 5))
            }
        }
    }
    //% blockId=Invert
    //% block="invert screenshot"
    export function invert() {
        screen = screenshots[screenshotname.indexOf(lastscreenshot)]
        for (let i = 0; i <= 24; i++) {
            screen[i] = !screen[i]
        }
        screenshots[screenshotname.indexOf(lastscreenshot)] = screen
        if (UOECb) {
            load(lastscreenshot)
        }
    }
    //% blockId=Rotate
    //% block="rotate screenshot: counterclockwise $c"
    //% c.defl=false
    export function rotate(c: boolean) {
        screen = screenshots[screenshotname.indexOf(lastscreenshot)]
        let rotindex = [5, 10, 15, 20, 25, 4, 9, 14, 19, 24, 3, 8, 13, 18, 23, 2, 7, 12, 17, 22, 1, 6, 11, 16, 21]
        let temp = screen
        let temp2 = [false]; temp2 = []
        if (c) {
            for (let i = 0; i <= 24; i++) {
                temp2.push (temp[rotindex[i]-1])
            }
            screen = temp2
            screenshots[screenshotname.indexOf(lastscreenshot)] = screen
            if (UOECb) {
                load(lastscreenshot)
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
    //%advanced=true
    export function setUOEC (c: boolean) {
        UOECb = c
    }

    //% blockId=PrepareScreenshot
    //% block="prepare screenshot named $c for modifying"
    //% c.defl=true
    //%advanced=true
    export function prepareScreenshot(c: string) {
        lastscreenshot = c
    }
}