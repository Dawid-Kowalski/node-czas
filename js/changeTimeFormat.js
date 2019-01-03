function changeTimeFormat(data) {

	let timeText = "";

	let hours = Math.floor(data / 3600);
	let minutes = Math.floor((Math.floor(data%3600))/60);
	let seconds = (Math.floor(data%3600))%60;

	timeText += hours + " godzin " + minutes + " minut " + seconds + " sekund";

	return timeText;
}

exports.change = changeTimeFormat;