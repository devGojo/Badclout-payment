import './App.scss';
import { useState } from 'react';
import smirk from '../src/assets/images/bad-yellow.png';
import slogann from '../src/assets/images/yellow bad 1.png';
import silhueta from '../src/assets/images/silhueta.png';
import lupa from '../src/assets/images/LUPA.png';
import carrinho from '../src/assets/images/carrinho.png';
import axios from 'axios';


function App() {
  return (
    <main>
    <header>
      <img src={smirk} className='smirk' />
      <img src={slogann} className='slogan'/>

      <div className='mano'>
      <img src={lupa} className='lupa'/>
      </div>

      <div className='perfil'>
      <img src={silhueta} className='silhueta'/>
      <h3>Minha conta</h3>
      <h3 className='conect'>Conecte-se</h3>
      </div>


      <div className='banco'>
      <img src={carrinho} className='carrinho'/>
      <h1 className='money'>carrinho</h1>
      <h1 className='din'>R$ 00,00 BRL</h1>
      </div>
    
       <h2>Brands</h2>
    </header>
    <section>
   
        </section>
    </main>
  );
}

export default App;
