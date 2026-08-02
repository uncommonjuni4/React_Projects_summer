import { useState } from 'react'
import '../Hooks/DigitalForm.css'
import DigitalList from './DigitalList'



export default function DigitalForm() {
  
  const [itemname , setItemname]  = useState('');
  
  const [itemPrice , setItemPrice ] = useState('');

  const [storedata ,setstoredata ]  = useState([]);
  
const handleDelete = (indexToRemove) => {
  // Index ke mutabiq item ko list se filter out kar dein
  const updatedData = storedata.filter((index) => index !== indexToRemove);
  setstoredata(updatedData);
};
  const handleitemname  = (Name)=>{
      //  console.log(e);
       setItemname(Name);
      
  } 

  const handleitemprice = (Price)=>{
    setItemPrice(Price);
  }
  

   const handlesubmit = (e)=>{
        e.preventDefault();
     

         const trimename =  itemname.trim();
         const  praseprice = parseFloat(itemPrice);


         if(!trimename || isNaN(praseprice)  || praseprice <=0){
       
        alert("Plz Enter the value in Given constidttions ")  
   }
   

   let newobj ={
     name : trimename ,
     price : praseprice
   }
     console.log(newobj);
     
    setstoredata([...storedata , newobj])

  setItemname('');
    setItemPrice('');

  }
          
  return (
    <>
     
      <form className="DigitalForm"  onSubmit={handlesubmit}>
        <div className="input1">

           <label htmlFor="">Item Name (e .g Gaming Laptop)</label>
           <input type="text" value={itemname}  onChange={(e)=>handleitemname(e.target.value)}  />
        </div>
        <div className="input2">

           <label htmlFor="">Estimated Price </label>
           <input type="text" value={itemPrice}   onChange={(e)=>handleitemprice(e.target.value)} />
        </div>
        <button type='submit'>Add To WishList </button>
      </form>

      <div className="ul">
          <ul style={{listStyle:"none" }}>

             {storedata.map((value , idex)=>{
            
            
            return <DigitalList  value={value }  onToggleComplete={(idx) => alert(`Item ${idx + 1} marked as checked!`)} onDeleteItem={handleDelete} key={idex}   />
            })}
          </ul>


      </div>
      <div className="list">
           <p>Total  WishList Value : {storedata.map((value) =>{
              {value}
           })} </p> 
      </div>
    
    </>
  )
}
