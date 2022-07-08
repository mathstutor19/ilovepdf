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
function App() {
    return (
        <div>
            <Context.Provider value={""}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/merge" element={<Merge />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;
