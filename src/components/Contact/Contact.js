import React, { Component } from 'react'
import "./contact.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='headcont'>
            <h1 className='contact'>Contact</h1>
            <p>Contact us and clarify any doubts you have about iLovePDF or report a problem.</p>

            <br/><br/>
            <div className='outputinfo'>
            <label className='label' >Your Name`</label><br/>
            <input className='inp inpname' placeholder='Your Name' /><br/>
            <label className='label' >Your Email`</label><br/>
            <input className='inp inpname' placeholder='Your Email' /><br/>
            <label className='label' >Subject`</label><br/>
            <select className='inp inpselect'>
                <option>Choose a subject</option>
                <option>General information / Contact</option>
                <option>Suggest a feature</option>
                <option>Repost a Problem</option>
                <option>Pricing</option>
                <option>Privacy</option>
                <option>iLovePDF Signature</option>
            </select><br/>
            <label className='label' >Message`</label><br/>
            <textarea className=' writetext' placeholder='Write a message' ></textarea><br/>

            <button className='sentmes' >Sent message</button>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
