import AddBudgetCard from "./components/AddBudget";
import AddExpenseForm from "./components/AddExpenseForm";
import BudgetCard from "./components/BudgetCard";
import NavBar from "./components/NavBar";
import {useBudgets} from "./contexts/BudgetContext"


function App() {
  const {budgets, getBudgetExpenses} = useBudgets()
  return (
        <div className="flex justify-center">
        <div className="container border-2"> 
          <div className="grid grid-cols-2 gap-2">
           {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + Number(expense.amount), 0 )         
            return(
            <BudgetCard 
                key={budget.id}
                budgetId={budget.id}
                name={budget.name}
                amount={amount} 
                max={budget.max}
            />)
           })
           }
          </div>
          <AddBudgetCard />
          <AddExpenseForm />
        </div>
    </div>
  );
}

export default App;
