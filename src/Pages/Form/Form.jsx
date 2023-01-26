import React from 'react';
import 'antd/dist/antd.min.css';
import { Form, Input, Button, DatePicker, Checkbox, Divider} from 'antd';

const FormAnt = () => {

  const formItemLayout = {
    labelCol: {
      xs: { span: 16 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 16 },
      sm: { span: 8 },
    },
  };
  const onFinish=(e)=>{
    console.log(e)
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 8,
      },
    },
  };
  return (
    <div className="App">
        <>
          <Divider orientation="left"></Divider>
            <Form 
                autoComplete='off'
                onFinish={(values)=>{
                console.log({values});
                }}
                >
                <Form.Item 
                {...formItemLayout}
                name="fullName" 
                label="Full Name"
                rules={[
                    {
                    required: true,
                    message: "Please enter your name."
                    },
                    {whitespace: true},
                    {min: 3},  
                ]}
                hasFeedback
                >
                <Input placeholder='Type your name' />
                </Form.Item>
                <Form.Item 
                {...formItemLayout}
                name="email" 
                label="Email"
                rules={[
                    {
                    required: true,
                    message: "Please enter your email.",
                    },
                    { type: 'email', message: "Please enter a valid email." }
                ]}
                hasFeedback
                >
                <Input placeholder='Type your email' />
                </Form.Item>
                <Form.Item 
                {...formItemLayout}
                name="password" 
                label="Password"
                dependencies={['password']}
                rules={[
                    {
                    required: true,
                    },
                    {min: 8}
                ]}
                hasFeedback>
                <Input.Password placeholder='Type your Password' />
                </Form.Item>
                <Form.Item 
                {...formItemLayout}
                name="confirmPassword"
                label="Confirm Password"
                rules={[
                    {
                    required: true,
                    },
                    ({getFieldValue})=>({
                    validator(_,value){
                        if(!value || getFieldValue('password')===value){
                        return Promise.resolve()
                        }
                        return Promise.reject('The password is not corresponding.')
                    }
                    })
                ]}>
                <Input.Password placeholder='Confirm your Password' />
                </Form.Item>
                <Form.Item 
                {...formItemLayout}
                name = "dob" 
                label = "Date of Birth: "
                rules = {[
                    {
                    required: true,
                    message: "Please provide your date of birth: "
                    }
                ]}
                hasFeedback>
                <DatePicker style = {{width: '100%'}} picker = "date" placeholder='Choose your birthdate'/>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}
                name='agreement'
                    valuePropName="checked"
                    rules={[
                    {
                    validator: (_,value) => 
                        value
                        ? Promise.resolve()
                        : Promise.reject("You must agree with our terms to proceed.")
                    }
                    ]}>
                <Checkbox>Agree to our <a href = '#'>Terms and Conditions</a></Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
        </>
    </div>
  );
}

export default FormAnt;
