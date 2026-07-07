let light2 = 0
led.enable(false)
basic.showNumber(67)
basic.showString("Minecraft")
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(1000)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    }
})
