import 'antd/dist/antd.min.css';
import {Table, Input, Button,Row,Col} from 'antd'
import {useState} from 'react'
import {SearchOutlined} from '@ant-design/icons'

const SearchAnt = () => {
  const [dataSource,setDataSource] = useState([
    {
      idnum: 1,
      hero: "Batman",
      rid: "Bruce Wayne"
    },
    {
      idnum: 2,
      hero: "Super Man",
      rid: "Clark Kent"
    },
    {
      idnum: 3,
      hero: "Green Lanton",
      rid: "Hal Jordan"
    },
    {
      idnum: 4,
      hero: "Flash",
      rid: "Berry Alan"
    },
    {
      idnum: 5,
      hero: "Green Arrow",
      rid: "Oliver Quinn"
    }
  ])
  const columns = [
    {
      title: "Hero ID",
      dataIndex: "idnum",
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => { 
        return (
        <>
          <Input 
          autoFocus 
          placeholder='Hero Name' 
          value={selectedKeys[0]}
          onChange={(e)=>{
            setSelectedKeys(e.target.value?[e.target.value]:[])
            confirm({closeDropDow:false});
          }}
          onPressEnter={()=>{
            confirm()
          }}
          onBlur={()=>{
            confirm()
          }}
          />
          <Button onClick={()=>{confirm()}} type="primary">Search</Button>
          <Button onClick={()=>{clearFilters();}} type="danger">Reset</Button>
        </>
        )
      },
      filterIcon:()=>{
        return <SearchOutlined />;
      },
      onFilter:(value,record)=>{
        return record.idnum === value;
      },
    },
    {
      title: "Hero",
      dataIndex: "hero",
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => { 
        return (
        <>
          <Input 
          autoFocus 
          placeholder='Hero Identity' 
          value={selectedKeys[1]}
          onChange={(e)=>{
            setSelectedKeys(e.target.value?[e.target.value]:[])
            confirm({closeDropDow:false});
          }}
          onPressEnter={()=>{
            confirm()
          }}
          onBlur={()=>{
            confirm()
          }}
          />
          <Button onClick={()=>{confirm()}} type="primary">Search</Button>
          <Button onClick={()=>{clearFilters();}} type="danger">Reset</Button>
        </>
        )
      },
      filterIcon:()=>{
        return <SearchOutlined />;
      },
      onFilter:(value,record)=>{
        return record.hero.toLowerCase().includes(value.toLowerCase());
      }
    },
    {
      title: "Identity",
      dataIndex: "rid",
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => { 
        return (
        <>
          <Input 
          autoFocus 
          placeholder='Hero Identity' 
          value={selectedKeys[0]}
          onChange={(e)=>{
            setSelectedKeys(e.target.value?[e.target.value]:[])
            confirm({closeDropDow:false});
          }}
          onPressEnter={()=>{
            confirm()
          }}
          onBlur={()=>{
            confirm()
          }}
          />
          <Button onClick={()=>{confirm()}} type="primary">Search</Button>
          <Button onClick={()=>{clearFilters();}} type="danger">Reset</Button>
        </>
        )
      },
      filterIcon:()=>{
        return <SearchOutlined />;
      },
      onFilter:(value,record)=>{
        return record.rid.toLowerCase().includes(value.toLowerCase());
      },
    },
    
  ];

  return (
    <Row justify="space-around" align="middle">
        <Col span={8}>
        <div className="App">
          <header className="App-header">
            <h1 style = {{color: 'blue'}}>Members of Justice League</h1>
            <Table style = {{display:"flex",flex: 1,margin: 10}} columns = {columns} dataSource = {dataSource}/>
          </header>
        </div>
        </Col>
      </Row>
    );
  }

export default SearchAnt;


