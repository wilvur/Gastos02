import React, {useContext} from 'react'
import { useState } from 'react'
import {v4 as uuidV4} from  'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetContext)

}
export const BudgetProvider = ({children}) => {
    const [budgets, setBudgets] = useLocalStorage("budgets",[])
    const [expenses, setExpenses]= useLocalStorage("expenses", [])

    //TODO: revisar el sorteo de la fecha
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId).sort()
    } 

    function addExpenses({name, amount, budgetId}) {
        let date = Date.now();
        setExpenses( prevExpenses => { 
            return [...prevExpenses, {id:uuidV4(), name, amount, budgetId, date }]
        } )      
    }

    function addBudget({name, max }) {
        setBudgets(prevBudgets => {
            if(prevBudgets.find(b => b.name === name)){
                return prevBudgets
            } else {
                return [...prevBudgets, { id:uuidV4() , name, max }]
            }
         })   
    }

    function deleteBudget({id}){
        
        setBudgets(prevBudgets =>{
            return prevBudgets.filter(budget => budget.id !==  id)
        })    
    } 
    function deleteExpense({id}){
        setExpenses(prevExpense => {
            return prevExpense.filter(expense => expense.id !== id)
        })
    }

    return (
        <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense
        }}>{children}</BudgetContext.Provider>
    )
}