def Feu_orange():
    pass
def Feu_vert():
    pass
def Feu_rouge():
    Eteindre_tout()
    pins.digital_write_pin(DigitalPin.P0, 0)
def Eteindre_tout():
    pass
radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
