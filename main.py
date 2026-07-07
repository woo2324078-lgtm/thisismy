led.enable(False)
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)

def on_forever():
    pass
basic.forever(on_forever)
