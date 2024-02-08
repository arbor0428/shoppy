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
  const handleSelect = (option) => setSelected(option); // 이제는 버튼을 클릭할 때 해당 옵션을 선택하도록 업데이트
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  const formattedPrice = price.toLocaleString(); // 가격을 천 단위 콤마로 포맷팅

  return (
    <>
      <section className='py-12 mx-auto w-11/12 2xl:w-[1280px] xl:w-[1024px]'>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='basis-full md:basis-7/12'>
            <img className='w-full md:px-4' src={image} alt={title} />
          </div>
          <div className='w-full basis-full md:basis-5/12 flex flex-col  md:px-4'>
            <p>상품 / {category}</p>
            <h2 className='text-3xl font-bold py-2'>{title}</h2>
            <p className='text-xl font-bold pt-2'>
              {formattedPrice}원
            </p>
            <p className='my-8 text-lg'>{description}</p>
            <div className='mb-6 flex flex-col'>
              <p className='mb-4 text-zinc-700 font-bold' htmlFor='select'>
                사이즈 선택
              </p>
              <div className='grid grid-cols-3 md:grid-cols-5 gap-1'>
                {options &&
                    options.map((option, index) => (
                      <button
                        key={index}
                        className={`py-3 rounded-md border border-zinc-300 font-bold focus:outline-zinc-400 ${
                          selected === option ? 'bg-gray-300' : ''
                        }`}
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </button>
                  ))}
              </div>
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
