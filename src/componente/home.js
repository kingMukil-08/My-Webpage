import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import "./button.css"

export const Home = () => {
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
        <div class="main_bg">
<div class='con'>
    <h1>Hi I'm&nbsp;
   <span class='f1'>M</span>
   <span class='f2'>U</span>
   <span class='f3'>K</span>
   <span class='f4'>I</span>
	<span class='f5'>L</span></h1>
    <p>Focus on what you want to be</p>
    <p>Check my github @kingmukil-08</p>
    <p>Check my resume</p><br></br><br></br>
    <button class="btn btn-3" onclick=" window.open('C:\Users\MUKIL\OneDrive\Documents\BYTES-FS\mine\mine\src\pdf\resume.pdf' ); return true;"><span>Resume</span></button>
</div>
</div>
<div>

<div  className='s1' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    iiissjiii
</div>
<div  className='s1' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    iiissjiii
</div>
<div  className='s1' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    iiissjiii
</div>
</div>
        
    </div>
  )
}

