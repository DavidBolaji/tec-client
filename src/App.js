import React, { useEffect, useState } from "react";
import { Spin } from 'antd';
import Homepage from "./pages/Homepage";
import 'antd/dist/antd.css';
import "./styles.css";
import 'aos/dist/aos.css'
import AOS from 'aos';




export default function App() {
  const [load, setLoaded] = useState(true)
  useEffect(() => {
    const onLoading = () => {
      setLoaded(false)
      
    }
    // disable: 'mobile'
    AOS.init({});
    
    window.addEventListener('load', onLoading);
    // window.addEventListener('scroll', () => AOS.refresh())

    return () => window.removeEventListener('load',onLoading)
  },[])



  return !load ? (
    
    <div>
      <Homepage />
    </div>
  ): (
    <div className="spinner">
      <Spin size="large"/>
    </div>
  );
}
