import React from 'react';
import '../styles/global.css';
import AppLayout from '@/components/layout/appLayout';
import { ReduxProvider } from '@/lib/store';
import ThemeWrapper from '@/components/layout/themeWrapper';

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
