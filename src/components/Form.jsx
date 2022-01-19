import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {
    let [capital, setCapital] = useState('')
    let [percent, setPercent] = useState('')
    let [duration, setDuration] = useState('')
    let [profit, setProfit] = useState(0)
    let [finalCapital, setFinalCapital] = useState('')
    const [details, setDetails] = useState([])

    const handleCapital = (e) => {
        setCapital(e.target.value)
    }

    const handlePercent = (e) => {
        setPercent(e.target.value)
    }

    const handleDuration = (e) => {
        setDuration(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        capital = Number(capital)
        percent = Number(percent)
        duration = Number(duration)

        let profit = capital * (percent / 100)
        let finalCapital = capital + profit
        setProfit(profit)
        setFinalCapital(finalCapital)

        for(let i = 0; i <= duration; i++){
            capital = finalCapital
            profit = capital * (percent / 100)
            finalCapital = Math.floor(capital + profit)

            setDetails((oldArr) => [
                ...oldArr, {
                    capital,
                    profit,
                    finalCapital
                }
            ])

            console.log(capital, profit, finalCapital)
        }

    }

    console.log(details)

    return (
        <div className='grid w-full place-content-stretch bg-white py-8 px-12 '>
            <h2 className='font-medium text-center text-[#1c124d] mb-4 text-2xl'>
                Financial Calculator
            </h2>
            <div className='flex gap-8'>
                <form
                    className='grid w-full'
                    onSubmit={handleSubmit}
                >
                    <input
                        type='number'
                        id='capital'
                        className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                        required
                        value={capital}
                        placeholder='Capital to Invest'
                        onChange={handleCapital}
                    />
                    <input
                        type='number'
                        id='percent'
                        className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                        required
                        value={percent}
                        onChange={handlePercent}
                        placeholder='Percentage'
                    />
                    <input
                        type='number'
                        id='duration'
                        className='text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4'
                        required
                        value={duration}
                        onChange={handleDuration}
                        placeholder='duration'
                    />

                    <button
                        className=' rounded-md outline-none  bg-[#0059dd] text-white text-sm'
                        style={{ padding: '.5rem 3rem', lineHeight: 2.5 }}
                    >
                        Calculate
                    </button>
                </form>
                <div className='text-[#1c124d] border-2 rounded-md border-[#ccc] w-full py-4 px-6'>
                    <h4 className='font-medium text-center text-[#1c124d] mb-4 text-2xl'>
                        Investment Details
                    </h4>

                    <p>
                        Invested Capital:{' '}
                        <span className='font-bold'>${capital}</span>
                    </p>
                    <p>
                        Percentage Increase:{' '}
                        <span className='font-bold'>{percent}</span>
                    </p>

                    <div className='mt-6'>
                        <div className='border-t'>
                            <p>
                                Initial Capital: <span>${capital}</span>
                            </p>
                            <p>
                                profit: <span>${profit}</span>
                            </p>
                            <p>
                                Final Capital: <span>${finalCapital}</span>
                            </p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
