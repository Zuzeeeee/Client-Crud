import { getUser, getUserCards } from '@/app/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

const user = {
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
  billing: [{ number: '123456789', cvv: '123', expiredAt: '10/10/2010' }],
};

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = await getUser(id);
  const cardData = await getUserCards(id);

  return (
    <div className='flex gap-5'>
      <div className='mt-5 p-5 font-bold flex-2 bg-[#182237] rounded text-[#b7bac1] h-max'>
        <div className='w-full relative overflow-hidden mb-5 h-64 min-w-56 rounded'>
          <Image src={'/noavatar.png'} alt='' fill />
        </div>
        {`${user.name} ${user.surname}`}
      </div>
      <div className='p-5 mt-5 flex-1 bg-[#182237] rounded'>
        <form className='flex flex-col'>
          <input type='hidden' name='id' value={data.id} />
          <label className='text-xs'>Name</label>
          <input type='text' name='name' placeholder={data.name} />
          <label className='text-xs'>Surname</label>
          <input type='text' name='surname' placeholder={data.surname} />
          <label className='text-xs'>Email</label>
          <input type='email' name='email' placeholder={data.email} />
          <label className='text-xs'>Phone</label>
          <input type='text' name='phone' placeholder={data.telephone} />
          <label className='text-xs'>Cep</label>
          <input type='text' name='address' placeholder={data.cep} />
          <div className='flex items-center justify-between py-4'>
            <label className='text-xs'>Cards</label>
            <Link href={`/dashboard/add?q=${data.id}`}>
              <button className='p-2 bg-indigo-700 rounded cursor-pointer text-white border-none'>
                Add New
              </button>
            </Link>
          </div>
          <table className='w-full mt-2'>
            <thead>
              <tr className='text-xs py-2'>
                <td>Number</td>
                <td>CVV</td>
                <td>Expire At</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cardData.map(
                (card: { number: string; cvv: string; expiredAt: string }) => {
                  return (
                    <tr key={card.number}>
                      <td>
                        <input
                          type='text'
                          name='address'
                          placeholder={card.number}
                        />
                      </td>
                      <td>
                        <input
                          type='text'
                          name='address'
                          placeholder={card.cvv}
                        />
                      </td>
                      <td>
                        <input
                          type='text'
                          name='address'
                          placeholder={card.expiredAt}
                        />
                      </td>

                      <td>
                        <div className='flex'>
                          <form>
                            <input type='hidden' name='id' value={user.id} />
                            <button className='rounded cursor-pointer py-2 px-3 text-white border-none bg-red-500 '>
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <button className='w-full p-5 bg-teal-700 rounded cursor-pointer mt-5 border-none'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
