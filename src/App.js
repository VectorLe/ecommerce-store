import React, {useContext} from 'react';

// import components
import Navbar from './components/navbar';
import Cart from './components/cart';
import { CartContext } from './components/cart/context'
import products from "./data/products"

export default function App() {
	// allows us to use addToCart function and persist the value of items
	const cartContext = useContext(CartContext);

	return (
		<div>
			<Navbar />
			{
				products.map(product => (
			        <div>
						<img
							src={`./img/${product.img}.jpg`}
							alt={product.name}
							width={50}
						/>
					<div>{product.name}</div>
					<div>
						<button
							onClick={() => cartContext.addToCart(product)}
						>
							Add to Cart
						</button>
					</div>
			        </div>
	      		))
      		}
			<Cart stripeToken="pk_test_lGdDk3ZKTN2Q7HJwCylNaR5600YANLK3fY"/>
		</div>
	);
}