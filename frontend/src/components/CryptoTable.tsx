import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData, selectCryptoData, selectCryptoName, selectCryptoStatus, selectDialogVisibility } from '../features/cryptoSlice';
import { AppDispatch } from '../store';
import TableBody from './TableBody';

const CryptoTable: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cryptoName = useSelector(selectCryptoName);
    const cryptoData = useSelector(selectCryptoData);
    const cryptoStatus = useSelector(selectCryptoStatus);

    useEffect(() => {
        dispatch(fetchCryptoData(cryptoName));
        const interval = setInterval(() => {
            dispatch(fetchCryptoData(cryptoName));
        }, 10000);

        return () => clearInterval(interval);
    }, [ cryptoName]);

    if (cryptoStatus === 'loading') {
        return <div className='loader'>Loading...</div>;
    }

    return (
        <div>
            <h2>Current Selected Crypto:  {cryptoName}</h2>
            <table>
                <thead style={{background: cryptoData[0]?.color ?? ''}}>
                    <tr>
                        <th>Serial Number</th>
                        <th>Logo</th>
                        <th>priceUpdatedOn</th>
                        <th>Crypto Rank</th>
                        <th>Crypto Age(Days)</th>
                        <th>Current Crypto Rate(USD)</th>
                        <th>Crypto Volume(In last 24 Hour)</th>
                        <th>Crypto Market Cap(USD)</th>
                        <th>Liquidity</th>
                        <th>All Time High(USD)</th>
                    </tr>
                </thead>
                <TableBody cryptoData={cryptoData} cryptoName={cryptoName} />
            </table>
        </div>
    );
};

export default CryptoTable;
