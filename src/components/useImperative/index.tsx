// The useImperativeHandle hook in React is used to customize the instance value that is exposed when using React.forwardRef. 
// It allows the parent component to access specific functions or properties of a child component.

import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Define the type for the custom ref methods
interface CustomInputRef {
    focusInput: () => void;
    clearInput: () => void;
}

// Child component
const CustomInput = forwardRef<CustomInputRef, React.InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        // Customize the ref's exposed methods
        useImperativeHandle(ref, () => ({
            focusInput: () => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            },
            clearInput: () => {
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
            },
        }));

        return <input className="rounded-md text-base p-2" ref={inputRef} {...props} />;
    }
);

// Parent component
const UseImperativeComp = () => {
    const inputRef = useRef<CustomInputRef>(null);

    const handleFocus = () => {
        inputRef.current?.focusInput();
    };

    const handleClear = () => {
        inputRef.current?.clearInput();
    };

    return (
        <div className="flex justify-center flex-col items-center p-4 gap-4 rounded-lg">
            <h1 className="text-2xl text-indigo-900 font-bold">Use Imperative</h1>
            <CustomInput ref={inputRef} placeholder="Type something..." />
            <button className="px-2 py-1 border-fuchsia-600 bg-fuchsia-600 text-white w-28 rounded-md text-md font-bold border-2 " onClick={handleFocus}>Focus Input</button>
            <button className="px-2 py-1 border-indigo-900 bg-indigo-800 text-white w-28 rounded-md text-md font-bold border-2 " onClick={handleClear}>Clear Input</button>
        </div>
    );
};

export default UseImperativeComp;
