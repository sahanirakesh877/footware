import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image" /></em>
                <span className="text"><em>Address</em>Kathmandu <br/> Nepal</span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contact</em> <a href="#">Mobile: (+977) - 9800000001</a> <a href="#">Mail:info@gmail.com</a></span>
            </li>
          
        </ul>
    );

}

export default ContactInfo;