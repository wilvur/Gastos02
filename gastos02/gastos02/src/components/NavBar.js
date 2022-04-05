import React from 'react'

export default function  NavBar() {
  return (
    <div className="flex">
    <div className="w-screen p-6 bg-black-100  flex justify-center items-center text-lg" >Control de Gastos</div>
    <div id="addBudget">Add Budget</div>
    <div id="addExpense" > ExpenAddse</div>
</div>
  )
}
