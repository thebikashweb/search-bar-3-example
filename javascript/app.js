import * as data from './items.js'

//filter items
let filteredItems = data.items

const searchInput = document.getElementById('search')
const itemsWrapper = document.getElementById('items-wrapper')

//generate indidividual card
const generateCard = (item) => {
	return `<div class="item-card" data-key-${item.code}>
						<h2 class="item-card__code">${item.code}</h2>
						<div class="item-card__icon-circle">
							<img
								src="${item.image}"
								alt="banana"
							/>
						</div>
						<p class="item-card__title">${item.title}</p>
					</div>`
}

//get itemsWrapper item
const getItemsWrapper = (items) => {
	return items.map(item => generateCard(item))
}

//update itemsWrapper
itemsWrapper.innerHTML = getItemsWrapper(filteredItems)


//filter as user type
searchInput.addEventListener('input', (event) => {
	console.log("user typed:", event.target.value)
	filteredItems = data.items.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
	//update itemsWrapper
	itemsWrapper.innerHTML = getItemsWrapper(filteredItems)
})