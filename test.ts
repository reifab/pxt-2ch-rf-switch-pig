// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.
switchPig.selectRfGroupID(MyEnumGroupIDs.Nif)
basic.forever(function () {
    switchPig.switchPlug(MyEnumPlugLabel.K1, MyEnumState.ON)
    basic.pause(1000)
    switchPig.switchPlug(MyEnumPlugLabel.K1, MyEnumState.OFF)
    basic.pause(1000)
    switchPig.switchPlug(MyEnumPlugLabel.K2, MyEnumState.ON)
    basic.pause(1000)
    switchPig.switchPlug(MyEnumPlugLabel.K2, MyEnumState.OFF)
    basic.pause(1000)
})