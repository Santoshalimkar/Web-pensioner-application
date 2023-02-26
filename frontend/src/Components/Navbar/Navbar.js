import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Navbar = ({id}) => {
    const Navigate=useNavigate()
    const [User, setUser] = useState({})

   
    useEffect(() => {
  
        const getuser=()=>{
            var getuser= JSON.parse(localStorage.getItem("user"));
            setUser(getuser)
        }
        getuser()
    }, [User])
 



  const Logout=()=>{
      localStorage.removeItem("user")
      
}


  const profileredirect=()=>{
    if(User){
      Navigate("/profile")
    }
  }




    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
                <div class="container-xl">

                    <a class="navbar-brand" href="/">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" class="h-8" alt="logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                          <button onClick={profileredirect}  class="nav-item nav-link">Profile</button>
                            <a class="nav-item nav-link" href="/contact">Contact</a>
                            <a class="nav-item nav-link" href="/faq">FAQ</a>
                        </div>

                       {User?(<>

                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                        {id?
                            <p class=" button is-primary is-light btn btn-sm btn-danger w-full w-lg-auto">
                                {id.name}
                            </p>:""}
                            {/* <button class="">Danger</button> */}
                        </div>

                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <button onClick={Logout}  class=" button is-danger  w-full w-lg-auto">
                                Logout
                            </button>
                        </div>
                        
                       </>):(<>
                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <a href="/login" class=" button is-danger is-light btn btn-sm btn-danger w-full w-lg-auto">
                                Login
                            </a>
                            {/* <button class="">Danger</button> */}
                        </div>

                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <a href="/signup" class=" button is-primary  w-full w-lg-auto">
                                Register
                            </a>
                        </div>
                       </>)} 
                    </div>
                </div>
            </nav>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
        </>
    )
}

export default Navbar
