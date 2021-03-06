import React, { useState, createContext } from 'react';

// null avoids undefined value
export const CartContext = createContext(null);

// wrap around App.js, which is passed a child
export default function CartProvider({ children }) {
	// items is a state state array that is changed by setItems
	const [items, setItems] = useState([]);

	function addToCart(item) {
		// appends item to previous state array items
		// ...prevState spreads previous state array into new array with appended item
		setItems(prevState => [...prevState, item]);
	}

	// prices in items array listed as cents
	// function converts to currency format
	function formatPrice(price) {
		return `$${(price * 0.01).toFixed(2)}`
	}

	// look for items and set quantities
	// compares sku between items state array and list of products 
	function itemsWithQuantities(items) {
		return items.reduce((cart, item) => {
			const found = cart.find(_item => _item.sku === item.sku)
			// if item is already in cart, increase quantity of it
			if(found) {
				found.quantity += 1;
			}
			// otherwise if item is not in the cart, put it in the cart
			else {
				cart.push({
					quantity: 1,
					sku: item.sku,
					price: item.price,
					img: item.img,
					name: item.name
				})
			}
			return cart
		// returns an array (items in the cart) that is initially empty, built up by total
		}, []);
	}

	return (
		<CartContext.Provider
			// value is persisted throughout the children, like "global" throughout components
			value={{
				items: itemsWithQuantities(items),
				itemsCount: items.length,
				formatPrice,
				addToCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};