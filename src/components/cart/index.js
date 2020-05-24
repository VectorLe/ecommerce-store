import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './context'

// prices in items array listed as cents
// function converts to currency format
function formatPrice(price) {
	return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
	return items.reduce((total, item) => total + item.quantity * item.price, 0.00)
}

export default function Cart({ stripeToken }) {
	const [stripe, setStripe] = useState(null);
	// allows us to use the values of products through the context's items state array
	const context = useContext(CartContext);

	// similar to componentDidMount
	// if stripeToken were to change, function would be called again
	useEffect(() => {
		if(window.Stripe) setStripe(window.Stripe(stripeToken))
	}, [stripeToken]);

	function checkout() {
		stripe.redirectToCheckout({
			lineItems: context.items.map(item => ({
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
				context.items.map(item => <tr>
						<td>{item.name}</td>
						<td><img src={`/img/${item.img}.jpg`} alt={item.name} width={50}/></td>
						<td>{item.quantity}</td>
						<td>{formatPrice(item.price * item.quantity)}</td>
				</tr>
			)}
			<tr>
				<td style={{textAlign:"right", fontWeight:"bold"}} colSpan={3}>Total:</td>
				<td>{formatPrice(totalPrice(context.items))}</td>
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