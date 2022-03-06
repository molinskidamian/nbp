startUp();

async function startUp() {
	const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';
	const response = await fetch(apiUrl);
	const data = await response.json();

	processData(data[0]);
}

function processData(data) {
	const tableNumber = document.querySelector('#tableNumber');
	// const h3 = document.querySelector('.container > h3');
	console.log(data);

	const code = data.effectiveDate;
	const table = data.table;
	const tableNum = data.no;
	const ratesArr = data.rates;
	const dataTableDiv = document.querySelector('#data-table');

	tableNumber.textContent = tableNum;

	ratesArr.forEach(function (el) {
		const code = el.code; //USD
		const currency = el.currency; // dolar amerykański
		const price = el.mid; // 3.987

		addRateContent(code, currency, price, dataTableDiv);
	});
}

function addRateContent(code, currency, price, dataTableDiv) {
	const el = document.createElement('div');
	el.classList.add('rate');
	el.innerHTML = `
		<div>${code}</div>
		<div>${currency}</div>
		<div>${price} zł</div>
	`;

	dataTableDiv.append(el);
}
