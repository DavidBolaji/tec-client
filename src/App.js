import React, { useEffect, useLayoutEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Spin } from 'antd';
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TecInEveryHome from "./pages/TecInEveryHome";
import TecInEverySchool from "./pages/TecInEverySchool";
import TecInEveryCommunity from "./pages/TecInEveryCommunity";
import NotFound from "./pages/404";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'antd/dist/antd.css';
import "./styles.css";
import 'aos/dist/aos.css'
import AOS from 'aos';





export default function App() {
  const [load, setLoaded] = useState(true)
  const location = useLocation();
  
  useEffect(() => {
    const onLoading = () => {
      setLoaded(false)
    }
    AOS.init({});
    
    window.addEventListener('load', onLoading);

    return () => window.removeEventListener('load',onLoading)
  },[])

  useLayoutEffect(() => {
   window.scrollTo(0,0)
  },[location.pathname])



  return (
    <div>
      <Switch>
        <Route path="/tec-client" exact><Redirect to="/home" /> </Route>
        <Route path="/home">
          <Homepage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/tec_in_every_home">
          <TecInEveryHome />
        </Route>

        <Route path="/tec_in_every_community">
          <TecInEveryCommunity />
        </Route>

        <Route path="/tec_in_every_school">
          <TecInEverySchool />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/blog/:blogId">
          <BlogSingle />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
  // )
  
  // : (
  //   <div className="spinner">
  //     <Spin size="large"/>
  //   </div>
  // );
}
