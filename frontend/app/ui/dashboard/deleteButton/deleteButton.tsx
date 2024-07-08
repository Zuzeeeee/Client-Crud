'use client';

import { deleteCard } from '@/app/lib/action';

const DeleteButton = ({
  cardId,
  onClick,
}: {
  cardId: string;
  onClick: () => void;
}) => {
  return (
    <>
      <input type='hidden' name='id' value={cardId} />
      <button
        onClick={onClick}
        className='rounded cursor-pointer py-2 px-3 text-white border-none bg-red-500 '
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
