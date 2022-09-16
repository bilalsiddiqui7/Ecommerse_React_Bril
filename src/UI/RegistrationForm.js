import React, { useState } from 'react'
import {registration} from '../services/userService'
import { useNavigate } from "react-router-dom";
function RegistrationForm() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [mobileNum, setMobileNum] = useState()
  const [aadharNum, setAadharNum] = useState()
  const [dob, setDob] = useState()

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = { firstName, lastName, mobileNum, aadharNum, dob }
    registration(arr).then((resp) => {
      if (resp === true) {
        navigate("/")
      }
    }).catch((error) => console.log("Error-> " + error))
  }
  return (
    <form name="registrationForm" onSubmit={handleSubmit}>
      <h3>Registration Form</h3>
      <label htmlFor="fname"> Plese enter your first name </label>
      <input type="text" id="fname" name="fname" defaultValue="" onChange={(e)=>setFirstName(e.target.value)}/>
      <span id="fnameError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your lastname </label>
      <input type="text" id="lname" name="lname" defaultValue="" onChange={(e)=>setLastName(e.target.value)}/>
      <span id="lnameError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your mobile number </label>
      <input type="text" id="mobileNo" name="mobileNo" defaultValue="" onChange={(e)=>setMobileNum(e.target.value)} />
      <span id="mobileNoError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your aadhar number </label>
      <input type="text" id="aadharNo" name="aadharNo" defaultValue="" onChange={(e)=>setAadharNum(e.target.value)}/>
      <span id="aadharNoError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your DOB </label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={(e)=>setDob(e.target.value)}/>
      <span id="dateOfBirthError" style={{ color: "red" }} />
      <input type="submit" defaultValue="Submit" />
    </form>

  )
}

export default RegistrationForm