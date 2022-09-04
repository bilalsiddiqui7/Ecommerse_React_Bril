import React from 'react'

function RegistrationForm() {
  return (
    <form name="registrationForm" action="">
      <h3>Registration Form</h3>
      <label htmlFor="fname"> Plese enter your first name </label>
      <input type="text" id="fname" name="fname" defaultValue="" />
      <span id="fnameError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your lastname </label>
      <input type="text" id="lname" name="lname" defaultValue="" />
      <span id="lnameError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your mobile number </label>
      <input type="text" id="mobileNo" name="mobileNo" defaultValue="" />
      <span id="mobileNoError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your aadhar number </label>
      <input type="text" id="aadharNo" name="aadharNo" defaultValue="" />
      <span id="aadharNoError" style={{ color: "red" }} />
      <label htmlFor="lname">Please enter your DOB </label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" />
      <span id="dateOfBirthError" style={{ color: "red" }} />
      <input type="submit" defaultValue="Submit" />
    </form>

  )
}

export default RegistrationForm