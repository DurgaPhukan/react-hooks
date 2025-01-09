import React, { useEffect, useState } from 'react'

const UseEffectComps = () => {
    const [value, setValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, 1000)

        return () => clearInterval(timer)
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='flex justify-center flex-col items-center p-4 gap-6 rounded-lg'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl text-fuchsia-900 text-center'>Use Effect and Debounce</h1>
                <input className='rounded-md text-base p-2' onChange={handleChange} type="text" />
                <h2>Debounced Value after 2sec: <span className='bg-slate-100 px-6 py-1 ml-2 rounded-md'>{debouncedValue}</span> </h2>
            </div>
        </div>
    )
}

export default UseEffectComps