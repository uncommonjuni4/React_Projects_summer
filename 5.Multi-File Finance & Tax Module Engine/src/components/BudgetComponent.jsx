

function BudgetCalculation(){
    let montlyIncome =   50000 ;
    let rentExpense  =  15000;
    let foodExpense  = 10000;

    let saving = montlyIncome - (rentExpense   + foodExpense);

    return(
        <>
      <p>MonthIncome   : {montlyIncome}</p>  <br/> 
      <p>RentExpense    : {rentExpense}</p>  <br/> 
      <p>FoodExpense   : {foodExpense}</p>  <br/> 

      {saving <30000 && <p>Low Saving Mode!</p>}
        </>
    )
}


export default BudgetCalculation;