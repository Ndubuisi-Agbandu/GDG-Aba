let addInputElements = document.querySelector('#add');
addInputElements.addEventListener('click', () => {
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

	closeButton.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});
});




let removeSingleElementButton = document.querySelector('#close');
removeSingleElementButton.addEventListener('click', () => {
	let child = document.getElementById('userInputChild');
	child.remove();
});



let removeAllButton = document.querySelector('#removeAll');
removeAllButton.addEventListener('click', () => {
	let userInputDiv = document.querySelector('#userInput');
	userInputDiv.innerHTML = '';
});

