import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./components/home/SignIn.js";
import SignUp from "./components/home/SignUp.js";
import Forgot from './components/home/Forgot';
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/sign-in' element={<SignIn/>}  />
        <Route path='/sign-up' element={<SignUp/>}  />
        <Route path='/forgot' element={<Forgot/>}  />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
