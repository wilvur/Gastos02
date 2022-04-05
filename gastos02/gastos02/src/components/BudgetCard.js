import React from 'react'
import { currencyFormatter, dateFormatter } from '../utils'
import { useBudgets } from '../contexts/BudgetContext'

export default function BudgetCard({name, amount, max, budgetId}) {

  const { budgets, deleteBudget, getBudgetExpenses, deleteExpense} = useBudgets()

  const budget = budgets.find(b => b.id === budgetId)

  const expense = getBudgetExpenses(budgetId)


                 

  const classNames = ['rounded items-baseline border-2 shadow-md max-w-md']
    if(amount > max) {
      classNames.push("bg-red-400")
    } else {
      classNames.push("bg-black-100")
    }

    function handleDeleteBudget(){
      deleteBudget(budget)
    }

  return (
    <div className={classNames.join(" ")}>  
         <div className='flex w-full justify-end p-2' >
        <button className='h-5 w-5' onClick={handleDeleteBudget}>
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        </div>
        <div className='flex justify-around m-5'>
            <div>{name}</div>
             <div>{currencyFormatter.format(amount)} /{ currencyFormatter.format(max)}</div>
         </div> 
        <div> <progress className="py-1 text-xs text-transparent w-full" max={max} value={amount}  />
        </div>
        <details>
        <summary>Detalles</summary>
        <div className='flex flex-col'>
          { expense.map(e => {
            return (
            <div key={e.id}className='flex justify-around'>
             <div> {e.name} </div>
             <div> {dateFormatter.format(e.date)}</div>
             <div>{e.amount}</div>
             <div>
              <button onClick={() => {deleteExpense(e)}}>
              <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              </button>
           </div>
            </div>
            )
          })
          }
        </div>
        </details>
    </div>
  )
}

