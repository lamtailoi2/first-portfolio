import { useEffect, useRef, useState } from 'react'
import './index.css'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
function App() {

  const [active, setActive] = useState(false);
  console.log();
  const handleClick = () => {
    setActive(!active)
  }
  console.log(active);

  return (
    <>

      <Header
        activeState={active}
        handleClick={handleClick}
      />
      
      { active && <Home /> || <Blog /> }

      <Footer />


    </>
  )
}

export default App
