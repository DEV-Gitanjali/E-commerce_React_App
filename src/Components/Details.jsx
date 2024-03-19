import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "../utils/axios";
import Loading from './Loading';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return product ? (
    <div className='mr-5 w-[70%] flex justify-between items-center h-full m-auto p-[10%]'>
      <img
        className='object-contain h-[80%] w-[45%]'
        src={`${product.image}`}
        alt=""
      />
      <div className='content w-[45%]'>
        <h1 className='text-3xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-5'>{product.category}</h3>
        <h2 className='text-red-300 mb-3'>{product.price}</h2>
        <p className='mb-[5%]'>{product.description}</p>
        <Link to='#' className='py-2 px-5 mr-3 border rounded border-blue-200 text-blue-300'>Edit</Link>
        <Link to='#' className='py-2 px-5 border rounded border-blue-200 text-red-300'>Delete</Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
