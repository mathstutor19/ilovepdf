import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.svg";
import logoCopy from "../../Assets/logo copy.svg";
import { AiFillCaretDown, AiFillCloseSquare } from "react-icons/ai";
import { GoDesktopDownload } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import jpg from '../../Assets/jpg.svg'
import word from '../../Assets/word.svg'
import poverpoint from '../../Assets/powerpoint.svg'
import exel from '../../Assets/excel.svg'
import html from '../../Assets/html.svg'
import jpg2 from '../../Assets/jpg2.svg'
import word2 from '../../Assets/word2.svg'
import poverpoint2 from '../../Assets/powerpoint2.svg'
import exel2 from '../../Assets/excel2.svg'
import pdfA from '../../Assets/pdv.svg'
import split from '../../Assets/split.svg'
import watermark from '../../Assets/watermark.svg'
import unlock from '../../Assets/unlock.svg'
import sign from '../../Assets/sign.svg'
import rotate from '../../Assets/rotate.svg'
import repair from '../../Assets/repair.svg'
import protect from '../../Assets/protect.svg'
import play from '../../Assets/arrow-redo.svg'
import organiza from '../../Assets/organize.svg'
import numbers from '../../Assets/numbers.svg'
import merge from '../../Assets/merge.svg'
import edit from '../../Assets/edit.svg'
import iks from '../../Assets/iks.svg'
import compress from '../../Assets/compress.svg'
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import DesktopMacSharpIcon from '@mui/icons-material/DesktopMacSharp';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import ExtensionSharpIcon from '@mui/icons-material/ExtensionSharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import SmsSharpIcon from '@mui/icons-material/SmsSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { FiBox } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { HiViewGrid } from 'react-icons/hi'
import { CgArrowsH } from "react-icons/cg"
import grey from "@material-ui/core/colors/grey";



