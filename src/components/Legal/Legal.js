import React, { Component } from "react";
import {MdOutlineSecurity, MdOutlinePrivacyTip} from "react-icons/md"
import {ImFilesEmpty} from "react-icons/im"
import {BiCookie} from "react-icons/bi"
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import "./legal.css"
import software from "../../Assets/software.svg"
import software2 from "../../Assets/software2.svg"
import software3 from "../../Assets/software3.svg"
export default class Legal extends Component {
  render() {
    return (
      <div className="legal">
        <Navbar/>
        <div className="headlegal">
          <h1>iLovePDF Data Security and Privacy policies</h1>
          <div className="cardslegal">
            <div className="cardleg">
            <MdOutlineSecurity className="iconlegal" />
              <h3>Security</h3>
              <p>
                All files uploaded to iLovePDF are encrypted using Hypertext
                Transfer Protocol Secure (HTTPS). iLovePDF does not access, use,
                analyze or store any processed data.
              </p>
              <p className="seemore">See more...</p>
            </div>
            <div className="cardleg">
               <MdOutlinePrivacyTip className="iconlegal" />
              <h3>Privacy</h3>
              <p>
                All files uploaded to iLovePDF are encrypted using Hypertext
                Transfer Protocol Secure (HTTPS). iLovePDF does not access, use,
                analyze or store any processed data.
              </p>
              <p className="seemore">See more...</p>
            </div>
            <div className="cardleg">
               <ImFilesEmpty className="iconlegal" />
              <h3>Terms</h3>
              <p>
                All files uploaded to iLovePDF are encrypted using Hypertext
                Transfer Protocol Secure (HTTPS). iLovePDF does not access, use,
                analyze or store any processed data.
              </p>
              <p className="seemore">See more...</p>
            </div>
            <div className="cardleg">
               <BiCookie className="iconlegal" />
              <h3>Cookies</h3>
              <p>
                All files uploaded to iLovePDF are encrypted using Hypertext
                Transfer Protocol Secure (HTTPS). iLovePDF does not access, use,
                analyze or store any processed data.
              </p>
              <p className="seemore">See more...</p>
            </div>
          </div>
          

        </div>
          <div className="banner_software">
              <div className="banner_software_wrapper">
                  <h1>The PDF software trusted by millions of users</h1>
                  <p>iLovePDF is your number 1 web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.</p>
                  <div className="banner_software_images">
                      <img src={software} alt="" />
                      <img src={software2} alt="" />
                      <img src={software3} alt="" />
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
  }
}
