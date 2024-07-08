import { getUser, getUserCards } from '@/app/lib/action';
import ViewUser from '@/app/ui/dashboard/viewUser/viewUser';
import React from 'react';

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let data = await Promise.all([getUser(id), getUserCards(id)]);

  return <ViewUser id={id} data={data} />;
};

export default SingleUserPage;
