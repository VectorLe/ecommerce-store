import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home'
import ViewCartPage from './pages/view-cart'
import CartProvider from "./components/cart/context"

ReactDOM.render(
	<Router>
		{
			// CartProvider helps provide context so we don't have to pass down values
		}
		<CartProvider>
			<Switch>
				<Route exact path="/" component={Home} /> 
				<Route exact path="/view-cart" component={ViewCartPage} /> 
			</Switch>
		</CartProvider>
	</Router>,
	document.getElementById('root')
);
