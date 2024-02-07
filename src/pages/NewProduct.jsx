import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]); // 업로드할 파일 배열
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    // 선택한 파일들에 대한 미리보기 업데이트
    setProduct({
      ...product,
      images: selectedFiles.map((file) => URL.createObjectURL(file)),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      const uploadedImageUrls = await Promise.all(files.map(uploadImage)); // 선택한 모든 파일 업로드
      const productWithImages = {
        ...product,
        images: uploadedImageUrls.slice(0, 4), // 최대 4개의 이미지 URL만 저장
      };
      await addProduct.mutate(productWithImages); // 제품 정보와 이미지 URL 배열 전달하여 제품 추가
      setSuccess('성공적으로 제품이 추가되었습니다.');
      setTimeout(() => {
        setSuccess(null);
      }, 4000);
    } catch (error) {
      console.error('제품 추가 중 오류:', error);
    } finally {
      setIsUploading(false);
      setFiles([]); // 파일 선택 상태 초기화
    }
  };


  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      <div className="flex flex-wrap justify-center mb-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            className='w-40 h-40 mx-2 my-2'
            src={image}
            alt={`Uploaded image ${index + 1}`}
          />
        ))}
      </div>
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          multiple  // 여러 파일 선택 가능하도록 추가
          required
          onChange={handleChange}
        />
        {/* 다른 입력 폼 추가 */}
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션들(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />
        {/* 이미지 등록 버튼 아래에 다른 입력 폼 추가 */}
        <Button
          text={isUploading ? '업로드중...' : '제품 등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
