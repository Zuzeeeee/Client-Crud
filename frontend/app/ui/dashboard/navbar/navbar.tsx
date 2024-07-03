'use client';
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='p-5 flex items-center justify-between rounded bg-[#182237]'>
      <div className='font-bold capitalize text-[#b7bac1]'>
        {pathname.split('/').pop()}
      </div>
      <div className='flex items-center gap-8'>
        <div className='flex items-center bg-gray-800 p-2 gap-4 rounded'>
          <MdSearch />
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent text-white border-none'
          ></input>
        </div>
        <div className='flex gap-8'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
