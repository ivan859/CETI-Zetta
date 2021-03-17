const Device = require('./zetta/zetta_runtime').Device;
const util = require('util');


class LED extends Device {
    constructor(){
        super();
        Device.call(this);
        this.state = "off";
    }
    init (config) {
        config 
            .when('off',{
                allow  : ['turn-on']
            })
            .when('on',{
                allow : ['turn-off']
            })
            .map('turn-off',this.turnOff)
            .map('turn-on',this.turnOn);

        config
            .type('led')
            .state('off')
            .name('text-led')
    }
    turnOff = (callback) => {
        this.state = "off";
        callback();
    }
    turnOn = (callback) => {
        this.state = "on",
        callback();
    }
}

module.exports = LED;