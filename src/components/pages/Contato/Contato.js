import React from 'react';
import ServiceSection from '../../ServiceSection';
import { homeObjOne } from './Data.js';

function Products() {
  return (
    <>
      <ServiceSection {...homeObjOne} />
    </>
  );
}

export default Products;
