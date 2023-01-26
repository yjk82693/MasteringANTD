import React from 'react';
import 'antd/dist/antd.min.css';
import {Table, Button, Modal, Input, Row, Col, Divider} from 'antd'
import {useState} from 'react'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

const CRUDAnt = () => {
  const [isEditting, setIsEditting] = useState(false)
  const [ edittingHero, setEdittingHero ] = useState(null)
  const resetEditting=()=>{
    setIsEditting(false)
    setEdittingHero(null)
  }
  const [dataSource,setDataSource] = useState([
    {
      id:1,
      hero: "Captain America",
      rid: "Steve Rogers",
      plv: "3",
      pow: "Super Soldier, Supreme Leardership"
    },
    {
      id:2,
      hero: "Iron-man",
      rid: "Tony Stark",
      plv: "4",
      pow: "Super Intelligence, Revolutionary Technologies"
    },
    {
      id:3,
      hero: "Hulk",
      rid: "Bruce Banners",
      plv: "7",
      pow: "Devastating Strength, Difficult to control the power"
    },
    {
      id:4,
      hero: "Thor",
      rid: "Thor Odinson",
      plv: "8",
      pow: "The God of Thunder, Natural-Born Warrior"
    },
    {
      id:5,
      hero: "Spiderman",
      rid: "Peter Parker",
      plv: "5",
      pow: "Human Spider, Web-shooting available"
    }

  ])
  const columns = [
    {
      key:'1',
      title: 'Hero Number',
      dataIndex: 'id',
    },
    {
      key:'2',
      title: 'Hero',
      dataIndex: 'hero',
    },
    {
      key:'3',
      title: 'Real Identity',
      dataIndex: 'rid',
    },
    {
      key:'4',
      title: 'Power Level',
      dataIndex: 'plv',
    },
    {
      key:'5',
      title: 'Ability',
      dataIndex: 'pow'
    },
    {
      key:'6',
      title: 'Action',
      render:(record)=>{
        return <>
        <EditOutlined onClick = {() => {
          onEditHeroInfo(record)
        }}  />
        <DeleteOutlined onClick = {() => {
          onExpelHero(record)
        }} style = {{color:"red", marginLeft: 12}} />
        </>
      }
    }
  ]
  const onRegisterHero = (record)=>{
    const randomNumber = parseInt(Math.random()*10)
    const newHero = {
      id: randomNumber,
      hero: "Agent"+randomNumber,
      rid: "Unknown",
      plv: randomNumber,
      pow: "Need to be determined",
    };
    setDataSource((pre)=>{
      return [...pre, newHero];
    });
  };
  const onExpelHero = (record) => {
    Modal.confirm({
      title: 'Are you sure about that? The hero will not trust you anymore.',
      okText:'Do it anyway!',
      okType:'danger',
      onOk:()=>{
        setDataSource((pre)=>{
          return pre.filter((hero) => hero.id !== record.id);
        });
      }
    })
  };
  const onEditHeroInfo = (record) => {
    setIsEditting(true)
    setEdittingHero(...record)
  };
  return (
    <Row justify="space-around" align="middle">
    <Divider orientation="left"></Divider>
    <Col span={4}>
    <div className="App">
      <header className="App-header">
        <h1>Team Avengers List</h1>
        <Button onClick={onRegisterHero}>Add a new hero</Button>
        <Table columns = {columns} dataSource = {dataSource} />
        <Modal
          title='Edit Hero Profile'
          visible={isEditting}
          okText = "save"
          onCancel={()=>{
            resetEditting()
          }}
          onOk={()=>{
            setDataSource((pre)=>{
              return pre.map((hero) => {
                if(hero.id===edittingHero.id){
                  return edittingHero;
                }else{
                  return hero;
                }
              });
            });
          resetEditting();
        }}
        >
          <Input value = {edittingHero?.hero} onChange={(e)=>{
            setEdittingHero(pre=>{
              return {...pre, hero:e.target.value}
            })
          }}/>
          <Input value = {edittingHero?.rid} onChange={(e)=>{
            setEdittingHero(pre=>{
              return {...pre, rid:e.target.value}
            })
          }}/>
          <Input value = {edittingHero?.plv} onChange={(e)=>{
            setEdittingHero(pre=>{
              return {...pre, plv:e.target.value}
            })
          }}/>
          <Input value = {edittingHero?.pow} onChange={(e)=>{
            setEdittingHero(pre=>{
              return {...pre, pow:e.target.value}
            })
          }}/>
        </Modal>
      </header>
    </div>
    </Col>
  </Row>
    );
  }

       
export default CRUDAnt;


