'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({
  item,
}: {
  item: { path: string; icon: JSX.Element; title: string };
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-4 my-2 rounded hover:bg-gray-800 ${
        pathname === item.path && 'bg-gray-800'
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
