import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";


// import components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/footer/Footer";


// import pages
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';


function App() {
  return (
    <Context.Provider value={''} >
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

        </Routes>
    
        <Footer/>
        
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
