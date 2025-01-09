import React, { useCallback, useState } from 'react'

const UseCallBackComp = () => {
    const [counter, setCounter] = useState(0)

    const incrementHandler = useCallback(() => {
        setCounter((prevCount => prevCount + 1))
    }, [])

    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl text-purple-900'>Use Callback</h1>
                <p className='font-thin'>The useCallback hook in React is used to memoize a function, ensuring that the function is not recreated on every render. This can improve performance, particularly when passing functions as props to child components or when a function depends on stable dependencies.</p>
                <h1 className='text-center text-xl mt-6 font-semibold px-4 py-2 border-2 border-purple-700 rounded-md' > Value : {counter}</h1>
            </div>
            <div className='py-4 px-4  flex gap-2 rounded-md '>
                <CounterBtn increment={incrementHandler} />
            </div>
        </div >
    )
}

const CounterBtn = React.memo(({ increment }: { increment: () => void }) => {
    console.log("Button getting rendered")
    return (
        <button onClick={increment} className='py-1 px-2  border-fuchsia-600 bg-fuchsia-600 text-white w-28 rounded-md text-md font-bold border-2 '>Increment</button>
    )
})

export default UseCallBackComp