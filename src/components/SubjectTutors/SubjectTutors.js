import React from "react";
import { HiMenuAlt1, HiSearch } from "react-icons/hi";
import Logo from "../../assets/img/home.webp";
import BorderImage from "../BorderImage/BorderImage";
import "./SubjectTutors.css";

const dataImages = [
    {
        id: '01',
        imageUrl: Logo,
        alt: 'facebook'
    },
    {
        id: '02',
        imageUrl: Logo,
        alt: 'facebook'
    },
]

const SubjectTutors = () => {
  return (
    <div className="subject_tutors">
      <h2
      data-aos="fade-in"
      data-aos-duration="1500"
      >Browse Tutors By Subject</h2>
      <div className="group_container">  
        <div className="group_one">
            <div className="left"
            data-aos="flip-left"
            data-aos-duration="2500"
            >
                <img src={Logo} />
                <h3>Mathematics Tutoring</h3>
            </div>
            <div className="right"
            data-aos="flip-left"
            data-aos-duration="2500"
            >
                <img src={Logo} />
                <h3>English Tutoring</h3>
            </div>
        </div>
        <div className="group_two" style={{marginTop: '40px'}}>
            <div className="left"
            data-aos="flip-left"
            data-aos-duration="2500"
            >
                <img src={Logo} />
                <h3>Junior Science Tutor</h3>
            </div>
            <div className="right"
            data-aos="flip-left"
            data-aos-duration="2500"
            >
                <img src={Logo} />
                <h3>Senior Science Tutor</h3>
            </div>
        </div>
    </div>
    </div>
  );
};

export default SubjectTutors;