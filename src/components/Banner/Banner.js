import React from 'react'
import "./Banner.css"
import {categoriesData} from "../../data/static"
import banner_looking from "../../Assets/banner_looking.png"
import software from "../../Assets/software.svg"
import software2 from "../../Assets/software2.svg"
import software3 from "../../Assets/software3.svg"


const Banner = () => {
  return (
    <div>
        {/* Banner text start */}
        <div className="banner_text">
         <div className="banner_text_wrapper">
         <h1>Every tool you need to work with PDFs in one place</h1>
            <h2>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h2>
         </div>
        </div>
        {/* Banner text End */}

        {/* Banner categories Start */}
            <div className="banner_categories">
                {categoriesData.map((i, inx)=>(
                    <div key={inx} className="banner_category_box">
                        <img src={i.img} alt="" />
                        <h2>{i.title}</h2>
                        <p>{i.text}</p>
                    </div>
                ))}
            </div>
        {/* Banner categories end  */}

        {/* Banner looking start */}
            <div className="banner_looking">
                <div className="banner_looking_wrapper">
                    <div className="banner_looking_wrapper_box"><img src={banner_looking} alt="" /></div>
                    <div className="banner_looking_wrapper_box">
                        <h1>Looking for another solution?</h1>
                        <div className="banner_looking_wrapper_box_text_wrapper">
                        <div className="banner_looking_wrapper_box_text">
                            <h3>iLovePDF Desktop</h3>
                            <p>Download <a href="#sd">iLovePDF Desktop</a>  App to work with your favourite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks offline in seconds.</p>
                        </div>
                        <div className="banner_looking_wrapper_box_text">
                            <h3>iLovePDF Mobile</h3>
                            <p> Get the <a href="#f">iLovePDF Mobile</a> App to manage documents remotely or on the move. Turn your Android or iPhone device into a PDF Editor &amp; Scanner to annotate, sign, and share documents with ease.</p>
                        </div>
                        <div className="banner_looking_wrapper_box_text">
                            <h3>iLoveIMG</h3>
                            <p><a href="#s">iLoveImg</a>  is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks.</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        {/* Banner looking end */}

        {/* Banner Pdf Software start  */}
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
        {/* Banner Pdf Software end */}

        {/* Banner premium start */}
            <div className="banner_premium">
                <div className="banner_premium_box">
                    <h1>Get more with Premium</h1>
                    <h3>Complete projects faster with batch file processing, convert scanned documents with OCR and e-sign your business agreements.</h3>
                </div>
                <div className="banner_premium_box">
                    <button>Get Premium</button>
                </div>
            </div>
        {/* Banner premium end */}


    </div>
  )
}

export default Banner