import React, { useRef } from 'react';

const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="flex flex-col items-center justify-evenly p-4 my-4">
            <h1 className="text-2xl text-slate-800 mb-4 font-bold">Use Ref</h1>
            <div className='flex flex-col gap-4 items-center bg-slate-700 p-6 rounded-md'>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type something..."
                    className="p-2 border-2 border-gray-300 rounded-md"
                />
                <button
                    onClick={handleFocus}
                    className=" px-4 py-2 bg-blue-600 text-white rounded-md w-32"
                >
                    Focus Input
                </button>
            </div>
        </div>
    );
};

export default UseRefExample;
