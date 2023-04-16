import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import "./work.css"
import ops_1 from "../img/ops_1.png"
import ptts_1 from "../img/ptts_1.png"
import chat_1 from "../img/chat_1.png"
import pdi_1 from "../img/pdi_1.png"
import ei_1 from "../img/ei_1.png"
import art_1 from "../img/art_1.png"
import medal_1 from "../img/medal_1.png"

export const Work = () => {
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
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
    <div className='state'  data-aos="fade-right"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a1 s1">
      <div >
        <img class="image" src={ops_1}/>
      </div>
      <div class="text"><h2>Online parking System</h2>
       <br></br> 
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
{/* <p>It is the project that make e feel like doing a great one. It is a combination of both hardware and software. This is a kind of project im searching from my 1st year. Any ways at my 5th semester I had a great team, there we used to teach within us, by doing mistakes and corrections we came up with the demo prototype model and won a price in Bannari Amman Institute of Technology, Coimbatore, TamilNadu.</p> */}
    </div>
    <div className='state'  data-aos="fade-left"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a2 s1">
      <div class="image1">
        <img src={ptts_1}/>
      </div>
      <div class="text"><h2>Personalised therapy and training sessions</h2>
       <br></br>
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
{/* <p>It is one of my favourite project. It give me the frist price at Kongu Engineerin College, Ideathon'2021. This is done with the not regular coding. For this I learn java, java-FX, java-script and other languages related to java special for this peoject. then I created a demo model and then I created a really working app with the help of android studios and then I presented this with my team in many idea and paper presentatons.</p> */}
<div className='state'  data-aos="fade-right"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a1 s1">
      <div >
        <img class="image" src={chat_1}/>
      </div>
      <div class="text"><h2>Chat bot</h2>
       <br></br> 
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
    </div>
    </div>
    <div className='state'  data-aos="fade-left"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a4 a2  s1">
      <div class="image1">
        <img src={[pdi_1]}/>
      </div>
      <div class="text"><h2>Plant disease identification</h2>
       <br></br>
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
    </div>
<div className='state'  data-aos="fade-right"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a1 s1">
      <div >
        <img class="image5" src={ei_1}/>
      </div>
      <div class="text"><h2>Effective Internet</h2>
       <br></br> 
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
    </div>
    <div className='state'  data-aos="fade-left"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a4 a2  s1">
      <div class="image1">
        <img src={[art_1]}/>
      </div>
      <div class="text"><h2>Art works</h2>
       <br></br>
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
    </div>
    <div className='state'  data-aos="fade-right"     data-aos-offset="300"     data-aos-easing="ease-in-sine"> 
    <div class="container a1 s1">
      <div >
        <img class="image5" src={medal_1}/>
      </div>
      <div class="text"><h2>Sports achivements</h2>
       <br></br> 
        <br></br><br></br><button className='btn btn-3 as'><span>Work done</span></button>
    </div>
    </div>
    </div>
    </div>
  )
}
