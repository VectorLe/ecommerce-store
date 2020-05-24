import React, { useContext } from 'react';

import { CartContext } from '../cart/context';

export default function ProductCard(props) {
	// allows us to use addToCart function and persist the value of items
	const cartContext = useContext(CartContext);

	return (
		<div className="product-card">
			<img
				src={`/ecommerce-store/img/${props.product.img}.jpg`}
				alt={props.product.name}
			/>
			<div className="info">
				<h1>{props.product.name}</h1>
				<div className="price">{cartContext.formatPrice(props.product.price)}</div>
				<div>
					<button
						className="addToCart"
						onClick={() => cartContext.addToCart(props.product)}
					>
						Add to Cart
					</button>
				</div>
			</div>
        </div>
	);
}