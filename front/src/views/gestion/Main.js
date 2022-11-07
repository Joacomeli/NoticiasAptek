import React from 'react';
import HeaderGestion from '../../components/header-gestion/Main';
import NewsGestion from '../../components/news-list-gestion/Main';

export default function Gestion() {
  return(
    <>
      <HeaderGestion />
      
        <NewsGestion />
    </>
  );
}