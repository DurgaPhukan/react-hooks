import React, { useId } from 'react'

const UseIdComp = () => {
    const id = useId()
    const arr = ['Durga', 'Phukan', 'Guwahati', 'Assam', 'India']
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl text-purple-900'>UseID</h1>
            </div>
            <div className='py-4 px-4 flex gap-2 rounded-md justify-center'>
                {arr.map((item) => (
                    <div id={id + item} className='bg-purple-900 py-1 px-2 rounded-md'>
                        <h3 className='text-purple-100'>{item.toUpperCase()}</h3>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default UseIdComp