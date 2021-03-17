var zetta = require('zetta');
var MemoryRegistries = require('./')(zetta);
var PeerRegistry = MemoryRegistries.PeerRegistry;
var DeviceRegistry = MemoryRegistries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);
