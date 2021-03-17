# zetta memory registry

## Install

`npm install zetta-memory-registry`

## Usage

```js
var zetta = require('zetta');
var MemoryRegistries = require('zetta-memory-registry')(zetta);
var PeerRegistry = MemoryRegistries.PeerRegistry;
var DeviceRegistry = MemoryRegistries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);

```

## License

MIT
