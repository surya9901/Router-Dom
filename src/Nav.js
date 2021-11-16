import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav_link">
				<li>About</li>
				<li>Shop</li>
			</ul>
		</nav>
	);
}

export default Nav;