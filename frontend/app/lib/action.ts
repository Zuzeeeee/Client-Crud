'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export interface UserData {
  name: string;
  surname: string;
  email: string;
  telephone: string;
  birthDate: Date;
  cep: number;
  street: string;
  state: string;
  city: string;
}

const uri = 'http://127.0.0.1:8000';

export const findCep = async (formData: string) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${formData}/json`);
    await response;
    return response.json();
  } catch (err) {
    console.log(err);
    throw new Error('Failed on searching Cep');
  }
};

export const addUser = async (formData: UserData) => {
  console.log(formData);
  const {
    name,
    surname,
    email,
    telephone,
    birthDate,
    cep,
    street,
    state,
    city,
  } = formData;

  try {
    const newUser = {
      name,
      surname,
      email,
      telephone,
      birthDate,
      cep,
      street,
      state,
      city,
    };

    const response = await fetch(`${uri}/api/user`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Error on creating user');
    }
  } catch (err) {
    console.log(err);
    throw new Error('Error on creating user');
  } finally {
    revalidatePath('/dashboard');
    redirect('/dashboard');
  }
};

export const getAllUser = async (page: number) => {
  const response = await fetch(`${uri}/api/users?page=${page}`);

  const res = response.json();

  return res.then((data) => data);
};

export const getUser = async (userId: string) => {
  const response = await fetch(`${uri}/api/user/${userId}`);

  const res = response.json();

  return res.then((data) => data);
};

export const getUserCards = async (userId: string) => {
  const response = await fetch(`${uri}/api/card/${userId}`);

  const res = response.json();

  return res.then((data) => data);
};
