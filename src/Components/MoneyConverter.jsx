import React, {useEffect, useState} from 'react';
import CurrencyRow from "./CurrencyRow";
import Loader from "./Loader";
import Error from "./Error";


const BASE_URL = "https://api.exchangeratesapi.io/latest"


function MoneyConverter() {

    const [currencyOptions, setCurrencyOptons] = useState([])
    const [currencyAmounts, setCurrencyAmounts] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    let content
    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }
    useEffect(() => {

        fetch(BASE_URL).then(res => res.json())
            .then(data => {
                const ronCurrency = Object.keys(data.rates)[8]
                setCurrencyOptons([data.base, ...Object.keys(data.rates)])

                setCurrencyAmounts([1, ...Object.values(data.rates)])

                setFromCurrency(data.base)
                setToCurrency(ronCurrency)
                setLoading(false)
                setExchangeRate(data.rates[ronCurrency])

            }).catch(() => {

            setError(true)
        })

    }, [])


    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbol=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency])).catch(() => {
                setError(true)
            })
        }

    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    if (loading) {
        content = <Loader/>
    }

    if (error) content = <Error/>

    if (!error && !loading) content = (
        <main className="main-convertor">
            <div className="convertor-container">
                <h1>Converter</h1>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                />
                <div className="equals">=</div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}/>
            </div>
            <div className="all-currency-container">
                {currencyOptions.map((option, index) => <div key={index}
                                                             className="one-currency">{option}</div>)}
                {currencyAmounts.map((amount,index) =><div key={index} className="amount">{amount}</div>)}
            </div>
        </main>
    );

    return content

}

export default MoneyConverter;