'use client';
import AiRecommendations from '@/components/dashboard/aiRecommendations';
import StatsCards from '@/components/dashboard/statsCards';
import { Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { fetchMockData } from '../../lib/mockService';
import PageTitle from '@/components/layout/pageTitle';

const { Title } = Typography;

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchMockData('dashboard.json').then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  if (loading || !stats) return <Spin style={{ marginTop: '5rem' }} />;

  return (
    <div>
      <PageTitle title="Dashboard"/>
      <StatsCards stats={stats} />
      <AiRecommendations recommendations={stats.recommendations} />
    </div>
  );
}
