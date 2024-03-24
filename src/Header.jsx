import React, { useState } from "react";
import "./index.css"
function Header(props) {
  return (
    <header>
      <nav className='container-sm bg-purple-500 h-10' style={{ height: "75px" }}>
        <div className='ml-10'>
          <span className={props.activeState ? 'active' : null} onClick={props.handleClick} >Home</span>
          <span className={!props.activeState ? 'active' : null} onClick={props.handleClick}>Blog</span>
        </div>
        <img className='text-3xl logo mr-5 min-w-fit' src="https://brademar.com/wp-content/uploads/2022/05/Pepsi-Logo-PNG-2023-1536x864.png" alt="" />
      </nav>
    </header>
  )
}

export default Header 