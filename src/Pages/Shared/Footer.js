import React from 'react';
import logo from '../../images/Logo.jpg'

const Footer = () => {
    return (
        <div className=''>
            <div className=''>
                <footer class="footer p-10 bg-primary text-white">
                    <div class="items-center grid-flow-col">
                        <img src={logo} alt="" />
                        <p>Utkorsho Academic & Admission Care <br /> Providing reliable education since 1992</p>
                    </div>
                    <div>
                        <span class="footer-title">Help</span>
                        <a class="link link-hover">About Us</a>
                        <a class="link link-hover">Privacy Policy</a>
                        <a class="link link-hover">Terms and Conditions</a>
                    </div>
                    <div>
                        <span class="footer-title">Explore</span>
                        <a class="link link-hover">Programs</a>
                    </div>
                    <div>
                        <span class="footer-title">Get In Touch</span>
                        <p>Address: 490, Satter Market, South Khailqur, <br /> Board-Bazar, Gazipur.</p>
                        <p>Hotline: 01581-480753, 01911-870358</p>
                        <p>Email: utkorsho2019@gmail.com </p>
                    </div>
                </footer>
                <footer class="footer px-10 py-4 border-t bg-primary text-white border-base-300 ">
                    <div class="md:place-self-center text-center">
                        <p>Copyright © 2022 Utkorsho.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;