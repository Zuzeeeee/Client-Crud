import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdLogout,
} from 'react-icons/md';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className='sticky top-4 h-full'>
      <div className='flex items-center gap-2 mb-2'>
        <Image
          className='object-cover rounded-full'
          src={'/noavatar.png'}
          alt=''
          width='50'
          height='50'
        ></Image>
        <div className='flex flex-col'>
          <span className='text-xs text-[#b7bac1]'>User</span>
          <span className=''>Administrator</span>
        </div>
      </div>
      <ul className='list-none'>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className='font-bold text-xs text-[#b7bac1] '>
              {category.title}
            </span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form>
        <button className='p-5 flex items-center w-full text-white gap-4 my-2 rounded-sm bg-none border-none absolute bottom-0'>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
