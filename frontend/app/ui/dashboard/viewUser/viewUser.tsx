'use client';

import { deleteCard, getUser, getUserCards } from '@/app/lib/action';
import DeleteButton from '@/app/ui/dashboard/deleteButton/deleteButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InputMask from 'react-input-mask';
import { Suspense } from 'react';

const ViewUser = async ({ id, data }: { id: string; data: any }) => {
  const handleOnClick = async (cardId: string) => {
    await deleteCard(cardId, data[0].id);
  };
  return (
    <div className='flex gap-5'>
      <div className='mt-5 p-5 font-bold flex-2 bg-[#182237] rounded text-[#b7bac1] h-max'>
        <div className='w-full relative overflow-hidden mb-5 h-64 min-w-56 rounded'>
          <Image src={'/noavatar.png'} alt='' fill />
        </div>
        {`${data[0].name} ${data[0].surname}`}
      </div>
      <div className='p-5 mt-5 flex-1 bg-[#182237] rounded'>
        <form className='flex flex-col'>
          <input type='hidden' name='id' value={data[0].id} />
          <label className='text-xs'>Name</label>
          <input type='text' name='name' placeholder={data[0].name} />
          <label className='text-xs'>Surname</label>
          <input type='text' name='surname' placeholder={data[0].surname} />
          <label className='text-xs'>Email</label>
          <input type='email' name='email' placeholder={data[0].email} />
          <label className='text-xs'>Phone</label>
          <InputMask
            mask='(99) 99999-9999'
            value={data[0].telephone}
            alwaysShowMask
          ></InputMask>
          <label className='text-xs'>Cep</label>
          <input type='text' name='address' placeholder={data[0].cep} />
          <div className='flex items-center justify-between py-4'>
            <label className='text-xs'>Cards</label>
            <Link href={`/dashboard/add/${data[0].id}`}>
              <button className='p-2 bg-indigo-700 rounded cursor-pointer text-white border-none'>
                Add New
              </button>
            </Link>
          </div>
          <Suspense fallback={<div>Loading... </div>}>
            {data[1].length > 0 && (
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
                  {data[1].map(
                    (card: {
                      id: string;
                      number: string;
                      cvv: string;
                      expiredAt: string;
                    }) => {
                      return (
                        <tr key={card.number}>
                          <td>
                            <input
                              className='p-0'
                              type='text'
                              name='number'
                              placeholder={card.number}
                            />
                          </td>
                          <td>
                            <input
                              className='p-0'
                              type='text'
                              name='cvv'
                              placeholder={card.cvv}
                            />
                          </td>
                          <td>
                            <input
                              className='p-0'
                              type='text'
                              name='expiredAt'
                              placeholder={card.expiredAt}
                            />
                          </td>

                          <td>
                            <div className='flex'>
                              <DeleteButton
                                cardId={card.id}
                                onClick={() => handleOnClick(card.id)}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            )}
          </Suspense>
          {/* <button className='w-full p-5 bg-teal-700 rounded cursor-pointer mt-5 border-none'>
            Update
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
