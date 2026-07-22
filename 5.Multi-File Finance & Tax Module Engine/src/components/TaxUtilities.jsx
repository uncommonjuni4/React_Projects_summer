import { Fragment } from "react";

export function CalculateTax(){

    let price    = 2000 ;

    let tax = price *(18 / 100);
    return(
        <Fragment>

                 
        <p>Tax : {tax}</p>
      

        </Fragment>
    )
}


export function TaxAlert(){
    return(
        <Fragment>

                  <p>Standerd   18 %   Generale sale Tax  Appiled</p> 
      

        </Fragment>
    )
}