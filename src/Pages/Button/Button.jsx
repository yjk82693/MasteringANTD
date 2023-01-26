import React from "react"
import {Button, Space, Tooltip, Row, Col, Divider} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ButtonAnt = () => {
    return (
      <>
        <Row justify="space-around" align="middle">
          <Divider orientation="left"></Divider>
          <Col span={4}>
          <Space direction="vertical" align="center">
              <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
              </Space>
              <Space direction="vertical">
              <Space wrap>
                <Tooltip title="search">
                  <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="primary" shape="circle">
                  A
                </Button>
                <Button type="primary" icon={<SearchOutlined />}>
                  Search
                </Button>
                <Tooltip title="search">
                  <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
              </Space>
              <Space wrap>
                <Tooltip title="search">
                  <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Tooltip title="search">
                  <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />}>
                  Search
                </Button>
                <Button icon={<SearchOutlined />} href="https://www.google.com" />
              </Space>
            </Space>
            </Space>
          </Col>
        </Row>
      </>
    );
  }

  

  export default ButtonAnt;

  