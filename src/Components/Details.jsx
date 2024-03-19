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
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className='content w-[45%]'>
        <h1 className='text-3xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='text-zinc-400 my-5'>men's clothing</h3>
        <h2 className='text-red-300 mb-3'>$109.95</h2>
        <p className='mb-[5%]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link to='#' className='py-2 px-5 mr-3 border rounded border-blue-200 text-blue-300'>Edit</Link>
        <Link to='#' className='py-2 px-5 border rounded border-blue-200 text-red-300'>Delete</Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
