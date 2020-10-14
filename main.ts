dataStreamer.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    dataStreamer.writeNumberArray([input.temperature(), input.lightLevel()])
    dataStreamer.writeLine()
    basic.pause(1000)
})
