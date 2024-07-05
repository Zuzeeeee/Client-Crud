'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get('page') || '1';

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === 'prev'
      ? params.set('page', `${parseInt(page) - 1}`)
      : params.set('page', `${parseInt(page) + 1}`);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className='p-2 flex justify-between'>
      <button
        className='cursor-pointer py-2 px-4 disabled:cursor-not-allowed bg-gray-800 rounded-md'
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className='cursor-pointer py-2 px-4 disabled:cursor-not-allowed bg-gray-800 rounded-md'
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
