import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [capital, setCapital] = useState('')
    const [percent, setPercent] = useState('')
    const [duration, setDuration] = useState('')

    const handleCapital = (e) => {
        setCapital(e.target.value)
    }

    const handlePercent = (e) => {
        setPercent(e.target.value)
    }
 
    const handleDuration = e => {
        setDuration(e.target.value)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()

       
    }

    return (
        <form
            className='grid w-full place-content-stretch bg-white'
            style={{ padding: '30px 15px' }}
            onSubmit={handleSubmit}
        >
            <h2 className='font-medium text-center text-[#1c124d] mb-4 text-2xl'>
                Financial Calculator
            </h2>
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
    )
}

export default Form