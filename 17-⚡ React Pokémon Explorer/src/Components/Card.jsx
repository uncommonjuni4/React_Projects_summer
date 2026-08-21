import  { useEffect, useState } from 'react'
import './Card.css'

export default function Card() {



    let [data , setdata]   = useState([]);
 
    let [loading , setloading]   = useState(true) ;



    let [error , setErro]  = useState(false) ;


     let  [match   , setmatch]  = useState("");


    const  fetchData =   async ()=>{

        try{
         
     const api  = "https://pokeapi.co/api/v2/pokemon?limit=150";


     let res  = await fetch(api) ;
      let data  = await res.json();
    //  console.log(data);


     const   datererturn = data.results.map( async (curr)=>{
         
        let  res  = await  curr.url;
       let   fetchdata2  = await  fetch(res) ;

         let data2 =  await  fetchdata2.json(); 
        //  console.log(data2);

         return data2  ;
         
     })

     const allData  =  await  Promise.all(datererturn);
     setloading(false)
    //  console.log(allData);
     setdata(allData)


   
     
     
       console.log(data);
       
     ////  for  2nd response 

     


        }catch(err){
      console.log(err);
      
      setloading(false);
          setErro(true);
        }
 
     
    }



    useEffect(()=>{


       ////  calll   api function   here


       fetchData();

    } , [])


if(loading){
    return <div>Loding ....................................</div>
}

if(error){
    return <div>Api Data  is Not   fertched </div>
}

const filteredData = data.filter((curr) => {
        return curr.name.toLowerCase().includes(match.toLowerCase());
    });

  return (
    <>
      <div className="main">
        <div className="head">
           <h1>Welcome TO Cartoon Website</h1>
           <input type="text" placeholder="Search characters..." value={match}   onChange={(e)=> setmatch(e.target.value)}/>
        </div>
      </div>
    
      <div className="cards">
          {/* Example Card */}
         

            {filteredData.map((curr)=>{
          {console.log(curr);
       return  <div className="card-style">
              <figure>
                <img src={curr.sprites.front_default
                } alt="Pikachu" />
              </figure>
              <h2>{curr.species.name}</h2>
              <button className="type-btn">{curr.name}</button>
              <p>Height: {curr.weight}</p>  
              <p>Weight: {curr.height}</p>  
              <p>Order numer :{curr.order}</p>  
          </div>

          }
      })}
      </div>

    
    </>
  )
}