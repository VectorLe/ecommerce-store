import React from 'react';


// import components
import Navbar from './components/navbar';
import Cart from './components/cart';

export default function App() {
	return (
		<div>
			<Navbar />
			<Cart stripeToken="pk_test_lGdDk3ZKTN2Q7HJwCylNaR5600YANLK3fY"/>
		</div>
	);
}