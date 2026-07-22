import { Fragment } from "react";

export  function StreamingEngine(){
    
    let name = "Muhammad Junaid Hassan";

    let basePlanPrice  =   800        ;

    let  addonsCount = 2 ;

    let  addPriceperUnit = 250 ;

    let subTotal  = basePlanPrice + (addonsCount  * addPriceperUnit);


    let isPremiumuser  =  true ;

    let  hasFestivalCoupon = true ;

     let nickName  = "";

    let finalDiscount = isPremiumuser ? 200 :hasFestivalCoupon? 100 : 0 ;

    let  customerProfileName  = nickName || name ;

    let  finalBill  = subTotal - finalDiscount;

    return(
        <Fragment>

          <p>CustomerProfile  :{customerProfileName}</p> <br/>
          <p>SubTotal :  {subTotal }</p>   <br/>
        <p>Discounts : {finalDiscount}</p>   <br/>
         
         <p>{finalBill > 1000  && "Premium Billing Threshold Crossed! Standard taxes may apply." }</p>
     

        </Fragment>
    )
}