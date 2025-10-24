'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers, addUser, updateUser } from '../../lib/slices/userSlice';
import { Table, Button, Modal, Spin } from 'antd';
import UserTable from '@/components/users/userTable';
import UserForm from '@/components/users/userForm';
import PageTitle from '@/components/layout/pageTitle';
// import UserForm from '../../components/Users/UserForm';
// import UserTable from '../../components/Users/UserTable';

export default function UsersPage() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);
  const [openModal, setOpenModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    if (status === 'idle') dispatch(loadUsers());
  }, [dispatch, status]);

  const handleAdd = () => {
    setEditUser(null);
    setOpenModal(true);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setOpenModal(true);
  };

  const handleSave = (data) => {
    if (editUser) {
      dispatch(updateUser({ ...editUser, ...data }));
    } else {
      dispatch(addUser(data));
    }
    setOpenModal(false);
  };

  if (status === 'loading') return <Spin style={{ marginTop: '5rem' }} />;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <PageTitle title={"Users"}/>
        <Button type="primary" onClick={handleAdd}>Add User</Button>
      </div>

      <UserTable users={list} onEdit={handleEdit} />

      <Modal
        title={editUser ? 'Edit User' : 'Add User'}
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        destroyOnClose
      >
        <UserForm onSubmit={handleSave} defaultValues={editUser} />
      </Modal>
    </div>
  );
}
