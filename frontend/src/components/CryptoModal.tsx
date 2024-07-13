// src/components/CryptoModal.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectCryptoList, selectCryptoName, setCryptoName } from '../features/cryptoSlice';

interface CryptoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ isOpen, onClose }) => {
    const currentSelectedCurrency = useSelector(selectCryptoName);
    const cryptoList = useSelector(selectCryptoList);
    const dispatch = useDispatch();
    const inputRef = React.useRef<HTMLSelectElement>(null);

    const handleSubmit = () => {
        if (cryptoList.includes(inputRef.current?.value || '')) {
            dispatch(setCryptoName(inputRef.current?.value || 'BTC'));
            onClose();
        } else {
            alert('Invalid crypto name');
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Change Crypto</h2>
                <select ref={inputRef} className='dropdown' >
                {cryptoList.map((crypto, index) => (
                        <option key={index} selected={currentSelectedCurrency == crypto} value={crypto}>{crypto}</option>
                    ))}
                </select>
                <div className='btn-grp'>
                <button onClick={handleSubmit} className='submit'>Submit</button>
                <button onClick={onClose} className='close'>Close</button></div>
            </div>
        </div>
    );
};

export default CryptoModal;
