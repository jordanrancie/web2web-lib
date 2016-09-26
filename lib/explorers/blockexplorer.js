module.exports = Blockexplorer




var Promise = require('bluebird')
var simpleget = require('simple-get')




function Blockexplorer() { }


Blockexplorer.prototype.getLatestInfoHash = function(btcAddress) {
  return this.getInfoHashes(btcAddress).then(function(data) {
    return data[0]
  })
}


Blockexplorer.prototype.getInfoHashes = function(btcAddress) {
  var options = {
      url: 'https://blockexplorer.com/api/txs/?address=' + btcAddress,
      json: true
  }

  return new Promise(function(resolve, reject) {
    simpleget.concat(options, function(err, res, data) {
      if (err) {
        reject(err)

      } else {
        var infoHashes = []

        for (var i = 0; i < data.txs.length; i++) {
          for (var j = 0; j < data.txs[i].vout.length; j++) {
            var scriptPubKey = data.txs[i].vout[j].scriptPubKey.asm

            if (scriptPubKey.indexOf('OP_RETURN') !== -1) {
              // extract webpage torrent info hash
              infoHashes.push(scriptPubKey.split(' ').slice(-1)[0])
            }
          }
        }

        resolve(infoHashes);
      }
    })
  })
}