import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, price },
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
    // 페이지 이동 후 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 이미지가 배열인 경우 첫 번째 이미지만 사용
  const imageUrl = Array.isArray(image) ? image[0] : image;


  const formattedPrice = price.toLocaleString(); // 가격을 천 단위 콤마로 포맷팅

  return (
    <li
      onClick={handleClick}
      className='cursor-pointer'
    >
      <div className='w-full overflow-hidden'>
        <img className='w-full h-full transition-all hover:scale-105' src={imageUrl} alt={title} />
      </div>
      <div className='mt-2 px-2 text-lg'>
        <h3 className='font-bold text-basic sm:text-lg truncate'>{title}</h3>
        <p>{`${formattedPrice}원`}</p>
      </div>
    </li>
  );
}
