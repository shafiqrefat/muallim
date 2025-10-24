'use client';
import React, { useState } from 'react';
import { Layout, Menu, Select, Switch } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  BookOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { setRole } from '@/lib/slices/roleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/lib/slices/themeSlice';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.role);
  const { darkMode } = useSelector((state) => state.theme);
  const baseMenu = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: <Link href="/dashboard">Dashboard</Link> },
    { key: 'users', icon: <UserOutlined />, label: <Link href="/users">Users</Link> },
    { key: 'courses', icon: <BookOutlined />, label: <Link href="/courses">Courses</Link> },
  ];

  const filteredMenu = baseMenu.filter((item) => {
    if (role === 'admin') return true;
    if (role === 'teacher') return item.key !== 'users';
    if (role === 'student') return item.key === 'dashboard' || item.key === 'courses';
    return true;
  });

  return (
    <Layout style={{ minHeight: '100vh' }} theme={darkMode ? 'dark' : 'light'}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Link href="/">
          <div style={{ color: 'white', padding: '1rem', fontWeight: 600 }}>Muallim</div>
        </Link>
        
        <Menu theme={darkMode ? 'dark' : 'light'} defaultSelectedKeys={['dashboard']} items={filteredMenu} />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
            <Select
                value={role}
                style={{ width: 120 }}
                onChange={(val) => dispatch(setRole(val))}
                options={[
                { label: 'Admin', value: 'admin' },
                { label: 'Teacher', value: 'teacher' },
                { label: 'Student', value: 'student' },
                ]}
            />
            <Switch
                checked={darkMode}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
                onChange={() => dispatch(toggleTheme())}
            />
        </Header>
        <Content style={{ margin: '1rem', padding: '1rem', background: '#fff',fontSize:'1rem' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
