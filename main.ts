function log (value: number, section: string) {
    datalogger.log(datalogger.createCV(section, value))
}
basic.forever(function () {
    log(input.temperature(), "temperature")
})
