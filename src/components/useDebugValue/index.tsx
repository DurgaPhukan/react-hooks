import React, { useState, useEffect, useDebugValue } from "react";

// Custom Hook
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    // Add a debug value to make it easier to identify the state in React DevTools
    useDebugValue(isOnline ? "Online" : "Offline");

    return isOnline;
};

// Component using the custom hook
const UseDebugComp = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className="flex justify-center flex-col items-center p-4 gap-4 rounded-lg">
            <h1 className="text-2xl text-stale-900 font-bold">Use Debug Value</h1>
            <p>The useDebugValue hook in React is used to display custom labels for custom hooks in React Developer Tools. It doesn’t affect the application directly but helps developers debug their custom hooks more effectively.</p>
            <h1 className="font-bold text-white bg-slate-900 px-3 py-1 rounded-md">You are currently: {isOnline ? "Online" : "Offline"}</h1>
        </div>
    );
};

export default UseDebugComp;
