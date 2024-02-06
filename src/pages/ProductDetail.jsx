import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { user, login } = useAuthContext();

  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <section className='p-4 mx-auto max-w-sm lg:max-w-7xl'>
        <div className='flex flex-col md:flex-row'>
          <img className='w-full px-4 basis-7/12' src={image} alt={title} />
          <div className='w-full basis-5/12 flex flex-col p-4'>
            <p>상품 / {category}</p>
            <h2 className='text-3xl font-bold py-2'>{title}</h2>
            <p className='text-xl font-bold pt-2'>
              {price}원
            </p>
            <p className='my-8 text-lg'>{description}</p>
            <div className='mb-6 flex flex-col'>
              <label className='text-zinc-400 font-bold' htmlFor='select'>
                OPTIONS
              </label>
              <select
                id='select'
                className='p-2 my-4 flex-1 border border-zinc-300 focus:outline-zinc-400'
                onChange={handleSelect}
                value={selected}
              >
                {options &&
                  options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
              </select>
            </div>
            
              {success && <p className='my-2'>✅{success}</p>}
              {user && 
                <Button text='장바구니에 추가' onClick={handleClick} />
              }
              {!user && 
                <Button text='장바구니에 추가' onClick={login} />
              }
          </div>
        </div>
      </section>
    </>
  );
}
