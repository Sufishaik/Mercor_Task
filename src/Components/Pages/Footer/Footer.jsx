import React from 'react'
import AppleIcon from "../../../assets/Vector (3).svg"
import Media from "../../../assets/Vector (4).svg"
import Message from "../../../assets/Vector (5).svg"
import Twitter from "../../../assets/Vector (6).svg"
import Arrow from "../../../assets/Vector (2).svg"
import Insta from "../../../assets/Frame.svg"
import "../Footer/FooterStyle.css"
function Footer() {
    return (
      
            <footer className='footercont'>

                <div className='icons'>
                    <div className='icon'>
                        <img src={AppleIcon} alt="" />
                        <p>App Store</p>
                    </div>
                    <div className='icon'>
                        <img src={Media} alt="" />

                        <p>GOOGLEPLAY</p>
                    </div>
                </div>





                <div className='mediaicons'>
                <img src={Arrow} alt="" className='arrow' />

                    <p className='para'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                        <div className='socialmedia'>
                    <img src={Message} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Insta} alt="" />
                        </div>
                            
                </div>

            </footer>
       
    )
}

export default Footer
