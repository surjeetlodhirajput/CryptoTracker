import React from "react";
import dayjs from "dayjs";
const TableBody: React.FC<any> = React.memo(({cryptoData, cryptoName})=>{
    return (<tbody>
        {cryptoData.slice(0, 20).map((entry:any, index: string) => (
            <tr key={`${index}_${cryptoName}`}>
                <td>{`${index+1}`}</td>
                <td><img className='crypto-logo' src={`${entry.png64}`} alt={`${index}_${entry.png64}`} /></td>
                <td>{dayjs(entry.createdAt).format('MMMM D, YYYY h:mm:ss A')}</td>
                <td>{entry.rank}</td>
                <td>{entry.age}</td>
                <td>{entry.rate}</td>
                <td>{entry.volume}</td>
                <td>{entry.cap}</td>
                <td>{entry.liquidity}</td>
                <td>{entry.allTimeHighUSD}</td>
            </tr>
        ))}
    </tbody>)
})
export default TableBody;