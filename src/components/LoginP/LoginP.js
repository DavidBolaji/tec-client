import React from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import EduLogo from '../../assets/img/pair_programming.svg'
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./LoginP.css";
import { Link } from 'react-router-dom';


const LoginP = () => {
   

    const onChange = (e) => {
        // <RiLockPasswordLine />
    }
  return (
    <div className='login__page'
    data-aos="flip-left"
    data-aos-duration="1500"
    >
        <div className='login__page__form'>
            <div className='login__page__left'>
                <h2>Login</h2>
                <p>Earn money being a tutor</p>
                <Button 
                 style={{
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    borderRadius: 20,
                 }}
                > <FcGoogle /><span className='google' > Sign In with Google</span></Button>
                <Divider plain>or Sign in with Email</Divider>
                <form className='login__page__form__group'>
                    <div className='login__page__email'>
                        <label className='label'>Email*</label>
                        <Input placeholder="Enter Email" prefix={<AiOutlineMail />} />
                    </div>
                    <div className='login__page__password'>
                        <label className='label'>Password*</label>
                        
                        <Input.Password
                            placeholder="Enter password"
                            prefix={<RiLockPasswordLine />}
                            iconRender={visible => (visible ? <AiFillEye /> : <AiFillEyeInvisible />)}
                        />
                    </div>
                    <div className='login__page__checkbox'>
                        <div>
                            <Checkbox onChange={onChange}><span>Remember me</span></Checkbox>
                        </div>
                        <div>
                            <span><Link to="/tec-client/forgot">Forget password?</Link></span>
                        </div>
                    </div>
                    <div className='login__page__submit'>
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
                        <span style={{fontWeight: 700}}>Not registered yet?</span> <span><Link to="/tec-client/register">Craete an account</Link></span>
                    </p>
                </form>
            </div>
            <div className='login__page__right'>
                <img src={EduLogo} />
            </div>
        </div>
    </div>
  )
}

export default LoginP