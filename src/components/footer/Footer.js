import React from 'react'
import "./Footer.css"
import play from "../../Assets/play.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top_box">
                <h3>ILOVEPDF</h3>
                <ul className="footer_collection">
                    <li> Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Tools</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer_top_box">
                <h3>PRODUCT</h3>
                <ul className="footer_collection">
                    <li>iLovePDF Desktop</li>
                    <li>iLovePDF Mobile</li>
                    <li>Developers</li>
                    <li>Wordpress Plugin</li>
                    <li>iloveimg.com</li>
                </ul>
            </div>
            <div className="footer_top_box">
                <h3>SOLUTIONS</h3>
                <ul className="footer_collection">
                    <li>Business</li>
                    <li>Education</li>
                </ul>
            </div>
            <div className="footer_top_box">
                <h3>COMPANY</h3>
                <ul className="footer_collection">
                    <li>Our Story</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>Legal & Privacy</li>
                    <li>Contact</li>
                </ul>
                <img src={play} alt="" />
                <img src="https://www.ilovepdf.com/img/logos/app_store.svg" alt="" />
            </div>
        </div>
        <div className="footer_bottom"></div>
    </div>
  )
}

export default Footer