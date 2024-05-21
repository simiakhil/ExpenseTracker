import React, { useEffect } from 'react'

function TotalIncome({incomes,incometotal,setIncometotal}) {
    let Income = 0;

        for (let i=0;i <incomes.length; i++){
            Income += parseInt(incomes[i].Amounts)
        }

        useEffect(()=>{
          setIncometotal(Income)
        },[incomes])


    
  return (
    <>
    <div>
    <h4>Total Income : ${incometotal}</h4>

    </div>
    </>
  )
}

export default TotalIncome