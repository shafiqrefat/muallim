'use client';
import React from 'react';
import { Table, Tag, Button } from 'antd';

const UserTable = ({ users, onEdit }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (role) => <Tag color={role === 'admin' ? 'red' : role === 'teacher' ? 'blue' : 'green'}>{role}</Tag>,
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Button type="link" onClick={() => onEdit(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={users} pagination={false} />;
};

export default UserTable;
