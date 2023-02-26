import React, { useState } from "react";
import FileBase from "react-filebase64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [district, setdistrict] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [aadharNumber, setaadharNumber] = useState("");
  const [signature, setsignature] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [photo, setphoto] = useState("");
  const [pensionerType, setPensionerType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [contact, setcontact] = useState("")

  const photos = photo.image;
  const signatures = signature.image;

  const [statesList, setStatesList] = useState([
    "Select State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ]);

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPensionerType(e.target.value);
  };

  async function Signuphandle(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/Register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
        aadharNumber,
        panNumber,
        pensionerType,
        photos,
        signatures,
        DOB,
        selectedState,
        district,
        accountNumber,
        contact,
        
      }),
    });
    const data = await response.json();

    if (data.message==='User created successfully') {
      alert("Registered successfully")
      // toast.success("Register Successful!", {
      //   position: "top-center",
      //   hideProgressBar: true,
      //   closeOnClick: false,
      //   pauseOnHover: false,
      //   draggable: false,
      //   progress: undefined,
      //   theme: "light",
      // }); 
      window.location.href="/login"       
    } else {
      toast.error("Please try Again !", {
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
  }

  return (
    <>
      <div class="px-5 py-3 p-lg-0">
        <div class="d-flex justify-content-center">
          <div class="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
            <div className="container-fluid">
              <div class="row">
                <div class="col-lg-10 col-md-9 col-xl-12 mx-auto">
                  <div class="text-center mb-12">
                    <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">
                      👋
                    </span>
                    <h1 class="ls-tight font-bolder h2">Register Now</h1>
                  </div>
                  <form class="mb-3" method="POST" onSubmit={Signuphandle}>
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="full_name">
                            Full name
                          </label>
                          <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="full_name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="email">
                            Email
                          </label>
                          <input
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            type="email"
                            class="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row g-5">
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="dob">
                            Contact
                          </label>
                          <input
                            value={contact}
                            onChange={(e) => setcontact(e.target.value)}
                            type="text"
                            class="form-control"
                            id="dob"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="account_number">
                            Account number
                          </label>
                          <input
                            value={accountNumber}
                            onChange={(e) => setaccountNumber(e.target.value)}
                            type="text"
                            class="form-control"
                            id="account_number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label me-3 " for="state">
                            State
                          </label><br/>
                          <select value={selectedState} onChange={handleChange}>
                            {statesList.map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="district">
                            District
                          </label>
                          <input
                            value={district}
                            onChange={(e) => setdistrict(e.target.value)}
                            type="text"
                            class="form-control"
                            id="district"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="aadhar_number">
                            Aadhar Number
                          </label>
                          <input
                            value={aadharNumber}
                            onChange={(e) => setaadharNumber(e.target.value)}
                            type="text"
                            class="form-control"
                            id="aadhar_number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="Pan_number">
                            Pan Number
                          </label>
                          <input
                            value={panNumber}
                            onChange={(e) => setpanNumber(e.target.value)}
                            type="text"
                            class="form-control"
                            id="aadhar_number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          <input
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            type="password"
                            class="form-control"
                            id="password"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="confirm_password">
                            Confirm Password
                          </label>
                          <input
                            required
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            type="password"
                            class="form-control"
                            id="confirm_password"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="aadhar_number">
                            Your Photo
                          </label>
                          <FileBase
                            multiple={false}
                            onDone={({ base64 }) =>
                              setphoto({ ...photo, image: base64 })
                            }
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="aadhar_number">
                            Your signature
                          </label>
                          <FileBase
                            multiple={false}
                            onDone={({ base64 }) =>
                              setsignature({ ...signature, image: base64 })
                            }
                          />
                        </div>
                      </div>
                        <div class="col-md-6">
                          <div class="">
                            <label class="form-label">Family Pensioner</label>
                            <br></br>
                            <input
                              type="radio"
                              id="family"
                              name="pensionerType"
                              value="Yes"
                              checked={pensionerType === "Yes"}
                              onChange={handleTypeChange}
                            />
                            <label class="me-3" htmlFor="family">Yes</label>

                            <input
                              type="radio"
                              id="individual"
                              name="pensionerType"
                              value="No"
                              checked={pensionerType === "No"}
                              onChange={handleTypeChange}
                            />
                            <label htmlFor="individual">No</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                        <div class="">
                          <label class="form-label" for="dob">
                            DOB
                          </label>
                          <input
                            value={DOB}
                            onChange={(e) => setDOB(e.target.value)}
                            type="date"
                            class="form-control"
                            id="dob"
                          />
                        </div>
                      </div>

                      </div>
                    <div>
                      <button type="submit" class="btn btn-primary w-full mt-5">
                        Sign up
                      </button>
                    </div>
                  </form>
                  <div class="my-3">
                    <small>have an account?</small>
                    <a href="/login" class="text-warning text-sm font-semibold">
                      {" "}
                      Sign in
                    </a>
                  </div>
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
  );
};

export default Signup;
