import React from 'react';
import StockTable from '../StockTable/StockTable';
import StockSelector from '../StockSelector/StockSelector';
import HorSep from '../HorSep/HorSep';
import ModalContainer from '../ModalContainer/ModalContainer';

const Body = () => {
    return (
        <div>
            <StockTable />
            <HorSep />
            <StockSelector />
            <ModalContainer />
        </div>
    )
}

export default Body;