import { Link } from 'react-router-dom'

function NewHeader() {
    return (
        <>
            <section className="nav">
                <div class="nav-logo">
                    <img src='./assets/logo/MAS (1).png' alt='logo-home' />
                </div>

                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' for="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/contact-us'>Contact us</Link></li>
                </ul>
            </section>
        </>
    );
}

export default NewHeader;