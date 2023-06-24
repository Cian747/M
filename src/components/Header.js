import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Navigation container'>
      <div className='nav-logo'>
        <img src='./assets/logo/MAS (1).png' alt='logo-home' />
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/about-us'>About</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        {/* <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Header;

// THe path with be connected using a slash
