import React from 'react';
import './Row.css';

function Row({ arr }) {

    return (
        <>
            {
                arr.map((item) => {
                    let { image, name, symbol, current_price, total_volume, market_cap,price_change_percentage_24h } = item;
                    // let obj = {borderBottom:"2px solid rgb(212,212,212)"}
                    return (
                       
                            <tr className='rows' key={item.id}>
                                <td className='cells'><img src={image} alt="img" width={"20px"}/></td>
                                <td className='cells'>{name}</td>
                                <td className='cells'>{symbol}</td>
                                <td className='cells'>${current_price}</td>
                                <td className='cells'>${total_volume}</td>
                                <td className='cells' style={price_change_percentage_24h< 0?{color:"red"}:{color:"green"}}>{price_change_percentage_24h}%</td>
                                <td className='cells'>Mkt cap: ${market_cap}</td>
                            </tr>
                    )
                })
            }
        </>
    )
}

export default Row;
