
import  React from 'react';
import './App.css';
import Header from './components/Header';
import {Table} from 'antd'
import 'antd/dist/antd.css'

function App() {
  const columns= [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const data =[  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
 
  },]

  return (
    <div className="App">
       <Header/>
       <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default App;
