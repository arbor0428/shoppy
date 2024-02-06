import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-2xl' />
      {products && (
        <p className='w-5 h-5 text-sm text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-3'>
          {products.length}
        </p>
      )}
    </div>
  );
}
