import React,{useState} from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const Navigate=useNavigate();

          const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const handleLogin = async (e) => {
          e.preventDefault();
          const response = await fetch("http://localhost:8000/Login", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              password,
              email,
            }),
          });
          const data = await response.json();
          localStorage.setItem("user", JSON.stringify(data));
          if (data.message === "Logged in successfully") {
            window.location.href = "/";
          } else {
            toast.error("Something went Wrong try again", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          }
        };









    return (
        <>
            <div class="px-5 py-3 p-lg-0">
                <div class="d-flex justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                        <div class="row">
                            <div class="col-lg-10 col-md-9 col-xl-7 mx-auto">
                                <div class="text-center mb-12">
                                    <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">👋</span>
                                    <h1 class="ls-tight font-bolder h2">
                                        Welcome back!
                                    </h1>

                                </div>
                                <form method='POST' onSubmit={handleLogin}>
                                    <div class="mb-5">
                                        <label class="form-label" for="email">Email address</label>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="email" placeholder="Your email address" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label" for="password">Password</label>
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password" />
                                    </div>
                                    <div>
                                        <button class="btn btn-primary w-full">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <div class="my-3">
                                    <small>Don't have an account?</small>
                                    <a href="/signup" class="text-warning text-sm font-semibold"> Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Login
