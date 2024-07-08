'use server';

import axios from 'axios';
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

export interface CardData {
  number: string;
  cvv: string;
  expiredAt: string;
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

  let response;
  try {
    response = await axios.post(`${uri}/api/user`, newUser);
    return response;
  } catch (err) {
    console.log(err.response.data.message);
  } finally {
    if (response?.status === 200) {
      revalidatePath('/dashboard');
      redirect('/dashboard');
    }
  }
};

export const addCard = async (formData: CardData, id: string) => {
  const { number, cvv, expiredAt } = formData;

  try {
    const newCard = {
      number,
      cvv,
      expiredAt,
    };

    const response = await axios.post(`${uri}/api/card/${id}`, newCard);

    return response;
  } catch (err) {
    console.log(err);
    throw new Error('Error on creating card');
  } finally {
    revalidatePath(`/dashboard/${id}`);
    redirect(`/dashboard/${id}`);
  }
};

export const getAllUser = async (page: number) => {
  const response = await axios.get(`${uri}/api/users?page=${page}`);

  return response.data;
};

export const getUser = async (userId: string) => {
  const response = await axios.get(`${uri}/api/user/${userId}`);

  return response.data;
};

export const getUserCards = async (userId: string) => {
  const response = await axios.get(`${uri}/api/card/${userId}`);

  return response.data;
};

export const deleteCard = async (cardId: string, userId: string) => {
  const response = await axios.delete(`${uri}/api/card/${cardId}`);

  revalidatePath(`/dashboard`);

  return response.status;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${uri}/api/user/${userId}`);

  revalidatePath(`/dashboard`);
  console.log(response);
  return response.status;
};
