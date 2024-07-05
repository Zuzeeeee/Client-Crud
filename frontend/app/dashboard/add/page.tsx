const AddCardPage = () => {
  return (
    <div className='bg-[#182237] p-8 rounded mt-4'>
      <form className='flex flex-wrap justify-between'>
        <input
          type='text'
          className='w-5/12'
          placeholder='Number'
          name='number'
          required
        />
        <input
          type='text'
          className='w-5/12'
          placeholder='CVV'
          name='cvv'
          required
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
