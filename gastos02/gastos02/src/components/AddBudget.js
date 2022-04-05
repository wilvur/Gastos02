import React from 'react'
import { useRef } from 'react'
import {useBudgets} from "../contexts/BudgetContext"

export default function AddBudgetCard() {
  const nameRef = useRef()
  const maxRef  = useRef()
  const {addBudget} = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()
 
    addBudget({
    name: nameRef.current.value,
    max: parseFloat(maxRef.current.value)
    })
  }

  return (
      <form onSubmit={handleSubmit}>
    <div className='flex-col w-1/3 content-center bg-blue-400 border-2 m-3 p-3'>
    <label className='m-3' >Name</label>  
    <input className='m-3' type="text" ref={nameRef}/>
    <label className='m-3' >Monto</label>
    <input className='m-3' type="number"  ref={maxRef} />
    <input className="bg-blue-600 p-2" type="submit" />
    </div>
     </form>
  )
}
