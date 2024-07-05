const AddCardPage = () => {
  return (
    <div className='bg-[#182237] p-8 rounded mt-4'>
      <form className='flex flex-wrap justify-between'>
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
          placeholder='Cep'
          name='cep'
          required
        />

        <input
          type='text'
          className='w-5/12'
          placeholder='Street'
          name='street'
          disabled
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='State'
          name='state'
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

export default AddCardPage;
