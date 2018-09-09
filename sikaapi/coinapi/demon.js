var TurtleCoind = require('turtlecoin-rpc').TurtleCoind;

var daemon = new TurtleCoind({
    host: '35.200.205.101', // ip address or hostname of the TurtleCoind host
    port: 10102, // what port is the RPC server running on
    timeout: 2000 // request timeout
  })

  exports.getBlocks = (req, res) => {
    // Validate request
     daemon.getBlocks({
      height: 20
    }).then((blocks) => {
      res.send(blocks);
    })
 
 //   res.send("running ..");

};
