const os = require("os");
const changeTimeFormat = require('./changeTimeFormat');

function writeOsInfo() {
	console.log("Platform: " + os.platform());
	console.log("Relase: " + os.release());
	console.log("CPU: " + os.cpus()[0].model);

	let time = changeTimeFormat.change(os.uptime());

	console.log("Uptime: " + time);
	console.log("Username: " + os.userInfo().username);
	console.log("User home dir: " + os.userInfo().homedir);
}

exports.print = writeOsInfo;