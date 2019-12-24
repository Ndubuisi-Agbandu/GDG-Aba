let userBudget, userTotal, userBalance, total, balance, itemPrice;

function userBudgetInput() {
	// What this function is doing is to take the value of the user's Budget that set and display it in the Balance input box.
	userBudget = document.getElementById("budget").value;
	document.getElementById("balance").value = userBudget;
}

function itemPriceInput() {
	itemPrice = document.getElementById("price").value;
	document.getElementById("balance").value = userBudget - itemPrice;
	document.getElementById("total").value = itemPrice;
}

function addInputElements() {
	let userInputDiv = document.getElementById('userInput');
	let parent = document.createElement('div');
	parent.id = 'userInputChild';
	let itemInputElement = document.createElement('input');
	itemInputElement.id = 'item';
	let itemInputElementAttribute = document.createAttribute('placeholder');
	itemInputElementAttribute.value = 'Item';
	itemInputElement.setAttributeNode(itemInputElementAttribute);
	parent.appendChild(itemInputElement);

	let priceInputElement = document.createElement('input');
	priceInputElement.id = 'price';
	let priceInputElementAttribute = document.createAttribute('placeholder');
	priceInputElementAttribute.value = 'Price';
	priceInputElement.setAttributeNode(priceInputElementAttribute);
	parent.appendChild(priceInputElement);

	let closeButton = document.createElement('a');
	closeButton.id = 'close';
	closeButton.className = 'fa fa-close';
	parent.appendChild(closeButton);
	userInputDiv.appendChild(parent);

	closeButton.addEventListener('click', function (e) {
		e.target.parentNode.remove();
	})
}


function remove() {
	let child = document.getElementById('userInputChild');
	child.remove();
}

function removeAll() {
	let userInputDiv = document.querySelector('#userInput');
	userInputDiv.innerHTML = '';
}