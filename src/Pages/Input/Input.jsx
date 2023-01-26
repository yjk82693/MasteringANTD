import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space, Col, Divider, Row} from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);


const InputAnt = () => {
    return (
      <>

    <Divider orientation="left"></Divider>
      <Row justify="space-around" align="middle">
        <Col span={4}>
        <Space direction="vertical" align="center">
            <Input.Search
            placeholder='Please Insert Value: '
            maxLength={10}
            type='password'
            />
            <Space direction="vertical">
              <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
              <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
              <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
              <Input
                addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
                defaultValue="mysite"
              />
            </Space>
          </Space>
        </Col>
      </Row>
      </>
    );
  }
  
  export default InputAnt;