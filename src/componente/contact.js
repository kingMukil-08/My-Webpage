import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import "./contact.css"
import phone_call from "../img/phone_call.png"
import gmail from "../img/gmail.png"
import github from "../img/github.png"

export const Contact = () => {
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

    <div className='total'>
        <div>
        <div className='box s1 phone'data-aos="fade-right">
            <div className='border '>
            <img class='phn' src={phone_call}/><br></br><br></br>
            <h2><span>P</span><span>h</span><span>o</span><span>n</span><span>e</span><span> </span><span>n</span><span>u</span><span>m</span><span>b</span><span>e</span><span>r</span></h2><br></br>
            <h2><span>+</span><span>9</span><span>1</span><span> </span><span>9</span><span>0</span><span>9</span><span>4</span><span>0</span><span> </span><span>3</span><span>8</span><span>6</span><span>3</span><span>7</span></h2>
        </div></div>
    </div>
    <div>
        <div className='box s1 gmail' data-aos="fade-up">
            <div className='border '>
            <img class='gmailp' src={gmail}/><br></br><br></br>
            <h2><span>G</span><span>m</span><span>a</span><span>i</span><span>l</span><span> </span><span>i</span><span>d</span></h2><br></br>
            <h2><span>m</span><span>u</span><span>k</span><span>i</span><span>l</span><span>m</span><span>1</span><span>1</span><span>1</span><span>0</span><span>2</span><span>@</span><span>g</span><span>m</span><span>a</span><span>i</span><span>l</span><span>.</span><span>c</span><span>o</span><span>m</span></h2>
        </div></div>
    </div>
    <div>
        <div className='box s1 git'data-aos="fade-left">
            <div className='border'>
            <img class='gitp' src={github}/><br></br><br></br>
            <h2><span>G</span><span>i</span><span>t</span><span>h</span><span>u</span><span>b</span><span> </span><span>i</span><span>d</span></h2><br></br>
            <h2><span>k</span><span>i</span><span>n</span><span>g</span><span>m</span><span>m</span><span>u</span><span>k</span><span>i</span><span>l</span><span>-</span><span>0</span><span>8</span></h2>
        </div></div></div>
    </div>
    </div>
  )
}
