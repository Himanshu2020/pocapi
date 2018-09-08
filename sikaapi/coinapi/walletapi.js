var Walletd = require('turtlecoin-rpc').Walletd;

var wallet = new Walletd({
  host: '127.0.0.1', // ip address or hostname of the walletd host
  port: 11898, // what port is walletd running on
  timeout: 2000, // request timeout
  rpcPassword: 'changeme', // must be set to the password used to run walletd
  
  // RPC API default values
  defaultMixin: 6, // the default mixin to use for transactions
  defaultFee: 0.1, // the default transaction fee for transactions
  defaultBlockCount: 1, // the default number of blocks when blockCount is required
  decimalDivisor: 100, // Currency has many decimal places?
  defaultFirstBlockIndex: 1, // the default first block index we will use when it is required
  defaultUnlockTime: 0, // the default unlockTime for transactions
  defaultFusionThreshold: 10000000, // the default fusionThreshold for fusion transactions
})