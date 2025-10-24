import React from 'react';
import '../styles/global.css';
import AppLayout from '@/components/layout/appLayout';
import { ReduxProvider } from '@/lib/store';
import ThemeWrapper from '@/components/layout/themeWrapper';

export const metadata = {
  title: 'Muallim',
  description: 'Muallim – Modern Learning Dashboard',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeWrapper>
            <AppLayout>{children}</AppLayout>
          </ThemeWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
