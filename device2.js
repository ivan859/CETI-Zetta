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
        .map("turn-of", this.turnOff)
        .map("turn-on",this.turnOn);
}

LED.prototype.turnOff = function(callback) {
    this.state = "off";
    callback();
}

LED.prototype.turnOn = function(callback) {
    this.state = "on";
    callback();
}