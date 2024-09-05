const os = require('os');

function getIP() {
    const networkInterfaces = os.networkInterfaces();
    var IP = "127.0.0.1";
    Object.keys(networkInterfaces).forEach((interfaceName) => {
        networkInterfaces[interfaceName].forEach((iface) => {
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(iface.address);
                IP = iface.address;
            }
        });
    });
    return IP;
}

const CONFIG = {
    PORT: 3001,
    ADDRESS: getIP(),
}

module.exports = CONFIG;