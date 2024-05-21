import React from 'react'


function ExpenseList(props) {
  return (
    <>

    <h3>Transactions</h3>
<div style={{display:'flex',flexWrap:'wrap', border:'1px solid black',justifyContent:'space-between'}}>
         <div>
        {
        props.exp.map((value)=>{
           return <p>{value.Name} - {value.Amount}</p>;
})  
        }    
    </div>
    <div>
      {
      props.incm.map((value)=>{
          return <p>{value.Details} - {value.Amounts}</p>
      })
      }
    </div>
</div>
    </>
  )
}

export default ExpenseList