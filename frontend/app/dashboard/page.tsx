import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';

const mockUser = [
  {
    id: '1',
    name: 'José',
    surname: 'Alves',
    email: 'josealves7jk@gmail.com',
    birthDate: '27/10/2002',
    tel: '(11)123456789',
    address: {
      cep: '1234567',
      state: 'SP',
      street: 'Rua aleatoria',
      number: '12',
    },
    billing: [],
  },
];

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { q: string; page: number };
}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);

  return (
    <div className='p-5 mt-5 bg-[#182237] rounded'>
      <div className='flex items-center justify-between'>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
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
          {mockUser.map((user) => (
            <tr key={user.id}>
              <td className='p-2'>
                <span>
                  {user.name} {user.surname}
                </span>
              </td>
              <td className='p-2'>{user.email}</td>
              <td className='p-2'>{user.birthDate}</td>
              <td className='p-2'>{user.tel}</td>
              <td className='p-2'>
                <div className='flex gap-4'>
                  <Link href={`/dashboard/${user.id}`}>
                    <button className='rounded cursor-pointer py-2 px-3 text-white border-none bg-teal-500'>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type='hidden' name='id' value={user.id} />
                    <button className='rounded cursor-pointer py-2 px-3 text-white border-none bg-red-500'>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={mockUser.length} />
    </div>
  );
};

export default Dashboard;