const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <ul className="navbar_collection">
                <li>
                    <Link to="/merge">MERGE PDF</Link>
                </li>
                <li>
                    <Link to="/split">SPLIT PDF</Link>
                </li>
                <li>
                    <Link to="">COMPRESS PDF</Link>
                </li>
                <li className="convert">
                    <Link to="">CONVERT PDF
                        <div className="first-dropdown">


                            <div className="dropdown-wrapper">
                                <div className="first-line">
                                    <h2>convert to pdf</h2>
                                    <ul>
                                        <li>
                                            <img src={jpg} alt="jpg" /><span>JPG to PDF</span>
                                        </li>
                                        <li>
                                            <img src={word} alt="word" /><span>WORD to PDF</span>
                                        </li>
                                        <li>
                                            <img src={poverpoint} alt="poverpoint" /><span>POWERPOINT to PDF</span>
                                        </li>
                                        <li>
                                            <img src={exel} alt="exel" /><span>EXCEL to PDF</span>
                                        </li>
                                        <li>
                                            <img src={html} alt="html" /><span>HTML to PDF</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="second-line">
                                    <h2>convert from pdf</h2>
                                    <ul>
                                        <li>
                                            <img src={jpg2} alt="jpg2" /><span>PDF to JPG</span>
                                        </li>
                                        <li>
                                            <img src={word2} alt="word2" /><span>PDF to WORD</span>
                                        </li>
                                        <li>
                                            <img src={poverpoint2} alt="poverpoint2" /><span>PDF to POWERPOINT</span>
                                        </li>
                                        <li>
                                            <img src={exel2} alt="exel2" /><span>PDF to EXCEL</span>
                                        </li>
                                        <li>
                                            <img src={pdfA} alt="pdf/A" /><span>PDF to PDF/A</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link>  <AiFillCaretDown className="dropdown-icon" />
                </li>
                <li className="convert2">
                    <Link to="">ALL PDF TOOLS
                        <div className="second-dropdown">
                            <div className="dropdown-wrapper2 flex-jcsa">
                                <div className="line1">

                                    <ul>
                                        <li>
                                            <h2>organize pdf</h2>
                                        </li>
                                        <li>
                                            <img src={merge} alt="svg" /><span>MERGE PDF</span>
                                        </li>
                                        <li>
                                            <img src={split} alt="svg" /><span>SPLIT PDF</span>
                                        </li>
                                        <li>
                                            <img src={iks} alt="" /><span>REMOVE PAGES</span>
                                        </li>
                                        <li>
                                            <img src={play} alt="svg" /><span>EXTRACT PAGES</span>
                                        </li>
                                        <li>
                                            <img src={organiza} alt="svg" /><span>ORGANIZE PDF</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line2">

                                    <ul>
                                        <li>
                                            <h2>optimize pdf</h2>
                                        </li>
                                        <li>
                                            <img src={compress} alt="svg" /><span>COMPRESS PDF</span>
                                        </li>
                                        <li>
                                            <img src={repair} alt="svg" /><span>REPAIR PDF</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line3">

                                    <ul>
                                        <li>
                                            <h2>convert to pdf</h2>
                                        </li>
                                        <li>
                                            <img src={jpg} alt="jpg" /><span>JPG to PDF</span>
                                        </li>
                                        <li>
                                            <img src={word} alt="word" /><span>WORD to PDF</span>
                                        </li>
                                        <li>
                                            <img src={poverpoint} alt="poverpoint" /><span>POWERPOINT to PDF</span>
                                        </li>
                                        <li>
                                            <img src={exel} alt="exel" /><span>EXCEL to PDF</span>
                                        </li>
                                        <li>
                                            <img src={html} alt="html" /><span>HTML to PDF</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line4">

                                    <ul>
                                        <li>
                                            <h2>convert from pdf</h2>
                                        </li>
                                        <li>
                                            <img src={jpg2} alt="jpg2" /><span>PDF to JPG</span>
                                        </li>
                                        <li>
                                            <img src={word2} alt="word2" /><span>PDF to WORD</span>
                                        </li>
                                        <li>
                                            <img src={poverpoint2} alt="poverpoint2" /><span>PDF to POWERPOINT</span>
                                        </li>
                                        <li>
                                            <img src={exel2} alt="exel2" /><span>PDF to EXCEL</span>
                                        </li>
                                        <li>
                                            <img src={pdfA} alt="pdf/A" /><span>PDF to PDF/A</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line5">

                                    <ul>
                                        <li>
                                            <h2>edit pdf</h2>
                                        </li>
                                        <li>
                                            <img src={rotate} alt="svg" /><span>Rotate PDF</span>
                                        </li>
                                        <li>
                                            <img src={numbers} alt="svg" /><span>Add page numbers</span>
                                        </li>
                                        <li>
                                            <img src={watermark} alt="svg" /><span>Add watermark</span>
                                        </li>
                                        <li>
                                            <img src={edit} alt="svg" /><span>Edit PDF</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line5">

                                    <ul>
                                        <li>
                                            <h2>pdf security</h2>
                                        </li>
                                        <li>
                                            <img src={unlock} alt="svg" /><span>Unlock PDF</span>
                                        </li>
                                        <li>
                                            <img src={protect} alt="svg" /><span>Protect PDF</span>
                                        </li>
                                        <li>
                                            <img src={sign} alt="svg" /><span>Sign PDF</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link> <AiFillCaretDown className="dropdown-icon" />
                </li>
            </ul>
            <Link to=""><GoDesktopDownload className="download_svg" /></Link>


            <div className="navbar_login_wrapper">
                <button className="navbar_login_btn">Log in</button>
                <button className="navbar_sign_btn">Sign up</button>
            </div>


            <div className="right-corner">

                <FaBars className="bars" />
                <div className="right-corner-box">
                    <ul>
                        <li>
                            <img className="first-img" src={logoCopy} alt="" /><span className="first-span">Home</span>
                        </li>
                        <li className="product-list">
                            <FiBox style={{ color: "grey" }} /><span className="second-span">Product</span ><KeyboardArrowRightSharpIcon className="icon first-arrow" />
                            <div className="product-box">
                                <ul>
                                    <li>
                                        <DesktopMacSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Desktop</span>
                                    </li>
                                    <li>
                                        <PhoneAndroidSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Mobile</span>
                                    </li>
                                    <li>
                                        <HiViewGrid className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Features</span>
                                    </li>
                                    <li>
                                        <CgArrowsH className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Api Rest</span>
                                    </li>
                                    <li>
                                        <ExtensionSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /> <span>WOrdpress Plugin</span>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="solution-list">
                            <TipsAndUpdatesSharpIcon style={{ color: "grey" }} /><span>Solution</span><KeyboardArrowRightSharpIcon className="icon second-arrow" />
                            <div className="solution-box">
                                <ul>
                                    <li>
                                        <BusinessSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Bussines</span>
                                    </li>
                                    <li>
                                        <SchoolSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Education</span>
                                    </li>
                                    <li>
                                        <PhoneAndroidSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Developers</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <PaymentSharpIcon style={{ color: "grey" }} /><span>Pricing</span>
                        </li>
                        <li>
                            <LanguageSharpIcon style={{ color: "grey" }} /><span>Language</span><KeyboardArrowRightSharpIcon className="icon third-arrow" />
                        </li>
                        <li className="help-list">
                            <HelpSharpIcon style={{ color: "grey" }} /><span>Help</span><KeyboardArrowRightSharpIcon className="icon fourth-arrow" />
                            <div className="help-box">
                                <ul>
                                    <li>
                                        <Link to="/faq" > <SmsSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>FAQ</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/tools" > <BuildSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Tools</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/legal" > <FaBook className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Legal & Privacy</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/story" > <img src={logoCopy} alt="" /><span className="story">Our Story</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" > <EmailSharpIcon className="product-icon" style={{ color: "rgb(164, 165, 168)" }} /><span>Contact</span></Link>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li>
                            <img style={{ color: "grey" }} className="last-img" src={logoCopy} alt="" /><span className="last-span">iLoveIMG</span>
                        </li>
                    </ul>
                </div>

            </div>






        </div>
    );
};

export default Navbar;
