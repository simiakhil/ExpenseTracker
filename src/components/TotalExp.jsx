import React, { useEffect } from 'react'

function TotalExp({expenses,expensetotal,setexpensetotal}) {
    let Expense = 0;

        for (let i = 0; i < expenses.length; i++){
            Expense += parseInt(expenses[i].Amount);
            console.log(expenses[i].Amount);
        }

        useEffect(()=>{
            setexpensetotal(Expense)
        },[expenses])
       

    return (
        <>
            <div>
                <h4>Total Expense: ${expensetotal}</h4>
                
            </div>
        </>
    );
}


export default TotalExp