import React from 'react'
import UseStateComp from '../../components/useState'
import UseEffectComps from '../../components/useEffect'
import UseContext from '../../components/useContext'
import UseReducerComp from '../../components/useReducer'
import UseMemoComp from '../../components/useMemo'

const Hooks = () => {
    return (
        <div className='grid grid-cols-3 gap-4 container bg-purple-100 p-4 rounded-lg'>
            <div className='bg-purple-300 border-2 rounded-lg border-purple-950'>
                <UseStateComp />
            </div>
            <div className='bg-green-300 border-2 rounded-lg border-green-950 col-span-2'>
                <UseEffectComps />
            </div>
            <div className='col-span-2'>
                <UseContext />
            </div>
            <div className='bg-indigo-300 border-2 rounded-lg border-indigo-950'>
                <UseReducerComp />
            </div>
            <div className='bg-green-300 border-2 rounded-lg border-green-950'>
                <UseMemoComp />
            </div>
            <div className=''>Use Ref</div>
            <div className=''>Use Callback</div>
            <div className=''>UseId</div>
            <div className=''>Use debug value</div>
            <div className=''>Use Reducer</div>
            <div className=''>Use Imperative Handle</div>
            <div className=''>Use Layout Effect</div>
            <div className=''>Use Transition</div>
        </div>
    )
}

export default Hooks