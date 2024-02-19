function colorAdd(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}
function showLastBar(elementId) {
  const showBar = document.getElementById(elementId);
  showBar.classList.remove("hidden");
}
function hideBar(elementId) {
  const hideElement = document.getElementById(elementId);
  hideElement.classList.add("hidden");
}
function getInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
  const totalPrize = document.getElementById(id).innerText;
  const prize = parseInt(totalPrize);
  const totalAmount = prize + value;

  getInnerText("total-cost", totalAmount);
}

function grandTotalCost(id, value) {
  const totalPrize = document.getElementById(id).innerText;
  const prize = parseInt(totalPrize);
  const totalAmount = prize + value;

  getInnerText("grand-total", totalAmount);
}

function totalCostGrand(id, value) {
  const totalPrize = document.getElementById(id).innerText;
  const prize = parseInt(totalPrize);
  const totalAmount = prize + value;

  console.log(totalAmount);
}
