// require your server and launch it
const server = require('./api/server.js')

server.listen(3000, () => {
  console.log("\nListening on Port 3000\n")
})