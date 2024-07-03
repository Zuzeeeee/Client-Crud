import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import { ReactElement } from 'react';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex h-full'>
      <div className='bg-[#182237] p-6 '>
        <Sidebar></Sidebar>
      </div>
      <div className='flex-1'>
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
