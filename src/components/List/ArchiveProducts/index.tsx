import React from 'react'
import { Container } from './style';
import { ProductListProps } from '../../../types/types';
import ProductCard from '../ProductCard';
import { ProductsItens } from '../../../routes/List/style';

interface ArchiveProps {
  products: ProductListProps[];
  indexPage: number;
  setOpenArchive: React.Dispatch<React.SetStateAction<boolean>>
};

const ArchiveProducts: React.FC<ArchiveProps> = ({ products, indexPage, setOpenArchive }) => {

  return (
    <Container>
      <header>
        <h1 className='title'>Arquivados</h1>
        <button onClick={() => setOpenArchive(false)}>Voltar para listas</button>
      </header>
      <ProductsItens>
        {products.map((item, i) => item.archive &&
          <ProductCard {...item} isCollected={item.collected} i={i} index={indexPage}/>
        )}
      </ProductsItens>
    </Container>
  );
};

export default ArchiveProducts;