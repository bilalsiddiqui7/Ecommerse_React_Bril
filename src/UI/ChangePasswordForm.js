import React from 'react'

function ChangePasswordForm() {
  return (
    <form name="changePassword" action="changePassword" onsubmit="validateForm()">
      <h3>Update your password</h3>
      <label htmlFor="fname"> Plese enter your User Name </label>
      <br />
      <input type="text" id="userName" name="userName" defaultValue="" />
      <br />
      <label htmlFor="fname"> Plese enter your old password </label>
      <br />
      <input type="text" id="oldPasword" name="oldPasword" defaultValue="" />
      <br />
      <label htmlFor="fname"> Plese enter your new password </label>
      <br />
      <input type="text" id="newPasword" name="newPasword" defaultValue="" />
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