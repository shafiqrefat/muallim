'use client';
import React from 'react';
import { Button, Input, Select, Form } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
});

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Student', value: 'student' },
];

const UserForm = ({ onSubmit, defaultValues }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || { name: '', email: '', role: '' },
  });

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="Name" validateStatus={errors.name && 'error'} help={errors.name?.message}>
        <Controller name="name" control={control} render={({ field }) => <Input {...field} />} />
      </Form.Item>

      <Form.Item label="Email" validateStatus={errors.email && 'error'} help={errors.email?.message}>
        <Controller name="email" control={control} render={({ field }) => <Input {...field} />} />
      </Form.Item>

      <Form.Item label="Role" validateStatus={errors.role && 'error'} help={errors.role?.message}>
        <Controller name="role" control={control} render={({ field }) => (
          <Select {...field} options={roles} placeholder="Select Role" />
        )} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
