let light2 = 0
led.enable(false)
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
basic.showNumber(67)
basic.showString("Minecraft")
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
