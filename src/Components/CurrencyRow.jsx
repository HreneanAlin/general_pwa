import React from 'react';

function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <>
            <input type="number" className="input" value={amount ? amount : 0} onChange={onChangeAmount} min="0"/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option =>
                    <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    );
}

export default CurrencyRow;