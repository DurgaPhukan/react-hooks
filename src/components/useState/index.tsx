import React, { useState } from 'react'

const UseStateComp = () => {
    const [value, setValue] = useState(0)
    const incrementor = () => { setValue((prev) => prev + 1) }
    const decrementor = () => { setValue((prev) => prev - 1) }
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <div>
                <h1 className='text-2xl text-fuchsia-900'>Use State</h1>
                <h1>Value : {value}</h1>
            </div>
            <div className='p-2 bg-blue-300 flex gap-2 rounded-md'>
                <button className='p-2 border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800 w-28 rounded-md font-bold border-2 ' onClick={incrementor}>+</button>
                <button className='p-2 border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800 w-28 rounded-md font-bold border-2' onClick={decrementor}>-</button>
            </div>
        </div>
    )
}

export default UseStateComp