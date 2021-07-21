import React from 'react'
import './styles.css'
const Login = (props) =>{
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSignup, 
    hasAccount,
    setHasAccount, 
    emailError, 
    passwordError
  } = props;
  return(
    <section className="login">
       <div className="loginContainer">
         <p className="login-title">Log In</p>
        <input 
          type="text" 
          className="login-input"
          placeholder="Email"
          autoFocus 
          value={email} 
          required 
          onChange={(e) => setEmail(e.target.value)} />
          <p className="errorMsg">{emailError}</p> 
       
        <input 
          placeholder="Password"
          className="login-input"
          type="password" 
          value={password} 
          required 
          onChange={(e) => setPassword(e.target.value)} />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="login-btn" onClick={handleLogin}>Sign in</button>
                <p className="login-paragraph">
                  Don't have an account ? 
                  <span className="sign-in-btn" onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                </p>
              </>
            ) : (
              <>
                <button className="login-btn" onClick={handleSignup}> Sign up </button>
                <p>
                  Have an account? 
                  <span className="sign-in-btn" onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
                </p>
              </>
            
            )}
          </div>
       </div>

    </section>
  )
}
export default Login;