import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const removeToggle = (e) => {
        if (e.pageX <= 200)
            return
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen)
            document.addEventListener('click', (e) => removeToggle(e))
        return () => {
            document.removeEventListener('click', removeToggle)
        };
    }, [isOpen]);

    return (
        <nav className='header'>
                <div
                    className='header__toggle'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    =
                    </div>
                <a className='header__logo' href='/'>
                    <img src='https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png' alt='' />
                </a>
                <div
                    className='header__navbar'
                    style={{
                        left: `${isOpen ? 0 : -100}%`,
                    }}
                >
                    <a href='/' className='items'>Store</a>
                    <a href='' className='items'> Community</a>
                    <a href='' className='items'> About</a>
                    <a href='' className='items'> Support</a>
                </div>        
        </nav>
    )
}