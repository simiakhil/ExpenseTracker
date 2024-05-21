import React, {useState} from 'react'

function ExpenseForm(prop) {
    const [expense, setExpense] = useState('')
    const [name, setName] = useState('')
    const [income, setIncome] = useState('')
    const [name1, setName1] = useState('')
    // const [show, setShow] = useState('')



    const AddExpense = ()=>{
      prop.onAddExpenses({Name:name, Amount:expense});
      setExpense('')
      setName('') 
    }

    const AddIncome =()=>{
      prop.onAddIncome({Details:name1,Amounts:income});
      setName1('');
      setIncome('')
    }


  return (
    <>
    <form style={{textAlign:'center', }}>
        <input type='text' value={expense} onChange={(e) => setExpense(e.target.value)} placeholder='Expense'/>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        <button type='button' onClick={AddExpense}>ADD EXPENSE</button>

    </form>
    <form style={{textAlign:'center',marginTop:'10px'}}>
    <input type='text' value={income} onChange={(e)=>setIncome(e.target.value)} placeholder='Income'/>
    <input type='text' value={name1} onChange={(e) => setName1(e.target.value)} placeholder='Name1'/>
    <button type='button' onClick={AddIncome}>ADD INCOME</button>

    </form>
   
    </>
  )
}

export default ExpenseForm