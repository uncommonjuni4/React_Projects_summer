export function ProductCard(){
    
    let productName = "Laser Light ";
    let originalprice =   5000;
    let discountPercentage  =   20 ;
    let  imageUrl = 'https://cdn.mos.cms.futurecdn.net/6Kj787myigx7CRGnq8wSBU.jpg' 
    let  isAvaible   = true;

    return(
      <>
         <div>
              <img src={imageUrl} alt="image not load "  width='40%' />
              <h3  className="product-title">{productName}</h3>
              <p>Orginal Price : {originalprice}</p>
              <p>Discouted Price : {originalprice -(originalprice *discountPercentage / 100)}</p>
                {isAvaible ? <p>Available: Yes</p> : <p>Available: No</p>}
               
         </div>
      </>
    );
}