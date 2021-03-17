const Device = require('./zetta/zetta_runtime').Device;
const util = require('util');


let LED = module.exports = function() {
    Device.call(this)
}

util.inherits(LED,Device);

LED.prototype.init = function(config) {
    config
        .type("led")
        .state("off")
        .name("test-led")

    config 
        .when("off",{allow : ["turn-on"]})
        .when("on",{allow : ["turn-off"]})
        .map("turn-off", this.turnOff)
        .map("turn-on",this.turnOn);
}

LED.prototype.turnOff = function(callback) {
    console.log("Led Off")
    this.state = "off";
    callback();
}

LED.prototype.turnOn = function(callback) {
    console.log("Led ON")
    this.state = "on";
    callback();
}