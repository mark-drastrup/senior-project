//replace with your express server IP Address + :3000
const ip = '192.168.10.62'

const apiUrl = `http://${ip}:3000`
const sockethost = `ws://${ip}:3001`

module.exports = { apiUrl, sockethost }