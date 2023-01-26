import 'antd/dist/antd.min.css';
import {Table, Row, Col, Divider} from 'antd'

const TableAnt = () => {

  const data = [
    {
      name: 'Pikachu',
      pokenum: 1,
      origin: 'Kanto',
      key: 1,
    },
    {
      name: 'Charmander',
      pokenum: 2,
      origin: 'Kanto',
      key: 2,
    },
    {
      name: 'Bulbasaur',
      pokenum: 3,
      origin: 'Kanto',
      key: 3,
    },
    {
      name: 'Squirtle',
      pokenum: 4,
      origin: 'Kanto',
      key: 4,
    },
    {
      name: 'Eevee',
      pokenum: 5,
      origin: 'Kanto',
      key: 5,
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: name=>{
        return <a>{name}</a>
      }
    },
    {
      title: 'Pokenum',
      dataIndex: 'pokenum',
      key: 'key'
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'key'
    },
    {
      title: 'Generation',
      key: 'key',
      render: payload => {
        return <p>{payload.pokenum>3?'2':'1'}</p>
      }

    }


  ]

  return (
    <>
    <Divider orientation="left" />
    <Row justify="space-around" align="middle">
      <Col span={12}>
      < Table dataSource={data} columns={columns} />
      </Col>
    </Row>
    </>
  );
}



export default TableAnt;
