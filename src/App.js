import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";

function App() {
    return <div className="App">
        <Router>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    </div>;
}

export default App;
