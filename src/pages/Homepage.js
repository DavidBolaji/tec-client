import React from "react";
import { BackTop } from 'antd';
import { IoIosArrowUp } from "react-icons/io";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Answer from "../components/Answer/Answer";
import Saying from "../components/Saying/Saying";
import SubjectTutors from "../components/SubjectTutors/SubjectTutors";
import AgeTutors from "../components/AgeTutors/AgeTutors";
import ViewTutors from "../components/ViewTutors/ViewTutors";
import GetConnected from "../components/GetConnected/GetConnected";
import MailingList from "../components/MailingList/MailingList";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Answer />
      <Saying />
      <SubjectTutors />
      <AgeTutors />
      <ViewTutors />
      <MailingList />
      <GetConnected />
      <BackTop>
        <div style={{
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          backgroundColor: '#1088e9',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}><IoIosArrowUp /></div>
      </BackTop>
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
