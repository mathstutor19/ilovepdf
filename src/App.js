import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Context} from "./context/Context";

// import components
import Navbar from "./components/Navbar/Navbar";

// import pages
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Merge from "./routes/Merge/Merge";
import Split from "./routes/Split/Split";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Story from "./components/Story/Story";
import Legal from "./components/Legal/Legal";
import Tools from "./components/Tool/Tools";
import Business from "./components/Business/Business";
function App() {
    return (
        <div>
            <Context.Provider value={""}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/merge" element={<Merge />} />
                        <Route path="/split" element={<Split />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/story" element={<Story />} />
                        <Route path="/legal" element={<Legal />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/business" element={<Business />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;
