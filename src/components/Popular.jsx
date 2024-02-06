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
    <div className='my-20 mx-auto lg:w-[1080px] xl:w-[1380px]'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-6 p-4'>
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
