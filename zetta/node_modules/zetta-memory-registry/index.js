module.exports = function(zetta) {
  return {
    DeviceRegistry: require('./memory_registry')(zetta),
    PeerRegistry: require('./memory_peer_registry')(zetta)
  };
};
