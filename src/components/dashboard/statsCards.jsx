'use client';
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, TeamOutlined, DollarOutlined } from '@ant-design/icons';

const StatsCards = ({ stats }) => {
  const cardData = [
    { title: 'Total Students', value: stats.totalStudents, icon: <UserOutlined /> },
    { title: 'Active Teachers', value: stats.activeTeachers, icon: <TeamOutlined /> },
    { title: 'Revenue ($)', value: stats.totalRevenue, icon: <DollarOutlined /> },
  ];

  return (
    <Row gutter={16}>
      {cardData.map((c) => (
        <Col xs={24} sm={12} md={8} key={c.title} style={{ marginBottom: 16 }}>
          <Card>
            <Statistic title={c.title} value={c.value} prefix={c.icon} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCards;
