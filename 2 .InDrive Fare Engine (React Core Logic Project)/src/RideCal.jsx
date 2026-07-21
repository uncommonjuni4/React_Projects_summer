
export default function RideCal() {
    let riderName  = "Muhammad junaid Hassan";
    let distance  = 15 ;
    let ratePerkiloMeter = 40 ;
    let  startFee  =  80;
   let  customerBalance = 500;

   let highTrafic = true ;
   let rain  = true;
    
   let standardBill  = startFee + (distance *  ratePerkiloMeter);
  let  suger =     highTrafic  ? 1.5 : rain ? 1.2  : 1.0 ;

  let finalbill = standardBill * suger ;

  let Affortabiltiy  = customerBalance  >= finalbill ;

 
  return (
    <>
    
    <h1>Indrive Fare Engine</h1>
     
     <p>
        Rider Name :{riderName } <br/>
        Total Distance : {distance} <br/>
        Final Bill : {finalbill} <br/>

        {Affortabiltiy ? <h3>Ride Confirmed  </h3>  : <h2>Ride Failed</h2>}

        {suger > 1.2 && <p>High Demand </p>}

     </p>

    
    
    </>
  )
}
