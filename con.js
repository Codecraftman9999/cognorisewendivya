const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertBtn = document.getElementById('convert-btn');
const resultParagraph = document.getElementById('result');

convertBtn.addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = amountInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    const result = amount * exchangeRate;
    resultParagraph.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
function getExchangeRate(from, to) {
    
    const exchangeRates = {
        USD: {
            EUR: 0.84,
            GBP: 0.76
        },
        EUR: {
            USD: 1.19,
            GBP: 0.90
        },
        GBP: {
            USD: 1.32,
            EUR: 1.11
        }
    };
    return exchangeRates[from][to];
}

