module.exports = Bitcoin




var webtorrent = require('webtorrent')
var bitcoin = require('bitcoinjs-lib')
var Blockexplorer = require('./explorers/blockexplorer')




function Bitcoin() {
  this.explorers = [];
  this.explorers.push(new Blockexplorer())
}


Bitcoin.prototype.getLatestInfoHash = function(btcAddress) {
  return this.explorers[0].getLatestInfoHash(btcAddress)
}


Bitcoin.prototype.getInfoHashes = function(btcAddress) {
  return this.explorers[0].getInfoHashes(btcAddress)
}


Bitcoin.prototype.isBtcAddress = function(id) {
  try {
    bitcoin.address.fromBase58Check(id)
    return true

  } catch(err) {
    return false
  }
}