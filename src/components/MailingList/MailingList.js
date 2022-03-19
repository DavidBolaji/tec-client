import React, {useState} from "react";
import Logo from "../../assets/img/home.webp";
import { BsArrowRightShort } from "react-icons/bs";
import { Input } from 'antd';
import "./MailingList.css";

const { Search } = Input;

const MailingList = () => {
    const [loading, setLoading] = useState(false)
  return (
    <div className="mailing_list">
      <div className="mailing_list_image"
      data-aos="fade-in"
      data-aos-duration="2500"
      >
          <img src={Logo} alt="child-pic" />
      </div>
      <div className="mailing_list_text">
         <h3
         data-aos="slide-left"
         data-aos-duration="1000"
         >Looking For Free Resources? Join Our Mailing List</h3>
         <p
         data-aos="slide-left"
         data-aos-duration="1500"
         >Subscribe Today to Receive Our Newsletter. You can unsubscribe at any time.</p>

         <div className="mailing_list_btn"
         data-aos="slide-left"
         data-aos-duration="1000"
         >
            <Search placeholder="Enter your email address" enterButton={<BsArrowRightShort />} size="large" {...loading && loading} />
         </div>
      </div>
    </div>
  );
};

export default MailingList;