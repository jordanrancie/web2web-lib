module.exports = Bootstrap




var webtorrent = require('webtorrent')
var Promise = require('bluebird')
var Bitcoin = require('./bitcoin')

var CONFIG = {
  magnetBase: 'magnet:?tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&xt=urn:btih:'
}




function Bootstrap() {
  this.bitcoin = new Bitcoin()
}


Bootstrap.prototype.load = function(id) {
  this.getLatestInfoHash(id).then(function(latestInfoHash) {
    var magnet = CONFIG.magnetBase + latestInfoHash
    var client = new webtorrent()

    client.add(magnet, function(torrent) {
      var file = torrent.files[0]
      file.getBuffer(function(err, buffer) {

        // overwrite current page with new HTML
        document.open()
        document.write(buffer.toString())
        document.close()
      })
    })
  })
}


Bootstrap.prototype.getLatestInfoHash = function(id) {
  if (this.bitcoin.isBtcAddress(id)) {
    console.log('btcAddress', id)
    return this.bitcoin.getLatestInfoHash(id)

  } else {
    return Promise.resolve(id)
  }
}