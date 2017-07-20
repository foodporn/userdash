import React, { PropTypes } from 'react';
import { Table, message, Popconfirm } from 'antd';


// 组件UserList
// 根据传入的参数total、current、loading、dataSource，
// 进行数据处理后，给出render
const UserList = ({
  total,
  current,
  loading,
  dataSource
}) => {
  // 改造antd库中Tabel组件所需参数
  const columns =[
    {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={()=>{}}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  // 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: ()=> {}
  };

  return (
    <div>
      <Table
        columns = {columns}
        dataSource = {dataSource}
        loading = {loading}
        rowKey = {record => record.id}
        pagonation = {pagination}
      />
    </div>
  )


}




export default UserList;
