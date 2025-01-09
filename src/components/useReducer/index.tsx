import React, { useReducer } from 'react'

type State = { count: number }
type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }

const reducerFn = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'reset':
            return { ...state, count: 0 }
        default:
            console.log('Error in the action')
            return state
    }
}


const initialState: State = { count: 0 }
const UseReducerComp = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState)
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-4 rounded-lg'>
            <div>
                <h1 className='text-2xl text-indigo-900'>Use Reducer</h1>
                <h1 className='text-center text-xl mt-6 font-semibold px-4 py-2 border-2 border-indigo-700 rounded-md' >Value : {state.count}</h1>
            </div>
            <div className='py-6 px-4 bg-indigo-800 flex gap-2 rounded-md mt-8'>
                <button onClick={() => dispatch({ type: 'increment' })} className='p-2 border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800 w-28 rounded-md font-bold border-2 '>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })} className='p-2 border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800 w-28 rounded-md font-bold border-2' >-</button>
                <button onClick={() => dispatch({ type: 'reset' })} className='p-2 border-fuchsia-600 bg-fuchsia-100 text-fuchsia-800 w-28 rounded-md font-bold border-2' >Reset</button>
            </div>
        </div >

    )
}

export default UseReducerComp