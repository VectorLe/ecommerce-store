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

	return (
		<div className="wrapper">
			<div className="cart-wrapper">
				<h1 className="cart-title">Shopping Cart</h1>
				{
					context.items.map(item => 
							<div className="cart-item">
								<div className="cart-item-img"><img src={`../img/${item.img}.jpg`} alt={item.name} width={150}/></div>
								<div className="cart-item-name">{item.name}</div>
							
							<div className="cart-item-quantity">{item.quantity}</div>
							<div className="cart-item-price"> {formatPrice(item.price * item.quantity)}</div>
					</div>
				)}
				<div className="cart-end">
					<div class="checkout-total">Total: {formatPrice(totalPrice(context.items))}</div>
					<button id="checkout" onClick={checkout}>Checkout</button>
				</div>
			</div>
	</div>
	);
}