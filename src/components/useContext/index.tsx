import React, { createContext, useContext, useState } from 'react'

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider component")
    }
    return context
}

const UseContext = () => {

    return (
        <ContextWrapper>
            <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
                <div>
                    <h1 className='text-2xl text-fuchsia-500 text-center'>Use Context</h1>
                    <ContextValueDisplay />
                </div>
                <div className=''>
                    <ContextHandler />
                </div>
            </div>
        </ContextWrapper>
    )
}


const ContextWrapper = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`border-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-50' : 'bg-blue-100 border-gray-800'} `}>
                {children}
            </div>
        </ThemeContext.Provider >
    )
}

const ContextHandler = () => {
    const { theme, toggleTheme } = useThemeContext()

    return (
        <button className={`py-1 px-2 w-36 rounded-md font-bold border-2 ${theme === 'dark' ? 'bg-gray-800 text-white border-white' : 'bg-gray-50 text-gray-800 border-gray-800'}`} onClick={toggleTheme}>{theme.toLocaleUpperCase()}</button>
    )
}

const ContextValueDisplay = () => {
    const { theme } = useThemeContext()
    return (
        <div className='p-4 '>
            <h1 className={`px-4 py-2 text-lg font-light text-center rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white border-2 border-slate-50' : 'bg-white text-gray-800 border-gray-800 border-2'}`}>The sun dipped below the horizon, painting the sky with streaks of amber and crimson, as a gentle breeze rustled through the trees. The sound of chirping crickets filled the air, creating a soothing rhythm against the distant hum of a stream. A curious fox darted between the shadows, its eyes glinting with mischief. Nearby, a couple sat on a weathered wooden bench, lost in quiet conversation, their laughter occasionally breaking the stillness. It was one of those evenings where time seemed to slow down, inviting everyone to pause and marvel at the beauty of the world around them.</h1>
        </div>
    )
}

export default UseContext