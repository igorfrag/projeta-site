import React from 'react';
import ServiceSection from '../../ServiceSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data.js';

function Servicos() {
  return (
    <>
      <ServiceSection {...homeObjOne} />
      <ServiceSection {...homeObjTwo} />
      <ServiceSection {...homeObjThree} />
    </>
  );
}

export default Servicos;
