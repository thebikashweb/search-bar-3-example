import React from "react"

import * as data from "./items"

import "./App.css"

console.log("data", data)

function App() {
	const [filteredItems, setFilteredItems] = React.useState(data.items)

	React.useEffect(() => {
		setFilteredItems(data.items)
	}, [data])

	const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		let _filteredItems = data.items.filter((item) =>
			item.title
				.toLocaleLowerCase()
				.includes(event.target.value.toLocaleLowerCase()),
		)
		setFilteredItems(_filteredItems)
	}

	return (
		<div className="app">
			<div className="app-wrapper">
				<div className="search-bar">
					<h2>Search items</h2>
					<input
						id="search"
						type="search"
						className="search"
						placeholder="start typing"
						onChange={handleFilter}
					/>
				</div>
				<div className="items-wrapper" id="items-wrapper">
					{filteredItems.map((item) => (
						<div className="item-card" key={item.code}>
							<h2 className="item-card__code">{item.code}</h2>
							<div className="item-card__icon-circle">
								<img src={item.image} alt="banana" />
							</div>
							<p className="item-card__title">{item.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
