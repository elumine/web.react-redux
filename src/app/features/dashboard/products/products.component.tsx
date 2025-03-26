import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getProducts } from './getProducts.action';
import { useEffect } from 'react';
import ProductItem from './product-item.component';
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`query {
  post(id: 1) {
    id
    title
    body
  }
}`;

export default function Products() {
  const productsState = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  useEffect(() => { dispatch(getProducts({})); }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap justify-start text-white">
        { !loading && <div>{data.post.title}</div>}
        {/* {
          productsState.products.map((p, i) => <ProductItem key={i} product={p} />)
        } */}
      </div>
    </div>
)};
