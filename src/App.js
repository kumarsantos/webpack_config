import React from 'react'
import './main.scss';
import btnStyle from './Button.module.css';
import DiceImage from './images/Two.png';


const App = () => {
  return (
    <div id='container'>
      <button className={btnStyle.error}>Error</button> 
      <button className={btnStyle.success}>Success</button> 
      <img src={DiceImage} alt='img' />
      </div>
  )
}

export default App