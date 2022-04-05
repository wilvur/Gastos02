import React, {useRef} from 'react'
import { useBudgets} from '../contexts/BudgetContext'


export default function AddExpenseForm() {
    const {budgets, addExpenses} = useBudgets()
 

    const nameRef = useRef()
    const amountRef = useRef()
    const budgetRef = useRef()

    function handleSubmit(e) {
      e.preventDefault()
      addExpenses({
        name:nameRef.current.value, 
        amount: amountRef.current.value, 
        budgetId: budgetRef.current.value 
      });
      document.getElementById("formExpense").reset();
    }

  return (
    <div className='flex-col w-1/3 content-center bg-blue-400 border-2 m-3 p-3'>
        <form onSubmit={handleSubmit} id="formExpense">
        <input className='mb-3' ref={nameRef} type="text"></input>
        <input className='mb-3' ref={amountRef}type="number"></input>
        <select ref={budgetRef}>
           {budgets.map(budget => {
            return (
              <option key={budget.id} value={budget.id}>{budget.name}</option>
            )
            })
        }
        </select>
        <input className="bg-blue-600 p-2" type="submit" value="Grabar" />

                        
        </form>
    </div>

  )
}
