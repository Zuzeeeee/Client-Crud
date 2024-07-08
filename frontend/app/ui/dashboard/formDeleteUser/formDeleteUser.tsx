'use client';

import { deleteUser } from '@/app/lib/action';

const FormDeleteUser = ({ userId }: { userId: string }) => {
  return (
    <form>
      <input type='hidden' name='id' value={userId} />
      <button
        className='rounded cursor-pointer py-2 px-3 text-white border-none bg-red-500'
        onClick={() => deleteUser(userId)}
      >
        Delete
      </button>
    </form>
  );
};

export default FormDeleteUser;
