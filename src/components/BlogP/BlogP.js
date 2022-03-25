import { Avatar, Button, Card, Skeleton,Form, Input, Checkbox, Space  } from 'antd';
import Meta from 'antd/lib/card/Meta';
// import Search from 'antd/lib/transfer/search';
const { Search } = Input;
const {Item} = Form;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Background from "../../assets/img/home.webp";
import "./BlogP.css";

const blogPosts = [
    {
        id: 1,
        imageUrl: Background,
        title:'Hello',
        time: '22 march',
        text: 'This is the description',
        link: ''
    },
    {
        id: 2,
        imageUrl: Background,
        title:'Hi',
        time: '24 march',
        text: 'This is the description 2',
        link: ''
    },
    {
        id: 3,
        imageUrl: Background,
        title:'Awww',
        time: '29 march',
        text: 'This is the description 3',
        link: ''
    },
    // {
    //     id: 4,
    //     imageUrl: Background,
    //     title:'Ouch',
    //     time: '31 march',
    //     text: 'This is the description 4',
    //     link: ''
    // },
    // {
    //     id: 5,
    //     imageUrl: Background,
    //     title:'Final set',
    //     time: '1 april',
    //     text: 'This is the description 5',
    //     link: ''
    // }
]

const BlogP = () => {

    const [loading, setLoading] = useState(true);
    const [screen, setScreen] = useState(window.screen.width);
    
    useEffect(() => {

      const onLoading = () => {
        setLoading(false)
      }
      
        window.addEventListener('load', onLoading);
  
      return () => window.removeEventListener('load',onLoading)
    },[])

    
  
    useEffect(() => {
  
      const checkResize = (e) => {
        setScreen(window.screen.width);
      }
  
      window.addEventListener('resize', checkResize);
  
      return () => window.removeEventListener('resize', checkResize);
    }, [])

    const onSearch = () => {

    }

    const renderPosts = blogPosts.map(post => {
        return(
            <Card
            key={post.id}
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="500"
            style={{ minWidth: 280, width: screen > 990 ? 280 : null,  marginTop: 16, marginLeft: 5 }}
            hoverable
            cover={<img alt="example" src={post.imageUrl} />}
            >
                <Skeleton loading={loading} avatar active
                style={{
                    width: 'auto',
                    minWidth: 200,
                    height: 'auto'
                }}
                >
                    <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={post.title}
                    description={post.text}
                    />
                    <Button type="link">More</Button>
                </Skeleton>
            </Card>
        )
    })

  return (
    <div className='blog__page'>
        <div className='blog__page__blog'>
            {renderPosts}
        </div>
        <div className='blog__page__aside'>
            <div className='blog__form__login'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                    <Input />
                    </Item>

                    <Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Item>

                    <Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                        style={{
                            textAlign: "left"
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Item>

                    <Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Item>
                </Form>
            </div>
            {/* <div className='blog__search'>
                <Search placeholder="input search text" onSearch={onSearch} enterButton loading={loading}/>
            </div> */}
            <div className='blog__latest_posts'>
                <h2>Recent posts</h2>
                {blogPosts.map(e=><div key={e.id}><Link to={e.link}>{e.title}</Link></div>)}
            </div>

            

        </div>
    </div>
  )
}

export default BlogP;