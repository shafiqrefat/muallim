'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCourses } from '../../lib/slices/courseSlice';
import { Table, Tag, Spin, Typography } from 'antd';
import PageTitle from '@/components/layout/pageTitle';
const { Title } = Typography;

export default function CoursesPage() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.courses);
  const { role } = useSelector((state) => state.role);

  useEffect(() => {
    if (status === 'idle') dispatch(loadCourses());
  }, [dispatch, status]);

  if (status === 'loading') return <Spin style={{ marginTop: '5rem' }} />;

  // Role-based visibility: only Admin & Teacher can see full list
  if (role === 'student') {
    return <p>Students don’t have permission to view all courses.</p>;
  }

  const columns = [
    { title: 'Title', dataIndex: 'title' },
    { title: 'Enrolled', dataIndex: 'enrolled' },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        const color =
          status === 'active'
            ? 'green'
            : status === 'upcoming'
            ? 'blue'
            : 'gray';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <div>
      <PageTitle title="Course Overview" />
      <Table
        columns={columns}
        dataSource={list}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
