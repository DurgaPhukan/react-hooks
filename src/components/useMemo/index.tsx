import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {
    const [countValue, setCountValue] = useState(0)
    const [searchValue, setSearchValue] = useState('')

    const fruitsArr = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Peach', 'Guava', 'PineApple', 'Grapes']

    const countHandler = () => {
        setCountValue(countValue + 1)
    }

    const searchedFruit = useMemo(() => {
        return fruitsArr.filter((fruit) => fruit.toLowerCase().includes(searchValue.toLowerCase())
        )
    }, [searchValue])




    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl text-indigo-900'>Use Memo</h1>
                <input className='rounded-md text-base p-2' onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search Fruit' />

                <h1 className='text-center text-xl mt-6 font-semibold px-4 py-2 border-2 border-indigo-700 rounded-md' > Counter : {countValue}</h1>
                <div className='flex gap-4 flex-wrap p-2 justify-center h-36'>
                    {searchedFruit?.map((fruit, index) => (
                        <div key={fruit + index} className='bg-white rounded-md h-12 text-center flex items-center px-3'>
                            <h3 className='font-semibold'>{index + 1}.{fruit} </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-4 px-4  flex gap-2 rounded-md '>
                <button onClick={countHandler} className='p-1  border-fuchsia-600 bg-fuchsia-600 text-white w-28 rounded-md text-xl font-bold border-2 '>+</button>
            </div>
        </div >
    )
}

export default UseMemoComp