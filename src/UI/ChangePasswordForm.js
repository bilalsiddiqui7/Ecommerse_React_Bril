import React, { useState } from 'react'
import { changePassword } from '../services/userService'
import { useNavigate } from "react-router-dom";

function ChangePasswordForm() {
  const [userName, setUserName] = useState()
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = { userName, oldPassword, newPassword }
    changePassword(arr).then((resp) => {
      if (resp === true) {
        navigate("/")
      }
    }).catch((error) => console.log("Error-> " + error))
  }
  return (
    <form name="changePassword" action="changePassword" onSubmit={handleSubmit}>
      <h3>Update your password</h3>
      <label htmlFor="fname"> Plese enter your User Name </label>
      <br />
      <input type="text" id="userName" name="userName" defaultValue="" onChange={(e)=>setUserName(e.target.value)}/>
      <br />
      <label htmlFor="fname"> Plese enter your old password </label>
      <br />
      <input type="text" id="oldPasword" name="oldPasword" defaultValue="" onChange={(e)=>setOldPassword(e.target.value)}/>
      <br />
      <label htmlFor="fname"> Plese enter your new password </label>
      <br />
      <input type="text" id="newPasword" name="newPasword" defaultValue="" onChange={(e)=>setNewPassword(e.target.value)}/>
      <br />
      <label htmlFor="fname"> Plese confirm your new password </label>
      <br />
      <input
        type="text"
        id="confirmPasword"
        name="confirmPasword"
        defaultValue=""
      />
      <br />
      <input type="submit" defaultValue="Submit" />
    </form>

  )
}

export default ChangePasswordForm