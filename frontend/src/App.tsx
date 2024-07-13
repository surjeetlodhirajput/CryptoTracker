// src/App.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  selectDialogVisibility, setCryptoList, setDialogVisibility } from './features/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import CryptoModal from './components/CryptoModal';
import { AppDispatch } from './store';
import axios from 'axios';
const App: React.FC = () => {
    const isModalOpen = useSelector(selectDialogVisibility);
    const dispatch : AppDispatch = useDispatch();
    React.useEffect(() => {
      const fetchCryptoList = async () => {
          const response = await axios.get('http://localhost:3002/availableCryptoList');
          dispatch(setCryptoList(response.data));
      };
      fetchCryptoList();
  }, []);
    const handleOpenModal = () => {
        dispatch(setDialogVisibility(true));
    };

    const handleCloseModal = () => {
       dispatch(setDialogVisibility(false));
    };

    return (
        <div className="App">
            <div className='header-block'>
            <h1>Crypto Dashboard</h1>
            <button onClick={handleOpenModal}>Change Crypto</button>
            </div>
            <CryptoTable />
            <CryptoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
