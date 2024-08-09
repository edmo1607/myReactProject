import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
       <footer>
         <section>
            <div className='company-info'>
                <img src={logo} alt='logo'/>
                <p>We are a family owened mediterranean restaurant, focused on traditional recipes served with a modern twist</p>

            </div>
            <div>
                <h3>important links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservation</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h3>contact</h3>
                <ul>
                    <li>Address:<br/>123 towncity</li>
                    <li>Phone:<br/>+1 123 456 </li>
                    <li>Email:<br/>littlelemon@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Twitter</a></li>
                </ul>
            </div>
         </section>
       </footer>
    );
};

export default Footer;