import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import "./HikingFooter.css";

const HikingFooter = () => {
    return (
        <div className="footer">
            <div className="inner-footer">

                {/* for company name and description */}
                <div className="footer-items">
                    <h1 style={{ color: '#183a2f' }}>HIKING HOUSE</h1>
                    <p>Gear up your hiking business</p>
                    <p>Be a partner of Hiking House.</p>
                </div>

                {/* for quick links */}
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <div className="border1"></div>

                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/blogs"><li>Blogs</li></Link>
                        <Link to="/login"><li>LogIn</li></Link>
                    </ul>
                </div>



                {/* for contact us info */}
                <div className="footer-items">
                    <h3>Contact us</h3>
                    <div className="border1"></div>
                    <ul>
                        <li><MdLocationPin /> Dhaka,Bangladesh</li>
                        <li><FaPhoneAlt /> 12301946760326123</li>
                        <li><MdMail /> zead.fornet@gmail.com</li>
                    </ul>


                </div>
            </div>

            {/* Footer Bottom start  */}
            <div className="footer-bottom">
                Copyright &copy; Hiking House 2022.
            </div>
        </div>
    );
};

export default HikingFooter;