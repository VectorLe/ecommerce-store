import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './cart/context';

export default function Navbar() {
	const cartContext = useContext(CartContext);
	const numItemsInCart = cartContext.itemsCount;

	return (
		<div id="navbar">
			<nav>
				<img src="../img/logo.png" alt="logo"/>
				<ul>
					<Link to="/ecommerce-store/" className="nav-link">
                		Shop
                	</Link>
		            <Link to="/ecommerce-store/" className="nav-link">
                		About
                	</Link>
                	<Link to="/ecommerce-store/" className="nav-link">
                		Contact
                	</Link>
                	<Link to="/ecommerce-store/view-cart/" className="nav-link">
                		View Cart ({numItemsInCart})
                	</Link>
				</ul>
			</nav>
		</div>
	);
}