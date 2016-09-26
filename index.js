module.exports = Web2Web




var Bootstrap = require('./lib/bootstrap')
var Bitcoin = require('./lib/bitcoin')




function Web2Web() { }


/**
 * Bootstraps a webpage from torrent or btc address.
 *
 * @param {string} id - Btc address or torrent info hash
 */
Web2Web.prototype.bootstrap = function(id) {
  var bootstrap = new Bootstrap()
  bootstrap.load(id)
}


/**
 * Loads torrent info hashes from a btc address.
 * Returns them sorted by transaction date DESC.
 *
 * @param {string} btcAddress - Btc address
 * @return {Promise} Array of torrent info hashes
 */
Web2Web.prototype.getInfoHashes = function(btcAddress) {
  var bitcoin = new Bitcoin()
  return bitcoin.getInfoHashes(btcAddress)
}