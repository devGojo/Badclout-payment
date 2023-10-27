import './App.scss';
import { useState } from 'react';
import smirk from '../src/assets/images/bad-yellow.png';
import pix from '../src/assets/images/pix.png';
import slogann from '../src/assets/images/yellow bad 1.png';
import silhueta from '../src/assets/images/silhueta.png';
import lupa from '../src/assets/images/LUPA.png';
import carrinho from '../src/assets/images/carrinho.png';
import vector from '../src/assets/images/Vector 32.png';
import cartão from '../src/assets/images/carta.png';
import barras from '../src/assets/images/barras.png';
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

      <div>
      <img src={silhueta} className='silhueta'/>
      <h3>Minha conta</h3>
      <h3 className='conect'>Conecte-se</h3>
      </div>


      <div className='banco'>
      <img src={carrinho} className='carrinho'/>
      <h1 className='money'>carrinho</h1>
      <h1 className='din'>R$ 00,00 BRL</h1>
      </div>
    
       <h1 className='bando'>Brands</h1>

       <h1 className='tenis'>Sneakers</h1>

       <h1 className='shop'>Shop</h1>

       <h1 className='novas'>News</h1>
    </header>
    <section>
      <img src={vector} className='vector'/>

        <h1 className='check'>CHECKOUT</h1>
        <div className='yellow'>
          <h1 className='method'>Selecione o Método de pagamento</h1>
          </div>
          <div className='calculos'>
              <div>
               <img src={pix} className='PIX'/> <h1 className='pex'>PIX</h1> <h2 className='medi'>APROVAÇAO  IMEDIATA</h2>
               </div>
               <div>
               <img src={cartão} className='card'/> <h1 className='car'>CARTÃO DE DEBITO</h1>
               </div>
               <div>
               <img src={cartão} className='cart'/> <h1 className='cre'>CARTÃO DE CRÉDITO</h1>
               </div>
            </div>
        </section>
    </main>
  );
}

export default App;
