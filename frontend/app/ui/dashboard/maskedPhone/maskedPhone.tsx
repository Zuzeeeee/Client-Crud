'use client';

import React from 'react';
import InputMask from 'react-input-mask';

const MaskedPhone = ({ phone }: { phone: string }) => {
  return (
    <InputMask
      mask='(99) 99999-9999'
      className='bg-none border-none'
      value={phone}
      disabled
      alwaysShowMask
    ></InputMask>
  );
};

export default MaskedPhone;
