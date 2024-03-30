//deposit button
const deposit_btn = document.getElementById("depositBtn");
deposit_btn.addEventListener("click", function () {
  const depositStringToInt = getInputNumb("depositAmount");

  updateSpanTest("currentDeposit", depositStringToInt);
  updateSpanTest("balanceAmount", depositStringToInt);

  document.getElementById("depositAmount").value = "";
});

//withdraw button
const withdraw_btn = document.getElementById("withdrawBtn");
withdraw_btn.addEventListener("click", function () {
  const withdrawNumb = getInputNumb("withdrawAmount");

  updateSpanTest("withdraw", withdrawNumb);
  updateSpanTest("balanceAmount", -1 * withdrawNumb);
  document.getElementById("withdrawAmount").value = "";
});

//function to parse string input to int
function getInputNumb(idName) {
  const amount = document.getElementById(idName).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanTest(idName, addedNumber) {
  const current = document.getElementById(idName).innerText;
  const currentStringToInt = parseFloat(current);
  const total = currentStringToInt + addedNumber;
  document.getElementById(idName).innerText = total;
}
