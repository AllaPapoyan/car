import { useState } from 'react'
import './style.scss'
const Header = () => {

    const [click, setClick] = useState(false)


    let isClick = () => {
        setClick(!click)
    }


    const [color, setColor]= useState(false)
    const changeColor =()=>{
        if(window.scrollY >=90){
            setColor(true)
        }else{
            setColor(false)
        }

    }

    window.addEventListener('scroll',changeColor)
 return(

    <header className={color ? 'header header-bg':"header"} >
    <nav className='navbar ' >
        <p className='navbar-brand'>
        carvilla
        </p>
        <ul
         className={!click ? "menu-items-open" : "menu-items-close aa"}
         >
            <li className='menu-item'>home</li>
            <li className='menu-item'>service</li>
            <li className='menu-item'>featured cars</li>
            <li className='menu-item'>new cars</li>
            <li className='menu-item'>brands</li>
            <li className='menu-item'>contact</li>
        </ul>

        <div class="burger-icon"  onClick={isClick}>
            <div className='burrger-cont'>
            <div className={!click?'icon-1':"close-1"} ></div>
            <div className={!click?'icon-2':"close-2"}></div>
            <div className={!click?'icon-3':"close-3"}></div>
            </div>
        </div>
     
    </nav>
</header>
 )
}

export default Header