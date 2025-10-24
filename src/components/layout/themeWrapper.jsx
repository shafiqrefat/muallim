'use client';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useSelector } from 'react-redux';

export default function ThemeWrapper({ children }) {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
