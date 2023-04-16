import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import "./about.css"
import "./button.css"
import poc_1st from "../img/poc_1st.png"
import bait_2nd from "../img/bait_2nd.png"

export const About = () => {
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

    <div>
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
        <div className='card' data-aos="fade-up"    data-aos-offset="300"     data-aos-easing="ease-in-sine">            
            <div>
                <img src={poc_1st}/>
            </div>
            <div className='text'>
                <p>First Place at Ideathon'2021, conducted at KEC.</p><br></br><br></br>              
                <button class="btn btn-3"><span>Details</span></button>
            </div>
        </div>
        <div className='card' data-aos="fade-up"     data-aos-offset="300"     data-aos-easing="ease-in-sine">            
            
            
            <div>
                <img src={bait_2nd}/>
            </div>
            <div className='text'>
                <p>Second place in Technolics'2022, conducted at Bannari.</p><br></br><br></br>              
                <button class="btn btn-3"><span>Details</span></button>
            </div>
        </div>
    </div>
    </div>
  )
}