import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
  const[isNewTransactionModalOpen , setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true); 
  }

  function handleCloseNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(false);  
  }
 
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Dashboard />      
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>
    </>   
  );
}


