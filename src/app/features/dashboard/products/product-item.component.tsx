import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getProducts } from './getProducts.action';
import { useEffect } from 'react';
import { Product } from './product';

export default function ProductItem({ product }:{ product: Product }) {

  return (
    <div className="bg-gray-900 rounded-lg mx-10 my-10 px-10 py-10 text-white w-xs">
      <div className='text-gray-400'>{ product.category }</div>
      <div className='text-yellow-300'>{ product.rating }/5</div>
      <div className=''>{ product.brand ? product.brand + '. ' : '' } { product.title }</div>
      <div><img src={product.thumbnail} /></div>
      <div className='text-gray-400'>{ product.description }</div>
      <div className='text-lime-400'>
        { product.price } $ <span className='text-red-500'>-{ product.discountPercentage } %</span>
      </div>
      <div>{ product.tags.map(t => <span className="bg-sky-800">{t} </span>) }</div>
      <div>{ product.reviews.map(r => 
        <div>
          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-950 dark:text-white">{r.reviewerName} </span> 
            <span className="font-medium text-gray-950 dark:text-gray-400">{r.comment}</span>
          </p>
        </div>
      )}</div>
    </div>
)};
