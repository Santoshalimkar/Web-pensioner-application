import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';
import Profile from './Components/Pages/Profile/Profile';
import jwt_decode from "jwt-decode";




function App() {
  const userinfo=localStorage.getItem('user')!=="undefined"
  ?JSON.parse(localStorage.getItem('user'))
  :localStorage.clear()

  // console.log(userinfo.token)

if(userinfo){
  var token = userinfo.token;
var decoded = jwt_decode(token);

}





  return (
    <>
      <BrowserRouter>
        <Routes>
          {decoded?<Route path='/' element={<Home id={decoded} />}></Route>:<Route path='/' element={<Home/>}></Route>}
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
         {decoded? <Route path='/profile' element={<Profile id={decoded}/>}></Route>:<Route path='/profile' element={<Profile/>}></Route>}
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
