import {useEffect, useRef, useState} from 'react'
import Logo from '/main-logo.svg';
import Toggle from 'react-toggle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import "react-toggle/style.css"

export default function Navbar(props) {
  const navbarRef = useRef();

  window.addEventListener('scroll', activateNav)

  function activateNav() {
    if(window.scrollY > 0) {
        navbarRef.current.classList.add('nav-activated')
    }else{
        navbarRef.current.classList.remove('nav-activated')
    }
  }

  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    if(theme) {
        setTheme(!theme);
        localStorage.setItem('theme', 'white');
        //white
    }else {
        setTheme(!theme);
        localStorage.setItem('theme', 'dark');
        //dark
    }
  }

  let currentTheme = localStorage.getItem('theme');

  useEffect(() => {
    // Setting theme
    theme ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "white")
  }, [theme])

  return (
    <nav ref={navbarRef}>
        <div className='nav-container'>
            <div className="logo"> <a href="#home"><img src={Logo} /></a> </div> 
            <div className="nav-items"> 
                <ul>
                    {
                        props.items.map((item) => {
                            return <li key={item.id}><a href={item.href}>{item.name}</a></li>
                        })
                    }
                    <li className='toggle-item'><Toggle 
                    icons={{
                        checked: <LightModeIcon />,
                        unchecked: <DarkModeIcon />,
                    }}
                    onChange={toggleTheme}
                    />
                    </li>
                    <li className='hamburguer-item'><MenuIcon/></li>
                </ul> 
            </div>
        </div>
    </nav>
  )
}