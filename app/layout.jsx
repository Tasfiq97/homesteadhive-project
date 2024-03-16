import React from 'react';
import '@/assets/styles/global.css';

export const metadata = {
  title: 'HomesteadHive | find best property here',
  keywords: 'rental,find rental,property',
};
const LayoutMain = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default LayoutMain;
