import React, { useState, useRef } from 'react';
import { Form, Input, Button, Checkbox, Divider, Upload, message } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import EduLogo from '../../assets/img/code.svg'
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye, AiOutlineCloudUpload } from "react-icons/ai";
import "./RegisterP.css";
import { Link } from 'react-router-dom';
import { FiTrash, FiUser } from 'react-icons/fi';


const RegisterP = () => {
    const onChange = (e) => {
        // <RiLockPasswordLine />
    }

    const uploadRef = useRef();
    const [img, setImg] = useState([]);

    const toggleFile = () => {
        uploadRef.current.click();
    }

    const handleUploadChange = () => {
        setImg([uploadRef.current.files[0]]);

        message.success(`file uploaded successfully`);
    }

    const clearFile = () => {
        setImg([]);
        message.success(`file removed successfully`);
    }
      
  return (
    <div className='register__page'
    data-aos="flip-left"
    data-aos-duration="1500"
    >
        <div className='register__page__form'>
            <div className='register__page__left'>
                <h2>Register</h2>
                <p>Earn money being a tutor</p>
                <Button 
                 style={{
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    borderRadius: 20,
                 }}
                > <FcGoogle /><span className='google' > Register with Google</span></Button>
                <Divider plain>or Register with Email</Divider>
                <form className='register__page__form__group'>
                    <div className='register__page__name'>
                        <label className='label'>Name*</label>
                        <Input placeholder="Enter Name" prefix={<FiUser />} />
                    </div>
                    <div className='register__page__email'>
                        <label className='label'>Email*</label>
                        <Input placeholder="Enter Email" prefix={<AiOutlineMail />} />
                    </div>
                    <div className='register__page__password'>
                        <label className='label'>Password*</label>
                        
                        <Input.Password
                            placeholder="Enter password"
                            prefix={<RiLockPasswordLine />}
                            iconRender={visible => (visible ? <AiFillEye /> : <AiFillEyeInvisible />)}
                        />
                    </div>
                    <div>
                        
                        <Button onClick={toggleFile} icon={<AiOutlineCloudUpload style={{
                            marginRight: 5,
                            paddingTop: 3
                        }} />}  
                        
                        > Click to Upload</Button>
                        
                    <input type='file' className="file__hidden" ref={uploadRef} onChange={handleUploadChange}/>
                    </div>
                    {img.length > 0 ?<div className='upload__tray'>
                            <div className='upload__name'>
                                {img.map(e =>{
                                    return(
                                        <span key={e.name}>{e.name}</span>
                                    )
                                })}
                            </div>
                            <div><FiTrash onClick={clearFile}/></div>
                        </div>: null}

                    <div className='register__page__checkbox'>
                        <div>
                            <Checkbox onChange={onChange}><span>I agree to <Link to="/tec-client/terms"> Terms of service</Link> and <Link to="/tec-client/privacy">Privacy Policy</Link> </span></Checkbox>
                        </div>
                        
                    </div>
                    <div className='register__page__submit'>
                        <Button
                        style={{
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            borderRadius: 20,
                         }}
                        >Submit</Button>
                        
                    </div>
                    <p>
                        <span style={{fontWeight: 700}}>registered already?</span> <span><Link to="/tec-client/login">Login</Link></span>
                    </p>
                </form>
            </div>
            <div className='register__page__right'>
                <img src={EduLogo} />
            </div>
        </div>
    </div>
  )
}

export default RegisterP