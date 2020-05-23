import React, { useState, useEffect } from 'react'

const items = [
	{ 
		sku: "price_HKKTtIgrAA89Vd", 
		quantity: 1, 
		price: 1799, 
		img: "portable_charger",
		name: "Portable Charger"
	},
	{ 
		sku: "price_HKKS8gNAg3H6XC", 
		quantity: 1, 
		price: 999,
		img: "phone_ring",
		name: "Phone Ring"
	},
	{ 
		sku: "price_HKKSujR3pK5vVg", 
		quantity: 1, 
		price: 1199, 
		img: "phone_stand",
		name: "Phone Stand"
	}
];

// prices in tiems array listed as cents
// function converts to currency format
function formatPrice(price) {
	return `$${(price * 0.01).toFixed(2)}`
}


function totalPrice(items) {
	return items.reduce((total, item) => total + item.quantity * item.price, 0.00)
}

export default function Cart({ stripeToken }) {
	const [stripe, setStripe] = useState(null);

	// similar to componentDidMount
	// if stripeToken were to change, function would be called again
	useEffect(() => {
		if(window.Stripe) setStripe(window.Stripe(stripeToken))
	}, [stripeToken]);

	function checkout() {
		stripe.redirectToCheckout({
			lineItems: items.map(item => ({
				price: item.sku,
				quantity: item.quantity,
			})),
			mode: 'payment',
			successUrl: "https://your-website.com/success",
			cancelUrl: "https://your-website.com/canceled"
		})
	}

	return <div className="wrapper">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Image</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{
				items.map(item => <tr>
						<td>{item.name}</td>
						<td><img src={`/img/${item.img}.jpg`} alt={item.name} width={50}/></td>
						<td>{item.quantity}</td>
						<td>{formatPrice(item.price)}</td>
				</tr>
			)}
			<tr>
				<td style={{textAlign:"right", fontWeight:"bold"}} colSpan={3}>Total:</td>
				<td>{formatPrice(totalPrice(items))}</td>
			</tr>
			<tr>
				<td style={{textAlign:"right"}} colSpan={4}>
					<button id="checkout" onClick={checkout}>Checkout</button>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
}