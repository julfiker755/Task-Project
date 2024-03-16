import React from 'react';
import Container from './shared/Container';
import Googlemap from './components/Googlemap';
import Filter from './components/Filter';
import Cars from './components/Cars';


const App = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 py-2'>
        {/* left part of design */}
         <div className='overflow-hidden'>
            <Googlemap></Googlemap>
            <Filter></Filter>
         </div>
         {/* right part of design */}
         <div className='col-span-1 lg:col-span-3'>
            <Cars></Cars>
         </div>
       </div>
    </Container>
  );
};

export default App;