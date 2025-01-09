import React, { useLayoutEffect, useRef, useState } from 'react'

const UseLayoutComp = () => {
    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 })
    const boxRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (boxRef.current) {
            const { height, width } = boxRef.current.getBoundingClientRect()
            setBoxSize((prev) => ({ ...prev, height, width }))
        }
    }, [])

    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <h1 className='text-2xl text-rose-900 font-bold'>Use Layout</h1>

            <div ref={boxRef} className='w-32 h-24 gap-2 bg-gray-600 rounded-md'>
            </div>
            <div className='py-4 px-4  flex gap-2 rounded-md '>
                <h1>Box size : {boxSize.height}px X {boxSize.width}px</h1>
            </div>
        </div >
    )
}

export default UseLayoutComp