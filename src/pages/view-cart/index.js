import React from 'react';
import Layout from '../../components/layout';
import Cart from '../../components/cart';

export default function ViewCartPage() {
	return (
		<Layout>
			<Cart stripeToken="pk_test_lGdDk3ZKTN2Q7HJwCylNaR5600YANLK3fY"/>
		</Layout>
	);
}