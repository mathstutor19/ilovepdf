import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/logo.svg"
import {AiFillCaretDown} from "react-icons/ai"
import {GoDesktopDownload} from "react-icons/go"
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={logo} alt="" className='logo' />
       <ul className="navbar_collection">
           <li>MERGE PDF</li>
           <li>SPLIT PDF</li>
           <li>COMPRESS PDF</li>
           <li>CONVERT PDF <AiFillCaretDown/></li>
           <li>ALL PDF TOOLS <AiFillCaretDown/></li>
       </ul>
       <GoDesktopDownload className='download_svg'/>
       <div className="navbar_login_wrapper">
            <button className='navbar_login_btn'>Log in</button>
            <button className='navbar_sign_btn'>Sign up</button>
       </div>
       <FaBars className='bars'/>
    </div>
  )
}

export default Navbar