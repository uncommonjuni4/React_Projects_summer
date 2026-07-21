
export function  Cartengine(){

    let customerName = "Muhammad Junaid hassan";
    let cartTotal  =   1500 ;
    let shippingFee =  200;

    let primeMember = true ;
    let  hasPromoCode  = true ;


    let discount  = primeMember ? 300 : hasPromoCode ? 150 : 0 ;

    let freeShipping  = cartTotal >=2000 ? 0 : shippingFee;


    let finalBill   =  (cartTotal + shippingFee )- discount ;



    return(
        <>
         
        <h2>Customer Name : {customerName}</h2> <br/>
        <h2>Cart Orginal Price : {cartTotal}  </h2> <br/>
        <h2>Shipping Fee  : {shippingFee}</h2>   <br/>
        <h2>Discount   : {discount} </h2>
        <h2>Final Bill   : {finalBill}</h2>
         

         {primeMember ? <p>Welcome Back Prime Member</p> : <p>Welcome Back Stander Member </p>}

         {/* {cartTotal >=2000 && <p>Congraltion For unlock Free shipping</p> } */}


         {cartTotal >=2000 ? <p>Congralation  to Unlock Free Shipping </p>  : <p>Sorrt you cannot  use freee Shipping Service</p>}
        </>
    )
}