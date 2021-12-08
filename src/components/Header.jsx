import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav style={{ margin: 10 }}>
            <Link to='/' style={{ margin: 5 }}>Home</Link>
            <Link to='/about' style={{ margin: 5 }}>About</Link>
        </nav>
    )
}

export { Header }