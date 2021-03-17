const zetta = require('./zetta/zetta_runtime.js');
const LED = require('./device2.js');

zetta()
    .name("test")
    .use(LED)
    .listen(1234)