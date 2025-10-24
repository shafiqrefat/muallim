'use client';
import React from 'react';
import { Card, List, Avatar } from 'antd';
import { RobotOutlined } from '@ant-design/icons';

const AiRecommendations = ({ recommendations }) => {
  return (
    <Card
      title={
        <span>
          <RobotOutlined /> AI Recommendations
        </span>
      }
      style={{ marginTop: 24 }}
    >
      <List
        itemLayout="horizontal"
        dataSource={recommendations}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
              title={`${item.name} (${item.type})`}
              description={item.insight}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AiRecommendations;
