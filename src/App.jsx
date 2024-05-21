import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import TotalExp from './components/TotalExp'
import TotalIncome from './components/TotalIncome'
import Balance from './components/Balance'

function App() {
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])
  const [expensetotal,setexpensetotal] = useState()
  const [incometotal,setIncometotal] = useState()
  const [balance,setBalance] =useState(0)
  

const Add_Expense =(data) =>{
  var ex=[...expenses];
  ex.push(data);
  setExpenses(ex);
}

const Add_Income = (data)=>{
  var inc=[...incomes];
  inc.push(data);
  setIncomes(inc);
}

useEffect(()=>{

    setBalance(incometotal-expensetotal)
},[expenses,incomes])



  return (
    <>
    <div style={{width:'600px', height:'600px',backgroundColor:'gray',border:'3px solid red', margin:'0 auto'}}>
      <h1 style={{textAlign:'center'}}>EXPENSE TRACKER</h1>
      <ExpenseForm onAddExpenses={Add_Expense} onAddIncome={Add_Income} />
      <ExpenseList exp={expenses} incm={incomes}/>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TotalExp expenses={expenses} expensetotal={expensetotal} setexpensetotal={setexpensetotal}/> 
      <TotalIncome incomes={incomes} incometotal={incometotal} setIncometotal={setIncometotal}/>
      </div>
      <Balance balance={balance}/>
    </div> 
    

    </>
  )
}

export default App
