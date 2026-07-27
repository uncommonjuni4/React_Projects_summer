import styled  from "styled-components"

import style  from './Card.module.css'
export default function Card() {

    const Main=styled.div({
         backgroundColor: 'aqua'
    })
   const CardTitle  = styled.h1({
         fontSize: '16px',
         textAlign: 'center',
   })

   
  return (
    <>
      <Main>
   <CardTitle >

        Card Detail

      </CardTitle>
    
     <div className={style['main-card']}>
          <div>
               <h1>Card 1 </h1>
          </div>
          <div>
               <h1>Card 1 </h1>
          </div>
          <div>
               <h1>Card 1 </h1>
          </div>
          <div>
               <h1>Card 1 </h1>
          </div>
     </div>
      </Main>
      
    
    </>
  )
}
