import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
    const {
    productsQuery: { isLoading, error, data: products },
    } = useProducts();

      // '남성' 카테고리에 해당하는 제품들만 필터링
    const menProducts = products ? products.filter(product => product.category === '남성신발') : [];


    return (
    <div className='my-20 mx-auto w-11/12 2xl:w-[1280px] xl:w-[1024px]'>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h3 className='mb-4 sm:mb-8 font-bold text-xl sm:text-2xl'>남성 제품</h3>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {menProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    </div>
    );
}