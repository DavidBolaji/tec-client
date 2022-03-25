import { Button } from 'antd';
import React, {useState} from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaRegAddressBook, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdSmartphone } from 'react-icons/md';
import "./Contact.css";

const Contact = () => {
    const [input, setInput] = useState(8)
    const [count, setCount] = useState('')
  return (
    <div className='contact'>
        <div className='contact__social'>
            <h2
            data-aos="zoom-in"
            >Connect</h2>
            <div className='contact__social__fb'
            data-aos="flip-right"
            data-aos-duration="2000"
            >
                <FaFacebook 
                 style={{
                     color:'#4267B2',
                 }}
                /> <span>facebook</span>
            </div>
            <div className='contact__social__ws'
             data-aos="flip-right"
             data-aos-duration="2000"
            >
                <BsWhatsapp 
                 style={{
                    color: '#25D366'
                 }}
                /> <span>whatsapp</span>
            </div>
            <div className='contact__social__tg'
             data-aos="flip-right"
             data-aos-duration="2000"
            >
                <FaTelegramPlane 
                 style={{
                     color: '#34B7F1'
                 }}
                /> <span>Telegram</span>
            </div>
        </div>
        <div className='contact__meet'>
            <h2
             data-aos="zoom-in"
            >Meet us</h2>
            <div className='contact__meet__phone'
            data-aos="flip-left"
            data-aos-duration="2000"
            >
                <MdSmartphone /> <span>+2347086513100</span>
            </div>
            <div className='contact__meet__mail'
            data-aos="flip-left"
            data-aos-duration="2000"
            >
                <FiMail /> <span>info@tecworld.com.ng</span>
            </div>
            <div className='contact__meet__address'
            data-aos="flip-left"
            data-aos-duration="2000"
            >
                <FaRegAddressBook /> <span> osogbo osun state </span>
            </div>
        </div>
        <div className='contact__message'>
            <h2>Pitch us</h2>
            <p>
            Hello, <br /> <br />

            My name is <input placeholder='your name' size={input} onKeyPress={(e) => {
                    
                if(e.key.match(/^[A-Z]+$/i)) {
                    setCount(e.target.value)
                    setInput(count)
                } 
                console.log(count);
                const newLen = (e.target.value + e.key).split('').length;
                setInput(newLen)
            }}/>
            and my e-mail address is <input placeholder='your e-mail' size="9"/>
            and I would like to request a <input placeholder='science' size="6"/> Tutor,
            for a student in <input placeholder='ss2' size="8"/>
.
            </p>
            <Button type="primary" size={`small`}>Primary</Button>
        </div>

    </div>
  )
}

export default Contact