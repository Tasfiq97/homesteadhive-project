import React from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'HomesteadHive | find best property here',
  keywords: 'rental,find rental,property',
};
const LayoutMain = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default LayoutMain;
