import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer';
import Advices from './Components/Advices';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path='/services' Component={Services}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/sign-up' Component={SignUp }></Route>
          <Route path='/advices' Component={Advices }></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
