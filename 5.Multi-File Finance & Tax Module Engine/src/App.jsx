
import {CalculateTax ,TaxAlert} from  './components/TaxUtilities'
import  BudgetCalculation from './components/BudgetComponent'
import UserProfile   from './components/UserProfile'
function   App(){
    return(
        <>
         <UserProfile/>
        <CalculateTax/>
        <TaxAlert/>   
        <BudgetCalculation/>
        </>
    )
}


  export default App;