let userBudget, userTotal, userBalance, total, balance, itemPrice;


userBudget = document.querySelector('#budget');  // Get the value of the user's budget.
userBudget.addEventListener('keyup', function() {
	// Get the value user's budget.
	userBudget = document.getElementById("budget").value;
	// Set the user's balance to the value of the user's budget.
	document.getElementById("balance").value = userBudget;
});




function deductPriceFromBalance() {
	// Get the value of the price of the first item.
	itemPrice = document.getElementById("price").value;
	// The balance should equals, the user's budget minus the item's price.
	document.getElementById("balance").value = userBudget - itemPrice;
	// The total should equals the item's price.
	document.getElementById("total").value = itemPrice;
}



let addInputElements = document.querySelector('#add');
addInputElements.addEventListener('click', function() {
	let userInputDiv = document.getElementById('userInput');
	let parent = document.createElement('div');
	parent.id = 'userInputChild';
	let itemInputElement = document.createElement('input');
	itemInputElement.id = 'item';
	itemInputElement.setAttribute('placeholder', 'Item');
	parent.appendChild(itemInputElement);

	let priceInputElement = document.createElement('input');
	priceInputElement.id = 'price';
	priceInputElement.setAttribute('placeholder', 'Price');
	parent.appendChild(priceInputElement);

	let closeButton = document.createElement('a');
	closeButton.id = 'close';
	closeButton.className = 'fa fa-close';
	parent.appendChild(closeButton);
	userInputDiv.appendChild(parent);

	closeButton.addEventListener('click', function (e) {
		e.target.parentNode.remove();
	});
});




let removeSingleElementButton = document.querySelector('#close');
removeSingleElementButton.addEventListener('click', function() {
	let child = document.getElementById('userInputChild');
	child.remove();
});



let removeAllButton = document.querySelector('#removeAll');
removeAllButton.addEventListener('click', function() {
	let userInputDiv = document.querySelector('#userInput');
	userInputDiv.innerHTML = '';
});