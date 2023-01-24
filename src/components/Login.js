import React from 'react';
import '../styles/login.css'

const Login = () => {
  return (
    <div className='container'>
      <div className='boxLogin'>
        <h1>The movie database</h1>
        <h6>Email</h6>
        <input placeholder='Email'></input>
        <h6>Contraseña</h6>
        <input placeholder='Contraseña'></input>
        <button className='singin'>Sing in</button>
        <p>Usuario: challenge@alkemy.org</p>
        <p>Contraseña: react</p>
      </div>
      <img className='pop1' src={require("../assets/p1.png")} alt="pororo"/>
      <img className='pop2' src={require("../assets/p2.png")} alt="pororo"/>
      <img className='imgBebidas' src={require("../assets/bebida2.png")} alt="bebidas"/>

      <img className='pop3' src={require("../assets/p3.png")} alt="pororo"/>
      <img className='pop4' src={require("../assets/p4.png")} alt="pororo"/>
      <img className='pop5' src={require("../assets/p5.png")} alt="pororo"/>
      <img className='pop6' src={require("../assets/p6.png")} alt="pororo"/>
      <img className='lentes' src={require("../assets/lentes.png")} alt="lentes 3D"/>
    </div>
  )
}

export default Login