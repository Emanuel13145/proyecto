input.onSound(DetectedSound.Loud, function () {
    if (ESTADO == "ENCENDIDO") {
        input.setSoundThreshold(SoundThreshold.Loud, 190)
        pins.digitalWritePin(DigitalPin.P0, 1)
        ESTADO = "APAGADO"
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        ESTADO = "ENCENDIDO"
    }
})
let ESTADO = ""
ESTADO = "ENCENDIDO"
