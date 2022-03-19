import React, { useEffect, useState } from "react";
import { Card, Skeleton, Button } from 'antd';
import Background from "../../assets/img/home.webp";
const { Meta } = Card;
import 'antd/dist/antd.css';
import "./ViewTutors.css";

const ViewTutors = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 20000);
  },[])
  return (
    <div className="view_tutors">
        <h2
        data-aos="fade-in"
        data-aos-duration="1500"
        >View Tec Tutors</h2>
        <div className="view_tutors_portfolio">
        <Skeleton loading={loading} active paragraph={{rows: 12}}>
            <Card
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                hoverable
                style={{ width: 400, margin:10 }}
                cover={<img alt="example" src={Background} />}
            >
                <Meta 
                    title="Europe Street beat" 
                    description="www.instagram.com Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                />
                <Button type="link">More</Button>
                
            </Card>
        </Skeleton>
        <Skeleton loading={loading} active paragraph={{rows: 12}}>
            <Card
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                hoverable
                style={{ width: 400, margin:10 }}
                cover={<img alt="example" src={Background} />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Skeleton>
        <Skeleton loading={loading} active paragraph={{rows: 12}}>
            <Card
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                hoverable
                style={{ width: 400, margin:10 }}
                cover={<img alt="example" src={Background} />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Skeleton>
        </div>
    </div>
  );
};

export default ViewTutors;