import { getAllUser } from '@/app/lib/action';
import FormDeleteUser from '@/app/ui/dashboard/formDeleteUser/formDeleteUser';
import MaskedPhone from '@/app/ui/dashboard/maskedPhone/maskedPhone';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import React from 'react';

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { q: string; page: number };
}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const { data, total } = await getAllUser(page);
  return (
    <div className='p-5 mt-5 bg-[#182237] rounded'>
      <div className='flex items-center justify-between'>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/user'>
          <button className='p-2 bg-indigo-700 rounded cursor-pointer text-white border-none'>
            Add New
          </button>
        </Link>
      </div>
      <table className='w-full mt-2'>
        <thead>
          <tr>
            <td className='p-2'>Name</td>
            <td className='p-2'>Email</td>
            <td className='p-2'>Birth Date</td>
            <td className='p-2'>Telephone</td>
            <td className='p-2'>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (user: {
              id: string;
              name: string;
              surname: string;
              email: string;
              birthDate: string;
              telephone: string;
            }) => (
              <tr key={user.id}>
                <td className='p-2'>
                  <span>
                    {user.name} {user.surname}
                  </span>
                </td>
                <td className='p-2'>{user.email}</td>
                <td className='p-2'>{user.birthDate}</td>
                <td className='p-2'>
                  <MaskedPhone phone={user.telephone}></MaskedPhone>
                </td>
                <td className='p-2'>
                  <div className='flex gap-4'>
                    <Link href={`/dashboard/${user.id}`}>
                      <button className='rounded cursor-pointer py-2 px-3 text-white border-none bg-teal-500'>
                        View
                      </button>
                    </Link>
                    <FormDeleteUser userId={user.id}></FormDeleteUser>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination count={total} />
    </div>
  );
};

export default Dashboard;
