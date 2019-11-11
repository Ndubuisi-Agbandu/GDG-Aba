let userBudget, userTotal, userBalance, total, balance, itemPrice;

function userBudgetInput() {
    userBudget = document.getElementById("budget").value;
    document.getElementById("balance").value = userBudget;
}

function itemPriceInput() {
    itemPrice = document.getElementById("price").value;
    document.getElementById("balance").value = userBudget - itemPrice;
    document.getElementById("total").value = itemPrice;
}

function add() {
    let parent = document.getElementById("userInput");
    let child = document.getElementById("userInputChild");
    let addElement = parent.appendChild(child);
}

function remove() {
    let parent = document.getElementById("userInput");
    let child = document.getElementById("userInputChild");
    let removedElement = parent.removeChild(child);
}
