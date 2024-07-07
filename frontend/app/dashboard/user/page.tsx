'use client';

import { addUser, findCep, UserData } from '@/app/lib/action';
import { ChangeEvent } from 'react';
import { useFormState } from 'react-dom';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';

const AddUserPage = () => {
  const callback = (content: {
    logradouro: string;
    localidade: string;
    uf: string;
  }) => {
    if (typeof window !== 'undefined') {
      (document.getElementById('street') as HTMLInputElement)!.value =
        content.logradouro;
      (document.getElementById('city') as HTMLInputElement)!.value =
        content.localidade;
      (document.getElementById('state') as HTMLInputElement)!.value =
        content.uf;
    }
  };

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (typeof window !== 'undefined') {
        (document.getElementById('street') as HTMLInputElement)!.value = '...';
        (document.getElementById('city') as HTMLInputElement)!.value = '...';
        (document.getElementById('state') as HTMLInputElement)!.value = '...';
      }
      findCep(e.target!.value).then((content) => callback(content));
    },
    400
  );

  const handleAddUser = (formData: FormData) => {
    var object: any = {};
    formData.forEach((value, key) => (object[key] = value));
    console.log(object);

    let street, city, state;
    if (typeof window !== 'undefined') {
      street = (document.getElementById('street') as HTMLInputElement)!.value;
      city = (document.getElementById('city') as HTMLInputElement)!.value;
      state = (document.getElementById('state') as HTMLInputElement)!.value;
    }
    const data = { ...object, street, city, state };

    addUser(data as unknown as UserData);
  };

  return (
    <div className='bg-[#182237] p-8 rounded mt-4'>
      <form
        action={(data) => handleAddUser(data)}
        className='flex flex-wrap justify-between'
      >
        <input
          type='text'
          className='w-5/12'
          placeholder='Name'
          name='name'
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='Surname'
          name='surname'
          required
        />
        <input
          type='email'
          className='w-5/12'
          placeholder='email'
          name='email'
          required
        />
        <input
          type='date'
          className='w-5/12'
          placeholder='Birth date'
          name='birthDate'
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='telephone'
          name='telephone'
          required
        />

        <input
          type='text'
          className='w-5/12'
          placeholder={'cep'}
          name='cep'
          onChange={handleSearch}
        />

        <input
          type='text'
          className='w-5/12'
          placeholder='Street'
          name='street'
          id='street'
          onChange={(e) => console.log(e.target.value)}
          disabled
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='State'
          name='state'
          id='state'
          disabled
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='City'
          name='city'
          id='city'
          disabled
          required
        />

        <button
          type='submit'
          className='w-full p-5 bg-teal-700 rounded cursor-pointer mt-5 border-none'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
