import React, { useState } from 'react'
import "../CashApp/Style.css";
import Eye from "../../../assets/Layer 2.svg"
import Cube from "../../../assets/intro-cube 1.svg"
import Cube1 from "../../../assets/intro-cubes 1.svg"
import Piller1 from "../../../assets/intro-pillar 1.svg"
import Piller2 from "../../../assets/intro-stairs 1.svg"

import Mobile from "../../../assets/intro-phone 1.svg"
import Footer from '../Footer/Footer';

function Cash() {
    const [toggle, settoggle] = useState(false)
    return (
      
        <div className='container'>
            <nav className='nav'>
                <div className='ham' onClick={() => settoggle(!toggle)}>
                    {
                        !toggle ?
                        <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                                <div className='dolars'>
                                    <a href="https://icons8.com/icon/RxpP4tTaUhYX/heavy-dollar-sign"></a><a href="https://icons8.com"></a>

                                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/heavy-dollar-sign-emoji.png" alt="heavy-dollar-sign-emoji" />
                                </div>
                            </>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    }
                </div>
                <div className='dolar'>
                    <a href="https://icons8.com/icon/RxpP4tTaUhYX/heavy-dollar-sign"></a><a href="https://icons8.com"></a>

                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/heavy-dollar-sign-emoji.png" alt="heavy-dollar-sign-emoji" />
                </div>


                <div className={toggle ? 'lists active' : 'lists'}>
                    <ul>
                        <li><a href="">SIGN IN</a></li>
                        <li><a href="">LEGAL</a></li>
                        <li><a href="">LICENSES</a></li>
                        <li><a href="">SECURITY</a></li>
                        <li><a href="">CAREERS</a></li>
                        <li><a href="">PRESS</a></li>
                        <li><a href="">SUPPORT</a></li>
                        <li><a href="">STATUS</a></li>
                        <li><a href="">CODEBLOG</a></li>
                    </ul>
                </div>

                <div className='eye'>
                    <img src={Eye} alt="" />
                </div>
            </nav>
            <section className='sec'>
                <div className='centreimg'>
                    <div className='images1'>
                        <img src={Cube} alt="" className='img1' />
                        <img src={Piller2} alt="" className='img3' />
                    </div>
                    <div className='images2'>
                        <img src={Cube1} alt="" className='img2' />
                        <img src={Piller1} alt="" className='img4' />
                    </div>
                </div>
                <div className='images3'>

                    <p className='cash'>CASH</p>
                    <img src={Mobile} alt="" className='mobile' />
                    <p className='app'>App</p>
                </div>
            </section>

            <Footer />
        </div>
                   
    )
}

export default Cash
