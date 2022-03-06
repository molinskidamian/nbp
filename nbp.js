startUp();

async function startUp() {
	const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';
	const response = await fetch(apiUrl);
	const data = await response.json();

	processData(data[0]);
}

function processData(data) {
	const date = document.querySelector('#date');
	const row = document.createElement('div');
	row.classList.add('rate');

	const code = data.effectiveDate;
	date.textContent = code;
}
