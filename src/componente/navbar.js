import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div>
        <header>
        <svg viewBox="0 0 960 300">
	<symbol id="s-text">
		<text text-anchor="middle" x="50%" y="80%">KING </text>
    <text text-anchor="middle" x="51%" y="80%">KING </text>
    
	</symbol>
    <g class = "g-ants">
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
	</g>
</svg>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">work</Link>
            <Link to="/contact">contact</Link>
            </nav>
        </header>
        
    </div>
  )
}
