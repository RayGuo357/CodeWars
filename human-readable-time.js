function humanReadable(seconds) {
	let hours = Math.floor(seconds / 3600);
	seconds = seconds - (hours * 3600);
	let minutes = Math.floor(seconds / 60);
	seconds = seconds - (minutes * 60);
	return `${hours.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}:${minutes.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}:${seconds.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}`;
};
