import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

    // 처음 4개의 제품만 가져오기
    const limitedProducts = products ? products.slice(0, 4) : [];

  return (
    <div className='my-8 sm:my-20 px-3 md:px-10'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h3 className='mb-4 sm:mb-8 font-bold text-xl sm:text-2xl'>나이스 추천 제품</h3>
      <ul className='grid grid-cols-2 justify-between xl:grid-cols-4 lg:grid-cols-2 gap-6'>
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
