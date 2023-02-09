var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = initialPrice.value;
    var curr = currentPrice.value;
    var qty = stocksQuantity.value;
    if (ip>0 & qty>0 & curr>0) {
        calculateProfitAndLoss(ip, qty, curr);
    } else {
        showOutput('Please provide all positive values');
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Hey the loss is ${loss.toFixed(2)} and the loss percent is -${lossPercentage.toFixed(2)}%`)
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit.toFixed(2)} and the profit percent is ${profitPercentage.toFixed(2)}%`)
    } else {
        showOutput('No pain no gain and no gain no pain');
    }
}

function showOutput(msg) {
    outputBox.innerHTML = msg;
}