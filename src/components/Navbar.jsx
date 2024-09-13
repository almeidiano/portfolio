import {useRef, useState} from 'react'
import Logo from '/main-logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, ListItem, ListItemText, ListItemButton } from '@mui/material';

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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav ref={navbarRef}>
        <div className='nav-container py-4'>
            <div className="logo"> <a href="#home"><img src={Logo} /></a> </div> 
            <div className="nav-items"> 
                <ul>
                    {
                        props.items.map((item) => {
                            return <li key={item.id}><a href={item.href}>{item.name}</a></li>
                        })
                    }
                    <li className='hamburguer-item' onClick={() => setSidebarOpen(true)}><MenuIcon /></li>
                </ul> 
            </div>
        </div>
        <Drawer open={sidebarOpen} anchor="left" onClose={() => setSidebarOpen(false)}>
            <div style={{ width: 250 }}>
                <div className='sidebar-logo'><img src={Logo} /></div>
                {
                    props.items.map((item) => ( 
                        <ListItem key={item.id}>
                            <ListItemButton href={item.href} onClick={() => setSidebarOpen(false)}> 
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </div>
        </Drawer>
    </nav>
  )
}