import React from 'react';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  console.log(products); 

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
  );

  const formattedPrice = totalPrice.toLocaleString(); // 가격을 천 단위 콤마로 포맷팅


  return (
    <section className='p-2 md:p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        내 장바구니
      </p>
      {!hasProducts && <div className='flex flex-col items-center justify-center h-96'><p className='font-bold'>장바구니에 상품이 없습니다.</p></div>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-2 md:px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
            <PriceCard text='상품 총액' price={formattedPrice}  />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='배송액' price={SHIPPING.toLocaleString()} />
            <FaEquals className='shrink-0' />
            <PriceCard text='총가격' price={(totalPrice + SHIPPING).toLocaleString()} />
          </div>
          <Button text='주문하기' />
        </>
      )}
    </section>
  );
}
