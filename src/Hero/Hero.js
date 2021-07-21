import React from 'react'
import './styles.css'
import FormPage from '../FormPage/index';

const Hero = ({handleLogout}) => {
  return(
  <section className="hero">
    <nav>
      <div className="logout-btn-container">
        <button className="logout-btn" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i>Logout</button>
      </div>

      <FormPage className="logout-form"/>
    </nav>
  </section>
  )
}
export default Hero;