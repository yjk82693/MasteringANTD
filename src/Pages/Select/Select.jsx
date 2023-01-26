import 'antd/dist/antd.min.css';
import { Select, Divider, Row, Col } from 'antd';

const selectLayout = {
  labelCol: {
    xs: { span: 16 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 8 },
  },
};
const SelectAnt = () => {
  const pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Eevee']
  return (
    <>
    <Divider orientation="left"></Divider>
      <Row justify="space-around" align="middle">
        <Col span={8}>
        <p>What is your favorite Pokemon?</p>
        <Select mode='multiple' 
        maxTagCount = {2} 
        placeholder='Choose your Pokemon!'
        allowClear 
        style = {{width: '50%'}}>
          {pokemon.map((pokemon,index)=>{
          return <Select.Option key = {index} value = {pokemon} />
          })}
        </Select>
        </Col>
      </Row>  
    </>
  );
}



export default SelectAnt;
