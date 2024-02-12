export async function uploadImages(files) {
    const uploadPromises = files.map(file => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
      return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: 'POST',
        body: data,
      })
      .then(res => res.json())
      .then(data => data.url);
    });
  
    return Promise.all(uploadPromises)
      .then(urls => urls.flat()); // 각 파일에 대한 URL 배열을 평면화하여 반환
  }