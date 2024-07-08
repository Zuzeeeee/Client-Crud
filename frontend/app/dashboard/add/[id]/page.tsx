'use client';

import { addCard, CardData } from '../../../lib/action';
const AddCardPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const handleAddCard = async (formData: FormData) => {
    var data: any = {};
    formData.forEach((value, key) => (data[key] = value));

    console.log(data);

    addCard(data as unknown as CardData, id);
  };

  return (
    <div className='bg-[#182237] p-8 rounded mt-4'>
      <form
        action={(data) => handleAddCard(data)}
        className='flex flex-wrap justify-between'
      >
        <input
          type='text'
          className='w-5/12'
          placeholder='Number'
          name='number'
          required
          minLength={12}
          maxLength={16}
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='CVV'
          name='cvv'
          required
          minLength={3}
          maxLength={3}
        />
        <input
          type='date'
          className='w-5/12'
          placeholder='Due date'
          name='expiredAt'
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

export default AddCardPage;
