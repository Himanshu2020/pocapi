var TurtleCoind = require('turtlecoin-rpc').TurtleCoind;

var daemon = new TurtleCoind({
    host: '127.0.0.1', // ip address or hostname of the TurtleCoind host
    port: 11898, // what port is the RPC server running on
    timeout: 2000 // request timeout
  })

  