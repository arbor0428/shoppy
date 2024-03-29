import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, images, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  const formattedPrice = price.toLocaleString(); // 가격을 천 단위 콤마로 포맷팅
  
  // 첫 번째 이미지 선택
  const mainImage = images && images.length > 0 ? images[0] : null;

  return (
    <li className='flex justify-between my-2 items-center'>
        {mainImage && (
          <img className='w-24 md:w-48 rounded-lg' src={mainImage} alt={title} />
        )}
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='md:text-lg'>{title}</p>
          <p className='text-xl font-bold'>{option}</p>
          <p>₩{formattedPrice}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
