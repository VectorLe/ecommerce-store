import React, { useState, createContext } from 'react';

export const CartContext = createContext(null);

// wrap around App.js
export default function CartProvider({ children }) {
	const [items, setItems] = useState([])

	function addToCart(item) {
		// appends item to previous state array items
		setItems(prevState => [...prevState, item])
	}

	// look for items
	function itemsWithQuantities(items) {
		return items.reduce((total, item) => {
			const found = total.find(_item => _item.sku === item.sku)
			if(found) {
				found.quantity += 1;
			}
			else {
				total.push({
					quantity: 1,
					...item
				})
			}
			return total
		}, []);
	}

	return (
		<CartContext.Provider
			value={{
				items: itemsWithQuantities(items),
				addToCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};