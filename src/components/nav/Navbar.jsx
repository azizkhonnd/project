import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='container navWrapper'>
            <div className='NavContainer'>
                <a href="/">
                    <h1>Logo</h1>
                </a>
                <nav className='navbar'>
                    <div className='logo'>
                    </div>
                    <ul className='navItem'>
                        <li className='navMenu'><Link className='navLink' to="/">About</Link></li>
                        <li className='navMenu' ><Link className='navLink' to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='NavSettingsLink'>
                <li className='navMenu'><Link className='navLink' to="/settings">Settings</Link></li>
            </div>
        </div>
    );
}

export default Navbar;
