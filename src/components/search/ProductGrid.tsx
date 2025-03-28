
import React from 'react';
import ProductCard from '@/components/ProductCard';
import NoResults from './NoResults';
import { useIsMobile } from '@/hooks/use-mobile';

interface Product {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  bestDeal?: boolean;
  stores: {
    name: string;
    price: number;
  }[];
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const isMobile = useIsMobile();
  
  if (products.length === 0) {
    return <NoResults />;
  }

  return (
    <div className={`grid grid-cols-1 ${isMobile ? 'gap-4 px-2' : 'sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
