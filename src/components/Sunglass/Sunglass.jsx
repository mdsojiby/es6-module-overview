import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multyply,addNumberOfTheSeasonInOUrCountry as divide  } from '../../utils/Calculate';
// import add from '../../utils/Calculate';

const Sunglass = () => {

    const first=55
    const second=199
    const sum=add(first,second)
    const mult=multyply
    const vagg=divide(first,second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;