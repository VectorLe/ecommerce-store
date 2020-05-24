import React from 'react';

// import components
import products from "./data/products";
import ProductCard from './components/product-card';

export default function App() {
	return (
		<div className="wrapper">
			<header><h1>Products</h1></header>
			<div className="card-wrapper">
				{
					products.map(product => (
						<ProductCard product={product} />
		      		))
	      		}
			</div>
		</div>
	);
}