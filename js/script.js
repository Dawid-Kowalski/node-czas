const writeOsInfo = require('./writeOsInfo');

process.stdin.setEncoding("utf-8");

process.env.LANG = "pl";

console.log("polecenia:")
console.log("ver - wyświetl wersje");
console.log("lang - wyświetl język");
console.log("OsInfo - informacje o systemie");
console.log("exit - wyjście");

process.stdin.on("readable", function() {

	let input = process.stdin.read();
		
	if(null !== input) {
		let instruction = input.toString().trim();

		process.stderr.write("wpisałeś: " + instruction + "\n");

		switch(instruction) {
				
			case "ver":
				console.log("twoja wersja node: " + process.versions.node);
				break;

			case "lang":
				console.log("twoja wersja językowa: " + process.env.LANG);
				break;

			case "exit":
				process.stdout.write("wyjście");
				process.exit();
				break;

			case "OsInfo":
				writeOsInfo.print();
				break;

			default:
				console.log("nieznana komenda");
		}
	}
})