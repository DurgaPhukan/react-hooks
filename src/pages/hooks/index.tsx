import React from 'react'
import UseStateComp from '../../components/useState'
import UseEffectComps from '../../components/useEffect'
import UseContext from '../../components/useContext'
import UseReducerComp from '../../components/useReducer'
import UseMemoComp from '../../components/useMemo'
import UseRefExample from '../../components/useRef'
import UseCallBackComp from '../../components/useCallBack'
import UseIdComp from '../../components/useId'
import UseLayoutComp from '../../components/useLayout'
import UseTransitionComp from '../../components/useTransition'
import UseImperativeComp from '../../components/useImperative'
import UseDebugComp from '../../components/useDebugValue'

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
            <div className='bg-slate-400 border-2 rounded-lg border-purple-950'>
                <UseRefExample />
            </div>
            <div className='bg-purple-300 border-2 rounded-lg border-purple-950'>
                <UseCallBackComp />
            </div>
            <div className='bg-indigo-300 border-2 rounded-lg border-indigo-950'>
                <UseIdComp />
            </div>
            <div className='bg-rose-300 bottom-2 rounded-lg border-2 border-rose-500'>
                <UseLayoutComp />
            </div>
            <div className='bg-green-300 bottom-2 rounded-lg border-2 border-green-500'>
                <UseTransitionComp />
            </div>
            <div className='bg-indigo-300 border-2 rounded-lg border-indigo-950'>
                <UseImperativeComp />
            </div>
            <div className='bg-slate-400 border-2 rounded-lg border-purple-950 col-span-2'>
                <UseDebugComp />
            </div>
        </div>
    )
}

export default Hooks